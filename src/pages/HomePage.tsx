import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, MenuSection, About, Location, BackToTop, SEO } from '../components';

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
      <SEO
        title="Melty"
        description="Melty — мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости в Нальчике."
        path="/"
      />
      <Hero />
      <About />
      <Location />
      <MenuSection />
      <BackToTop />
    </>
  );
}
