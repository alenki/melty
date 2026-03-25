import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, MenuSection, About, Location } from '../components';

export default function HomePage() {
  const location = useLocation();

  // Handle hash-based scrolling when navigating from other pages (e.g. /menu → /#about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <MenuSection />
      <About />
      <Location />
    </>
  );
}
