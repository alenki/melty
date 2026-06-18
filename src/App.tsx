import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { LanguageProvider } from './i18n';
import { Header, Footer, LoadingScreen } from './components';
import { waitForAssets } from './utils/pageReady';
import './App.css';

// Route chunk loaders — single source of truth shared by lazy() and the
// readiness wait below, so a route's chunk is never fetched twice or drifts
// out of sync with its lazy component.
const loadHome = () => import('./pages/HomePage');
const loadMenu = () => import('./pages/MenuPage');
const loadFeedback = () => import('./pages/FeedbackPage');
const loadGallery = () => import('./pages/GalleryPage');
const loadAbout = () => import('./pages/AboutPage');

const HomePage = lazy(loadHome);
const MenuPage = lazy(loadMenu);
const FeedbackPage = lazy(loadFeedback);
const GalleryPage = lazy(loadGallery);
const AboutPage = lazy(loadAbout);

// Hero logo — the only above-the-fold raster image on the home page (it's
// preloaded in index.html). Every other route's hero is pure text + SVG and
// its photos lazy-load below the fold (including /about, whose logo sits in the
// last chapter), so they declare no critical image and the loader only waits on
// fonts + the route chunk.
const LOGO_DARK = '/data/logo_dark.webp';

interface RouteAssets {
  loadChunk: () => Promise<unknown>;
  criticalImage: string | null;
}

// Per-route readiness manifest: which chunk to fetch and which above-the-fold
// image must decode before the loading screen is allowed to hide.
const ROUTE_ASSETS: Record<string, RouteAssets> = {
  '/': { loadChunk: loadHome, criticalImage: LOGO_DARK },
  '/about': { loadChunk: loadAbout, criticalImage: null },
  '/menu': { loadChunk: loadMenu, criticalImage: null },
  '/gallery': { loadChunk: loadGallery, criticalImage: null },
  '/feedback': { loadChunk: loadFeedback, criticalImage: null },
};

// First load lets the 600ms logo intro play and tolerates a cold network;
// in-site navigation (fonts already cached) feels snappy but never flickers.
const MIN_DISPLAY_FIRST = 600;
const MIN_DISPLAY_NAV = 350;
const TIMEOUT_FIRST = 8000;
const TIMEOUT_NAV = 6000;

// Expose Lenis instance globally for modal scroll lock
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Don't scroll to top if navigating to a hash (e.g. /#about)
    if (!hash) {
      window.scrollTo(0, 0);
      window.lenis?.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);
  const [loadingPath, setLoadingPath] = useState(location.pathname);

  // When the route changes, re-show the loader immediately. Done during render
  // (React's documented "adjust state when a prop changes" pattern) rather than
  // in an effect — this avoids a one-frame flash of the new page before the
  // loader covers it, and keeps the effect free of synchronous setState.
  if (loadingPath !== location.pathname) {
    setLoadingPath(location.pathname);
    setLoading(true);
  }

  // Hold the loading screen until the page is genuinely paintable — fonts
  // loaded, the route's chunk fetched, and its above-the-fold hero image
  // decoded — then hide it (but never before a short minimum, never after a
  // hard timeout), rather than firing on a fixed timer that beats the assets.
  useEffect(() => {
    const firstLoad = isFirstLoad.current;

    let cancelled = false;
    let minTimer: ReturnType<typeof setTimeout> | undefined;
    const startedAt = Date.now();

    const route = ROUTE_ASSETS[location.pathname];
    const minDisplay = firstLoad ? MIN_DISPLAY_FIRST : MIN_DISPLAY_NAV;
    const timeoutMs = firstLoad ? TIMEOUT_FIRST : TIMEOUT_NAV;

    waitForAssets({
      loadChunk: route?.loadChunk,
      criticalImage: route?.criticalImage ?? null,
      timeoutMs,
    }).then(() => {
      if (cancelled) return;
      // Flip the first-load flag only on the run that actually hides the loader,
      // so StrictMode's discarded first pass (cancelled in cleanup) doesn't
      // consume it and make the real first load fall back to nav timings in dev.
      isFirstLoad.current = false;
      // Keep the loader up for at least the minimum so a fully-cached page
      // doesn't flash the loader on and instantly off.
      const remaining = Math.max(0, minDisplay - (Date.now() - startedAt));
      minTimer = setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, remaining);
    });

    return () => {
      cancelled = true;
      if (minTimer) clearTimeout(minTimer);
    };
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Store globally so modal can access it
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  // Lock page scroll while the loading screen covers the page, unlock once it
  // hides. Centralized here (driven by the single `loading` state) so the loader
  // component stays presentational and two instances can't fight over the one
  // global Lenis lock.
  useEffect(() => {
    if (loading) window.lenis?.stop();
    else window.lenis?.start();
  }, [loading]);

  return (
    <LanguageProvider>
      <div className="noise-overlay" aria-hidden="true"></div>
      <LoadingScreen isLoading={loading} />
      <ScrollToTop />
      <Header />
      <main>
        {/* The top-level loader above already covers the screen while `loading`
            is true (it stays up until the route chunk loads), so the Suspense
            boundary needs no visible fallback of its own. */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
