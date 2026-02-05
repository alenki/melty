export type MenuCategory = 'chocolate' | 'crepes' | 'pancakes' | 'pastries' | 'specialty';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
}

export const categoryLabels: Record<MenuCategory, string> = {
  chocolate: 'Шоколад',
  crepes: 'Крепы',
  pancakes: 'Панкейки',
  pastries: 'Выпечка',
  specialty: 'Авторские'
};

export const menuItems: MenuItem[] = [
  {
    id: 'choco-bum',
    name: 'ЧОКО БУМ',
    description: 'Эффектный шоколадный взрыв — горячий десерт с жидким шоколадным сердцем',
    price: 600,
    category: 'chocolate',
    image: '/data/menu/ЧОКО БУМ/image_1.png'
  },
  {
    id: 'brownie-crep',
    name: 'БРАУНИ-КРЕП',
    description: 'Нежный креп с начинкой из шоколадного брауни и соусом',
    price: 390,
    category: 'crepes',
    image: '/data/menu/БРАУНИ-КРЕП/image_1.png'
  },
  {
    id: 'fondant',
    name: 'ФОНДАН',
    description: 'Классический французский десерт с жидким шоколадным центром',
    price: 410,
    category: 'chocolate',
    image: '/data/menu/ФОНДАН/image_1.png'
  },
  {
    id: 'fondue',
    name: 'ФОНДЮ',
    description: 'Горячий шоколадный фондю с фруктами и маршмеллоу для макания',
    price: 800,
    category: 'chocolate',
    image: '/data/menu/ФОНДЮ/image_1.png'
  },
  {
    id: 'pancakes-berries',
    name: 'ПАНКЕЙКИ С ЯГОДАМИ',
    description: 'Воздушные панкейки с сезонными ягодами и кремом',
    price: 410,
    category: 'pancakes',
    image: '/data/menu/ПАНКЕЙКИ С ЯГОДАМИ/image_1.png'
  },
  {
    id: 'pancakes-chocolate',
    name: 'ПАНКЕЙКИ С ШОКОЛАДОМ',
    description: 'Воздушные панкейки с богатым шоколадным соусом',
    price: 410,
    category: 'pancakes',
    image: '/data/menu/ПАНКЕЙКИ С ШОКОЛАДОМ/image_1.png'
  },
  {
    id: 'crep-roll',
    name: 'КРЕП-РОЛЛ',
    description: 'Креп, свёрнутый в изящный ролл с начинкой на ваш выбор',
    price: 435,
    category: 'crepes',
    image: '/data/menu/КРЕП-РОЛЛ/image_1.png'
  },
  {
    id: 'burrata',
    name: 'БУРРАТА',
    description: 'Нежный креп с итальянским сыром буррата и сладким соусом',
    price: 390,
    category: 'crepes',
    image: '/data/menu/БУРРАТА/image_1.png'
  },
  {
    id: 'crep-banana-chocolate',
    name: 'КРЕП С БАНАНОМ И ШОКОЛАДОМ',
    description: 'Классическое сочетание — тонкий креп с бананом и горячим шоколадом',
    price: 400,
    category: 'crepes',
    image: '/data/menu/КРЕП С БАНАНОМ И ШОКОЛАДОМ/image_1.png'
  },
  {
    id: 'sushi-crep',
    name: 'СУШИ КРЕП',
    description: 'Креативная подача крепа в стиле суши с оригинальными топпингами',
    price: 420,
    category: 'crepes',
    image: '/data/menu/СУШИ КРЕП/image_1.png'
  },
  {
    id: 'cinnabon',
    name: 'СИННАБОН',
    description: 'Ароматный булочка-рулет с корицей и сливочной глазурью',
    price: 330,
    category: 'pastries',
    image: '/data/menu/СИННАБОН/image_1.png'
  },
  {
    id: 'waffles',
    name: 'ВАФЛИ',
    description: 'Хрустящие бельгийские вафли с начинкой на выбор',
    price: 390,
    category: 'pastries',
    image: '/data/menu/ВАФЛИ/image_1.png'
  },
  {
    id: 'profiteroli-sable',
    name: 'ПРОФИТРОЛИ SABLE',
    description: 'Заварные пирожные с кремовой начинкой на песочном основании',
    price: 750,
    category: 'specialty',
    image: '/data/menu/ПРОФИТРОЛИ SABLE/image_1.png'
  },
  {
    id: 'profiteroli-big-sable',
    name: 'ПРОФИТРОЛИ BIG SABLE',
    description: 'Большая порция фирменных профитролей — идеально для компании',
    price: 2500,
    category: 'specialty',
    image: '/data/menu/ПРОФИТРОЛИ BIG SABLE/image_1.png'
  },
  {
    id: 'cheesecake',
    name: 'ЧИЗКЕЙК САН-САБАСТЬЯН',
    description: 'Баскский чизкейк с карамелизированной корочкой и нежным центром',
    price: 390,
    category: 'specialty',
    image: '/data/menu/ЧИЗКЕЙК САН-САБАСТЬЯН/image_1.png'
  },
  {
    id: 'pistachio-knafe',
    name: 'ФИСТАШКОВЫЙ КНАФЕ',
    description: 'Восточная сладость с хрустящим тестом кадаиф и фисташками',
    price: 700,
    category: 'specialty',
    image: '/data/menu/ФИСТАШКОВЫЙ КНАФЕ/image_1.png'
  },
  {
    id: 'date-dessert',
    name: 'ФИНИКОВЫЙ ДЕСЕРТ',
    description: 'Изысканный десерт на основе натуральных фиников с орехами',
    price: 380,
    category: 'specialty',
    image: '/data/menu/ФИНИКОВЫЙ ДЕСЕРТ/image_1.png'
  }
];
