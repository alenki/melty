import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, MenuSection, About, Location, BackToTop, SEO } from '../components';

const BASE_URL = 'https://melty-cafe.ru';

export default function HomePage() {
  const location = useLocation();

  // WebSite entity - enables Google's "sitelinks searchbox" and disambiguates
  // the site from the physical Restaurant entity.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Melty',
    alternateName: 'Melty',
    inLanguage: ['ru-RU', 'en-US'],
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: { '@id': `${BASE_URL}/#restaurant` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/menu?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Organization - the business behind the site. Linked from the Restaurant
  // and WebSite entities via @id references.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Melty',
    alternateName: ['Melty Cafe', 'Melty Coffee Shop'],
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

  // FAQPage - eligible for FAQ rich snippet on Google & Yandex, steals
  // real-estate on the SERP.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the Melty cafe in Nalchik located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Melty cafe is located in the center of Nalchik at 15 Hero of Russia T.M. Tamazov St.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the opening hours of the Melty cafe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Melty is open daily from 08:00 to 23:00. The kitchen is open until 22:15.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can you try at the Melty cafe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Melty cafe menu features chocolate desserts, signature crepes, pancakes, waffles, breakfasts, salads, hot dishes, signature coffee and lemonades.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Melty accept table reservations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To check table availability, contact us by phone at +7 (988) 939-90-00.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Melty serve breakfast?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we serve breakfast from 08:00 - porridge, egg rolls, croissants, pancakes, crepes and signature coffee.',
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
        title="Melty | cafe & coffee shop in Nalchik"
        description="Melty is a cozy cafe and coffee shop in Nalchik at 15 Tamazov St. Chocolate desserts, crepes, pancakes, waffles, breakfasts and coffee. Open daily 08:00-23:00."
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
