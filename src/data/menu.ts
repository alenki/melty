export type MenuCategory =
  | 'coffee'
  | 'author-coffee'
  | 'lemonades'
  | 'melty-desserts'
  | 'chocolate-desserts'
  | 'waffles-croissants'
  | 'breakfasts'
  | 'salads'
  | 'main-dishes'
  | 'other';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
}

export const categoryLabels: Record<MenuCategory, string> = {
  'coffee': 'Классический кофе',
  'author-coffee': 'Авторский кофе',
  'lemonades': 'Напитки',
  'melty-desserts': 'Melty Десерты',
  'chocolate-desserts': 'Шоколадные десерты',
  'waffles-croissants': 'Вафли и Круассаны',
  'breakfasts': 'Завтраки',
  'salads': 'Салаты',
  'main-dishes': 'Основные блюда',
  'other': 'Другое'
};

export const menuItems: MenuItem[] = [
  // ============ MELTY DESSERTS ============
  {
    id: 'melty-knafe-cheesecake',
    name: 'Melty knafe чизкейк',
    description: 'Фирменный десерт с хрустящим кадаифом и нежным чизкейком',
    price: 640,
    category: 'melty-desserts',
    image: '/data/menu/image.png'
  },
  {
    id: 'melty-melt',
    name: 'Melty melt',
    description: 'Фирменный тающий десерт с жидким шоколадным центром',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/image copy.png'
  },
  {
    id: 'melty-melt-pistachio',
    name: 'Melty melt-фисташки',
    description: 'Фирменный десерт с фисташковым кремом и тающим центром',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/image copy 2.png'
  },
  {
    id: 'melty-cookies',
    name: 'Melty cookies',
    description: 'Тёплое печенье с тающим шоколадным центром и мороженым',
    price: 630,
    category: 'melty-desserts',
    image: '/data/menu/image copy 3.png'
  },
  {
    id: 'melty-pancake',
    name: 'Melty панкейк',
    description: 'Фирменный воздушный панкейк с авторским топпингом',
    price: 700,
    category: 'melty-desserts',
    image: '/data/menu/image copy 4.png'
  },
  {
    id: 'melty-pancake-pistachio',
    name: 'Melty панкейк-фисташки',
    description: 'Фирменный панкейк с фисташковым кремом',
    price: 640,
    category: 'melty-desserts',
    image: '/data/menu/image copy 5.png'
  },
  {
    id: 'melty-fondue',
    name: 'Melty фондю',
    description: 'Фирменное шоколадное фондю с фруктами и топпингами',
    price: 1300,
    category: 'melty-desserts',
    image: '/data/menu/image copy 6.png'
  },

  // ============ CHOCOLATE DESSERTS ============
  {
    id: 'krispy-rise-chocolate',
    name: 'Krispy Rise в шоколаде',
    description: 'Хрустящий рисовый десерт в шоколадной глазури',
    price: 350,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 7.png'
  },
  {
    id: 'strawberry-chocolate',
    name: 'Клубника в шоколаде',
    description: 'Свежая клубника в бельгийском шоколаде',
    price: 730,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 8.png'
  },
  {
    id: 'puffies',
    name: 'Puffies',
    description: 'Воздушные пончики с шоколадным соусом',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 9.png'
  },
  {
    id: 'brownie',
    name: 'Брауни',
    description: 'Классический шоколадный брауни с насыщенным вкусом',
    price: 460,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 10.png'
  },
  {
    id: 'san-sebastian',
    name: 'Сан-себастьян',
    description: 'Баскский чизкейк с карамелизированной корочкой',
    price: 450,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 11.png'
  },
  {
    id: 'churros',
    name: 'Чуррос',
    description: 'Испанские пончики с шоколадным соусом',
    price: 395,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 12.png'
  },
  {
    id: 'chocolate-fondant',
    name: 'Шоколадный фондан',
    description: 'Французский десерт с жидким шоколадным центром',
    price: 410,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 13.png'
  },
  {
    id: 'eclair',
    name: 'Эклер',
    description: 'Классический эклер с шоколадным кремом',
    price: 440,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 14.png'
  },
  {
    id: 'pancakes-belgian-chocolate',
    name: 'Панкейки с бельгийским шоколадом',
    description: 'Воздушные панкейки с растопленным бельгийским шоколадом',
    price: 495,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 15.png'
  },
  {
    id: 'crep-three-chocolates',
    name: 'Креп три шоколада',
    description: 'Нежный креп с тремя видами шоколада',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 16.png'
  },
  {
    id: 'fetuccini-crep',
    name: 'Фетучини креп',
    description: 'Креп в стиле фетучини с шоколадным соусом',
    price: 425,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 17.png'
  },
  {
    id: 'brownie-roll',
    name: 'Брауни ролл',
    description: 'Креп-ролл с начинкой из брауни',
    price: 495,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 18.png'
  },
  {
    id: 'crep-dubai',
    name: 'Креп Дубай',
    description: 'Креп с фисташковой пастой в дубайском стиле',
    price: 585,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 19.png'
  },
  {
    id: 'dubai-strawberry',
    name: 'Дубайская клубника',
    description: 'Клубника с фисташковой пастой в дубайском стиле',
    price: 850,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 20.png'
  },

  // ============ WAFFLES & CROISSANTS ============
  {
    id: 'waffles-three-chocolates',
    name: 'Вафли три шоколада',
    description: 'Бельгийские вафли с тремя видами шоколада',
    price: 425,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 21.png'
  },
  {
    id: 'waffles-steak-gold',
    name: 'Вафли стейк gold',
    description: 'Вафли-стейк с золотистой карамелью',
    price: 465,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 22.png'
  },
  {
    id: 'waffle-gold',
    name: 'Вафля gold',
    description: 'Золотистая вафля с премиальным топпингом',
    price: 495,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 23.png'
  },
  {
    id: 'waffle-steak',
    name: 'Вафля стейк',
    description: 'Сочная вафля в форме стейка',
    price: 430,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 24.png'
  },
  {
    id: 'pistachio-waffle',
    name: 'Фисташковая вафля',
    description: 'Хрустящая вафля с фисташковым кремом',
    price: 475,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 25.png'
  },
  {
    id: 'sweet-croissant-berries',
    name: 'Сладкий круассан с ягодами',
    description: 'Свежий круассан с сезонными ягодами и кремом',
    price: 650,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 26.png'
  },
  {
    id: 'new-york-roll',
    name: 'New-York РОЛЛ',
    description: 'Круассан-ролл в нью-йоркском стиле',
    price: 475,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 27.png'
  },

  // ============ BREAKFASTS ============
  {
    id: 'shakshuka',
    name: 'Шакшука с яйцом пашот и зеленью',
    description: 'Турецкая яичница с яйцом пашот в фирменном томатном соусе с чиабаттой',
    price: 360,
    category: 'breakfasts',
    image: '/data/menu/image copy 28.png'
  },
  {
    id: 'coconut-granola',
    name: 'Кокосовая гранола с мацони и медом',
    description: 'Гранола собственного приготовления с орехами, мацони, медом и ягодами',
    price: 395,
    category: 'breakfasts',
    image: '/data/menu/image copy 29.png'
  },
  {
    id: 'melty-syrniki',
    name: 'Melty сырники с йогуртом и конфитюром из смородины',
    description: 'Нежные сырники с греческим йогуртом и конфитюром из смородины',
    price: 350,
    category: 'breakfasts',
    image: '/data/menu/image copy 30.png'
  },
  {
    id: 'rice-porridge',
    name: 'Рисовая каша с грецкими орехами',
    description: 'Кремовая рисовая каша с грецкими орехами',
    price: 320,
    category: 'breakfasts',
    image: '/data/menu/image copy 31.png'
  },
  {
    id: 'oatmeal-berries',
    name: 'Овсяная каша с ягодами и орехом пекан',
    description: 'Овсяная каша с сезонными ягодами и орехом пекан',
    price: 295,
    category: 'breakfasts',
    image: '/data/menu/image copy 32.png'
  },
  {
    id: 'melty-breakfast',
    name: 'Фирменный завтрак Melty',
    description: 'Сырный мусс в яичном ролле, вяленые томаты, сметана, хумус, фасоль, оливки с чиабаттой',
    price: 660,
    category: 'breakfasts',
    image: '/data/menu/image copy 33.png'
  },
  {
    id: 'pp-dranik-salmon',
    name: 'ПП драник из кабачков с яйцом пашот и семгой',
    description: 'Драники из кабачков, тар-тар из семги, два яйца пашот и соус галандез',
    price: 645,
    category: 'breakfasts',
    image: '/data/menu/image copy 34.png'
  },
  {
    id: 'mega-oladush-shrimp',
    name: 'Мега оладуш с яйцом скрембл и креветками',
    description: 'Нежный оладушек с яйцом скрембл и тигровыми креветками',
    price: 545,
    category: 'breakfasts',
    image: '/data/menu/image copy 35.png'
  },
  {
    id: 'english-breakfast',
    name: 'Английский завтрак',
    description: 'Глазунья, фермерские колбаски, копчёная индейка, фасоль, тост, томаты, песто, шампиньоны',
    price: 650,
    category: 'breakfasts',
    image: '/data/menu/image copy 36.png'
  },
  {
    id: 'dzhigit-breakfast',
    name: 'Завтрак джигита',
    description: 'Домашние яйца в сметане с двумя видами сыра, калмыцким чаем и чиабаттой',
    price: 420,
    category: 'breakfasts',
    image: '/data/menu/image copy 37.png'
  },

  // ============ SALADS ============
  {
    id: 'crispy-eggplant',
    name: 'Хрустящие баклажаны с сырным кремом',
    description: 'Микс салата, хрустящие баклажаны в паназиатском соусе, томаты, сырный мусс, кунжут, кинза',
    price: 395,
    category: 'salads',
    image: '/data/menu/image copy 38.png'
  },
  {
    id: 'caesar-shrimp',
    name: 'Цезарь с креветками',
    description: 'Айсберг, соус Цезарь, тигровые креветки, сухари, черри, перепелиное яйцо, пармезан',
    price: 590,
    category: 'salads',
    image: '/data/menu/image copy 39.png'
  },
  {
    id: 'caesar-chicken',
    name: 'Цезарь с цыпленком',
    description: 'Айсберг, соус Цезарь, филе цыпленка, сухари, черри, перепелиное яйцо, пармезан',
    price: 440,
    category: 'salads',
    image: '/data/menu/image copy 40.png'
  },
  {
    id: 'greek-salad',
    name: 'Греческий с муссом из брынзы',
    description: 'Огурцы, розовые томаты, маслины, болгарский перец, красный лук, мусс из брынзы',
    price: 420,
    category: 'salads',
    image: '/data/menu/image copy 41.png'
  },
  {
    id: 'green-pp-turkey',
    name: 'Зеленый ПП с индейкой брискет',
    description: 'Индейка брискет, руколла, авокадо, трюфельный соус, киноа, огурец',
    price: 595,
    category: 'salads',
    image: '/data/menu/image copy 42.png'
  },
  {
    id: 'burrata-tomatoes',
    name: 'Буррата со спелыми томатами и соусом песто',
    description: 'Нежная буррата с розовыми томатами и ароматным песто',
    price: 655,
    category: 'salads',
    image: '/data/menu/image copy 43.png'
  },
  {
    id: 'bowl-chicken',
    name: 'Боул с курицей',
    description: 'Филе цыпленка, киноа, яйцо пашот, кукуруза, авокадо, розовые томаты, кунжутный соус',
    price: 495,
    category: 'salads',
    image: '/data/menu/image copy 44.png'
  },

  // ============ MAIN DISHES ============
  {
    id: 'lentil-soup-turkey',
    name: 'Чечевичный суп с индейкой брискет',
    description: 'Наваристый чечевичный суп с копчёной индейкой брискет',
    price: 385,
    category: 'main-dishes',
    image: '/data/menu/image copy 45.png'
  },
  {
    id: 'tom-yam-seafood',
    name: 'Том-ям с морепродуктами',
    description: 'Суп том-ям с креветками, кальмарами и семгой, подается с рисом басматти',
    price: 690,
    category: 'main-dishes',
    image: '/data/menu/image copy 46.png'
  },
  {
    id: 'chicken-ryaba-soup',
    name: 'Курочка "Ряба" с яичной лапшой',
    description: 'Домашний куриный суп с яичной лапшой',
    price: 255,
    category: 'main-dishes',
    image: '/data/menu/image copy 47.png'
  },
  {
    id: 'fetuccini-chicken-mushrooms',
    name: 'Фетучини с куриным филе и грибами',
    description: 'Паста фетучини с нежным куриным филе и грибами в сливочном соусе',
    price: 480,
    category: 'main-dishes',
    image: '/data/menu/image copy 48.png'
  },
  {
    id: 'fetuccini-shrimp-tom-yam',
    name: 'Фетучини с креветками в соусе Том-ям',
    description: 'Паста с креветками в пикантном соусе том-ям',
    price: 650,
    category: 'main-dishes',
    image: '/data/menu/image copy 49.png'
  },
  {
    id: 'chicken-cutlets-potato',
    name: 'Куриные котлетки с картофельным кремом',
    description: 'Домашние куриные котлетки с нежным картофельным кремом',
    price: 520,
    category: 'main-dishes',
    image: '/data/menu/image copy 50.png'
  },
  {
    id: 'chicken-cauliflower-nut',
    name: 'Филе цыпленка с цветной капустой в ореховом соусе',
    description: 'Филе цыпленка с кунжутно-ореховым соусом и цветной капустой',
    price: 550,
    category: 'main-dishes',
    image: '/data/menu/image copy 51.png'
  },
  {
    id: 'zharkoe-chicken',
    name: 'Жаркое с куриным филе',
    description: 'Обжаренное куриное филе с болгарским перцем, грибами и картофелем в сливочном соусе',
    price: 495,
    category: 'main-dishes',
    image: '/data/menu/image copy 52.png'
  },
  {
    id: 'zharkoe-hunter',
    name: 'Жаркое по-охотничьи',
    description: 'Копчёное мясо с болгарским перцем и картофелем в сливочном соусе',
    price: 595,
    category: 'main-dishes',
    image: '/data/menu/image copy 53.png'
  },
  {
    id: 'smoked-lyagur-polenta',
    name: 'Копченый лягур с полентой и сырным муссом',
    description: 'Копчёное мясо с кукурузной полентой и сливочно-сырным соусом',
    price: 750,
    category: 'main-dishes',
    image: '/data/menu/image copy 54.png'
  },
  {
    id: 'melty-burger',
    name: 'MELTY БУРГЕР',
    description: 'Фирменный бургер с сочной котлетой и авторским соусом',
    price: 575,
    category: 'main-dishes',
    image: '/data/menu/image copy 55.png'
  },
  {
    id: 'sandwich-turkey',
    name: 'Сендвич с индейкой',
    description: 'Тостерный хлеб, горчичный соус, копчёная индейка, салат, томаты, чеддер, песто',
    price: 395,
    category: 'main-dishes',
    image: '/data/menu/image copy 56.png'
  },
  {
    id: 'sandwich-caesar-chicken',
    name: 'Сэндвич "Цезарь" с цыпленком',
    description: 'Тостерный хлеб, соус Цезарь, салат, филе цыпленка, томаты, чеддер',
    price: 390,
    category: 'main-dishes',
    image: '/data/menu/image copy 57.png'
  },

  // ============ CLASSIC COFFEE ============
  {
    id: 'americano',
    name: 'Американо',
    description: 'Классический американо из отборных зёрен',
    price: 170,
    category: 'coffee',
    image: '/data/menu/image copy 58.png'
  },
  {
    id: 'espresso',
    name: 'Эспрессо',
    description: 'Насыщенный эспрессо с богатым вкусом',
    price: 170,
    category: 'coffee',
    image: '/data/menu/image copy 59.png'
  },
  {
    id: 'cappuccino-250',
    name: 'Капучино 250 мл.',
    description: 'Капучино с бархатистой молочной пенкой',
    price: 210,
    category: 'coffee',
    image: '/data/menu/image copy 60.png'
  },
  {
    id: 'cappuccino-350',
    name: 'Капучино 350 мл.',
    description: 'Большой капучино с бархатистой молочной пенкой',
    price: 230,
    category: 'coffee',
    image: '/data/menu/image copy 61.png'
  },
  {
    id: 'latte',
    name: 'Латте',
    description: 'Нежный латте с шелковистой текстурой',
    price: 240,
    category: 'coffee',
    image: '/data/menu/image copy 62.png'
  },
  {
    id: 'flat-white',
    name: 'Флэт Уайт',
    description: 'Крепкий кофе с бархатистым молоком',
    price: 220,
    category: 'coffee',
    image: '/data/menu/image copy 63.png'
  },
  {
    id: 'raf-classic',
    name: 'Раф Классический',
    description: 'Сливочный раф по классическому рецепту',
    price: 250,
    category: 'coffee',
    image: '/data/menu/image copy 64.png'
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад',
    description: 'Насыщенный горячий шоколад из бельгийского шоколада',
    price: 250,
    category: 'coffee',
    image: '/data/menu/image copy 65.png'
  },
  {
    id: 'cocoa',
    name: 'Какао',
    description: 'Ароматное какао с молоком',
    price: 220,
    category: 'coffee',
    image: '/data/menu/image copy 66.png'
  },

  // ============ AUTHOR COFFEE ============
  {
    id: 'raf-mango',
    name: 'Раф "Манго"',
    description: 'Раф с тропическим вкусом манго',
    price: 320,
    category: 'author-coffee',
    image: '/data/menu/image copy 67.png'
  },
  {
    id: 'raf-raspberry',
    name: 'Раф "Малина"',
    description: 'Раф с нежным ягодным вкусом малины',
    price: 260,
    category: 'author-coffee',
    image: '/data/menu/image copy 68.png'
  },
  {
    id: 'raf-urbech',
    name: 'Раф "Урбеч"',
    description: 'Раф с натуральной ореховой пастой урбеч',
    price: 300,
    category: 'author-coffee',
    image: '/data/menu/image copy 69.png'
  },
  {
    id: 'espresso-tonic',
    name: 'Эспрессо тоник',
    description: 'Освежающий эспрессо с тоником',
    price: 250,
    category: 'author-coffee',
    image: '/data/menu/image copy 70.png'
  },
  {
    id: 'ice-latte',
    name: 'Ice latte',
    description: 'Охлаждающий латте со льдом',
    price: 230,
    category: 'author-coffee',
    image: '/data/menu/image copy 71.png'
  },
  {
    id: 'frappe',
    name: 'Фраппе',
    description: 'Ледяной кофейный напиток',
    price: 290,
    category: 'author-coffee',
    image: '/data/menu/image copy 72.png'
  },
  {
    id: 'cold-brew-blueberry',
    name: 'Колд Брю "ЧЕРНИКА"',
    description: 'Холодный кофе с черничным сиропом',
    price: 250,
    category: 'author-coffee',
    image: '/data/menu/image copy 73.png'
  },
  {
    id: 'cold-brew-pomegranate',
    name: 'Колд Брю "ГРАНАТ"',
    description: 'Холодный кофе с гранатовым сиропом',
    price: 250,
    category: 'author-coffee',
    image: '/data/menu/image copy 74.png'
  },
  {
    id: 'bumble',
    name: 'Бамбл',
    description: 'Кофейно-апельсиновый коктейль',
    price: 270,
    category: 'author-coffee',
    image: '/data/menu/image copy 75.png'
  },
  {
    id: 'paloma-grapefruit',
    name: 'Палома "Грейпфрут-карамель"',
    description: 'Кофейный напиток с грейпфрутом и карамелью',
    price: 220,
    category: 'author-coffee',
    image: '/data/menu/image copy 76.png'
  },

  // ============ DRINKS / LEMONADES ============
  {
    id: 'smoothie-green-break',
    name: 'Смузи Green Break',
    description: 'Зелёный смузи для бодрого дня',
    price: 300,
    category: 'lemonades',
    image: '/data/menu/image copy 77.png'
  },
  {
    id: 'smoothie-banana-oat',
    name: 'Смузи Орехово-банановый с овсянкой',
    description: 'Питательный смузи с бананом, орехами и овсянкой',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 78.png'
  },
  {
    id: 'tea-mango-cherry',
    name: 'Манго-вишня чай',
    description: 'Фруктовый чай с манго и вишней',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 79.png'
  },
  {
    id: 'lemonade-dona-rossa',
    name: 'Лимонад DONA ROSSA',
    description: 'Авторский лимонад с ягодами',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 80.png'
  },
  {
    id: 'grapefruit-fresh',
    name: 'Грейпфрутовый фреш',
    description: 'Свежевыжатый грейпфрутовый сок',
    price: 370,
    category: 'lemonades',
    image: '/data/menu/image copy 81.png'
  },
  {
    id: 'lemonade-blackberry-coconut',
    name: 'Лимонад ежевика-кокос 300 мл.',
    description: 'Освежающий лимонад с ежевикой и кокосом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 82.png'
  },
  {
    id: 'lemonade-cranberry-cherry',
    name: 'Лимонад клюква-вишня 300 мл',
    description: 'Ягодный лимонад с клюквой и вишней',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 83.png'
  },
  {
    id: 'milkshake-oreo',
    name: 'Милкшейк Oreo',
    description: 'Молочный коктейль с печеньем Oreo',
    price: 280,
    category: 'lemonades',
    image: '/data/menu/image copy 84.png'
  },
  {
    id: 'milkshake-cheesecake',
    name: 'Милкшейк чизкейк',
    description: 'Молочный коктейль со вкусом чизкейка',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 85.png'
  },
  {
    id: 'tea-sea-buckthorn',
    name: 'Облепиховый чай',
    description: 'Витаминный чай с облепихой',
    price: 300,
    category: 'lemonades',
    image: '/data/menu/image copy 86.png'
  },
  {
    id: 'tea-berry',
    name: 'Ягодный чай',
    description: 'Ароматный чай с лесными ягодами',
    price: 320,
    category: 'lemonades',
    image: '/data/menu/image copy 87.png'
  },
  {
    id: 'mojito-passion-fruit',
    name: 'Мохито Маракуйя',
    description: 'Освежающий мохито с маракуйей',
    price: 295,
    category: 'lemonades',
    image: '/data/menu/image copy 88.png'
  },
  {
    id: 'mojito-lime',
    name: 'Мохито Лайм',
    description: 'Классический мохито с лаймом',
    price: 270,
    category: 'lemonades',
    image: '/data/menu/image copy 89.png'
  },
  {
    id: 'smoothie-vanilla-banana',
    name: 'Ванильно-Банановый',
    description: 'Сладкий смузи с ванилью и бананом',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 90.png'
  },
  {
    id: 'sorrel-lemonade',
    name: 'Щавелевый',
    description: 'Оригинальный лимонад из щавеля',
    price: 280,
    category: 'lemonades',
    image: '/data/menu/image copy 91.png'
  },
  {
    id: 'mango-passion-fruit',
    name: 'Манго-Маракуйя',
    description: 'Тропический напиток с манго и маракуйей',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 92.png'
  },
  {
    id: 'aperol-spritz',
    name: 'Апероль "Спритц"',
    description: 'Безалкогольный напиток в стиле Апероль Шприц',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 93.png'
  },
  {
    id: 'orange-fresh',
    name: 'Апельсиновый Фреш',
    description: 'Свежевыжатый апельсиновый сок',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 94.png'
  },
  {
    id: 'tea-ginger',
    name: 'Имбирный чай',
    description: 'Согревающий чай с имбирём',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 95.png'
  },
  {
    id: 'tea-black',
    name: 'Черный чай',
    description: 'Классический чёрный чай',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 96.png'
  },
  {
    id: 'tea-sencha',
    name: 'Сенча',
    description: 'Японский зелёный чай сенча',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 97.png'
  },
  {
    id: 'tea-earl-grey',
    name: 'Эрл Грей',
    description: 'Классический чай с бергамотом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 98.png'
  },

  // ============ OTHER ============
  {
    id: 'cream-hummus',
    name: 'Крем-хумус с хрустящим нутом',
    description: 'Нежное пюре из нута с тахини, оливковым маслом и специями',
    price: 320,
    category: 'other',
    image: '/data/menu/image copy 16.png'
  },
  {
    id: 'cheese-sticks-jam',
    name: 'Сырные палочки с конфитюром из смородины',
    description: 'Хрустящие сырные палочки с ягодным конфитюром',
    price: 365,
    category: 'other',
    image: '/data/menu/image copy 17.png'
  },
  {
    id: 'wild-rice-truffle',
    name: 'Дикий рис с маслом белого трюфеля и зеленью',
    description: 'Ароматный дикий рис с трюфельным маслом',
    price: 280,
    category: 'other',
    image: '/data/menu/image copy 18.png'
  },
  {
    id: 'french-fries',
    name: 'Картофель фри',
    description: 'Хрустящий картофель фри',
    price: 180,
    category: 'other',
    image: '/data/menu/image copy 19.png'
  },
  {
    id: 'dippers-parmesan',
    name: 'Дипперы со снегом пармезан',
    description: 'Картофельные дипперы с пармезаном',
    price: 250,
    category: 'other',
    image: '/data/menu/image copy 20.png'
  },
  {
    id: 'mashed-potato',
    name: 'Картофельное пюре из детства',
    description: 'Нежное домашнее картофельное пюре',
    price: 180,
    category: 'other',
    image: '/data/menu/image copy 21.png'
  },
  {
    id: 'cheese-sticks',
    name: 'Сырные палочки',
    description: 'Хрустящие сырные палочки с соусом',
    price: 365,
    category: 'other',
    image: '/data/menu/image copy 22.png'
  },
  {
    id: 'water',
    name: 'Вода (с газом/без газа)',
    description: 'Питьевая вода',
    price: 100,
    category: 'other',
    image: '/data/menu/image copy 23.png'
  },
  {
    id: 'coca-cola',
    name: 'Coca-cola',
    description: 'Coca-Cola',
    price: 200,
    category: 'other',
    image: '/data/menu/image copy 24.png'
  },
  {
    id: 'juice-rich',
    name: 'Сок Rich (яблоко/апельсин)',
    description: 'Сок Rich на выбор',
    price: 150,
    category: 'other',
    image: '/data/menu/image copy 25.png'
  },
  {
    id: 'tea-green-jasmine',
    name: 'Зеленый чай с жасмином',
    description: 'Зелёный чай с цветками жасмина',
    price: 260,
    category: 'other',
    image: '/data/menu/image copy 26.png'
  },
  {
    id: 'tea-milk-oolong',
    name: 'Молочный улун',
    description: 'Китайский молочный улун',
    price: 260,
    category: 'other',
    image: '/data/menu/image copy 27.png'
  }
];
