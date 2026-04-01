import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, MenuSection, About, Location, BackToTop, SEO } from '../components';

export default function HomePage() {
  const location = useLocation();

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Melty',
    description: 'Мир вкуса и уюта. Шоколадные десерты, крепы, панкейки и авторские сладости.',
    url: 'https://melty-cafe.ru',
    telephone: '+7-988-939-90-00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Героя России Т.М. Тамазова, 15',
      addressLocality: 'Нальчик',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.472607,
      longitude: 43.579251,
    },
    image: 'https://melty-cafe.ru/data/melty.webp',
    servesCuisine: ['Десерты', 'Кафе', 'Шоколад'],
    priceRange: '$$',
    hasMenu: 'https://melty-cafe.ru/menu',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '23:00',
    },
  };

  // Handle hash-based scrolling when navigating from other pages (e.g. /menu → /#about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
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
        jsonLd={restaurantSchema}
      />
      <Hero />
      <About />
      <Location />
      <MenuSection />
      <BackToTop />
    </>
  );
}
