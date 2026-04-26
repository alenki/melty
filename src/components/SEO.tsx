import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  /** One JSON-LD object, or an array of several. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** If true, skip the default Restaurant/LocalBusiness schema that ships with every page. */
  skipLocalBusinessSchema?: boolean;
}

const BASE_URL = 'https://melty-cafe.ru';
const DEFAULT_OG_IMAGE = `${BASE_URL}/data/melty.webp`;
const DEFAULT_KEYWORDS =
  'кафе Нальчик, кофейня Нальчик, Melty, Мелти, десерты Нальчик, завтраки Нальчик, крепы, панкейки, вафли, шоколадные десерты, кафе на Тамазова, где поесть в Нальчике, лучшие кафе Нальчика';

/**
 * Restaurant / LocalBusiness schema that is emitted on every page so search
 * engines always have the canonical business entity available for rich
 * snippets, knowledge-panel matching and local pack eligibility.
 */
const LOCAL_BUSINESS_SCHEMA: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'CafeOrCoffeeShop'],
  '@id': `${BASE_URL}/#restaurant`,
  name: 'Melty',
  alternateName: ['Мелти', 'Melty Cafe', 'Кафе Melty', 'Кафе Мелти'],
  description:
    'Melty — уютное кафе-кофейня в Нальчике. Шоколадные десерты, авторские крепы, панкейки, вафли, завтраки и напитки. Ежедневно 08:00–23:00.',
  url: BASE_URL,
  telephone: '+7-988-939-90-00',
  email: 'hello@melty-cafe.ru',
  image: [
    `${BASE_URL}/data/melty.webp`,
    `${BASE_URL}/data/photos/inside/IMG_4586.webp`,
    `${BASE_URL}/data/photos/food/IMG_0593.webp`,
  ],
  logo: `${BASE_URL}/data/logo.webp`,
  priceRange: '₽₽',
  currenciesAccepted: 'RUB',
  paymentAccepted: 'Cash, Credit Card, Debit Card, MIR',
  servesCuisine: [
    'Десерты',
    'Шоколад',
    'Европейская',
    'Завтраки',
    'Кофе',
    'Крепы',
    'Вафли',
    'Панкейки',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Героя России Т.М. Тамазова, 15',
    addressLocality: 'Нальчик',
    addressRegion: 'Кабардино-Балкарская Республика',
    postalCode: '360000',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.472607,
    longitude: 43.579251,
  },
  hasMap: 'https://yandex.ru/maps/?text=Нальчик+Тамазова+15+Melty',
  areaServed: {
    '@type': 'City',
    name: 'Нальчик',
  },
  hasMenu: `${BASE_URL}/menu`,
  acceptsReservations: 'False',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '23:00',
    },
  ],
  // sameAs: add the real URLs to your Yandex.Maps, 2GIS, VK and Google
  // Business Profile listings once they're claimed. Broken URLs here will
  // hurt entity consolidation — only list profiles you actually own.
  sameAs: [
    'https://instagram.com/melty.ru',
    'https://yandex.ru/maps/org/melty/135012269974/',
  ],
  keywords:
    'кафе Нальчик, кофейня Нальчик, Melty, десерты, крепы, панкейки, вафли, завтраки, шоколад, кофе',
  brand: {
    '@type': 'Brand',
    name: 'Melty',
    logo: `${BASE_URL}/data/logo.webp`,
  },
};

export default function SEO({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogImage,
  ogType = 'website',
  jsonLd,
  skipLocalBusinessSchema = false,
}: SEOProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  const pageSchemas: Record<string, unknown>[] = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  const allSchemas = skipLocalBusinessSchema
    ? pageSchemas
    : [LOCAL_BUSINESS_SCHEMA, ...pageSchemas];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Melty" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yandex" content="index, follow" />
      <meta name="geo.region" content="RU-KB" />
      <meta name="geo.placename" content="Нальчик" />
      <meta name="geo.position" content="43.472607;43.579251" />
      <meta name="ICBM" content="43.472607, 43.579251" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Language alternates — default is RU, site also serves EN */}
      <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Melty" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Melty — кафе-кофейня в Нальчике" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Melty — кафе-кофейня в Нальчике" />

      {/* Structured data */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
