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
  images?: string[];
}

export const categoryLabels: Record<MenuCategory, string> = {
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
};

export const bestSellerIds: string[] = [
  'rice-porridge',
  'egg-roll',
  'eastern-rice-chicken',
  'shawarma-beef',
];

export const menuItems: MenuItem[] = [
  // ============ MELTY DESSERTS ============
  {
    id: 'melty-knafe-cheesecake',
    name: 'Melty Knafi Cheesecake',
    description: 'Signature cheesecake filled with pistachio urbech and crispy kataifi pastry. Served with a shot of milk Belgian chocolate and crushed pistachios',
    price: 610,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Melty Knafi Чизкейк.webp'
  },
  {
    id: 'melty-melt',
    name: 'Melty Melt',
    description: 'Signature dessert with a show-style presentation',
    price: 1290,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти мелт.webp',
    images: [
      '/data/menu/desserts/Мелти мелт 1.webp',
      '/data/menu/desserts/Мелти мелт 2.webp',
      '/data/menu/desserts/Мелти мелт 3.webp'
    ]
  },
  {
    id: 'melty-melt-pistachio',
    name: 'Melty Melt Pistachio',
    description: 'Signature dessert with a show-style presentation',
    price: 1290,
    category: 'melty-desserts',
    image: ''
  },
  {
    id: 'melty-cookies',
    name: 'Melty Cookies',
    description: 'Signature caramel cookies with a liquid center. Served with a scoop of vanilla ice cream',
    price: 650,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти кукис.webp',
    images: [
      '/data/menu/desserts/Мелти кукис 1.webp',
      '/data/menu/desserts/Мелти кукис 2.webp',
      '/data/menu/desserts/Мелти кукис 3.webp'
    ]
  },
  {
    id: 'melty-pancake',
    name: 'Melty Pancake',
    description: 'Signature pancakes served with caramel paste and crushed cookies',
    price: 720,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти панкейки.webp',
    images: [
      '/data/menu/desserts/Мелти панкейки 1.webp',
      '/data/menu/desserts/Мелти панкейки 2.webp',
      '/data/menu/desserts/Мелти панкейки 3.webp'
    ]
  },
  {
    id: 'melty-pancake-pistachio',
    name: 'Melty Pancake Pistachio',
    description: 'Signature pancakes served with pistachio paste and crushed pistachios',
    price: 660,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти панкейк-фисташка.webp'
  },
  {
    id: 'melty-fondue',
    name: 'Melty Fondue',
    description: 'Melted hot chocolate. Served with a mix of brownie, Viennese waffles, puffed rice and seasonal berries',
    price: 1400,
    category: 'melty-desserts',
    image: '/data/menu/desserts/Мелти фондю.webp',
    images: [
      '/data/menu/desserts/Мелти фондю 1.webp',
      '/data/menu/desserts/Мелти фондю 2.webp',
      '/data/menu/desserts/Мелти фондю 3.webp'
    ]
  },

  // ============ CHOCOLATE DESSERTS ============
  {
    id: 'puffies',
    name: 'Puffies',
    description: 'Mini pancakes served with a shot of milk Belgian chocolate',
    price: 410,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Puffies.webp'
  },
  {
    id: 'brownie',
    name: 'Brownie',
    description: 'Chocolate brownie generously drizzled with milk Belgian chocolate. Served with a scoop of vanilla ice cream',
    price: 510,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Брауни.webp'
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastian',
    description: 'Delicate curd cheesecake with a caramelized crust. Served with a shot of milk Belgian chocolate',
    price: 470,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Сан-Себастьян.webp'
  },
  {
    id: 'san-sebastian-pistachio',
    name: 'Pistachio San Sebastian',
    description: 'Delicate pistachio cheesecake with a caramelized crust. Served with a shot of milk Belgian chocolate',
    price: 490,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Сан-Себастьян фисташковый.webp'
  },
  {
    id: 'churros',
    name: 'Churros',
    description: 'Sweet fried waffle sticks drizzled with three types of Belgian chocolate',
    price: 410,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Чуррос.webp'
  },
  {
    id: 'chocolate-fondant',
    name: 'Chocolate Fondant',
    description: 'Chocolate cake with a liquid center, drizzled with milk Belgian chocolate, served with vanilla ice cream and seasonal berries',
    price: 410,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Шоколадный Фондан.webp'
  },
  {
    id: 'eclair',
    name: 'Eclairs',
    description: 'Choux pastry with a caramelized crust, filled with signature patissiere cream. Served with seasonal berries',
    price: 480,
    category: 'chocolate-desserts',
    image: '/data/menu/desserts/Эклеры.webp'
  },
  {
    id: 'pancakes-trouble-chocolate',
    name: 'Pancakes Trouble Chocolate',
    description: 'Fluffy pancakes generously drizzled with three types of Belgian chocolate',
    price: 540,
    category: 'chocolate-desserts',
    image: ''
  },

  // ============ CHOCOLATE CUPS ============
  {
    id: 'dubai-strawberry',
    name: 'Dubai Strawberry',
    description: 'Fresh strawberries, crispy kataifi pastry, pistachio paste, milk Belgian chocolate layered in a cup. Topped with crushed pistachios',
    price: 870,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/Дубайская клубника.webp'
  },
  {
    id: 'strawberry-in-chocolate',
    name: 'Strawberries in Chocolate',
    description: 'Fresh strawberries dipped in milk Belgian chocolate, served in a cup',
    price: 750,
    category: 'chocolate-cups',
    image: '/data/menu/desserts/Клубника в шоколаде.webp'
  },

  // ============ CREPES ============
  {
    id: 'crep-three-chocolates',
    name: 'Three Chocolates Crepe',
    description: 'French crepe drizzled with three types of Belgian chocolate, served with seasonal berries',
    price: 410,
    category: 'crepes',
    image: '/data/menu/desserts/Креп Три шоколада.webp'
  },
  {
    id: 'golden-crep',
    name: 'Golden Crepe',
    description: 'French crepe drizzled with milk-caramel Belgian chocolate',
    price: 570,
    category: 'crepes',
    image: '/data/menu/desserts/Golden Креп.webp'
  },
  {
    id: 'crep-dubai',
    name: 'Dubai Crepe',
    description: 'French crepe filled with kataifi pastry, drizzled with pistachio urbech and milk chocolate',
    price: 610,
    category: 'crepes',
    image: '/data/menu/desserts/Креп Дубай.webp'
  },
  {
    id: 'fetuccini-crep',
    name: 'Fettuccine Crepe',
    description: 'French crepe cut into thin strips resembling Italian pasta. Drizzled with milk Belgian chocolate, served with vanilla ice cream and seasonal berries',
    price: 510,
    category: 'crepes',
    image: '/data/menu/desserts/Фетучини-креп.webp'
  },
  {
    id: 'brownie-roll',
    name: 'Brownie Roll',
    description: 'Chocolate brownie wrapped in thin crepes. Drizzled with three types of Belgian chocolate',
    price: 510,
    category: 'crepes',
    image: '/data/menu/desserts/Брауни ролл.webp'
  },

  // ============ WAFFLES & CROISSANTS ============
  {
    id: 'waffles-three-chocolates',
    name: 'Three Chocolates Waffle',
    description: 'Sweet waffle drizzled with three types of Belgian chocolate',
    price: 450,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля три шоколада.webp'
  },
  {
    id: 'waffles-steak-gold',
    name: 'Waffle Steak Gold',
    description: 'Sweet waffle drizzled with milk-caramel Belgian chocolate',
    price: 490,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля стейк Gold.webp'
  },
  {
    id: 'waffle-gold',
    name: 'Waffle Gold',
    description: 'Sweet waffle drizzled with milk-caramel Belgian chocolate',
    price: 510,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля Gold.webp'
  },
  {
    id: 'waffle-steak',
    name: 'Waffle Steak',
    description: 'Sweet waffle drizzled with milk Belgian chocolate',
    price: 450,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Вафля Стейк.webp'
  },
  {
    id: 'pistachio-waffle',
    name: 'Pistachio Waffle',
    description: 'Sweet waffles drizzled with pistachio urbech',
    price: 560,
    category: 'waffles-croissants',
    image: '/data/menu/desserts/Фисташковая вафля.webp'
  },
  {
    id: 'new-york-roll',
    name: 'New York Roll',
    description: 'Croissant roll with patissiere cream, milk Belgian chocolate and a scoop of ice cream',
    price: 510,
    category: 'waffles-croissants',
    image: ''
  },

  // ============ SAVORY WAFFLES ============
  {
    id: 'savory-waffle-avocado-crab',
    name: 'Waffle with Avocado & Crab',
    description: 'Savory waffle with avocado and crab',
    price: 540,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля с авокадо и крабом.webp'
  },
  {
    id: 'savory-waffle-salmon-poached-egg',
    name: 'Waffle with Salmon & Poached Egg',
    description: 'Savory waffle with salmon and poached egg',
    price: 610,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля с семгой и яйцом пашот.webp'
  },
  {
    id: 'waffle-fitness',
    name: 'Fitness Waffle',
    description: 'Smoked chicken breast with salad mix in honey-mustard dressing',
    price: 490,
    category: 'savory-waffles',
    image: '/data/menu/savory-waffles/Вафля фитнесс.webp'
  },

  // ============ BREAKFASTS ============
  {
    id: 'melty-syrniki',
    name: 'Melty Syrniki with Yogurt & Currant Jam',
    description: 'Delicate cottage cheese pancakes with Greek yogurt and currant jam',
    price: 370,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Melty сырники с йогуртом и конфитюром из смородины.webp'
  },
  {
    id: 'english-breakfast',
    name: 'English Breakfast',
    description: 'Fried eggs, farm sausages, smoked turkey, beans in tomato sauce, toasted bread, fresh tomatoes, pesto sauce, mushrooms',
    price: 670,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Английский завтрак.webp'
  },
  {
    id: 'dzhigit-breakfast',
    name: 'Dzhigit Breakfast',
    description: 'Farm eggs cooked in homemade sour cream, served with two types of cheese, Kalmyk tea and crispy ciabatta',
    price: 440,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Завтрак джигита.webp'
  },
  {
    id: 'spanish-omelette',
    name: 'Spanish Omelette',
    description: 'Classic Spanish omelette with filling',
    price: 320,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Испанский омлет.webp'
  },
  {
    id: 'crepe-raspberry',
    name: 'Crepe with Raspberry Sauce & Sour Cream',
    description: 'Delicate crepe with raspberry sauce and sour cream',
    price: 290,
    category: 'breakfasts',
    image: ''
  },
  {
    id: 'mega-oladush-shrimp',
    name: 'Mega Pancake with Scrambled Egg & Shrimp',
    description: 'Delicate pancake with scrambled egg and tiger shrimp',
    price: 570,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Мега оладушек с яйцом скрембл и креветками.webp'
  },
  {
    id: 'potato-pancakes-salmon',
    name: 'Potato Pancakes with Salmon',
    description: 'Potato pancakes with lightly salted salmon and salad mix',
    price: 410,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Картофельные драники.webp'
  },
  {
    id: 'oatmeal-berries',
    name: 'Oatmeal with Berries',
    description: 'Oatmeal with seasonal berries and pecans',
    price: 290,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Овсяная каша с ягодами.webp'
  },
  {
    id: 'rice-porridge',
    name: 'Rice Porridge with Walnuts',
    description: 'Creamy rice porridge with walnuts and honey',
    price: 310,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Рисовая каша с грецкими орехами.webp'
  },
  {
    id: 'melty-breakfast',
    name: 'Melty Signature Breakfast',
    description: 'Delicate cheese mousse in an egg roll, sun-dried tomatoes, sour cream, cucumbers, hummus, beans, giant olives, served with crispy ciabatta',
    price: 670,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Фирменный завтрак Melty.webp',
    images: [
      '/data/menu/breakfasts/Фирменный завтрак Melty 1.webp',
      '/data/menu/breakfasts/Фирменный завтрак Melty 2.webp',
      '/data/menu/breakfasts/Фирменный завтрак Melty 3.webp'
    ]
  },
  {
    id: 'shakshuka',
    name: 'Shakshuka with Poached Egg & Herbs',
    description: 'Turkish eggs with a poached egg in signature tomato sauce. Served with crispy ciabatta',
    price: 400,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Шакшука с яйцом пашот и зеленью.webp'
  },
  {
    id: 'egg-roll',
    name: 'Egg Roll',
    description: 'Crispy egg roll with filling',
    price: 320,
    category: 'breakfasts',
    image: '/data/menu/breakfasts/Эгг-ролл.webp'
  },

  // ============ APPETIZERS ============
  {
    id: 'cream-hummus',
    name: 'Cream Hummus with Crispy Chickpeas',
    description: 'Smooth chickpea puree with tahini paste, olive oil and spices',
    price: 310,
    category: 'other',
    image: '/data/menu/other/Крем-хумус с хрустящим нутом.webp'
  },
  {
    id: 'cheese-sticks-jam',
    name: 'Cheese Sticks with Currant Jam',
    description: 'Crispy cheese sticks with berry currant jam',
    price: 390,
    category: 'other',
    image: '/data/menu/other/Сырные палочки с конфитюром из смородины.webp'
  },
  {
    id: 'sandwich-turkey',
    name: 'Turkey Sandwich',
    description: 'Toasted bread, mustard sauce, smoked turkey, lettuce, pink tomatoes, cheddar cheese, pesto sauce',
    price: 430,
    category: 'other',
    image: '/data/menu/other/Сэндвич с индейкой.webp'
  },
  {
    id: 'sandwich-caesar-chicken',
    name: 'Caesar Chicken Sandwich',
    description: 'Toasted bread, Caesar dressing, lettuce, chicken fillet, pink tomatoes, cheddar cheese',
    price: 410,
    category: 'other',
    image: '/data/menu/other/Сэндвич Цезарь с цыпленком.webp'
  },

  // ============ SALADS ============
  {
    id: 'green-pp-chicken',
    name: 'Green Salad with Chicken Breast',
    description: 'Smoked chicken breast with arugula, avocado, quinoa and cucumber slices in honey-mustard dressing',
    price: 590,
    category: 'salads',
    image: '/data/menu/salads/Зелёный пп салат с куриной грудкой.webp'
  },
  {
    id: 'fitness-salad',
    name: 'Fitness Salad',
    description: 'Salad mix, celery stalk, cherry tomatoes, pumpkin seeds in honey-mustard dressing',
    price: 340,
    category: 'salads',
    image: '/data/menu/salads/Фитнес салат.webp'
  },
  {
    id: 'crispy-eggplant',
    name: 'Crispy Eggplant with Cheese Cream',
    description: 'Mixed greens, crispy eggplant in pan-Asian sauce, fresh tomatoes, cheese mousse, sesame, cilantro',
    price: 410,
    category: 'salads',
    image: '/data/menu/salads/Хрустящие баклажаны с сырным кремом.webp'
  },
  {
    id: 'caesar-shrimp',
    name: 'Caesar with Shrimp',
    description: 'Iceberg lettuce with signature Caesar dressing, seared tiger shrimp, house-made croutons, cherry tomatoes, quail egg. Topped with Parmesan snow',
    price: 610,
    category: 'salads',
    image: '/data/menu/salads/Цезарь с креветками.webp'
  },
  {
    id: 'caesar-chicken',
    name: 'Caesar with Chicken',
    description: 'Iceberg lettuce with signature Caesar dressing, pan-seared chicken fillet, house-made croutons, cherry tomatoes, quail egg. Topped with Parmesan snow',
    price: 470,
    category: 'salads',
    image: '/data/menu/salads/Цезарь с цыпленком.webp'
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad with Feta Mousse',
    description: 'Cucumbers, pink tomatoes, olives, bell pepper, red onion, farm feta mousse, dressed with olive oil',
    price: 440,
    category: 'salads',
    image: '/data/menu/salads/Греческий с муссом из брынзы.webp'
  },
  {
    id: 'bowl-chicken',
    name: 'Chicken Bowl',
    description: 'Chicken fillet, quinoa, poached egg, corn, avocado, pink tomatoes, sesame dressing',
    price: 540,
    category: 'salads',
    image: '/data/menu/salads/Боул с курицей.webp'
  },

  // ============ SOUPS ============
  {
    id: 'tom-yam-seafood',
    name: 'Tom Yum with Seafood',
    description: 'Tom yum soup with shrimp, squid and salmon. Served with basmati rice',
    price: 710,
    category: 'soups',
    image: '/data/menu/soups/Том-ям с морепродуктами.webp'
  },
  {
    id: 'lentil-soup-turkey',
    name: 'Lentil Soup with Turkey Brisket',
    description: 'Red lentil soup on a creamy base with turkey brisket. Served with croutons',
    price: 410,
    category: 'soups',
    image: '/data/menu/soups/Чечевичный суп с брискетом из индейки.webp'
  },
  {
    id: 'chicken-ryaba-soup',
    name: 'Chicken Noodle Soup',
    description: 'Chicken soup with egg noodles',
    price: 290,
    category: 'soups',
    image: '/data/menu/soups/Курочка Ряба с яичной лапшой.webp'
  },

  // ============ MAIN DISHES (Fish, Poultry, Meat) ============
  {
    id: 'eastern-rice-chicken',
    name: 'Eastern Rice with Chicken',
    description: 'Eastern-style rice with chicken',
    price: 410,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Восточный рис с курицей.webp'
  },
  {
    id: 'chicken-breast-sous-vide',
    name: 'Sous-Vide Chicken Breast',
    description: 'Sous-vide chicken breast with couscous and Arrabbiata sauce',
    price: 460,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Пп куриная грудка с кус кусом.webp'
  },
  {
    id: 'chicken-fillet-broccoli-nut',
    name: 'Chicken Fillet with Broccoli in Nut Sauce',
    description: 'Chicken fillet with broccoli in nut sauce',
    price: 570,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Филе цыплёнка с брокколи в ореховом соусе.webp'
  },
  {
    id: 'shawarma-smoked-beef-coleslaw',
    name: 'Shawarma with Smoked Beef & Coleslaw',
    description: 'Shawarma with smoked beef and coleslaw salad',
    price: 490,
    category: 'main-dishes',
    image: ''
  },
  {
    id: 'shawarma-chicken',
    name: 'Lebanese Shawarma with Chicken',
    description: 'Lebanese-style shawarma with chicken',
    price: 420,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Шаурма ливанская с курицей.webp'
  },
  {
    id: 'shawarma-beef',
    name: 'Lebanese Shawarma with Pulled Beef',
    description: 'Lebanese-style shawarma with pulled beef',
    price: 490,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Шаурма ливанская с рван.говядиной.webp'
  },
  {
    id: 'fetuccini-shrimp-tom-yam',
    name: 'Fettuccine with Shrimp in Tom Yum Sauce',
    description: 'Fettuccine pasta with tiger shrimp in a spicy tom yum sauce',
    price: 680,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Фетучини с креветками в соусе Том-ям.webp'
  },
  {
    id: 'chicken-cutlets-potato',
    name: 'Chicken Cutlets with Potato Cream',
    description: 'Homemade chicken cutlets with smooth potato cream',
    price: 540,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Куриные котлетки с картофельным кремом.webp'
  },
  {
    id: 'fetuccini-chicken-mushrooms',
    name: 'Fettuccine with Chicken & Mushrooms',
    description: 'Fettuccine pasta with tender chicken fillet and mushrooms in a creamy sauce',
    price: 510,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Фетучини с куриным филе и грибами.webp'
  },
  {
    id: 'zharkoe-chicken',
    name: 'Chicken Stew',
    description: 'Pan-fried chicken fillet with bell pepper, mushrooms and potatoes in a creamy sauce',
    price: 510,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Жаркое с куриным филе.webp'
  },
  {
    id: 'zharkoe-hunter',
    name: 'Hunter\'s Stew',
    description: 'Pan-fried smoked meat with bell pepper and potatoes in a creamy sauce',
    price: 640,
    category: 'main-dishes',
    image: '/data/menu/main-dishes/Жаркое по-охотничьи.webp'
  },

  // ============ SIDES ============
  {
    id: 'wild-rice-truffle',
    name: 'Wild Rice with White Truffle Oil & Herbs',
    description: 'Aromatic wild rice with white truffle oil and fresh herbs',
    price: 300,
    category: 'sides',
    image: '/data/menu/sides/Дикий рис с маслом белого трюфеля и зеленью.webp'
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description: 'Crispy golden French fries',
    price: 200,
    category: 'sides',
    image: '/data/menu/sides/Картофель фри.webp'
  },
  {
    id: 'dippers-parmesan',
    name: 'Dippers with Parmesan Snow',
    description: 'Potato dippers topped with Parmesan snow',
    price: 360,
    category: 'sides',
    image: '/data/menu/sides/Дипперы со снегом пармезан.webp'
  },
  {
    id: 'mashed-potato',
    name: 'Grandma\'s Mashed Potatoes',
    description: 'Smooth homestyle mashed potatoes made the old-fashioned way',
    price: 200,
    category: 'sides',
    image: '/data/menu/sides/Картофельное пюре из детства.webp'
  },

  // ============ CLASSIC COFFEE ============
  {
    id: 'flat-white',
    name: 'Flat White 220ml',
    description: 'Classic flat white with rich velvety microfoam',
    price: 260,
    category: 'coffee',
    image: '/data/menu/drinks/FLAT WHITE 220мл.webp'
  },
  {
    id: 'americano',
    name: 'Americano 170ml',
    description: 'Classic americano from select beans',
    price: 210,
    category: 'coffee',
    image: '/data/menu/drinks/Американо 170мл.webp'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate 250/350ml',
    description: 'Hot chocolate made from real Belgian chocolate',
    price: 270,
    priceLarge: 370,
    category: 'coffee',
    image: '/data/menu/drinks/Горячий шоколад 250мл.webp'
  },
  {
    id: 'kakao',
    name: 'Cocoa 250/350ml',
    description: 'Hot cocoa made from Belgian chocolate',
    price: 270,
    priceLarge: 370,
    category: 'coffee',
    image: '/data/menu/drinks/Какао.webp'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino 250/350ml',
    description: 'Classic cappuccino with silky milk foam',
    price: 240,
    priceLarge: 260,
    category: 'coffee',
    image: '/data/menu/drinks/Капучино 350мл.webp'
  },
  {
    id: 'latte-350',
    name: 'Latte 350ml',
    description: 'Smooth latte with velvety milk foam',
    price: 260,
    category: 'coffee',
    image: ''
  },
  {
    id: 'raf',
    name: 'Raf Coffee 250/350ml',
    description: 'Smooth creamy raf coffee',
    price: 270,
    priceLarge: 320,
    category: 'coffee',
    image: '/data/menu/drinks/Раф.webp'
  },
  {
    id: 'filter-coffee',
    name: 'Filter Coffee 250ml',
    description: 'Filter-brewed coffee',
    price: 250,
    category: 'coffee',
    image: '/data/menu/drinks/Фильтр-кофе.webp'
  },
  {
    id: 'espresso',
    name: 'Espresso 40ml',
    description: 'Classic espresso from select beans',
    price: 210,
    category: 'coffee',
    image: '/data/menu/drinks/Эспрессо.webp'
  },

  // ============ COLD COFFEE ============
  {
    id: 'ice-latte',
    name: 'Ice Latte',
    description: 'Cold latte over ice',
    price: 270,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-orange',
    name: 'Orange Bumble',
    description: 'Coffee-orange cocktail over ice',
    price: 290,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Бамбл апельсиновый.webp'
  },
  {
    id: 'bumble-pomegranate',
    name: 'Pomegranate Bumble',
    description: 'Coffee-pomegranate cocktail over ice',
    price: 290,
    category: 'cold-coffee',
    image: ''
  },
  {
    id: 'bumble-fresh',
    name: 'Fresh Juice Bumble',
    description: 'Bumble made with freshly squeezed orange juice',
    price: 410,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Бамбл на фреше.webp'
  },
  {
    id: 'cold-brew-pomegranate',
    name: 'Cold Brew Pomegranate',
    description: 'Cold brew coffee with pomegranate juice',
    price: 290,
    category: 'author-coffee',
    image: '/data/menu/drinks/Колд Брю Гранат.webp'
  },
  {
    id: 'cold-brew-cola',
    name: 'Cold Brew Cola',
    description: 'Cold brew coffee with cola',
    price: 290,
    category: 'author-coffee',
    image: '/data/menu/drinks/Колд брю кола.webp'
  },
  {
    id: 'cold-brew-blueberry',
    name: 'Cold Brew Blueberry',
    description: 'Cold brew coffee with blueberry',
    price: 290,
    category: 'author-coffee',
    image: ''
  },
  {
    id: 'filter-coffee-blackberry',
    name: 'Filter Coffee with Blackberry',
    description: 'Filter coffee with blackberry',
    price: 290,
    category: 'author-coffee',
    image: '/data/menu/drinks/Фильтр кофе ежевика.webp'
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic',
    description: 'Refreshing espresso with tonic and ice',
    price: 280,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Эспрессо Тоник.webp'
  },
  {
    id: 'frappe',
    name: 'Frappe',
    description: 'Iced coffee drink with milk',
    price: 310,
    category: 'cold-coffee',
    image: '/data/menu/drinks/Фраппе.webp'
  },

  // ============ AUTHOR COFFEE ============
  {
    id: 'raf-raspberry',
    name: 'Raspberry Raf',
    description: 'Raf coffee with a delicate raspberry berry flavor',
    price: 380,
    category: 'author-coffee',
    image: '/data/menu/drinks/Малиновый раф.webp'
  },
  {
    id: 'raf-urbech',
    name: 'Urbech Raf',
    description: 'Raf coffee with natural urbech paste',
    price: 340,
    category: 'author-coffee',
    image: '/data/menu/drinks/Раф Урбеч.webp'
  },

  // ============ LEMONADES & MOJITO ============
  {
    id: 'lemonade-mango-passion',
    name: 'Mango-Passion Fruit Lemonade',
    description: 'Signature lemonade with mango and passion fruit',
    price: 270,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Лимонад Манго-Маракуйя.webp'
  },
  {
    id: 'mojito-lime',
    name: 'Lime Mojito',
    description: 'Classic non-alcoholic mojito with mint and lime',
    price: 290,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Мохито Лайм.webp'
  },
  {
    id: 'mojito-passion-fruit',
    name: 'Passion Fruit Mojito',
    description: 'Refreshing mojito with exotic passion fruit',
    price: 315,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Мохито Маракуйя.webp'
  },
  {
    id: 'lemonade-grapefruit-pomegranate',
    name: 'Grapefruit-Pomegranate Lemonade',
    description: 'Signature lemonade with grapefruit and pomegranate',
    price: 360,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Грейпфрут-гранат.webp'
  },
  {
    id: 'lemonade-citrus-mix',
    name: 'Citrus Mix Lemonade',
    description: 'Signature lemonade with a mix of citrus fruits',
    price: 360,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Цитрусовый микс.webp'
  },

  // ============ AUTHOR DRINKS ============
  {
    id: 'paloma-grapefruit',
    name: 'Paloma Grapefruit-Caramel',
    description: 'Signature drink with grapefruit and caramel',
    price: 240,
    category: 'author-drinks',
    image: '/data/menu/drinks/Палома Грейпфрут-карамель.webp'
  },
  {
    id: 'sorrel',
    name: 'Sorrel Drink',
    description: 'Signature drink made with sorrel',
    price: 300,
    category: 'lemonades-mojito',
    image: '/data/menu/drinks/Щавелевый.webp'
  },

  // ============ FRESH JUICES ============
  {
    id: 'orange-fresh',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 320,
    category: 'fresh-juices',
    image: '/data/menu/drinks/Фреш Апельсиновый.webp'
  },
  {
    id: 'grapefruit-fresh',
    name: 'Fresh Grapefruit Juice',
    description: 'Freshly squeezed grapefruit juice',
    price: 390,
    category: 'fresh-juices',
    image: '/data/menu/drinks/Фреш Грейпфрутовый.webp'
  },
  {
    id: 'apple-fresh',
    name: 'Fresh Apple Juice',
    description: 'Freshly squeezed apple juice',
    price: 310,
    category: 'fresh-juices',
    image: ''
  },
  {
    id: 'carrot-fresh',
    name: 'Fresh Carrot Juice',
    description: 'Freshly squeezed carrot juice',
    price: 270,
    category: 'fresh-juices',
    image: ''
  },

  // ============ MILKSHAKES ============
  {
    id: 'milkshake-vanilla-banana',
    name: 'Vanilla-Banana Milkshake',
    description: 'Sweet milkshake with vanilla and banana',
    price: 270,
    category: 'milkshakes',
    image: '/data/menu/drinks/Ванильно-банановый милкшейк.webp'
  },
  {
    id: 'milkshake-oreo',
    name: 'Oreo Milkshake',
    description: 'Milkshake with Oreo cookies',
    price: 270,
    category: 'milkshakes',
    image: '/data/menu/drinks/Милкшейк Oreo.webp'
  },
  {
    id: 'milkshake-bounty',
    name: 'Bounty Milkshake',
    description: 'Milkshake with Bounty flavor',
    price: 290,
    category: 'milkshakes',
    image: '/data/menu/drinks/Баунти Милкшейк.webp'
  },
  {
    id: 'smoothie-rainbow-unicorn',
    name: 'Rainbow Unicorn Smoothie',
    description: 'Signature Rainbow Unicorn smoothie',
    price: 380,
    category: 'smoothies',
    image: '/data/menu/drinks/Радужный единорог.webp'
  },
  {
    id: 'smoothie-vitamin-charge',
    name: 'Vitamin Charge Smoothie',
    description: 'Vitamin-packed smoothie',
    price: 340,
    category: 'smoothies',
    image: '/data/menu/drinks/Витаминный микс.webp'
  },

  // ============ HOUSE TEAS ============
  {
    id: 'tea-ginger',
    name: 'Ginger Tea',
    description: 'Warming tea with citrus and ginger',
    price: 370,
    category: 'house-teas',
    image: '/data/menu/drinks/Имбирный чай.webp'
  },
  {
    id: 'tea-sea-buckthorn',
    name: 'Sea Buckthorn Tea',
    description: 'Vitamin-rich tea with sea buckthorn',
    price: 320,
    category: 'house-teas',
    image: '/data/menu/drinks/Облепиховый чай.webp'
  },
  {
    id: 'tea-mango-cherry',
    name: 'Mango-Cherry Tea',
    description: 'Fruit tea with mango and cherry',
    price: 370,
    category: 'house-teas',
    image: '/data/menu/drinks/Чай Манго-вишня.webp'
  },
  {
    id: 'tea-berry',
    name: 'Berry Tea',
    description: 'Aromatic tea with forest berries',
    price: 340,
    category: 'house-teas',
    image: '/data/menu/drinks/Ягодный чай.webp'
  },

  // ============ LEAF TEAS ============
  {
    id: 'tea-green-jasmine',
    name: 'Green Tea with Jasmine',
    description: 'Green tea with jasmine flowers',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Зеленый чай с жасмином.webp'
  },
  {
    id: 'tea-milk-oolong',
    name: 'Milk Oolong',
    description: 'Chinese milk oolong with a delicate creamy flavor',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Молочный улун.webp'
  },
  {
    id: 'tea-sencha',
    name: 'Sencha',
    description: 'Japanese green sencha tea',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Сенча.webp'
  },
  {
    id: 'tea-assam',
    name: 'Assam Tea',
    description: 'Strong Indian black tea',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Чай Ассам.webp'
  },
  {
    id: 'tea-black-thyme',
    name: 'Black Tea with Thyme',
    description: 'Classic black tea with thyme',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Черный чай с чабрецом.webp'
  },
  {
    id: 'tea-earl-grey',
    name: 'Earl Grey',
    description: 'Black tea with bergamot',
    price: 290,
    category: 'leaf-teas',
    image: '/data/menu/drinks/Эрл Грей.webp'
  },

  // ============ SOFT DRINKS ============
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    description: 'Classic Coca-Cola',
    price: 220,
    category: 'soft-drinks',
    image: '/data/menu/drinks/Coca-Cola.webp'
  },
  {
    id: 'coca-cola-zero',
    name: 'Coca-Cola Zero',
    description: 'Sugar-free Coca-Cola',
    price: 220,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-still',
    name: 'Still Mineral Water',
    description: 'Still mineral water',
    price: 160,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'water-sparkling',
    name: 'Sparkling Mineral Water',
    description: 'Sparkling mineral water',
    price: 160,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-orange',
    name: 'Rich Orange Juice',
    description: 'Rich brand orange juice',
    price: 190,
    category: 'soft-drinks',
    image: ''
  },
  {
    id: 'juice-rich-apple',
    name: 'Rich Apple Juice',
    description: 'Rich brand apple juice',
    price: 190,
    category: 'soft-drinks',
    image: '/data/menu/drinks/Сок Rich Яблоко.webp'
  }
];
