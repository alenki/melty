import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header, Hero, MenuSection, About, Location, Footer } from './components';
import './App.css';

// Expose Lenis instance globally for modal scroll lock
declare global {
  interface Window {
    lenis?: Lenis;
  }
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
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
