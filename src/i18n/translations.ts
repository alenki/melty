import type { Language } from './languageState';
import type { MenuCategory } from '../data/menu';

export interface Translations {
  nav: {
    home: string;
    menu: string;
    gallery: string;
    about: string;
    feedback: string;
    toHome: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    tagline: string;
    location: string;
    cta: string;
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    cta: string;
    imgAlt1: string;
    imgAlt2: string;
  };
  location: {
    title: string;
    addressLabel: string;
    fullAddress: string;
    hoursLabel: string;
    daily: string;
    kitchen: string;
    socialLabel: string;
    popupTagline: string;
  };
  footer: {
    tagline: string;
    addressLabel: string;
    address: string;
    city: string;
    socialLabel: string;
    feedbackLink: string;
    toHome: string;
  };
  menuPage: {
    title: string;
    subtitle: string;
    scrollHint: string;
    itemsCount: string;
    categoryLabels: Record<MenuCategory, string>;
    categoryDescriptions: Record<MenuCategory, string>;
    heroPills: { label: string; target: MenuCategory }[];
  };
  galleryPage: {
    title: string;
    subtitle: string;
    scrollHint: string;
    photosCount: string;
    close: string;
    prevPhoto: string;
    nextPhoto: string;
    quotes: string[];
    photoAlts: Record<string, string>;
  };
  aboutPage: {
    titleTop: string;
    titleBottom: string;
    scrollHint: string;
    pullquote: string;
    craftText1: string;
    craftText2: string;
    craftText3: string;
    watermark: string;
    worldText1: string;
    worldText2: string;
    philosophy: string;
    address: string;
    hours: string;
    welcome: string;
    ctaLink: string;
    imgAlts: {
      dessert: string;
      chocolateDessert: string;
      cafeAtmosphere: string;
      warmLighting: string;
      eveningAtmosphere: string;
    };
  };
  menuSection: {
    title: string;
    subtitle: string;
    cta: string;
  };
  feedbackPage: {
    title: string;
    subtitle: string;
    starLabels: string[];
    ratingLabel: string;
    ratingHint: string;
    contactLabel: string;
    contactOptional: string;
    contactPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageHint: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successSubtitle: string;
    successLink: string;
    errorMessage: string;
    telegramRating: string;
    telegramContact: string;
    telegramNoContact: string;
    telegramReview: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    menu: 'Menu',
    gallery: 'Gallery',
    about: 'About',
    feedback: 'Feedback',
    toHome: 'Go to homepage',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    tagline: 'A world of taste and comfort',
    location: 'melty.ru',
    cta: 'View menu',
  },
  about: {
    title: 'About us',
    text1: '<strong>Melty</strong> is a cozy space where chocolate becomes art. A world of taste and comfort, where every dessert is crafted with love and attention to detail.',
    text2: 'We believe that a great dessert is more than just something sweet. It\'s a moment of joy you share with loved ones. Our crepes, pancakes and signature desserts are made from the finest ingredients just for you.',
    cta: 'Our story',
    imgAlt1: 'Melty cafe interior',
    imgAlt2: 'Melty desserts',
  },
  location: {
    title: 'Find us',
    addressLabel: 'Address',
    fullAddress: 'Nalchik, 15 Hero of Russia T.M. Tamazov St.',
    hoursLabel: 'Opening hours',
    daily: 'Daily',
    kitchen: 'Kitchen',
    socialLabel: 'Follow us',
    popupTagline: 'A world of taste and comfort',
  },
  footer: {
    tagline: 'A world of taste and comfort',
    addressLabel: 'Address',
    address: '15 Hero of Russia T.M. Tamazov St.',
    city: 'Nalchik',
    socialLabel: 'Follow us',
    feedbackLink: 'Leave a review',
    toHome: 'Go to homepage',
  },
  menuPage: {
    title: 'Menu',
    subtitle: 'Signature desserts and handcrafted dishes',
    scrollHint: 'scroll down',
    itemsCount: 'items',
    categoryLabels: {
      'breakfasts': 'Breakfasts',
      'other': 'Appetizers',
      'salads': 'Salads',
      'soups': 'Soups',
      'main-dishes': 'Fish, Poultry, Meat',
      'sides': 'Sides',
      'crepes': 'Crepes',
      'waffles-croissants': 'Waffles & Croissants',
      'chocolate-desserts': 'Chocolate Desserts',
      'chocolate-cups': 'Chocolate Cups',
      'melty-desserts': 'Melty Desserts',
      'coffee': 'Classic Coffee',
      'cold-coffee': 'Cold Coffee',
      'author-coffee': 'Signature Coffee',
      'lemonades-mojito': 'Signature Lemonades / Mojito',
      'author-drinks': 'Signature Drinks',
      'smoothies': 'Breakfast Smoothies',
      'fresh-juices': 'Fresh Juices',
      'milkshakes': 'Milkshakes',
      'house-teas': 'House Teas',
      'leaf-teas': 'Leaf Teas',
      'soft-drinks': 'Soft Drinks',
      'savory-waffles': 'Savory Waffles',
    },
    categoryDescriptions: {
      'breakfasts': 'Everyday breakfast options',
      'other': 'Light appetizers and snacks',
      'salads': 'Fresh salads with seasonal ingredients',
      'soups': 'Hot homemade soups',
      'main-dishes': 'Fish, poultry and meat dishes',
      'sides': 'Side dishes for your main course',
      'crepes': 'Delicate French crepes with various fillings',
      'waffles-croissants': 'Fresh baked goods: Viennese waffles and crispy croissants',
      'chocolate-desserts': 'Signature desserts made with real Belgian chocolate',
      'chocolate-cups': 'Chocolate cups with Belgian chocolate',
      'melty-desserts': 'Signature show-style desserts with Belgian chocolate',
      'coffee': 'Classic coffee drinks made with specialty beans',
      'cold-coffee': 'Cold coffee drinks over ice',
      'author-coffee': 'Signature coffee creations from our barista',
      'lemonades-mojito': 'Signature lemonades and non-alcoholic mojitos',
      'author-drinks': 'Non-alcoholic signature drinks',
      'smoothies': 'Nutritious smoothies for an energizing morning',
      'fresh-juices': 'Freshly squeezed juices',
      'milkshakes': 'Milkshakes in a variety of flavors',
      'house-teas': 'Aromatic fruit and berry teas',
      'leaf-teas': 'Classic loose leaf teas',
      'soft-drinks': 'Refreshing soft drinks',
      'savory-waffles': 'Savory waffles with diverse fillings',
    },
    heroPills: [
      { label: 'Breakfast', target: 'breakfasts' },
      { label: 'Appetizers', target: 'other' },
      { label: 'Salads', target: 'salads' },
      { label: 'Soups', target: 'soups' },
      { label: 'Fish, Poultry, Meat', target: 'main-dishes' },
      { label: 'Sides', target: 'sides' },
      { label: 'Savory Waffles', target: 'savory-waffles' },
      { label: 'Desserts', target: 'melty-desserts' },
      { label: 'Classic Coffee', target: 'coffee' },
      { label: 'Drinks', target: 'cold-coffee' },
    ],
  },
  galleryPage: {
    title: 'Gallery',
    subtitle: 'Step into the atmosphere of our cafe',
    scrollHint: 'scroll down',
    photosCount: 'photos',
    close: 'Close',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    quotes: [
      'Chocolate is more than just a flavor. It\'s a warm embrace captured in every bite.',
      'Comfort is when it\'s raining outside, and you\'re holding a hot cup with a chocolate dessert.',
      'The best moments begin with the aroma of fresh coffee and a piece of happiness on your plate.',
    ],
    photoAlts: {
      'IMG_0142': 'Melty dessert',
      'IMG_2164': 'Cafe interior',
      'IMG_0587': 'Chocolate dessert',
      'IMG_0590': 'Signature dessert',
      'IMG_2170': 'Cozy corner',
      'IMG_0594': 'Sweet presentation',
      'IMG_8435': 'Our creations',
      'IMG_0600': 'Chocolate dessert',
      'IMG_0604': 'Signature dish',
      'IMG_4561': 'Cafe atmosphere',
      'IMG_4563': 'Chocolate assortment',
      'IMG_8438': 'Handcrafted',
      'IMG_4570': 'Plated dessert',
      'IMG_4566': 'Warm lighting',
      'IMG_4575': 'Crepe with filling',
      'IMG_8441': 'Chocolate candies',
      'IMG_4579': 'Signature presentation',
      'IMG_2176': 'Interior details',
      'IMG_4585': 'Hot chocolate',
      'IMG_4584': 'Lounge area',
      'IMG_0598': 'Breakfast at Melty',
      'IMG_8444': 'Gift set',
      'IMG_0139': 'Dessert close-up',
      'IMG_4591': 'Dining room view',
      'IMG_4577': 'Chocolate cake',
      'IMG_8447': 'Signature creations',
      'IMG_2180': 'Cafe nook',
      'IMG_8450': 'Sweets collection',
      'IMG_4580': 'Chocolate bar',
      'IMG_8443': 'Truffles',
      'IMG_8436': 'Dessert display',
      'IMG_0140': 'Exquisite dessert',
      'IMG_4588': 'Evening atmosphere',
    },
  },
  aboutPage: {
    titleTop: 'Our',
    titleBottom: 'story',
    scrollHint: 'scroll down',
    pullquote: 'How it all began',
    craftText1: 'Melty was born from a simple yet sincere dream - to create a place in Nalchik where chocolate transcends dessert and becomes true art. A place filled with warmth, care, and attention to every detail.',
    craftText2: 'We started with a handful of recipes and a small kitchen where every day was an experiment. Hundreds of trials, sleepless nights, and endless passion for our craft - that\'s how the taste you know today was born. Every recipe is a story of searching for the perfect balance between tradition and a signature approach.',
    craftText3: 'Today, Melty is more than a cafe. It\'s a space where friends meet, memories are made, and every moment is steeped in warmth. We don\'t just make desserts - we create a world you\'ll want to return to.',
    watermark: 'Comfort',
    worldText1: 'When you step through Melty\'s door, you enter a world of warm light and cozy textures. Soft lighting, gentle tones of wood and chocolate, the aroma of fresh pastry - everything here is designed so you can pause and savor the moment.',
    worldText2: 'We\'ve created a space where every corner invites you to linger - whether it\'s a cozy armchair by the window or a table overlooking the open kitchen where our desserts come to life.',
    philosophy: 'We believe that life\'s best moments begin with a cup of hot chocolate and a piece of happiness on your plate',
    address: '15 Hero of Russia T.M. Tamazov St., Nalchik',
    hours: 'Daily 08:00 - 23:00',
    welcome: 'We look forward to seeing you',
    ctaLink: 'View menu',
    imgAlts: {
      dessert: 'Melty dessert',
      chocolateDessert: 'Chocolate dessert',
      cafeAtmosphere: 'Cafe atmosphere',
      warmLighting: 'Warm lighting',
      eveningAtmosphere: 'Evening atmosphere',
    },
  },
  menuSection: {
    title: 'Our menu',
    subtitle: 'Most popular items',
    cta: 'VIEW MENU',
  },
  feedbackPage: {
    title: 'Leave a review',
    subtitle: 'Your opinion helps us improve',
    starLabels: ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent!'],
    ratingLabel: 'Rating',
    ratingHint: 'Please select a rating',
    contactLabel: 'Contact',
    contactOptional: '(optional)',
    contactPlaceholder: 'Phone, Telegram or email',
    messageLabel: 'Your review',
    messagePlaceholder: 'Tell us about your experience...',
    messageHint: 'Please write a review',
    submit: 'Submit',
    submitting: 'Sending...',
    successTitle: 'Thank you for your review!',
    successSubtitle: 'We value every opinion 🤎',
    successLink: 'Back to home',
    errorMessage: 'Failed to send review. Please try again later.',
    telegramRating: 'Rating',
    telegramContact: 'Contact',
    telegramNoContact: 'Not provided',
    telegramReview: 'Review',
  },
};

export const translations: Record<Language, Translations> = { en };
