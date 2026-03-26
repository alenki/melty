import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header, Footer } from './components';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import FeedbackPage from './pages/FeedbackPage';
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
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
