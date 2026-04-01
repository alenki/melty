import { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header, Footer, LoadingScreen } from './components';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import FeedbackPage from './pages/FeedbackPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import './App.css';

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

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
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

  return (
    <>
      <div className="noise-overlay" aria-hidden="true"></div>
      <LoadingScreen isLoading={loading} />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
