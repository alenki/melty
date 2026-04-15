import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, MenuSection, About, Location, BackToTop, SEO } from '../components';

const BASE_URL = 'https://melty-cafe.ru';

export default function HomePage() {
  const location = useLocation();

  // WebSite entity — enables Google's "sitelinks searchbox" and disambiguates
  // the site from the physical Restaurant entity.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Melty',
    alternateName: 'Мелти',
    inLanguage: ['ru-RU', 'en-US'],
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/menu?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Organization — the business behind the site. Linked from the Restaurant
  // and WebSite entities via @id references.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Melty',
    alternateName: ['Мелти', 'Кафе Melty'],
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/data/logo.webp`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/data/melty.webp`,
    // Add your real Yandex.Maps / 2GIS / VK / Google Business Profile URLs
    // once the listings are claimed. Only include profiles that actually exist.
    sameAs: ['https://instagram.com/melty.ru'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-988-939-90-00',
      contactType: 'customer service',
      areaServed: 'RU',
      availableLanguage: ['Russian', 'English'],
    },
  };

  // FAQPage — eligible for FAQ rich snippet on Google & Yandex, steals
  // real-estate on the SERP.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Где находится кафе Melty в Нальчике?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Кафе Melty находится в центре Нальчика по адресу ул. Героя России Т.М. Тамазова, 15.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какие часы работы у кафе Melty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Melty работает ежедневно с 08:00 до 23:00. Кухня открыта до 22:15.',
        },
      },
      {
        '@type': 'Question',
        name: 'Что можно попробовать в кафе Melty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'В меню кафе Melty — шоколадные десерты, авторские крепы, панкейки, вафли, завтраки, салаты, горячие блюда, авторский кофе и лимонады.',
        },
      },
      {
        '@type': 'Question',
        name: 'Принимает ли Melty бронирование столов?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Для уточнения наличия свободных мест свяжитесь с нами по телефону +7 (988) 939-90-00.',
        },
      },
      {
        '@type': 'Question',
        name: 'Есть ли в Melty завтраки?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы подаём завтраки с 08:00 — каши, эгг-роллы, круассаны, панкейки, крепы и авторский кофе.',
        },
      },
    ],
  };

  // Handle hash-based scrolling when navigating from other pages (e.g. /menu → /#about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const isMobile = window.innerWidth < 768;
          if (!isMobile && window.lenis) {
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
        title="Melty — кафе-кофейня в Нальчике"
        description="Melty — уютное кафе-кофейня в Нальчике на ул. Тамазова 15. Шоколадные десерты, авторские крепы, панкейки, вафли, завтраки и кофе. Работаем ежедневно 08:00–23:00."
        path="/"
        jsonLd={[websiteSchema, organizationSchema, faqSchema]}
      />
      <Hero />
      <About />
      <Location />
      <MenuSection />
      <BackToTop />
    </>
  );
}
