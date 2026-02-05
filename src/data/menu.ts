export type MenuCategory =
  | 'coffee'
  | 'author-coffee'
  | 'lemonades'
  | 'melty-desserts'
  | 'chocolate-desserts'
  | 'waffles-croissants'
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
  'melty-desserts': 'Melty Десерты',
  'chocolate-desserts': 'Шоколадные десерты',
  'crepes': 'Крепы',
  'waffles-croissants': 'Вафли и Круассаны',
  'breakfasts': 'Завтраки',
  'salads': 'Салаты',
  'soups': 'Супы',
  'main-dishes': 'Основные блюда',
  'sides': 'Гарниры',
  'coffee': 'Классический кофе',
  'author-coffee': 'Авторский кофе',
  'lemonades': 'Напитки',
  'other': 'Закуски'
};

export const menuItems: MenuItem[] = [
  // ============ MELTY DESSERTS ============
  {
    id: 'melty-knafe-cheesecake',
    name: 'Melty knafe чизкейк',
    description: 'Фирменный чизкейк с начинкой из фисташкового урбеча и хрустящего теста «Катаифи». Подаётся с шотом молочного бельгийского шоколада и дробленной фисташкой',
    price: 640,
    category: 'melty-desserts',
    image: '/data/menu/image.png'
  },
  {
    id: 'melty-melt',
    name: 'Melty melt',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/image copy.png'
  },
  {
    id: 'melty-melt-pistachio',
    name: 'Melty melt фисташка',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/image copy 2.png'
  },
  {
    id: 'melty-cookies',
    name: 'Melty cookies',
    description: 'Фирменное карамельное печенье с жидкой сердцевиной. Подаётся с шариком ванильного мороженого',
    price: 630,
    category: 'melty-desserts',
    image: '/data/menu/image copy 3.png'
  },
  {
    id: 'melty-pancake',
    name: 'Melty панкейк',
    description: 'Фирменные панкейки, подаются с карамельной пастой и дробленным печеньем',
    price: 700,
    category: 'melty-desserts',
    image: '/data/menu/image copy 4.png'
  },
  {
    id: 'melty-pancake-pistachio',
    name: 'Melty панкейк-фисташка',
    description: 'Фирменные панкейки, подаются с фисташковой пастой и дробленными фисташками',
    price: 640,
    category: 'melty-desserts',
    image: '/data/menu/image copy 5.png'
  },
  {
    id: 'melty-fondue',
    name: 'Melty фондю',
    description: 'Расплавленный горячий шоколад. Подаётся с миксом брауни, венских вафель, паффрисами и сезонными ягодами',
    price: 1300,
    category: 'melty-desserts',
    image: '/data/menu/image copy 6.png'
  },
  {
    id: 'melty-burger',
    name: 'Melty бургер',
    description: 'Запечатанный бургер, начиненный шариком ванильного мороженого и хрустящим тестом «Катаифи». Подаётся на подушке из фисташкового урбеча, посыпанный дробленной фисташкой',
    price: 575,
    category: 'melty-desserts',
    image: '/data/menu/image copy 7.png'
  },
  {
    id: 'brownie-roll',
    name: 'Брауни ролл',
    description: 'Шоколадный брауни, завёрнутый в тонкие блинчики. Поливаются тремя видами бельгийского шоколада',
    price: 495,
    category: 'melty-desserts',
    image: '/data/menu/image copy 8.png'
  },

  // ============ CHOCOLATE DESSERTS ============
  {
    id: 'dubai-strawberry',
    name: 'Дубайская клубника',
    description: 'Свежая клубника, хрустящее тесто «Катаифи», фисташковая паста, молочный бельгийский шоколад, выложенные послойно в стакане. Посыпается дробленной фисташкой',
    price: 850,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 9.png'
  },
  {
    id: 'strawberry-chocolate',
    name: 'Клубника в шоколаде',
    description: 'Свежая клубника в молочном бельгийском шоколаде',
    price: 730,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 10.png'
  },
  {
    id: 'krispy-rise-chocolate',
    name: 'Krispy Rise в шоколаде',
    description: 'Хрустящий воздушный рис, обильно политый молочным бельгийским шоколадом',
    price: 350,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 11.png'
  },
  {
    id: 'puffies',
    name: 'Puffies',
    description: 'Мини-панкейки. Подаются с шотом молочного бельгийского шоколада',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 12.png'
  },
  {
    id: 'brownie',
    name: 'Брауни',
    description: 'Шоколадный брауни, обильно политый молочным бельгийским шоколадом. Подаётся с шариком ванильного мороженого',
    price: 460,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 13.png'
  },
  {
    id: 'san-sebastian',
    name: 'Сан-Себастьян',
    description: 'Нежный творожный чизкейк под карамелизированной корочкой. Подаётся с шотом молочного бельгийского шоколада',
    price: 450,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 14.png'
  },
  {
    id: 'churros',
    name: 'Чуррос',
    description: 'Сладкие обжаренные вафельные палочки, политые тремя видами бельгийского шоколада',
    price: 395,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 15.png'
  },
  {
    id: 'chocolate-fondant',
    name: 'Шоколадный фондан',
    description: 'Шоколадный кекс с жидкой сердцевиной, политый молочным бельгийским шоколадом, подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 410,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 16.png'
  },
  {
    id: 'eclair',
    name: 'Эклеры',
    description: 'Пирожные из заварного теста под карамелизированной корочкой, наполненные фирменным кремом «Патисьер». Подаются с сезонными ягодами',
    price: 440,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 17.png'
  },
  {
    id: 'pancakes-trouble-chocolate',
    name: 'Панкейки Trouble Chocolate',
    description: 'Пышные панкейки, обильно политые тремя видами бельгийского шоколада',
    price: 495,
    category: 'chocolate-desserts',
    image: '/data/menu/image copy 18.png'
  },

  // ============ CREPES ============
  {
    id: 'crep-classic',
    name: 'Креп',
    description: 'Французский блинчик, политый тремя видами бельгийского шоколада, подаётся с сезонными ягодами',
    price: 390,
    category: 'crepes',
    image: '/data/menu/image copy 19.png'
  },
  {
    id: 'crep-golden',
    name: 'Golden креп',
    description: 'Французский блинчик, политый молочно-карамельным шоколадом',
    price: 490,
    category: 'crepes',
    image: '/data/menu/image copy 20.png'
  },
  {
    id: 'crep-dubai',
    name: 'Креп Дубай',
    description: 'Французский блинчик с начинкой из теста «Катаифи», политый фисташковым урбечом и молочным шоколадом',
    price: 585,
    category: 'crepes',
    image: '/data/menu/image copy 21.png'
  },
  {
    id: 'fetuccini-crep',
    name: 'Фетучини креп',
    description: 'Французский блинчик, разрезанный на тонкие полоски, напоминающие итальянскую пасту. Поливается молочным бельгийским шоколадом и подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 425,
    category: 'crepes',
    image: '/data/menu/image copy 22.png'
  },

  // ============ WAFFLES & CROISSANTS ============
  {
    id: 'waffles-three-chocolates',
    name: 'Вафля три шоколада',
    description: 'Сладкая вафля, политая тремя видами бельгийского шоколада',
    price: 425,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 23.png'
  },
  {
    id: 'waffles-steak-gold',
    name: 'Вафля стейк gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 465,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 24.png'
  },
  {
    id: 'waffle-gold',
    name: 'Вафля gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 495,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 25.png'
  },
  {
    id: 'waffle-steak',
    name: 'Вафля стейк',
    description: 'Сладкая вафля, политая молочным бельгийским шоколадом',
    price: 430,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 26.png'
  },
  {
    id: 'pistachio-waffle',
    name: 'Фисташковая вафля',
    description: 'Сладкие вафли, политые фисташковым урбечом',
    price: 475,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 27.png'
  },
  {
    id: 'new-york-roll',
    name: 'New-York ролл',
    description: 'Круассан-ролл с кремом «Патисьер», молочным бельгийским шоколадом и шариком мороженого',
    price: 475,
    category: 'waffles-croissants',
    image: '/data/menu/image copy 28.png'
  },

  // ============ BREAKFASTS ============
  {
    id: 'melty-syrniki',
    name: 'Melty сырники с йогуртом и конфитюром из смородины',
    description: 'Нежные сырники с греческим йогуртом и конфитюром из смородины',
    price: 350,
    category: 'breakfasts',
    image: '/data/menu/image copy 29.png'
  },
  {
    id: 'rice-porridge',
    name: 'Рисовая каша с грецкими орехами',
    description: 'Кремовая рисовая каша с грецкими орехами и мёдом',
    price: 320,
    category: 'breakfasts',
    image: '/data/menu/image copy 30.png'
  },
  {
    id: 'oatmeal-berries',
    name: 'Овсяная каша с ягодами и орехом пекан',
    description: 'Овсяная каша с сезонными ягодами и орехом пекан',
    price: 295,
    category: 'breakfasts',
    image: '/data/menu/image copy 31.png'
  },
  {
    id: 'melty-breakfast',
    name: 'Фирменный завтрак «Melty»',
    description: 'Нежный сырный мусс, завёрнутый в яичный ролл, вяленые томаты, сметана, огурцы, хумус, фасоль, оливки гиганты, подаётся с хрустящей чиабаттой',
    price: 660,
    category: 'breakfasts',
    image: '/data/menu/image copy 32.png'
  },
  {
    id: 'pp-dranik-salmon',
    name: 'ПП драник из кабачков с яйцом пашот и сёмгой собственного посола',
    description: 'Драники из кабачков, тар-тар из сёмги собственного посола, два яйца пашот и соус галандез',
    price: 645,
    category: 'breakfasts',
    image: '/data/menu/image copy 33.png'
  },
  {
    id: 'mega-oladush-shrimp',
    name: 'Мега оладуш с яйцом скрембл и креветками',
    description: 'Нежный оладушек с яйцом скрембл и тигровыми креветками',
    price: 545,
    category: 'breakfasts',
    image: '/data/menu/image copy 34.png'
  },
  {
    id: 'coconut-granola',
    name: 'Кокосовая гранола с мацони и мёдом',
    description: 'Гранола собственного приготовления с добавлением орехов, мацони, мёда и сезонных ягод',
    price: 395,
    category: 'breakfasts',
    image: '/data/menu/image copy 35.png'
  },
  {
    id: 'english-breakfast',
    name: 'Английский завтрак',
    description: 'Глазунья из двух яиц, фермерские колбаски, копчёная индейка, фасоль в томатном соусе, обжаренный тостерный хлеб, свежие томаты, соус «Песто», шампиньоны',
    price: 650,
    category: 'breakfasts',
    image: '/data/menu/image copy 36.png'
  },
  {
    id: 'dzhigit-breakfast',
    name: 'Завтрак джигита',
    description: 'Домашние яйца, приготовленные в домашней сметане, подаётся с двумя видами сыра, натуральным калмыцким чаем и хрустящей чиабаттой',
    price: 420,
    category: 'breakfasts',
    image: '/data/menu/image copy 37.png'
  },
  {
    id: 'shakshuka',
    name: 'Шакшука с яйцом пашот и зеленью',
    description: 'Турецкая яичница с яйцом пашот в фирменном томатном соусе. Подаётся с хрустящей чиабаттой',
    price: 360,
    category: 'breakfasts',
    image: '/data/menu/image copy 38.png'
  },

  // ============ APPETIZERS (ЗАКУСКИ) ============
  {
    id: 'cream-hummus',
    name: 'Крем-хумус с хрустящим нутом',
    description: 'Нежное пюре из нута с кунжутной пастой тахини, оливковым маслом и специями',
    price: 320,
    category: 'other',
    image: '/data/menu/image copy 39.png'
  },
  {
    id: 'cheese-sticks-jam',
    name: 'Сырные палочки с конфитюром из смородины',
    description: 'Хрустящие сырные палочки с ягодным конфитюром из смородины',
    price: 365,
    category: 'other',
    image: '/data/menu/image copy 40.png'
  },
  {
    id: 'sandwich-turkey',
    name: 'Сэндвич с индейкой',
    description: 'Обжаренный тостерный хлеб, горчичный соус, копчёная индейка, лист салата, розовые помидоры, сыр «Чеддер», соус «Песто»',
    price: 395,
    category: 'other',
    image: '/data/menu/image copy 41.png'
  },
  {
    id: 'sandwich-caesar-chicken',
    name: 'Сэндвич «Цезарь» с цыплёнком',
    description: 'Обжаренный тостерный хлеб, соус «Цезарь», лист салата, филе цыплёнка, розовые томаты, сыр «Чеддер»',
    price: 390,
    category: 'other',
    image: '/data/menu/image copy 42.png'
  },

  // ============ SALADS ============
  {
    id: 'green-pp-turkey',
    name: 'Зелёный ПП с индейкой брискет',
    description: 'Индейка брискет собственного копчения, свежая руккола, спелый авокадо, соус ПП на основе трюфельного масла, киноа и слайса огурца',
    price: 595,
    category: 'salads',
    image: '/data/menu/image copy 43.png'
  },
  {
    id: 'crispy-eggplant',
    name: 'Хрустящие баклажаны с сырным кремом',
    description: 'Микс салата, хрустящие баклажаны в паназиатском соусе, свежие томаты, сырный мусс, кунжут, кинза',
    price: 395,
    category: 'salads',
    image: '/data/menu/image copy 44.png'
  },
  {
    id: 'caesar-shrimp',
    name: 'Цезарь с креветками',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренные тигровые креветки, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 590,
    category: 'salads',
    image: '/data/menu/image copy 45.png'
  },
  {
    id: 'caesar-chicken',
    name: 'Цезарь с цыплёнком',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренное филе цыплёнка, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 440,
    category: 'salads',
    image: '/data/menu/image copy 46.png'
  },
  {
    id: 'greek-salad',
    name: 'Греческий с муссом из брынзы',
    description: 'Огурцы, розовые томаты, маслины, болгарский перец, красный лук, мусс из фермерской брынзы, заправляется оливковым маслом',
    price: 420,
    category: 'salads',
    image: '/data/menu/image copy 47.png'
  },
  {
    id: 'burrata-tomatoes',
    name: 'Буррата со спелыми томатами и соусом песто',
    description: 'Нежная итальянская буррата с розовыми томатами и ароматным соусом песто',
    price: 655,
    category: 'salads',
    image: '/data/menu/image copy 48.png'
  },
  {
    id: 'bowl-chicken',
    name: 'Боул с курицей',
    description: 'Филе цыплёнка, киноа, яйцо пашот, кукуруза, авокадо, розовые томаты, соус кунжутный',
    price: 495,
    category: 'salads',
    image: '/data/menu/image copy 49.png'
  },

  // ============ SOUPS ============
  {
    id: 'tom-yam-seafood',
    name: 'Том-ям с морепродуктами',
    description: 'Суп том-ям с добавлением креветок, кальмаров и сёмги. Подаётся с рисом басматти',
    price: 690,
    category: 'soups',
    image: '/data/menu/image copy 50.png'
  },
  {
    id: 'lentil-soup-turkey',
    name: 'Чечевичный суп с индейкой брискет',
    description: 'Суп из красной чечевицы на сливочной основе с добавлением индейки брискет. Подаётся с сухарями',
    price: 385,
    category: 'soups',
    image: '/data/menu/image copy 51.png'
  },
  {
    id: 'chicken-ryaba-soup',
    name: 'Курочка «Ряба» с яичной лапшой',
    description: 'Куриный суп с яичной лапшой',
    price: 255,
    category: 'soups',
    image: '/data/menu/image copy 52.png'
  },

  // ============ MAIN DISHES ============
  {
    id: 'fetuccini-shrimp-tom-yam',
    name: 'Фетучини с креветками в соусе Том-ям',
    description: 'Паста фетучини с тигровыми креветками в пикантном соусе том-ям',
    price: 650,
    category: 'main-dishes',
    image: '/data/menu/image copy 53.png'
  },
  {
    id: 'chicken-cutlets-potato',
    name: 'Куриные котлетки с картофельным кремом',
    description: 'Домашние куриные котлетки с нежным картофельным кремом',
    price: 520,
    category: 'main-dishes',
    image: '/data/menu/image copy 54.png'
  },
  {
    id: 'fetuccini-chicken-mushrooms',
    name: 'Фетучини с куриным филе и грибами',
    description: 'Паста фетучини с нежным куриным филе и грибами в сливочном соусе',
    price: 480,
    category: 'main-dishes',
    image: '/data/menu/image copy 55.png'
  },
  {
    id: 'chicken-cauliflower-nut',
    name: 'Филе цыплёнка с цветной капустой в ореховом соусе',
    description: 'Филе цыплёнка с добавлением кунжутно-орехового соуса и цветной капустой',
    price: 550,
    category: 'main-dishes',
    image: '/data/menu/image copy 56.png'
  },
  {
    id: 'zharkoe-chicken',
    name: 'Жаркое с куриным филе',
    description: 'Обжаренное куриное филе с болгарским перцем, грибами и картофелем в сливочном соусе',
    price: 495,
    category: 'main-dishes',
    image: '/data/menu/image copy 57.png'
  },
  {
    id: 'zharkoe-hunter',
    name: 'Жаркое по-охотничьи',
    description: 'Обжаренное копчёное мясо с болгарским перцем и картофелем в сливочном соусе',
    price: 595,
    category: 'main-dishes',
    image: '/data/menu/image copy 58.png'
  },
  {
    id: 'smoked-lyagur-polenta',
    name: 'Копчёный лягур с полентой и сырным муссом',
    description: 'Копчёное мясо с кукурузной полентой и сливочно-сырным соусом',
    price: 750,
    category: 'main-dishes',
    image: '/data/menu/image copy 59.png'
  },

  // ============ SIDES (ГАРНИРЫ) ============
  {
    id: 'wild-rice-truffle',
    name: 'Дикий рис с маслом белого трюфеля и зеленью',
    description: 'Ароматный дикий рис с маслом белого трюфеля и свежей зеленью',
    price: 280,
    category: 'sides',
    image: '/data/menu/image copy 60.png'
  },
  {
    id: 'french-fries',
    name: 'Картофель фри',
    description: 'Хрустящий золотистый картофель фри',
    price: 180,
    category: 'sides',
    image: '/data/menu/image copy 61.png'
  },
  {
    id: 'dippers-parmesan',
    name: 'Дипперы со снегом пармезан',
    description: 'Картофельные дипперы, посыпанные снегом пармезана',
    price: 250,
    category: 'sides',
    image: '/data/menu/image copy 62.png'
  },
  {
    id: 'mashed-potato',
    name: 'Картофельное пюре из детства',
    description: 'Нежное домашнее картофельное пюре по бабушкиному рецепту',
    price: 180,
    category: 'sides',
    image: '/data/menu/image copy 63.png'
  },
  {
    id: 'cheese-sticks',
    name: 'Сырные палочки',
    description: 'Хрустящие сырные палочки с соусом',
    price: 365,
    category: 'sides',
    image: '/data/menu/image copy 64.png'
  },

  // ============ CLASSIC COFFEE ============
  {
    id: 'espresso',
    name: 'Эспрессо',
    description: 'Насыщенный эспрессо из отборных зёрен',
    price: 190,
    category: 'coffee',
    image: '/data/menu/image copy 65.png'
  },
  {
    id: 'americano',
    name: 'Американо',
    description: 'Классический американо из отборных зёрен',
    price: 190,
    category: 'coffee',
    image: '/data/menu/image copy 66.png'
  },
  {
    id: 'filter-coffee',
    name: 'Фильтр-кофе',
    description: 'Кофе, приготовленный методом фильтрации',
    price: 190,
    category: 'coffee',
    image: '/data/menu/image copy 67.png'
  },
  {
    id: 'cappuccino-250',
    name: 'Капучино 250 мл',
    description: 'Капучино с бархатистой молочной пенкой',
    price: 210,
    category: 'coffee',
    image: '/data/menu/image copy 68.png'
  },
  {
    id: 'cappuccino-350',
    name: 'Капучино 350 мл',
    description: 'Большой капучино с бархатистой молочной пенкой',
    price: 230,
    category: 'coffee',
    image: '/data/menu/image copy 69.png'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Крепкий кофе с бархатистым молоком',
    price: 220,
    category: 'coffee',
    image: '/data/menu/image copy 70.png'
  },
  {
    id: 'raf-classic-250',
    name: 'Раф 250 мл',
    description: 'Сливочный раф по классическому рецепту',
    price: 250,
    category: 'coffee',
    image: '/data/menu/image copy 71.png'
  },
  {
    id: 'raf-classic-350',
    name: 'Раф 350 мл',
    description: 'Большой сливочный раф по классическому рецепту',
    price: 295,
    category: 'coffee',
    image: '/data/menu/image copy 72.png'
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад',
    description: 'Насыщенный горячий шоколад из бельгийского шоколада',
    price: 250,
    category: 'coffee',
    image: '/data/menu/image copy 73.png'
  },
  {
    id: 'cocoa',
    name: 'Какао',
    description: 'Ароматное какао с молоком',
    price: 220,
    category: 'coffee',
    image: '/data/menu/image copy 74.png'
  },

  // ============ COLD COFFEE ============
  {
    id: 'bumble',
    name: 'Бамбл',
    description: 'Кофейно-апельсиновый или гранатовый коктейль со льдом',
    price: 270,
    category: 'author-coffee',
    image: '/data/menu/image copy 75.png'
  },
  {
    id: 'bumble-fresh',
    name: 'Бамбл на апельсиновом фреше',
    description: 'Бамбл на свежевыжатом апельсиновом соке',
    price: 360,
    category: 'author-coffee',
    image: '/data/menu/image copy 76.png'
  },
  {
    id: 'espresso-tonic',
    name: 'Эспрессо-тоник',
    description: 'Освежающий эспрессо с тоником и льдом',
    price: 260,
    category: 'author-coffee',
    image: '/data/menu/image copy 77.png'
  },
  {
    id: 'ice-latte',
    name: 'Ice Latte',
    description: 'Охлаждающий латте со льдом',
    price: 230,
    category: 'author-coffee',
    image: '/data/menu/image copy 78.png'
  },
  {
    id: 'frappe',
    name: 'Фраппе',
    description: 'Ледяной кофейный напиток с молоком',
    price: 290,
    category: 'author-coffee',
    image: '/data/menu/image copy 79.png'
  },

  // ============ AUTHOR COFFEE ============
  {
    id: 'raf-urbech',
    name: 'Раф «Урбеч»',
    description: 'Раф с натуральной ореховой пастой урбеч',
    price: 300,
    category: 'author-coffee',
    image: '/data/menu/image copy 80.png'
  },
  {
    id: 'raf-raspberry',
    name: 'Раф «Малина»',
    description: 'Раф с нежным ягодным вкусом малины',
    price: 260,
    category: 'author-coffee',
    image: '/data/menu/image copy 81.png'
  },
  {
    id: 'raf-mango',
    name: 'Раф «Манго»',
    description: 'Раф с тропическим вкусом манго',
    price: 320,
    category: 'author-coffee',
    image: '/data/menu/image copy 82.png'
  },
  {
    id: 'cold-brew-pomegranate',
    name: 'Колд Брю «Гранат»',
    description: 'Холодный кофе с гранатовым сиропом',
    price: 250,
    category: 'author-coffee',
    image: '/data/menu/image copy 83.png'
  },
  {
    id: 'cold-brew-blueberry',
    name: 'Колд Брю «Черника»',
    description: 'Холодный кофе с черничным сиропом',
    price: 260,
    category: 'author-coffee',
    image: '/data/menu/image copy 84.png'
  },
  {
    id: 'cold-brew-citrus',
    name: 'Колд Брю «Цитрус»',
    description: 'Холодный кофе с цитрусовым сиропом',
    price: 260,
    category: 'author-coffee',
    image: '/data/menu/image copy 85.png'
  },

  // ============ LEMONADES & MOJITO ============
  {
    id: 'mojito-classic',
    name: 'Мохито Классический',
    description: 'Классический безалкогольный мохито с мятой и лаймом',
    price: 270,
    category: 'lemonades',
    image: '/data/menu/image copy 86.png'
  },
  {
    id: 'mojito-passion-fruit',
    name: 'Мохито «Маракуйя»',
    description: 'Освежающий мохито с экзотической маракуйей',
    price: 295,
    category: 'lemonades',
    image: '/data/menu/image copy 87.png'
  },
  {
    id: 'sorrel-lemonade',
    name: 'Щавелевый',
    description: 'Оригинальный освежающий лимонад из щавеля',
    price: 280,
    category: 'lemonades',
    image: '/data/menu/image copy 88.png'
  },
  {
    id: 'mango-passion-fruit',
    name: 'Манго-Маракуйя',
    description: 'Тропический напиток с манго и маракуйей',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 89.png'
  },
  {
    id: 'lemonade-cranberry-cherry',
    name: 'Клюква-Вишня',
    description: 'Ягодный лимонад с клюквой и вишней',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 90.png'
  },
  {
    id: 'lemonade-blackberry-coconut',
    name: 'Ежевика-Кокос',
    description: 'Освежающий лимонад с ежевикой и кокосом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 91.png'
  },
  {
    id: 'lemonade-dona-rossa',
    name: 'Dona Rossa',
    description: 'Авторский лимонад с ягодами',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 92.png'
  },

  // ============ AUTHOR DRINKS ============
  {
    id: 'aperol-spritz',
    name: 'Апероль «Спритц»',
    description: 'Безалкогольный напиток в стиле Апероль Шприц',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 93.png'
  },
  {
    id: 'paloma-grapefruit',
    name: 'Палома «Грейпфрут-карамель»',
    description: 'Авторский напиток с грейпфрутом и карамелью',
    price: 220,
    category: 'lemonades',
    image: '/data/menu/image copy 94.png'
  },

  // ============ SMOOTHIES ============
  {
    id: 'smoothie-banana-oat',
    name: 'Орехово-банановый смузи с овсянкой',
    description: 'Питательный смузи с бананом, орехами и овсянкой',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 95.png'
  },
  {
    id: 'smoothie-green-break',
    name: 'Green Break',
    description: 'Зелёный детокс-смузи для бодрого дня',
    price: 300,
    category: 'lemonades',
    image: '/data/menu/image copy 96.png'
  },

  // ============ FRESH JUICES ============
  {
    id: 'orange-fresh',
    name: 'Апельсиновый фреш',
    description: 'Свежевыжатый апельсиновый сок',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 97.png'
  },
  {
    id: 'grapefruit-fresh',
    name: 'Грейпфрутовый фреш',
    description: 'Свежевыжатый грейпфрутовый сок',
    price: 370,
    category: 'lemonades',
    image: '/data/menu/image copy 98.png'
  },

  // ============ MILKSHAKES ============
  {
    id: 'milkshake-vanilla-banana',
    name: 'Ванильно-Банановый милкшейк',
    description: 'Сладкий молочный коктейль с ванилью и бананом',
    price: 250,
    category: 'lemonades',
    image: '/data/menu/image copy 16.png'
  },
  {
    id: 'milkshake-oreo',
    name: 'Милкшейк Oreo',
    description: 'Молочный коктейль с печеньем Oreo',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 17.png'
  },
  {
    id: 'milkshake-cheesecake',
    name: 'Милкшейк Чизкейк',
    description: 'Молочный коктейль со вкусом чизкейка',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 18.png'
  },

  // ============ HOUSE TEAS ============
  {
    id: 'tea-berry',
    name: 'Ягодный чай',
    description: 'Ароматный чай с лесными ягодами',
    price: 320,
    category: 'lemonades',
    image: '/data/menu/image copy 19.png'
  },
  {
    id: 'tea-sea-buckthorn',
    name: 'Облепиховый чай',
    description: 'Витаминный чай с облепихой',
    price: 300,
    category: 'lemonades',
    image: '/data/menu/image copy 20.png'
  },
  {
    id: 'tea-citrus-ginger',
    name: 'Цитрусово-имбирный чай',
    description: 'Согревающий чай с цитрусами и имбирём',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 21.png'
  },
  {
    id: 'tea-mango-cherry',
    name: 'Манго-Вишня чай',
    description: 'Фруктовый чай с манго и вишней',
    price: 350,
    category: 'lemonades',
    image: '/data/menu/image copy 22.png'
  },

  // ============ LEAF TEAS ============
  {
    id: 'tea-black',
    name: 'Чёрный чай',
    description: 'Классический чёрный чай',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 23.png'
  },
  {
    id: 'tea-black-thyme',
    name: 'Чёрный чай с чабрецом',
    description: 'Чёрный чай с ароматным чабрецом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 24.png'
  },
  {
    id: 'tea-earl-grey',
    name: 'Эрл Грей',
    description: 'Классический чай с бергамотом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 25.png'
  },
  {
    id: 'tea-sencha',
    name: 'Сенча',
    description: 'Японский зелёный чай сенча',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 26.png'
  },
  {
    id: 'tea-green-jasmine',
    name: 'Зелёный чай с жасмином',
    description: 'Зелёный чай с цветками жасмина',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 27.png'
  },
  {
    id: 'tea-milk-oolong',
    name: 'Молочный улун',
    description: 'Китайский молочный улун с нежным сливочным вкусом',
    price: 260,
    category: 'lemonades',
    image: '/data/menu/image copy 28.png'
  },

  // ============ SOFT DRINKS ============
  {
    id: 'coca-cola',
    name: 'Coca-Cola / Coca-Cola Zero',
    description: 'Coca-Cola или Coca-Cola Zero на выбор',
    price: 200,
    category: 'lemonades',
    image: '/data/menu/image copy 29.png'
  },
  {
    id: 'juice-rich',
    name: 'Сок Rich',
    description: 'Сок Rich апельсин или яблоко на выбор',
    price: 150,
    category: 'lemonades',
    image: '/data/menu/image copy 30.png'
  },
  {
    id: 'water-sparkling',
    name: 'Вода минеральная с газом',
    description: 'Минеральная вода с газом',
    price: 100,
    category: 'lemonades',
    image: '/data/menu/image copy 31.png'
  },
  {
    id: 'water-still',
    name: 'Вода минеральная без газа',
    description: 'Минеральная вода без газа',
    price: 100,
    category: 'lemonades',
    image: '/data/menu/image copy 32.png'
  }
];
