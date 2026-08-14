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
    madeBy: string;
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

const ru: Translations = {
  nav: {
    home: 'Главная',
    menu: 'Меню',
    gallery: 'Галерея',
    about: 'О нас',
    feedback: 'Обратная связь',
    toHome: 'На главную',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
  },
  hero: {
    tagline: 'Мир вкуса и уюта',
    location: 'melty.ru',
    cta: 'Смотреть меню',
  },
  about: {
    title: 'О нас',
    text1: '<strong>Melty</strong> - это уютное пространство, где шоколад становится искусством. Мир вкуса и уюта, где каждый десерт создаётся с любовью и вниманием к деталям.',
    text2: 'Мы верим, что хороший десерт - это больше, чем просто сладость. Это момент радости, который вы делите с близкими. Наши крепы, панкейки и авторские десерты готовятся из лучших ингредиентов специально для вас.',
    cta: 'Наша история',
    imgAlt1: 'Интерьер кафе Melty',
    imgAlt2: 'Десерты Melty',
  },
  location: {
    title: 'Где нас найти',
    addressLabel: 'Адрес',
    fullAddress: 'г. Нальчик, ул. Героя России Т.М. Тамазова, 15',
    hoursLabel: 'Часы работы',
    daily: 'Ежедневно',
    kitchen: 'Кухня',
    socialLabel: 'Мы в соцсетях',
    popupTagline: 'Мир вкуса и уюта',
  },
  footer: {
    tagline: 'Мир вкуса и уюта',
    addressLabel: 'Адрес',
    address: 'ул. Героя России Т.М. Тамазова, 15',
    city: 'Нальчик',
    socialLabel: 'Мы в соцсетях',
    feedbackLink: 'Оставить отзыв',
    toHome: 'На главную',
    madeBy: 'разработка',
  },
  menuPage: {
    title: 'Меню',
    subtitle: 'Авторские десерты и блюда ручной работы',
    scrollHint: 'листайте вниз',
    itemsCount: 'позиций',
    categoryLabels: {
      'breakfasts': 'Завтраки',
      'other': 'Закуски',
      'salads': 'Салаты',
      'soups': 'Супы',
      'main-dishes': 'Рыба, Птица, Мясо',
      'sides': 'Гарниры',
      'crepes': 'Крепы',
      'waffles-croissants': 'Вафли и Круассаны',
      'chocolate-desserts': 'Шоколадные десерты',
      'chocolate-cups': 'Шоколадные стаканы',
      'melty-desserts': 'Melty Десерты',
      'coffee': 'Классический кофе',
      'cold-coffee': 'Холодный кофе',
      'author-coffee': 'Авторский кофе',
      'lemonades-mojito': 'Авторские лимонады / Мохито',
      'author-drinks': 'Авторские напитки',
      'smoothies': 'Смузи-Завтраки',
      'fresh-juices': 'Фреши',
      'milkshakes': 'Милкшейки',
      'house-teas': 'Домашние чаи',
      'leaf-teas': 'Листовые чаи',
      'soft-drinks': 'Прохладные напитки',
      'savory-waffles': 'Соленые вафли',
    },
    categoryDescriptions: {
      'breakfasts': 'Завтраки на каждый день',
      'other': 'Лёгкие закуски и перекусы',
      'salads': 'Свежие салаты из сезонных ингредиентов',
      'soups': 'Горячие домашние супы',
      'main-dishes': 'Блюда из рыбы, птицы и мяса',
      'sides': 'Гарниры к основным блюдам',
      'crepes': 'Нежные французские крепы с различными начинками',
      'waffles-croissants': 'Свежая выпечка: венские вафли и хрустящие круассаны',
      'chocolate-desserts': 'Авторские десерты из настоящего бельгийского шоколада',
      'chocolate-cups': 'Шоколадные стаканы с бельгийским шоколадом',
      'melty-desserts': 'Фирменные десерты с шоу-подачей из бельгийского шоколада',
      'coffee': 'Классические кофейные напитки на зерне спешелти',
      'cold-coffee': 'Холодные кофейные напитки со льдом',
      'author-coffee': 'Авторские кофейные напитки от нашего бариста',
      'lemonades-mojito': 'Авторские лимонады и безалкогольные мохито',
      'author-drinks': 'Безалкогольные авторские напитки',
      'smoothies': 'Питательные смузи для бодрого утра',
      'fresh-juices': 'Свежевыжатые соки',
      'milkshakes': 'Молочные коктейли с разными вкусами',
      'house-teas': 'Ароматные фруктовые и ягодные чаи',
      'leaf-teas': 'Классические листовые чаи',
      'soft-drinks': 'Прохладительные напитки',
      'savory-waffles': 'Соленые вафли с разнообразными начинками',
    },
    heroPills: [
      { label: 'Завтрак', target: 'breakfasts' },
      { label: 'Закуски', target: 'other' },
      { label: 'Салаты', target: 'salads' },
      { label: 'Супы', target: 'soups' },
      { label: 'Рыба, Птица, Мясо', target: 'main-dishes' },
      { label: 'Гарниры', target: 'sides' },
      { label: 'Соленые вафли', target: 'savory-waffles' },
      { label: 'Десерты', target: 'melty-desserts' },
      { label: 'Классический кофе', target: 'coffee' },
      { label: 'Напитки', target: 'cold-coffee' },
    ],
  },
  galleryPage: {
    title: 'Галерея',
    subtitle: 'Загляните в атмосферу нашего кафе',
    scrollHint: 'листайте вниз',
    photosCount: 'фотографий',
    close: 'Закрыть',
    prevPhoto: 'Предыдущее фото',
    nextPhoto: 'Следующее фото',
    quotes: [
      'Шоколад - это не просто вкус. Это тёплое объятие, застывшее в каждом кусочке.',
      'Уют - это когда за окном дождь, а у тебя в руках горячая чашка и шоколадный десерт.',
      'Лучшие моменты начинаются с аромата свежего кофе и кусочка счастья на тарелке.',
    ],
    photoAlts: {
      'IMG_0142': 'Десерт Melty',
      'IMG_2164': 'Интерьер кафе',
      'IMG_0587': 'Шоколадный десерт',
      'IMG_0590': 'Авторский десерт',
      'IMG_2170': 'Уютная зона',
      'IMG_0594': 'Сладкая подача',
      'IMG_8435': 'Наши изделия',
      'IMG_0600': 'Десерт с шоколадом',
      'IMG_0604': 'Фирменное блюдо',
      'IMG_4561': 'Атмосфера кафе',
      'IMG_4563': 'Шоколадное ассорти',
      'IMG_8438': 'Ручная работа',
      'IMG_4570': 'Десерт на тарелке',
      'IMG_4566': 'Тёплое освещение',
      'IMG_4575': 'Креп с начинкой',
      'IMG_8441': 'Шоколадные конфеты',
      'IMG_4579': 'Авторская подача',
      'IMG_2176': 'Детали интерьера',
      'IMG_4585': 'Горячий шоколад',
      'IMG_4584': 'Зона отдыха',
      'IMG_0598': 'Завтрак в Melty',
      'IMG_8444': 'Подарочный набор',
      'IMG_0139': 'Десерт крупным планом',
      'IMG_4591': 'Вид на зал',
      'IMG_4577': 'Шоколадный торт',
      'IMG_8447': 'Авторские изделия',
      'IMG_2180': 'Уголок кафе',
      'IMG_8450': 'Коллекция сладостей',
      'IMG_4580': 'Шоколадная плитка',
      'IMG_8443': 'Трюфели',
      'IMG_8436': 'Десертная витрина',
      'IMG_0140': 'Изысканный десерт',
      'IMG_4588': 'Вечерняя атмосфера',
    },
  },
  aboutPage: {
    titleTop: 'Наша',
    titleBottom: 'история',
    scrollHint: 'листайте вниз',
    pullquote: 'Как всё началось',
    craftText1: 'Melty родился из простой, но искренней мечты - создать в Нальчике место, где шоколад перестаёт быть просто десертом и становится настоящим искусством. Место, наполненное теплом, заботой и вниманием к каждой детали.',
    craftText2: 'Мы начали с нескольких рецептов и маленькой кухни, где каждый день был экспериментом. Сотни проб, бессонные ночи и бесконечная любовь к делу - так рождался вкус, который вы знаете сегодня. Каждый рецепт - это история поиска идеального баланса между традицией и авторским подходом.',
    craftText3: 'Сегодня Melty - это больше, чем кафе. Это пространство, где встречаются друзья, создаются воспоминания и каждый момент пропитан уютом. Мы не просто готовим десерты - мы создаём мир, в который хочется возвращаться.',
    watermark: 'Уют',
    worldText1: 'Переступая порог Melty, вы попадаете в мир тёплого света и уютных текстур. Приглушённое освещение, мягкие тона дерева и шоколада, аромат свежей выпечки - всё здесь создано, чтобы вы могли остановиться и насладиться моментом.',
    worldText2: 'Мы создали пространство, где каждый уголок приглашает остаться подольше - будь то уютное кресло у окна или столик с видом на открытую кухню, где рождаются наши десерты.',
    philosophy: 'Мы верим, что лучшие моменты жизни начинаются с чашки горячего шоколада и кусочка счастья на тарелке',
    address: 'ул. Героя России Т.М. Тамазова, 15, Нальчик',
    hours: 'Ежедневно 08:00 - 23:00',
    welcome: 'Ждём вас',
    ctaLink: 'Смотреть меню',
    imgAlts: {
      dessert: 'Десерт Melty',
      chocolateDessert: 'Шоколадный десерт',
      cafeAtmosphere: 'Атмосфера кафе',
      warmLighting: 'Тёплое освещение',
      eveningAtmosphere: 'Вечерняя атмосфера',
    },
  },
  menuSection: {
    title: 'Наше меню',
    subtitle: 'Самые популярные позиции',
    cta: 'СМОТРЕТЬ МЕНЮ',
  },
  feedbackPage: {
    title: 'Оставьте отзыв',
    subtitle: 'Ваше мнение делает нас лучше',
    starLabels: ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично!'],
    ratingLabel: 'Оценка',
    ratingHint: 'Пожалуйста, выберите оценку',
    contactLabel: 'Контакт',
    contactOptional: '(необязательно)',
    contactPlaceholder: 'Телефон, Telegram или email',
    messageLabel: 'Ваш отзыв',
    messagePlaceholder: 'Расскажите о вашем впечатлении...',
    messageHint: 'Пожалуйста, напишите отзыв',
    submit: 'Отправить',
    submitting: 'Отправка...',
    successTitle: 'Спасибо за ваш отзыв!',
    successSubtitle: 'Мы ценим каждое мнение 🤎',
    successLink: 'Вернуться на главную',
    errorMessage: 'Не удалось отправить отзыв. Попробуйте позже.',
    telegramRating: 'Оценка',
    telegramContact: 'Контакт',
    telegramNoContact: 'Не указан',
    telegramReview: 'Отзыв',
  },
};

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
    madeBy: 'made by',
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

export const translations: Record<Language, Translations> = { ru, en };
