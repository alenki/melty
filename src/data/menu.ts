export type MenuCategory =
  | 'coffee'
  | 'cold-coffee'
  | 'author-coffee'
  | 'lemonades-mojito'
  | 'author-drinks'
  | 'smoothies'
  | 'fresh-juices'
  | 'milkshakes'
  | 'house-teas'
  | 'leaf-teas'
  | 'soft-drinks'
  | 'melty-desserts'
  | 'chocolate-desserts'
  | 'chocolate-cups'
  | 'waffles-croissants'
  | 'savory-waffles'
  | 'crepes'
  | 'breakfasts'
  | 'salads'
  | 'soups'
  | 'main-dishes'
  | 'sides'
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
};

export const bestSellerIds: string[] = [
  'melty-melt',
  'melty-knafe-cheesecake',
  'melty-fondue',
  'dubai-strawberry',
  'melty-cookies',
  'chocolate-fondant',
];

export const menuItems: MenuItem[] = [
  // ============ MELTY DESSERTS ============
  {
    id: 'melty-knafe-cheesecake',
    name: 'Melty Knafi Чизкейк',
    description: 'Фирменный чизкейк с начинкой из фисташкового урбеча и хрустящего теста «Катаифи». Подаётся с шотом молочного бельгийского шоколада и дробленной фисташкой',
    price: 740,
    category: 'melty-desserts'
  },
  {
    id: 'melty-melt',
    name: 'Melty melt',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts'
  },
  {
    id: 'melty-melt-pistachio',
    name: 'Melty melt фисташка',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts'
  },
  {
    id: 'melty-cookies',
    name: 'Melty cookies',
    description: 'Фирменное карамельное печенье с жидкой сердцевиной. Подаётся с шариком ванильного мороженого',
    price: 630,
    category: 'melty-desserts'
  },
  {
    id: 'melty-pancake',
    name: 'Melty панкейк',
    description: 'Фирменные панкейки, подаются с карамельной пастой и дробленным печеньем',
    price: 700,
    category: 'melty-desserts'
  },
  {
    id: 'melty-pancake-pistachio',
    name: 'Melty панкейк-фисташка',
    description: 'Фирменные панкейки, подаются с фисташковой пастой и дробленными фисташками',
    price: 640,
    category: 'melty-desserts'
  },
  {
    id: 'melty-fondue',
    name: 'Melty фондю',
    description: 'Расплавленный горячий шоколад. Подаётся с миксом брауни, венских вафель, паффрисами и сезонными ягодами',
    price: 1300,
    category: 'melty-desserts'
  },
  {
    id: 'melty-burger',
    name: 'Melty бургер',
    description: 'Запечатанный бургер, начиненный шариком ванильного мороженого и хрустящим тестом «Катаифи». Подаётся на подушке из фисташкового урбеча, посыпанный дробленной фисташкой',
    price: 575,
    category: 'melty-desserts'
  },

  // ============ CHOCOLATE DESSERTS ============
  {
    id: 'puffies',
    name: 'Puffies',
    description: 'Мини-панкейки. Подаются с шотом молочного бельгийского шоколада',
    price: 520,
    category: 'chocolate-desserts'
  },
  {
    id: 'brownie',
    name: 'Брауни',
    description: 'Шоколадный брауни, обильно политый молочным бельгийским шоколадом. Подаётся с шариком ванильного мороженого',
    price: 560,
    category: 'chocolate-desserts'
  },
  {
    id: 'san-sebastian',
    name: 'Сан-Себастьян',
    description: 'Нежный творожный чизкейк под карамелизированной корочкой. Подаётся с шотом молочного бельгийского шоколада',
    price: 500,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/image copy 81.png'
  },
  {
    id: 'san-sebastian-pistachio',
    name: 'Сан-Себастьян фисташковый',
    description: 'Нежный фисташковый чизкейк под карамелизированной корочкой. Подаётся с шотом молочного бельгийского шоколада',
    price: 630,
    category: 'chocolate-desserts',
    image: ''
  },
  {
    id: 'churros',
    name: 'Чуррос',
    description: 'Сладкие обжаренные вафельные палочки, политые тремя видами бельгийского шоколада',
    price: 495,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/image copy 80.png'
  },
  {
    id: 'chocolate-fondant',
    name: 'Шоколадный Фондан',
    description: 'Шоколадный кекс с жидкой сердцевиной, политый молочным бельгийским шоколадом, подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 510,
    category: 'chocolate-desserts'
  },
  {
    id: 'eclair',
    name: 'Эклеры',
    description: 'Пирожные из заварного теста под карамелизированной корочкой, наполненные фирменным кремом «Патисьер». Подаются с сезонными ягодами',
    price: 540,
    category: 'chocolate-desserts'
  },
  {
    id: 'pancakes-trouble-chocolate',
    name: 'Панкейки Trouble Chocolate',
    description: 'Пышные панкейки, обильно политые тремя видами бельгийского шоколада',
    price: 620,
    category: 'chocolate-desserts'
  },

  // ============ CHOCOLATE CUPS ============
  {
    id: 'dubai-strawberry',
    name: 'Дубайская клубника',
    description: 'Свежая клубника, хрустящее тесто «Катаифи», фисташковая паста, молочный бельгийский шоколад, выложенные послойно в стакане. Посыпается дробленной фисташкой',
    price: 950,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/image copy 40.png'
  },
  {
    id: 'strawberry-in-chocolate',
    name: 'Клубника в шоколаде',
    description: 'Свежая клубника в молочном бельгийском шоколаде, подаётся в стакане',
    price: 800,
    category: 'chocolate-cups',
    image: ''
  },
  {
    id: 'krispy-rise-chocolate',
    name: 'Krispy Rise в шоколаде',
    description: 'Хрустящий воздушный рис, обильно политый молочным бельгийским шоколадом',
    price: 420,
    category: 'chocolate-cups'
  },

  // ============ CREPES ============
  {
    id: 'crep-three-chocolates',
    name: 'Креп Три шоколада',
    description: 'Французский блинчик, политый тремя видами бельгийского шоколада, подаётся с сезонными ягодами',
    price: 575,
    category: 'crepes'
  },
  {
    id: 'golden-crep',
    name: 'Golden Креп',
    description: 'Французский блинчик, политый молочно-карамельным бельгийским шоколадом',
    price: 650,
    category: 'crepes',
    image: '/data/menu/desserts/IMG_4710.JPG'
  },
  {
    id: 'crep-dubai',
    name: 'Креп Дубай',
    description: 'Французский блинчик с начинкой из теста «Катаифи», политый фисташковым урбечом и молочным шоколадом',
    price: 770,
    category: 'crepes',
    image: '/data/menu/desserts/image copy 43.png'
  },
  {
    id: 'fetuccini-crep',
    name: 'Фетучини-креп',
    description: 'Французский блинчик, разрезанный на тонкие полоски, напоминающие итальянскую пасту. Поливается молочным бельгийским шоколадом и подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 525,
    category: 'crepes',
    image: '/data/menu/desserts/image copy 53.png'
  },
  {
    id: 'melty-crep-pistachio',
    name: 'Melty креп фисташковый',
    description: 'Французский блинчик с фисташковым урбечом и молочным бельгийским шоколадом, посыпанный дробленной фисташкой',
    price: 720,
    category: 'melty-desserts',
    image: '/data/menu/desserts/IMG_8214.JPG'
  },
  {
    id: 'melty-crep-chocolate',
    name: 'Melty креп шоколадный',
    description: 'Французский блинчик с молочным бельгийским шоколадом, подаётся с клубникой и шариком шоколадного мороженого',
    price: 750,
    category: 'melty-desserts',
    image: '/data/menu/desserts/IMG_8176.JPG'
  },
  {
    id: 'brownie-roll',
    name: 'Брауни ролл',
    description: 'Шоколадный брауни, завёрнутый в тонкие блинчики. Поливаются тремя видами бельгийского шоколада',
    price: 595,
    category: 'crepes',
    image: '/data/menu/desserts/image copy 52.png'
  },

  // ============ WAFFLES & CROISSANTS ============
  {
    id: 'waffles-three-chocolates',
    name: 'Вафля три шоколада',
    description: 'Сладкая вафля, политая тремя видами бельгийского шоколада',
    price: 650,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/image copy 51.png'
  },
  {
    id: 'waffles-steak-gold',
    name: 'Вафля стейк Gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 565,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/image copy 50.png'
  },
  {
    id: 'waffle-gold',
    name: 'Вафля Gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 595,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/image copy 49.png'
  },
  {
    id: 'waffle-steak',
    name: 'Вафля Стейк',
    description: 'Сладкая вафля, политая молочным бельгийским шоколадом',
    price: 530,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/image copy 48.png'
  },
  {
    id: 'pistachio-waffle',
    name: 'Фисташковая вафля',
    description: 'Сладкие вафли, политые фисташковым урбечом',
    price: 575,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/image copy 47.png'
  },
  {
    id: 'new-york-roll',
    name: 'New-York ролл',
    description: 'Круассан-ролл с кремом «Патисьер», молочным бельгийским шоколадом и шариком мороженого',
    price: 575,
    category: 'waffles-croissants'
  },

  // ============ SAVORY WAFFLES ============
  {
    id: 'savory-waffle-avocado-crab',
    name: 'Вафля с авокадо и крабом',
    description: 'Соленая вафля с авокадо и крабом',
    price: 680,
    category: 'savory-waffles',
    image: '/data/menu/1/Соленая вафля с авокадо, крабом, и сливочным муссом.jpg'
  },
  {
    id: 'savory-waffle-beef-coleslaw',
    name: 'Вафля с рван. говядиной и салатом Коу-слоу',
    description: 'Соленая вафля с рваной говядиной и салатом Коу-слоу',
    price: 620,
    category: 'savory-waffles',
    image: '/data/menu/2/Вафля с рван. говядиной и салатом Коу-слоу.jpg'
  },
  {
    id: 'savory-waffle-salmon-poached-egg',
    name: 'Вафля с семгой и яйцом пашот',
    description: 'Соленая вафля с семгой и яйцом пашот',
    price: 750,
    category: 'savory-waffles',
    image: '/data/menu/1/Соленая вафля с лососем и со сливочным муссом.jpg'
  },
  {
    id: 'savory-waffle-mousse-scramble',
    name: 'Вафля со сливоч. муссом и скремблом',
    description: 'Соленая вафля со сливочным муссом и скремблом',
    price: 450,
    category: 'savory-waffles',
    image: '/data/menu/1/Соленая вафля со скремблом.jpg'
  },

  // ============ BREAKFASTS ============
  {
    id: 'melty-syrniki',
    name: 'Melty сырники с йогуртом и конфитюром из смородины',
    description: 'Нежные сырники с греческим йогуртом и конфитюром из смородины',
    price: 455,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 26.png'
  },
  {
    id: 'english-breakfast',
    name: 'Английский завтрак',
    description: 'Глазунья из двух яиц, фермерские колбаски, копчёная индейка, фасоль в томатном соусе, обжаренный тостерный хлеб, свежие томаты, соус «Песто», шампиньоны',
    price: 795,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 20.png'
  },
  {
    id: 'dzhigit-breakfast',
    name: 'Завтрак джигита',
    description: 'Домашние яйца, приготовленные в домашней сметане, подаётся с двумя видами сыра, натуральным калмыцким чаем и хрустящей чиабаттой',
    price: 525,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 19.png'
  },
  {
    id: 'spanish-omelette',
    name: 'Испанский омлет',
    description: 'Классический испанский омлет с начинкой',
    price: 390,
    category: 'breakfasts',
    image: '/data/menu/1/Испанский омлет.jpg'
  },
  {
    id: 'coconut-granola',
    name: 'Кокосовая гранола с мацони и медом',
    description: 'Гранола собственного приготовления с добавлением орехов, мацони, мёда и сезонных ягод',
    price: 495,
    category: 'breakfasts',
    image: '/data/menu/1/Гранола.jpg'
  },
  {
    id: 'crepe-raspberry',
    name: 'Креп с малиновым соусом и сметаной',
    description: 'Нежный креп с малиновым соусом и сметаной',
    price: 370,
    category: 'breakfasts',
    image: ''
  },
  {
    id: 'mega-oladush-shrimp',
    name: 'Мега оладушек с яйцом скрембл и креветками',
    description: 'Нежный оладушек с яйцом скрембл и тигровыми креветками',
    price: 695,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 21.png'
  },
  {
    id: 'oatmeal-berries',
    name: 'Овсяная каша с ягодами',
    description: 'Овсяная каша с сезонными ягодами и орехом пекан',
    price: 410,
    category: 'breakfasts',
    image: '/data/menu/1/Овсяная каша.jpg'
  },
  {
    id: 'pp-dranik-salmon',
    name: 'ПП драник из кабачков с яйцом пашот и семгой собственного посола',
    description: 'Драники из кабачков, тар-тар из сёмги собственного посола, два яйца пашот и соус галандез',
    price: 810,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 22.png'
  },
  {
    id: 'rice-porridge',
    name: 'Рисовая каша с грецкими орехами',
    description: 'Кремовая рисовая каша с грецкими орехами и мёдом',
    price: 395,
    category: 'breakfasts',
    image: '/data/menu/1/Рисовая каша.jpg'
  },
  {
    id: 'melty-breakfast',
    name: 'Фирменный завтрак Мелти',
    description: 'Нежный сырный мусс, завёрнутый в яичный ролл, вяленые томаты, сметана, огурцы, хумус, фасоль, оливки гиганты, подаётся с хрустящей чиабаттой',
    price: 800,
    category: 'breakfasts',
    image: ''
  },
  {
    id: 'shakshuka',
    name: 'Шакшука с яйцом пашот и зеленью',
    description: 'Турецкая яичница с яйцом пашот в фирменном томатном соусе. Подаётся с хрустящей чиабаттой',
    price: 460,
    category: 'breakfasts',
    image: '/data/menu/3/image copy 76.png'
  },
  {
    id: 'egg-roll',
    name: 'Эгг-ролл',
    description: 'Хрустящий яичный ролл с начинкой',
    price: 460,
    category: 'breakfasts',
    image: '/data/menu/1/Эгг-ролл.jpg'
  },

  // ============ APPETIZERS (ЗАКУСКИ) ============
  {
    id: 'cream-hummus',
    name: 'Крем-хумус с хрустящим нутом',
    description: 'Нежное пюре из нута с кунжутной пастой тахини, оливковым маслом и специями',
    price: 420,
    category: 'other',
    image: '/data/menu/3/image copy 18.png'
  },
  {
    id: 'cheese-sticks-jam',
    name: 'Сырные палочки с конфитюром из смородины',
    description: 'Хрустящие сырные палочки с ягодным конфитюром из смородины',
    price: 475,
    category: 'other',
    image: '/data/menu/3/image copy 17.png'
  },
  {
    id: 'sandwich-turkey',
    name: 'Сэндвич с индейкой',
    description: 'Обжаренный тостерный хлеб, горчичный соус, копчёная индейка, лист салата, розовые помидоры, сыр «Чеддер», соус «Песто»',
    price: 495,
    category: 'other',
    image: '/data/menu/3/image copy 16.png'
  },
  {
    id: 'sandwich-caesar-chicken',
    name: 'Сэндвич Цезарь с цыпленком',
    description: 'Обжаренный тостерный хлеб, соус «Цезарь», лист салата, филе цыплёнка, розовые томаты, сыр «Чеддер»',
    price: 495,
    category: 'other',
    image: '/data/menu/3/image copy 15.png'
  },

  // ============ SALADS ============
  {
    id: 'green-pp-turkey',
    name: 'Зеленый ПП с индейкой брискет',
    description: 'Индейка брискет собственного копчения, свежая руккола, спелый авокадо, соус ПП на основе трюфельного масла, киноа и слайса огурца',
    price: 800,
    category: 'salads',
    image: '/data/menu/3/image copy 70.png'
  },
  {
    id: 'crispy-eggplant',
    name: 'Хрустящие баклажаны с сырным кремом',
    description: 'Микс салата, хрустящие баклажаны в паназиатском соусе, свежие томаты, сырный мусс, кунжут, кинза',
    price: 495,
    category: 'salads',
    image: '/data/menu/3/image copy 74.png'
  },
  {
    id: 'caesar-shrimp',
    name: 'Цезарь с креветками',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренные тигровые креветки, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 750,
    category: 'salads',
    image: '/data/menu/3/image copy 73.png'
  },
  {
    id: 'caesar-chicken',
    name: 'Цезарь с цыпленком',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренное филе цыплёнка, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 595,
    category: 'salads',
    image: '/data/menu/3/image copy 72.png'
  },
  {
    id: 'greek-salad',
    name: 'Греческий с муссом из брынзы',
    description: 'Огурцы, розовые томаты, маслины, болгарский перец, красный лук, мусс из фермерской брынзы, заправляется оливковым маслом',
    price: 530,
    category: 'salads',
    image: '/data/menu/3/image copy 71.png'
  },
  {
    id: 'bowl-chicken',
    name: 'Боул с курицей',
    description: 'Филе цыплёнка, киноа, яйцо пашот, кукуруза, авокадо, розовые томаты, соус кунжутный',
    price: 655,
    category: 'salads',
    image: '/data/menu/3/image copy 68.png'
  },

  // ============ SOUPS ============
  {
    id: 'tom-yam-seafood',
    name: 'Том-ям с морепродуктами',
    description: 'Суп том-ям с добавлением креветок, кальмаров и сёмги. Подаётся с рисом басматти',
    price: 860,
    category: 'soups',
    image: '/data/menu/3/image copy 14.png'
  },
  {
    id: 'lentil-soup-turkey',
    name: 'Чечевичный суп с брискетом из индейки',
    description: 'Суп из красной чечевицы на сливочной основе с добавлением индейки брискет. Подаётся с сухарями',
    price: 530,
    category: 'soups',
    image: '/data/menu/3/image copy 67.png'
  },
  {
    id: 'chicken-ryaba-soup',
    name: 'Курочка Ряба с яичной лапшой',
    description: 'Куриный суп с яичной лапшой',
    price: 355,
    category: 'soups',
    image: '/data/menu/3/image copy 13.png'
  },

  // ============ MAIN DISHES (Рыба, Птица, Мясо) ============
  {
    id: 'eastern-rice-chicken',
    name: 'Восточный рис с курицей',
    description: 'Восточный рис с курицей',
    price: 560,
    category: 'main-dishes',
    image: '/data/menu/1/Восточный рис с курицей.jpg'
  },
  {
    id: 'eastern-rice-beef',
    name: 'Восточный рис с рван.говядиной',
    description: 'Восточный рис с рваной говядиной',
    price: 670,
    category: 'main-dishes',
    image: '/data/menu/1/Восточный рис с пряной говядиной.jpg'
  },
  {
    id: 'salmon-orzo-kataifi',
    name: 'Семга с пастой орзо и рулетом из катаифи',
    description: 'Семга с пастой орзо и рулетом из катаифи',
    price: 1350,
    category: 'main-dishes',
    image: '/data/menu/1/Семга с пасой орзо.jpg'
  },
  {
    id: 'shawarma-chicken',
    name: 'Шаурма ливанская с курицей',
    description: 'Шаурма ливанская с курицей',
    price: 520,
    category: 'main-dishes',
    image: '/data/menu/1/Шаурма ливанская с курицей.jpg'
  },
  {
    id: 'shawarma-beef',
    name: 'Шаурма ливанская с рван.говядиной',
    description: 'Шаурма ливанская с рваной говядиной',
    price: 620,
    category: 'main-dishes',
    image: '/data/menu/1/Шаурма ливанская с пряной говядиной.jpg'
  },
  {
    id: 'fetuccini-shrimp-tom-yam',
    name: 'Фетучини с креветками в соусе Том-ям',
    description: 'Паста фетучини с тигровыми креветками в пикантном соусе том-ям',
    price: 795,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 11.png'
  },
  {
    id: 'chicken-cutlets-potato',
    name: 'Куриные котлетки с картофельным кремом',
    description: 'Домашние куриные котлетки с нежным картофельным кремом',
    price: 775,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 10.png'
  },
  {
    id: 'fetuccini-chicken-mushrooms',
    name: 'Фетучини с куриным филе и грибами',
    description: 'Паста фетучини с нежным куриным филе и грибами в сливочном соусе',
    price: 655,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 12.png'
  },
  {
    id: 'chicken-cauliflower-nut',
    name: 'Филе цыпленка с цветной капустой в ореховом соусе',
    description: 'Филе цыплёнка с добавлением кунжутно-орехового соуса и цветной капустой',
    price: 695,
    category: 'main-dishes',
    image: '/data/menu/1/Филе цыпленка с цветной капустой в ореховом соусе.jpg'
  },
  {
    id: 'zharkoe-chicken',
    name: 'Жаркое с куриным филе',
    description: 'Обжаренное куриное филе с болгарским перцем, грибами и картофелем в сливочном соусе',
    price: 655,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 8.png'
  },
  {
    id: 'zharkoe-hunter',
    name: 'Жаркое по-охотничьи',
    description: 'Обжаренное копчёное мясо с болгарским перцем и картофелем в сливочном соусе',
    price: 855,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 7.png'
  },
  {
    id: 'smoked-lyagur-polenta',
    name: 'Копченый лягур с полентой и сырным муссом',
    description: 'Копчёное мясо с кукурузной полентой и сливочно-сырным соусом',
    price: 950,
    category: 'main-dishes',
    image: '/data/menu/3/image copy 6.png'
  },

  // ============ SIDES (ГАРНИРЫ) ============
  {
    id: 'wild-rice-truffle',
    name: 'Дикий рис с маслом белого трюфеля и зеленью',
    description: 'Ароматный дикий рис с маслом белого трюфеля и свежей зеленью',
    price: 380,
    category: 'sides',
    image: '/data/menu/3/image copy 5.png'
  },
  {
    id: 'french-fries',
    name: 'Картофель фри',
    description: 'Хрустящий золотистый картофель фри',
    price: 250,
    category: 'sides',
    image: '/data/menu/3/image copy 4.png'
  },
  {
    id: 'dippers-parmesan',
    name: 'Дипперы со снегом пармезан',
    description: 'Картофельные дипперы, посыпанные снегом пармезана',
    price: 350,
    category: 'sides',
    image: '/data/menu/3/image copy 3.png'
  },
  {
    id: 'mashed-potato',
    name: 'Картофельное пюре из детства',
    description: 'Нежное домашнее картофельное пюре по бабушкиному рецепту',
    price: 250,
    category: 'sides',
    image: '/data/menu/3/image copy 2.png'
  },
  {
    id: 'cheese-sticks',
    name: 'Сырные палочки',
    description: 'Хрустящие сырные палочки с соусом',
    price: 480,
    category: 'sides',
    image: '/data/menu/3/image copy.png'
  },

  // ============ CLASSIC COFFEE ============
  {
    id: 'flat-white',
    name: 'FLAT WHITE 220мл',
    description: 'Классический флэт уайт с плотной бархатистой микропенкой',
    price: 250,
    category: 'coffee',
    image: '/data/menu/drinks/image copy 64.png'
  },
  {
    id: 'americano',
    name: 'Американо 170мл',
    description: 'Классический американо из отборных зёрен',
    price: 200,
    category: 'coffee',
    image: '/data/menu/drinks/image copy 66.png'
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад 250мл',
    description: 'Горячий шоколад из натурального бельгийского шоколада',
    price: 330,
    category: 'coffee',
    image: '/data/menu/drinks/IMG_2510.JPG'
  },
  {
    id: 'hot-chocolate-mega',
    name: 'Горячий шоколад Мега 350мл',
    description: 'Большая порция горячего шоколада из бельгийского шоколада',
    price: 430,
    category: 'coffee',
    image: ''
  },
  {
    id: 'kakao',
    name: 'Какао 250мл',
    description: 'Горячий какао из бельгийского шоколада',
    price: 330,
    category: 'coffee',
    image: ''
  },
  {
    id: 'kakao-mega',
    name: 'Какао Мега 350мл',
    description: 'Большая порция горячего какао из бельгийского шоколада',
    price: 430,
    category: 'coffee',
    image: ''
  },
  {
    id: 'cappuccino-350',
    name: 'Капучино 350мл',
    description: 'Классический капучино с нежной молочной пенкой',
    price: 250,
    category: 'coffee',
    image: '/data/menu/drinks/image copy 92.png'
  },
  {
    id: 'cappuccino-250',
    name: 'Капучино 250мл',
    description: 'Классический капучино с нежной молочной пенкой',
    price: 250,
    category: 'coffee',
    image: ''
  },
  {
    id: 'cappuccino-lactose-free-350',
    name: 'Капучино на безлактозном молоке 350мл',
    description: 'Капучино на безлактозном молоке с нежной пенкой',
    price: 310,
    category: 'coffee',
    image: ''
  },
  {
    id: 'cappuccino-lactose-free-250',
    name: 'Капучино на безлактозном молоке 250мл',
    description: 'Капучино на безлактозном молоке с нежной пенкой',
    price: 280,
    category: 'coffee',
    image: ''
  },
  {
    id: 'latte-350',
    name: 'Латте 350мл',
    description: 'Нежный латте с бархатистой молочной пенкой',
    price: 270,
    category: 'coffee',
    image: ''
  },
  {
    id: 'latte-alt-milk',
    name: 'Латте на альтернативном молоке 350мл',
    description: 'Латте на альтернативном растительном молоке',
    price: 270,
    category: 'coffee',
    image: ''
  },
  {
    id: 'latte-lactose-free',
    name: 'Латте на безлактозном молоке 350мл',
    description: 'Латте на безлактозном молоке с нежной пенкой',
    price: 270,
    category: 'coffee',
    image: ''
  },
  {
    id: 'raf-250',
    name: 'Раф 250мл',
    description: 'Нежный сливочный раф-кофе',
    price: 320,
    category: 'coffee',
    image: ''
  },
  {
    id: 'raf-350',
    name: 'Раф 350мл',
    description: 'Нежный сливочный раф-кофе, большая порция',
    price: 350,
    category: 'coffee',
    image: ''
  },
  {
    id: 'filter-coffee',
    name: 'Фильтр-кофе 250мл',
    description: 'Кофе, заваренный методом фильтрации',
    price: 250,
    category: 'coffee',
    image: ''
  },
  {
    id: 'espresso',
    name: 'Эспрессо 40мл',
    description: 'Классический эспрессо из отборных зёрен',
    price: 200,
    category: 'coffee',
    image: ''
  },

  // ============ COLD COFFEE ============
  {
    id: 'ice-latte',
    name: 'Ice latte',
    description: 'Холодный латте со льдом',
    price: 320,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-orange',
    name: 'Бамбл апельсиновый',
    description: 'Кофейно-апельсиновый коктейль со льдом',
    price: 350,
    category: 'cold-coffee',
    image: '/data/menu/drinks/image copy 27.png'
  },
  {
    id: 'bumble-pomegranate',
    name: 'Бамбл гранатовый',
    description: 'Кофейно-гранатовый коктейль со льдом',
    price: 350,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-fresh',
    name: 'Бамбл на фреше',
    description: 'Бамбл на свежевыжатом апельсиновом соке',
    price: 440,
    category: 'cold-coffee',
    image: '/data/menu/drinks/image copy 30.png'
  },
  {
    id: 'cold-brew-pomegranate',
    name: 'Колд Брю Гранат',
    description: 'Холодный кофе с гранатовым соком',
    price: 280,
    category: 'author-coffee',
    image: ''
  },
  {
    id: 'cold-brew-blueberry',
    name: 'Колд Брю Черника',
    description: 'Холодный кофе с черничным соком',
    price: 280,
    category: 'author-coffee',
    image: ''
  },
  {
    id: 'cold-brew-citrus',
    name: 'Колд Брю Цитрус',
    description: 'Холодный кофе с цитрусовым соком',
    price: 350,
    category: 'author-coffee',
    image: ''
  },
  {
    id: 'espresso-tonic',
    name: 'Эспрессо Тоник',
    description: 'Освежающий эспрессо с тоником и льдом',
    price: 280,
    category: 'cold-coffee',
    image: '/data/menu/drinks/image copy 45.png'
  },
  {
    id: 'frappe',
    name: 'Фраппе',
    description: 'Ледяной кофейный напиток с молоком',
    price: 350,
    category: 'cold-coffee',
    image: '/data/menu/drinks/image copy 44.png'
  },

  // ============ AUTHOR COFFEE ============
  {
    id: 'raf-raspberry',
    name: 'Малиновый раф',
    description: 'Раф с нежным ягодным вкусом малины',
    price: 390,
    category: 'author-coffee',
    image: '/data/menu/drinks/image copy 46.png'
  },
  {
    id: 'raf-mango',
    name: 'Раф «Манго»',
    description: 'Раф с тропическим вкусом манго',
    price: 420,
    category: 'author-coffee',
    image: '/data/menu/drinks/IMG_2521.JPG'
  },
  {
    id: 'raf-urbech',
    name: 'Раф «Урбеч»',
    description: 'Раф с натуральным урбечем',
    price: 390,
    category: 'author-coffee',
    image: '/data/menu/drinks/IMG_2506.JPG'
  },

  // ============ LEMONADES & MOJITO ============
  {
    id: 'lemonade-cranberry-cherry',
    name: 'Клюква-вишня',
    description: 'Ягодный лимонад с клюквой и вишней',
    price: 320,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/IMG_2528.JPG'
  },
  {
    id: 'lemonade-mango-passion',
    name: 'Лимонад Манго-Маракуйя',
    description: 'Авторский лимонад с манго и маракуйей',
    price: 310,
    category: 'lemonades-mojito',
    image: ''
  },
  {
    id: 'mojito-lime',
    name: 'Мохито Лайм',
    description: 'Классический безалкогольный мохито с мятой и лаймом',
    price: 330,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/image copy 57.png'
  },
  {
    id: 'mojito-passion-fruit',
    name: 'Мохито Маракуйя',
    description: 'Освежающий мохито с экзотической маракуйей',
    price: 450,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/IMG_2518.JPG'
  },

  // ============ AUTHOR DRINKS ============
  {
    id: 'aperol-spritz',
    name: 'Апероль "Спритц"',
    description: 'Безалкогольный напиток в стиле Апероль Шприц',
    price: 350,
    category: 'author-drinks',
    image: ''
  },
  {
    id: 'paloma-grapefruit',
    name: 'Палома Грейпфрут-карамель',
    description: 'Авторский напиток с грейпфрутом и карамелью',
    price: 250,
    category: 'author-drinks',
    image: ''
  },
  {
    id: 'sorrel',
    name: 'Щавелевый',
    description: 'Авторский напиток на основе щавеля',
    price: 310,
    category: 'lemonades-mojito',
    image: ''
  },

  // ============ SMOOTHIES ============
  {
    id: 'smoothie-banana-oat',
    name: 'Орехово-банановый смузи с овсянкой',
    description: 'Питательный смузи с бананом, орехами и овсянкой',
    price: 350,
    category: 'smoothies',
    image: '/data/menu/drinks/IMG_2550.JPG'
  },
  {
    id: 'smoothie-green-brick',
    name: 'Смузи-завтрак "Грин Брик"',
    description: 'Зелёный детокс-смузи для бодрого дня',
    price: 380,
    category: 'smoothies',
    image: '/data/menu/drinks/IMG_2546.JPG'
  },

  // ============ FRESH JUICES ============
  {
    id: 'orange-fresh',
    name: 'Фреш Апельсиновый',
    description: 'Свежевыжатый апельсиновый сок',
    price: 330,
    category: 'fresh-juices',
    image: '/data/menu/drinks/image copy 33.png'
  },
  {
    id: 'grapefruit-fresh',
    name: 'Фреш Грейпфрутовый',
    description: 'Свежевыжатый грейпфрутовый сок',
    price: 430,
    category: 'fresh-juices',
    image: '/data/menu/drinks/IMG_2585.JPG'
  },

  // ============ MILKSHAKES ============
  {
    id: 'milkshake-vanilla-banana',
    name: 'Ванильно-банановый милкшейк',
    description: 'Сладкий молочный коктейль с ванилью и бананом',
    price: 280,
    category: 'milkshakes',
    image: ''
  },
  {
    id: 'milkshake-oreo',
    name: 'Милкшейк Oreo',
    description: 'Молочный коктейль с печеньем Oreo',
    price: 280,
    category: 'milkshakes',
    image: '/data/menu/drinks/image copy 63.png'
  },
  {
    id: 'milkshake-cheesecake',
    name: 'Чизкейк Милкшейк',
    description: 'Молочный коктейль со вкусом чизкейка',
    price: 400,
    category: 'milkshakes',
    image: '/data/menu/drinks/IMG_2559.JPG'
  },

  // ============ HOUSE TEAS ============
  {
    id: 'tea-ginger',
    name: 'Имбирный чай',
    description: 'Согревающий чай с цитрусами и имбирём',
    price: 380,
    category: 'house-teas',
    image: '/data/menu/drinks/image copy 29.png'
  },
  {
    id: 'tea-sea-buckthorn',
    name: 'Облепиховый чай',
    description: 'Витаминный чай с облепихой',
    price: 330,
    category: 'house-teas',
    image: '/data/menu/drinks/image copy 62.png'
  },
  {
    id: 'tea-mango-cherry',
    name: 'Чай Манго-вишня',
    description: 'Фруктовый чай с манго и вишней',
    price: 410,
    category: 'house-teas',
    image: '/data/menu/drinks/image copy 96.png'
  },
  {
    id: 'tea-berry',
    name: 'Ягодный чай',
    description: 'Ароматный чай с лесными ягодами',
    price: 350,
    category: 'house-teas',
    image: ''
  },

  // ============ LEAF TEAS ============
  {
    id: 'tea-green-jasmine',
    name: 'Зеленый чай с жасмином',
    description: 'Зелёный чай с цветками жасмина',
    price: 290,
    category: 'leaf-teas',
    image: ''
  },
  {
    id: 'tea-milk-oolong',
    name: 'Молочный улун',
    description: 'Китайский молочный улун с нежным сливочным вкусом',
    price: 310,
    category: 'leaf-teas',
    image: '/data/menu/drinks/IMG_2542.JPG'
  },
  {
    id: 'tea-sencha',
    name: 'Сенча',
    description: 'Японский зелёный чай сенча',
    price: 290,
    category: 'leaf-teas',
    image: ''
  },
  {
    id: 'tea-assam',
    name: 'Чай "Ассам"',
    description: 'Крепкий индийский чёрный чай',
    price: 390,
    category: 'leaf-teas',
    image: ''
  },
  {
    id: 'tea-black-thyme',
    name: 'Черный чай с чабрецом',
    description: 'Классический чёрный чай с чабрецом',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/IMG_2535.JPG'
  },
  {
    id: 'tea-earl-grey',
    name: 'Эрл Грей',
    description: 'Чёрный чай с бергамотом',
    price: 290,
    category: 'leaf-teas',
    image: ''
  },

  // ============ SOFT DRINKS ============
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    description: 'Классическая Coca-Cola',
    price: 230,
    category: 'soft-drinks',
    image: '/data/menu/drinks/image copy 55.png'
  },
  {
    id: 'coca-cola-zero',
    name: 'Coca-Cola Zero',
    description: 'Coca-Cola без сахара',
    price: 230,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-still',
    name: 'Вода Минеральная без газа',
    description: 'Минеральная вода без газа',
    price: 150,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-sparkling',
    name: 'Вода Минеральная с газом',
    description: 'Минеральная вода с газом',
    price: 150,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-orange',
    name: 'Сок Rich Апельсин',
    description: 'Сок Rich апельсиновый',
    price: 190,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-apple',
    name: 'Сок Rich Яблоко',
    description: 'Сок Rich яблочный',
    price: 190,
    category: 'soft-drinks',
    image: '/data/menu/drinks/image copy 31.png'
  }
];
