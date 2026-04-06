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
  priceLarge?: number;
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
  'rice-porridge',
  'egg-roll',
  'eastern-rice-chicken',
  'shawarma-beef',
  'melty-crep-chocolate',
  'chicken-cauliflower-nut',
];

export const menuItems: MenuItem[] = [
  // ============ MELTY DESSERTS ============
  {
    id: 'melty-knafe-cheesecake',
    name: 'Melty Knafi Чизкейк',
    description: 'Фирменный чизкейк с начинкой из фисташкового урбеча и хрустящего теста «Катаифи». Подаётся с шотом молочного бельгийского шоколада и дробленной фисташкой',
    price: 590,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Melty Knafi Чизкейк.webp'
  },
  {
    id: 'melty-melt',
    name: 'Melty melt',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти мелт.webp'
  },
  {
    id: 'melty-melt-pistachio',
    name: 'Melty melt фисташка',
    description: 'Фирменный десерт с шоу-подачей',
    price: 1230,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти мелт фисташка.webp'
  },
  {
    id: 'melty-cookies',
    name: 'Melty cookies',
    description: 'Фирменное карамельное печенье с жидкой сердцевиной. Подаётся с шариком ванильного мороженого',
    price: 630,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти кукис.webp'
  },
  {
    id: 'melty-pancake',
    name: 'Melty панкейк',
    description: 'Фирменные панкейки, подаются с карамельной пастой и дробленным печеньем',
    price: 700,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти панкейки.webp'
  },
  {
    id: 'melty-pancake-pistachio',
    name: 'Melty панкейк-фисташка',
    description: 'Фирменные панкейки, подаются с фисташковой пастой и дробленными фисташками',
    price: 640,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти панкейки.webp'
  },
  {
    id: 'melty-fondue',
    name: 'Melty фондю',
    description: 'Расплавленный горячий шоколад. Подаётся с миксом брауни, венских вафель, паффрисами и сезонными ягодами',
    price: 1300,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти фондю.webp'
  },
  {
    id: 'melty-burger',
    name: 'Melty бургер',
    description: 'Запечатанный бургер, начиненный шариком ванильного мороженого и хрустящим тестом «Катаифи». Подаётся на подушке из фисташкового урбеча, посыпанный дробленной фисташкой',
    price: 575,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти бургер.webp'
  },

  // ============ CHOCOLATE DESSERTS ============
  {
    id: 'puffies',
    name: 'Puffies',
    description: 'Мини-панкейки. Подаются с шотом молочного бельгийского шоколада',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Puffies.webp'
  },
  {
    id: 'brownie',
    name: 'Брауни',
    description: 'Шоколадный брауни, обильно политый молочным бельгийским шоколадом. Подаётся с шариком ванильного мороженого',
    price: 490,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Брауни.webp'
  },
  {
    id: 'san-sebastian',
    name: 'Сан-Себастьян',
    description: 'Нежный творожный чизкейк под карамелизированной корочкой. Подаётся с шотом молочного бельгийского шоколада',
    price: 450,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Сан-Себастьян.webp'
  },
  {
    id: 'san-sebastian-pistachio',
    name: 'Сан-Себастьян фисташковый',
    description: 'Нежный фисташковый чизкейк под карамелизированной корочкой. Подаётся с шотом молочного бельгийского шоколада',
    price: 490,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Сан-Себастьян фисташковый.webp'
  },
  {
    id: 'churros',
    name: 'Чуррос',
    description: 'Сладкие обжаренные вафельные палочки, политые тремя видами бельгийского шоколада',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Чуррос.webp'
  },
  {
    id: 'chocolate-fondant',
    name: 'Шоколадный Фондан',
    description: 'Шоколадный кекс с жидкой сердцевиной, политый молочным бельгийским шоколадом, подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 390,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Шоколадный Фондан.webp'
  },
  {
    id: 'eclair',
    name: 'Эклеры',
    description: 'Пирожные из заварного теста под карамелизированной корочкой, наполненные фирменным кремом «Патисьер». Подаются с сезонными ягодами',
    price: 460,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Эклеры.webp'
  },
  {
    id: 'pancakes-trouble-chocolate',
    name: 'Панкейки Trouble Chocolate',
    description: 'Пышные панкейки, обильно политые тремя видами бельгийского шоколада',
    price: 520,
    category: 'chocolate-desserts',
    image: ''
  },

  // ============ CHOCOLATE CUPS ============
  {
    id: 'dubai-strawberry',
    name: 'Дубайская клубника',
    description: 'Свежая клубника, хрустящее тесто «Катаифи», фисташковая паста, молочный бельгийский шоколад, выложенные послойно в стакане. Посыпается дробленной фисташкой',
    price: 850,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/Дубайская клубника.webp'
  },
  {
    id: 'strawberry-in-chocolate',
    name: 'Клубника в шоколаде',
    description: 'Свежая клубника в молочном бельгийском шоколаде, подаётся в стакане',
    price: 730,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/Клубника в шоколаде.webp'
  },
  {
    id: 'krispy-rise-chocolate',
    name: 'Krispy Rise в шоколаде',
    description: 'Хрустящий воздушный рис, обильно политый молочным бельгийским шоколадом',
    price: 350,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/Krispy Rise в шоколаде.webp'
  },

  // ============ CREPES ============
  {
    id: 'crep-three-chocolates',
    name: 'Креп Три шоколада',
    description: 'Французский блинчик, политый тремя видами бельгийского шоколада, подаётся с сезонными ягодами',
    price: 390,
    category: 'crepes',
    image: '/data/menu/desserts/Креп Три шоколада.webp'
  },
  {
    id: 'golden-crep',
    name: 'Golden Креп',
    description: 'Французский блинчик, политый молочно-карамельным бельгийским шоколадом',
    price: 550,
    category: 'crepes',
    image: '/data/menu/desserts/Golden Креп.webp'
  },
  {
    id: 'crep-dubai',
    name: 'Креп Дубай',
    description: 'Французский блинчик с начинкой из теста «Катаифи», политый фисташковым урбечом и молочным шоколадом',
    price: 590,
    category: 'crepes',
    image: '/data/menu/desserts/Креп Дубай.webp'
  },
  {
    id: 'fetuccini-crep',
    name: 'Фетучини-креп',
    description: 'Французский блинчик, разрезанный на тонкие полоски, напоминающие итальянскую пасту. Поливается молочным бельгийским шоколадом и подаётся с шариком ванильного мороженого и сезонными ягодами',
    price: 490,
    category: 'crepes',
    image: '/data/menu/desserts/Фетучини-креп.webp'
  },
  {
    id: 'melty-crep-pistachio',
    name: 'Melty креп фисташковый',
    description: 'Французский блинчик с фисташковым урбечом и молочным бельгийским шоколадом, посыпанный дробленной фисташкой',
    price: 590,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Melty креп фисташковый.webp'
  },
  {
    id: 'melty-crep-chocolate',
    name: 'Melty креп шоколадный',
    description: 'Французский блинчик с молочным бельгийским шоколадом, подаётся с клубникой и шариком шоколадного мороженого',
    price: 650,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Melty креп шоколадный.webp'
  },
  {
    id: 'brownie-roll',
    name: 'Брауни ролл',
    description: 'Шоколадный брауни, завёрнутый в тонкие блинчики. Поливаются тремя видами бельгийского шоколада',
    price: 490,
    category: 'crepes',
    image: '/data/menu/desserts/Брауни ролл.webp'
  },

  // ============ WAFFLES & CROISSANTS ============
  {
    id: 'waffles-three-chocolates',
    name: 'Вафля три шоколада',
    description: 'Сладкая вафля, политая тремя видами бельгийского шоколада',
    price: 430,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля три шоколада.webp'
  },
  {
    id: 'waffles-steak-gold',
    name: 'Вафля стейк Gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 470,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля стейк Gold.webp'
  },
  {
    id: 'waffle-gold',
    name: 'Вафля Gold',
    description: 'Сладкая вафля, политая молочно-карамельным бельгийским шоколадом',
    price: 490,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля Gold.webp'
  },
  {
    id: 'waffle-steak',
    name: 'Вафля Стейк',
    description: 'Сладкая вафля, политая молочным бельгийским шоколадом',
    price: 430,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля Стейк.webp'
  },
  {
    id: 'pistachio-waffle',
    name: 'Фисташковая вафля',
    description: 'Сладкие вафли, политые фисташковым урбечом',
    price: 540,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Фисташковая вафля.webp'
  },
  {
    id: 'new-york-roll',
    name: 'New-York ролл',
    description: 'Круассан-ролл с кремом «Патисьер», молочным бельгийским шоколадом и шариком мороженого',
    price: 490,
    category: 'waffles-croissants',
    image: ''
  },

  // ============ SAVORY WAFFLES ============
  {
    id: 'savory-waffle-avocado-crab',
    name: 'Вафля с авокадо и крабом',
    description: 'Соленая вафля с авокадо и крабом',
    price: 520,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля с авокадо и крабом.webp'
  },
  {
    id: 'savory-waffle-beef-coleslaw',
    name: 'Вафля с рван. говядиной и салатом Коу-слоу',
    description: 'Соленая вафля с рваной говядиной и салатом Коу-слоу',
    price: 490,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля с рван. говядиной и салатом Коу-слоу.webp'
  },
  {
    id: 'savory-waffle-salmon-poached-egg',
    name: 'Вафля с семгой и яйцом пашот',
    description: 'Соленая вафля с семгой и яйцом пашот',
    price: 590,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля с семгой и яйцом пашот.webp'
  },
  {
    id: 'savory-waffle-mousse-scramble',
    name: 'Вафля со сливоч. муссом и скремблом',
    description: 'Соленая вафля со сливочным муссом и скремблом',
    price: 320,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля со сливоч. муссом и скремблом.webp'
  },

  // ============ BREAKFASTS ============
  {
    id: 'melty-syrniki',
    name: 'Melty сырники с йогуртом и конфитюром из смородины',
    description: 'Нежные сырники с греческим йогуртом и конфитюром из смородины',
    price: 350,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Melty сырники с йогуртом и конфитюром из смородины.webp'
  },
  {
    id: 'english-breakfast',
    name: 'Английский завтрак',
    description: 'Глазунья из двух яиц, фермерские колбаски, копчёная индейка, фасоль в томатном соусе, обжаренный тостерный хлеб, свежие томаты, соус «Песто», шампиньоны',
    price: 650,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Английский завтрак.webp'
  },
  {
    id: 'dzhigit-breakfast',
    name: 'Завтрак джигита',
    description: 'Домашние яйца, приготовленные в домашней сметане, подаётся с двумя видами сыра, натуральным калмыцким чаем и хрустящей чиабаттой',
    price: 420,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Завтрак джигита.webp'
  },
  {
    id: 'spanish-omelette',
    name: 'Испанский омлет',
    description: 'Классический испанский омлет с начинкой',
    price: 290,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Испанский омлет.webp'
  },
  {
    id: 'coconut-granola',
    name: 'Кокосовая гранола с мацони и медом',
    description: 'Гранола собственного приготовления с добавлением орехов, мацони, мёда и сезонных ягод',
    price: 410,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Кокосовая гранола с мацони и медом.webp'
  },
  {
    id: 'crepe-raspberry',
    name: 'Креп с малиновым соусом и сметаной',
    description: 'Нежный креп с малиновым соусом и сметаной',
    price: 270,
    category: 'breakfasts',
    image: ''
  },
  {
    id: 'mega-oladush-shrimp',
    name: 'Мега оладушек с яйцом скрембл и креветками',
    description: 'Нежный оладушек с яйцом скрембл и тигровыми креветками',
    price: 550,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Мега оладушек с яйцом скрембл и креветками.webp'
  },
  {
    id: 'oatmeal-berries',
    name: 'Овсяная каша с ягодами',
    description: 'Овсяная каша с сезонными ягодами и орехом пекан',
    price: 270,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Овсяная каша с ягодами.webp'
  },
  {
    id: 'pp-dranik-salmon',
    name: 'ПП драник из кабачков с яйцом пашот и семгой собственного посола',
    description: 'Драники из кабачков, тар-тар из сёмги собственного посола, два яйца пашот и соус галандез',
    price: 650,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/ПП драник из кабачков с яйцом пашот и семгой собственного посола.webp'
  },
  {
    id: 'rice-porridge',
    name: 'Рисовая каша с грецкими орехами',
    description: 'Кремовая рисовая каша с грецкими орехами и мёдом',
    price: 290,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Рисовая каша с грецкими орехами.webp'
  },
  {
    id: 'melty-breakfast',
    name: 'Фирменный завтрак Мелти',
    description: 'Нежный сырный мусс, завёрнутый в яичный ролл, вяленые томаты, сметана, огурцы, хумус, фасоль, оливки гиганты, подаётся с хрустящей чиабаттой',
    price: 660,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Фирменный завтрак Melty.webp'
  },
  {
    id: 'shakshuka',
    name: 'Шакшука с яйцом пашот и зеленью',
    description: 'Турецкая яичница с яйцом пашот в фирменном томатном соусе. Подаётся с хрустящей чиабаттой',
    price: 380,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Шакшука с яйцом пашот и зеленью.webp'
  },
  {
    id: 'egg-roll',
    name: 'Эгг-ролл',
    description: 'Хрустящий яичный ролл с начинкой',
    price: 320,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Эгг-ролл.webp'
  },

  // ============ APPETIZERS (ЗАКУСКИ) ============
  {
    id: 'cream-hummus',
    name: 'Крем-хумус с хрустящим нутом',
    description: 'Нежное пюре из нута с кунжутной пастой тахини, оливковым маслом и специями',
    price: 290,
    category: 'other',
    image: '/data/menu/other/Крем-хумус с хрустящим нутом.webp'
  },
  {
    id: 'cheese-sticks-jam',
    name: 'Сырные палочки с конфитюром из смородины',
    description: 'Хрустящие сырные палочки с ягодным конфитюром из смородины',
    price: 370,
    category: 'other',
    image: '/data/menu/other/Сырные палочки с конфитюром из смородины.webp'
  },
  {
    id: 'sandwich-turkey',
    name: 'Сэндвич с индейкой',
    description: 'Обжаренный тостерный хлеб, горчичный соус, копчёная индейка, лист салата, розовые помидоры, сыр «Чеддер», соус «Песто»',
    price: 410,
    category: 'other',
    image: '/data/menu/other/Сэндвич с индейкой.webp'
  },
  {
    id: 'sandwich-caesar-chicken',
    name: 'Сэндвич Цезарь с цыпленком',
    description: 'Обжаренный тостерный хлеб, соус «Цезарь», лист салата, филе цыплёнка, розовые томаты, сыр «Чеддер»',
    price: 390,
    category: 'other',
    image: '/data/menu/other/Сэндвич Цезарь с цыпленком.webp'
  },

  // ============ SALADS ============
  {
    id: 'green-pp-turkey',
    name: 'Зеленый ПП с индейкой брискет',
    description: 'Индейка брискет собственного копчения, свежая руккола, спелый авокадо, соус ПП на основе трюфельного масла, киноа и слайса огурца',
    price: 590,
    category: 'salads',
    image: '/data/menu/salads/Зеленый ПП с индейкой брискет.webp'
  },
  {
    id: 'crispy-eggplant',
    name: 'Хрустящие баклажаны с сырным кремом',
    description: 'Микс салата, хрустящие баклажаны в паназиатском соусе, свежие томаты, сырный мусс, кунжут, кинза',
    price: 390,
    category: 'salads',
    image: '/data/menu/salads/Хрустящие баклажаны с сырным кремом.webp'
  },
  {
    id: 'caesar-shrimp',
    name: 'Цезарь с креветками',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренные тигровые креветки, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 590,
    category: 'salads',
    image: '/data/menu/salads/Цезарь с креветками.webp'
  },
  {
    id: 'caesar-chicken',
    name: 'Цезарь с цыпленком',
    description: 'Листья айсберга, заправленные фирменным соусом «Цезарь», обжаренное филе цыплёнка, сухари собственного приготовления, помидоры Черри, перепелиное яйцо. Посыпается снегом пармезан',
    price: 450,
    category: 'salads',
    image: '/data/menu/salads/Цезарь с цыпленком.webp'
  },
  {
    id: 'greek-salad',
    name: 'Греческий с муссом из брынзы',
    description: 'Огурцы, розовые томаты, маслины, болгарский перец, красный лук, мусс из фермерской брынзы, заправляется оливковым маслом',
    price: 420,
    category: 'salads',
    image: '/data/menu/salads/Греческий с муссом из брынзы.webp'
  },
  {
    id: 'bowl-chicken',
    name: 'Боул с курицей',
    description: 'Филе цыплёнка, киноа, яйцо пашот, кукуруза, авокадо, розовые томаты, соус кунжутный',
    price: 520,
    category: 'salads',
    image: '/data/menu/salads/Боул с курицей.webp'
  },

  // ============ SOUPS ============
  {
    id: 'tom-yam-seafood',
    name: 'Том-ям с морепродуктами',
    description: 'Суп том-ям с добавлением креветок, кальмаров и сёмги. Подаётся с рисом басматти',
    price: 690,
    category: 'soups',
    image: '/data/menu/soups/Том-ям с морепродуктами.webp'
  },
  {
    id: 'lentil-soup-turkey',
    name: 'Чечевичный суп с брискетом из индейки',
    description: 'Суп из красной чечевицы на сливочной основе с добавлением индейки брискет. Подаётся с сухарями',
    price: 390,
    category: 'soups',
    image: '/data/menu/soups/Чечевичный суп с брискетом из индейки.webp'
  },
  {
    id: 'chicken-ryaba-soup',
    name: 'Курочка Ряба с яичной лапшой',
    description: 'Куриный суп с яичной лапшой',
    price: 260,
    category: 'soups',
    image: '/data/menu/soups/Курочка Ряба с яичной лапшой.webp'
  },

  // ============ MAIN DISHES (Рыба, Птица, Мясо) ============
  {
    id: 'eastern-rice-chicken',
    name: 'Восточный рис с курицей',
    description: 'Восточный рис с курицей',
    price: 390,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Восточный рис с курицей.webp'
  },
  {
    id: 'eastern-rice-beef',
    name: 'Восточный рис с рван.говядиной',
    description: 'Восточный рис с рваной говядиной',
    price: 520,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Восточный рис с рван.говядиной.webp'
  },
  {
    id: 'salmon-orzo-kataifi',
    name: 'Семга с пастой орзо и рулетом из катаифи',
    description: 'Семга с пастой орзо и рулетом из катаифи',
    price: 970,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Семга с пастой орзо и рулетом из катаифи.webp'
  },
  {
    id: 'shawarma-chicken',
    name: 'Шаурма ливанская с курицей',
    description: 'Шаурма ливанская с курицей',
    price: 390,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Шаурма ливанская с курицей.webp'
  },
  {
    id: 'shawarma-beef',
    name: 'Шаурма ливанская с рван.говядиной',
    description: 'Шаурма ливанская с рваной говядиной',
    price: 470,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Шаурма ливанская с рван.говядиной.webp'
  },
  {
    id: 'fetuccini-shrimp-tom-yam',
    name: 'Фетучини с креветками в соусе Том-ям',
    description: 'Паста фетучини с тигровыми креветками в пикантном соусе том-ям',
    price: 660,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Фетучини с креветками в соусе Том-ям.webp'
  },
  {
    id: 'chicken-cutlets-potato',
    name: 'Куриные котлетки с картофельным кремом',
    description: 'Домашние куриные котлетки с нежным картофельным кремом',
    price: 520,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Куриные котлетки с картофельным кремом.webp'
  },
  {
    id: 'fetuccini-chicken-mushrooms',
    name: 'Фетучини с куриным филе и грибами',
    description: 'Паста фетучини с нежным куриным филе и грибами в сливочном соусе',
    price: 490,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Фетучини с куриным филе и грибами.webp'
  },
  {
    id: 'chicken-cauliflower-nut',
    name: 'Филе цыпленка с цветной капустой в ореховом соусе',
    description: 'Филе цыплёнка с добавлением кунжутно-орехового соуса и цветной капустой',
    price: 550,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Филе цыпленка с цветной капустой в ореховом соусе.webp'
  },
  {
    id: 'zharkoe-chicken',
    name: 'Жаркое с куриным филе',
    description: 'Обжаренное куриное филе с болгарским перцем, грибами и картофелем в сливочном соусе',
    price: 490,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Жаркое с куриным филе.webp'
  },
  {
    id: 'zharkoe-hunter',
    name: 'Жаркое по-охотничьи',
    description: 'Обжаренное копчёное мясо с болгарским перцем и картофелем в сливочном соусе',
    price: 620,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Жаркое по-охотничьи.webp'
  },
  {
    id: 'smoked-lyagur-polenta',
    name: 'Копченый лягур с полентой и сырным муссом',
    description: 'Копчёное мясо с кукурузной полентой и сливочно-сырным соусом',
    price: 750,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Копченый лягур с полентой и сырным муссом.webp'
  },

  // ============ SIDES (ГАРНИРЫ) ============
  {
    id: 'wild-rice-truffle',
    name: 'Дикий рис с маслом белого трюфеля и зеленью',
    description: 'Ароматный дикий рис с маслом белого трюфеля и свежей зеленью',
    price: 280,
    category: 'sides',
    image: '/data/menu/sides/Дикий рис с маслом белого трюфеля и зеленью.webp'
  },
  {
    id: 'french-fries',
    name: 'Картофель фри',
    description: 'Хрустящий золотистый картофель фри',
    price: 180,
    category: 'sides',
    image: '/data/menu/sides/Картофель фри.webp'
  },
  {
    id: 'dippers-parmesan',
    name: 'Дипперы со снегом пармезан',
    description: 'Картофельные дипперы, посыпанные снегом пармезана',
    price: 250,
    category: 'sides',
    image: '/data/menu/sides/Дипперы со снегом пармезан.webp'
  },
  {
    id: 'mashed-potato',
    name: 'Картофельное пюре из детства',
    description: 'Нежное домашнее картофельное пюре по бабушкиному рецепту',
    price: 180,
    category: 'sides',
    image: '/data/menu/sides/Картофельное пюре из детства.webp'
  },
  {
    id: 'cheese-sticks',
    name: 'Сырные палочки',
    description: 'Хрустящие сырные палочки с соусом',
    price: 370,
    category: 'sides',
    image: '/data/menu/sides/Сырные палочки.webp'
  },

  // ============ CLASSIC COFFEE ============
  {
    id: 'flat-white',
    name: 'FLAT WHITE 220мл',
    description: 'Классический флэт уайт с плотной бархатистой микропенкой',
    price: 240,
    category: 'coffee',
    image: '/data/menu/drinks/FLAT WHITE 220мл.webp'
  },
  {
    id: 'americano',
    name: 'Американо 170мл',
    description: 'Классический американо из отборных зёрен',
    price: 190,
    category: 'coffee',
    image: '/data/menu/drinks/Американо 170мл.webp'
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад 250/350мл',
    description: 'Горячий шоколад из натурального бельгийского шоколада',
    price: 250,
    priceLarge: 350,
    category: 'coffee',
    image: '/data/menu/drinks/Горячий шоколад 250мл.webp'
  },
  {
    id: 'kakao',
    name: 'Какао 250/350мл',
    description: 'Горячий какао из бельгийского шоколада',
    price: 250,
    priceLarge: 350,
    category: 'coffee',
    image: '/data/menu/drinks/Какао.webp'
  },
  {
    id: 'cappuccino',
    name: 'Капучино 250/350мл',
    description: 'Классический капучино с нежной молочной пенкой',
    price: 220,
    priceLarge: 240,
    category: 'coffee',
    image: '/data/menu/drinks/Капучино 350мл.webp'
  },
  {
    id: 'latte-350',
    name: 'Латте 350мл',
    description: 'Нежный латте с бархатистой молочной пенкой',
    price: 240,
    category: 'coffee',
    image: ''
  },
  {
    id: 'raf',
    name: 'Раф 250/350мл',
    description: 'Нежный сливочный раф-кофе',
    price: 250,
    priceLarge: 300,
    category: 'coffee',
    image: '/data/menu/drinks/Раф.webp'
  },
  {
    id: 'filter-coffee',
    name: 'Фильтр-кофе 250мл',
    description: 'Кофе, заваренный методом фильтрации',
    price: 230,
    category: 'coffee',
    image: '/data/menu/drinks/Фильтр-кофе.webp'
  },
  {
    id: 'espresso',
    name: 'Эспрессо 40мл',
    description: 'Классический эспрессо из отборных зёрен',
    price: 190,
    category: 'coffee',
    image: '/data/menu/drinks/Эспрессо.webp'
  },

  // ============ COLD COFFEE ============
  {
    id: 'ice-latte',
    name: 'Ice latte',
    description: 'Холодный латте со льдом',
    price: 250,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-orange',
    name: 'Бамбл апельсиновый',
    description: 'Кофейно-апельсиновый коктейль со льдом',
    price: 270,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Бамбл апельсиновый.webp'
  },
  {
    id: 'bumble-pomegranate',
    name: 'Бамбл гранатовый',
    description: 'Кофейно-гранатовый коктейль со льдом',
    price: 270,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-fresh',
    name: 'Бамбл на фреше',
    description: 'Бамбл на свежевыжатом апельсиновом соке',
    price: 390,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Бамбл на фреше.webp'
  },
  {
    id: 'cold-brew-pomegranate',
    name: 'Колд Брю Гранат',
    description: 'Холодный кофе с гранатовым соком',
    price: 270,
    category: 'author-coffee',
    image: '/data/menu/drinks/Колд Брю Гранат.webp'
  },
  {
    id: 'cold-brew-blueberry',
    name: 'Колд Брю Черника',
    description: 'Холодный кофе с черничным соком',
    price: 270,
    category: 'author-coffee',
    image: '/data/menu/drinks/Колд Брю Черника.webp'
  },
  {
    id: 'cold-brew-citrus',
    name: 'Колд Брю Цитрус',
    description: 'Холодный кофе с цитрусовым соком',
    price: 270,
    category: 'author-coffee',
    image: ''
  },
  {
    id: 'espresso-tonic',
    name: 'Эспрессо Тоник',
    description: 'Освежающий эспрессо с тоником и льдом',
    price: 260,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Эспрессо Тоник.webp'
  },
  {
    id: 'frappe',
    name: 'Фраппе',
    description: 'Ледяной кофейный напиток с молоком',
    price: 290,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Фраппе.webp'
  },

  // ============ AUTHOR COFFEE ============
  {
    id: 'raf-raspberry',
    name: 'Малиновый раф',
    description: 'Раф с нежным ягодным вкусом малины',
    price: 360,
    category: 'author-coffee',
    image: '/data/menu/drinks/Малиновый раф.webp'
  },
  {
    id: 'raf-mango',
    name: 'Раф «Манго»',
    description: 'Раф с тропическим вкусом манго',
    price: 340,
    category: 'author-coffee',
    image: '/data/menu/drinks/Раф Манго.webp'
  },
  {
    id: 'raf-urbech',
    name: 'Раф «Урбеч»',
    description: 'Раф с натуральным урбечем',
    price: 320,
    category: 'author-coffee',
    image: '/data/menu/drinks/Раф Урбеч.webp'
  },

  // ============ LEMONADES & MOJITO ============
  {
    id: 'lemonade-cranberry-cherry',
    name: 'Клюква-вишня',
    description: 'Ягодный лимонад с клюквой и вишней',
    price: 260,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Клюква-вишня.webp'
  },
  {
    id: 'lemonade-mango-passion',
    name: 'Лимонад Манго-Маракуйя',
    description: 'Авторский лимонад с манго и маракуйей',
    price: 250,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Лимонад Манго-Маракуйя.webp'
  },
  {
    id: 'mojito-lime',
    name: 'Мохито Лайм',
    description: 'Классический безалкогольный мохито с мятой и лаймом',
    price: 270,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Мохито Лайм.webp'
  },
  {
    id: 'mojito-passion-fruit',
    name: 'Мохито Маракуйя',
    description: 'Освежающий мохито с экзотической маракуйей',
    price: 295,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Мохито Маракуйя.webp'
  },

  // ============ AUTHOR DRINKS ============
  {
    id: 'aperol-spritz',
    name: 'Апероль "Спритц"',
    description: 'Безалкогольный напиток в стиле Апероль Шприц',
    price: 250,
    category: 'author-drinks',
    image: ''
  },
  {
    id: 'paloma-grapefruit',
    name: 'Палома Грейпфрут-карамель',
    description: 'Авторский напиток с грейпфрутом и карамелью',
    price: 220,
    category: 'author-drinks',
    image: '/data/menu/drinks/Палома Грейпфрут-карамель.webp'
  },
  {
    id: 'sorrel',
    name: 'Щавелевый',
    description: 'Авторский напиток на основе щавеля',
    price: 280,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Щавелевый.webp'
  },

  // ============ SMOOTHIES ============
  {
    id: 'smoothie-banana-oat',
    name: 'Орехово-банановый смузи с овсянкой',
    description: 'Питательный смузи с бананом, орехами и овсянкой',
    price: 280,
    category: 'smoothies',
    image: '/data/menu/drinks/Орехово-банановый смузи с овсянкой.webp'
  },
  {
    id: 'smoothie-green-brick',
    name: 'Смузи-завтрак "Грин Брик"',
    description: 'Зелёный детокс-смузи для бодрого дня',
    price: 300,
    category: 'smoothies',
    image: '/data/menu/drinks/Смузи-завтрак Грин Брик.webp'
  },

  // ============ FRESH JUICES ============
  {
    id: 'orange-fresh',
    name: 'Фреш Апельсиновый',
    description: 'Свежевыжатый апельсиновый сок',
    price: 300,
    category: 'fresh-juices',
    image: '/data/menu/drinks/Фреш Апельсиновый.webp'
  },
  {
    id: 'grapefruit-fresh',
    name: 'Фреш Грейпфрутовый',
    description: 'Свежевыжатый грейпфрутовый сок',
    price: 370,
    category: 'fresh-juices',
    image: '/data/menu/drinks/Фреш Грейпфрутовый.webp'
  },

  // ============ MILKSHAKES ============
  {
    id: 'milkshake-vanilla-banana',
    name: 'Ванильно-банановый милкшейк',
    description: 'Сладкий молочный коктейль с ванилью и бананом',
    price: 250,
    category: 'milkshakes',
    image: '/data/menu/drinks/Ванильно-банановый милкшейк.webp'
  },
  {
    id: 'milkshake-oreo',
    name: 'Милкшейк Oreo',
    description: 'Молочный коктейль с печеньем Oreo',
    price: 250,
    category: 'milkshakes',
    image: '/data/menu/drinks/Милкшейк Oreo.webp'
  },
  {
    id: 'milkshake-cheesecake',
    name: 'Чизкейк Милкшейк',
    description: 'Молочный коктейль со вкусом чизкейка',
    price: 350,
    category: 'milkshakes',
    image: '/data/menu/drinks/Чизкейк Милкшейк.webp'
  },

  // ============ HOUSE TEAS ============
  {
    id: 'tea-ginger',
    name: 'Имбирный чай',
    description: 'Согревающий чай с цитрусами и имбирём',
    price: 350,
    category: 'house-teas',
    image: '/data/menu/drinks/Имбирный чай.webp'
  },
  {
    id: 'tea-sea-buckthorn',
    name: 'Облепиховый чай',
    description: 'Витаминный чай с облепихой',
    price: 300,
    category: 'house-teas',
    image: '/data/menu/drinks/Облепиховый чай.webp'
  },
  {
    id: 'tea-mango-cherry',
    name: 'Чай Манго-вишня',
    description: 'Фруктовый чай с манго и вишней',
    price: 350,
    category: 'house-teas',
    image: '/data/menu/drinks/Чай Манго-вишня.webp'
  },
  {
    id: 'tea-berry',
    name: 'Ягодный чай',
    description: 'Ароматный чай с лесными ягодами',
    price: 320,
    category: 'house-teas',
    image: '/data/menu/drinks/Ягодный чай.webp'
  },

  // ============ LEAF TEAS ============
  {
    id: 'tea-green-jasmine',
    name: 'Зеленый чай с жасмином',
    description: 'Зелёный чай с цветками жасмина',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Зеленый чай с жасмином.webp'
  },
  {
    id: 'tea-milk-oolong',
    name: 'Молочный улун',
    description: 'Китайский молочный улун с нежным сливочным вкусом',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Молочный улун.webp'
  },
  {
    id: 'tea-sencha',
    name: 'Сенча',
    description: 'Японский зелёный чай сенча',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Сенча.webp'
  },
  {
    id: 'tea-assam',
    name: 'Чай "Ассам"',
    description: 'Крепкий индийский чёрный чай',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Чай Ассам.webp'
  },
  {
    id: 'tea-black-thyme',
    name: 'Черный чай с чабрецом',
    description: 'Классический чёрный чай с чабрецом',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Черный чай с чабрецом.webp'
  },
  {
    id: 'tea-earl-grey',
    name: 'Эрл Грей',
    description: 'Чёрный чай с бергамотом',
    price: 270,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Эрл Грей.webp'
  },

  // ============ SOFT DRINKS ============
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    description: 'Классическая Coca-Cola',
    price: 200,
    category: 'soft-drinks',
    image: '/data/menu/drinks/Coca-Cola.webp'
  },
  {
    id: 'coca-cola-zero',
    name: 'Coca-Cola Zero',
    description: 'Coca-Cola без сахара',
    price: 200,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-still',
    name: 'Вода Минеральная без газа',
    description: 'Минеральная вода без газа',
    price: 140,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-sparkling',
    name: 'Вода Минеральная с газом',
    description: 'Минеральная вода с газом',
    price: 140,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-orange',
    name: 'Сок Rich Апельсин',
    description: 'Сок Rich апельсиновый',
    price: 170,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-apple',
    name: 'Сок Rich Яблоко',
    description: 'Сок Rich яблочный',
    price: 170,
    category: 'soft-drinks',
    image: '/data/menu/drinks/Сок Rich Яблоко.webp'
  }
];
