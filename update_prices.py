"""Update menu item prices in src/data/menu.ts based on the new menu.pdf.

For each (id, new_price) tuple, finds the item block by `id: '<id>',` and replaces
the *first* `price: NNN,` line that follows. Optionally updates `priceLarge: NNN,`.
"""
import re
from pathlib import Path

PATH = Path(r"E:\Desktop\PC\WORK\Web Development\melty\src\data\menu.ts")

# id -> new_price (single price)
SINGLE = {
    # Additional confirmed updates
    "english-breakfast": 670,
    "melty-breakfast": 680,
    "sandwich-caesar-chicken": 410,
    "sandwich-turkey": 430,
    "lentil-soup-turkey": 410,
    "shawarma-chicken": 420,
    "shawarma-beef": 490,
    # Melty desserts
    "melty-knafe-cheesecake": 610,
    "melty-melt": 1290,
    "melty-melt-pistachio": 1290,
    "melty-cookies": 650,
    "melty-pancake": 720,
    "melty-fondue": 1400,
    # Chocolate desserts
    "puffies": 410,
    "brownie": 510,
    "san-sebastian": 470,
    "churros": 410,
    "chocolate-fondant": 410,
    "eclair": 480,
    "pancakes-trouble-chocolate": 540,
    # Chocolate cups
    "dubai-strawberry": 870,
    "strawberry-in-chocolate": 750,
    # Crepes
    "crep-three-chocolates": 410,
    "golden-crep": 570,
    "crep-dubai": 610,
    "fetuccini-crep": 510,
    "brownie-roll": 510,
    # Waffles & croissants
    "waffles-three-chocolates": 450,
    "waffles-steak-gold": 490,
    "waffle-gold": 510,
    "waffle-steak": 450,
    "pistachio-waffle": 560,
    "new-york-roll": 510,
    # Savory waffles
    "savory-waffle-avocado-crab": 540,
    "savory-waffle-salmon-poached-egg": 610,
    # Breakfasts
    "melty-syrniki": 370,
    "dzhigit-breakfast": 440,
    "spanish-omelette": 320,
    "shakshuka": 400,
    "oatmeal-berries": 290,
    "rice-porridge": 310,
    "melty-breakfast": 670,
    "mega-oladush-shrimp": 570,
    # Appetizers
    "cream-hummus": 310,
    "cheese-sticks-jam": 390,
    # Salads
    "crispy-eggplant": 410,
    "caesar-shrimp": 610,
    "caesar-chicken": 470,
    "greek-salad": 440,
    "bowl-chicken": 540,
    # Soups
    "tom-yam-seafood": 710,
    "chicken-ryaba-soup": 290,
    # Main dishes
    "eastern-rice-chicken": 410,
    "chicken-cutlets-potato": 540,
    "fetuccini-chicken-mushrooms": 510,
    "fetuccini-shrimp-tom-yam": 680,
    "zharkoe-chicken": 510,
    "zharkoe-hunter": 640,
    # Sides
    "wild-rice-truffle": 300,
    "french-fries": 200,
    "dippers-parmesan": 360,
    "mashed-potato": 200,
    # Classic coffee
    "flat-white": 260,
    "americano": 210,
    "latte-350": 260,
    "filter-coffee": 250,
    "espresso": 210,
    # Cold coffee
    "ice-latte": 270,
    "bumble-orange": 290,
    "bumble-pomegranate": 290,
    "bumble-fresh": 410,
    "espresso-tonic": 280,
    "frappe": 310,
    # Author coffee
    "raf-raspberry": 380,
    "raf-urbech": 340,
    "cold-brew-pomegranate": 290,
    # Lemonades & mojito
    "lemonade-mango-passion": 270,
    "mojito-lime": 290,
    "mojito-passion-fruit": 315,
    # Author drinks
    "paloma-grapefruit": 240,
    "sorrel": 300,
    # Fresh juices
    "orange-fresh": 320,
    "grapefruit-fresh": 390,
    # Milkshakes
    "milkshake-vanilla-banana": 270,
    "milkshake-oreo": 270,
    # House teas
    "tea-ginger": 370,
    "tea-sea-buckthorn": 320,
    "tea-mango-cherry": 370,
    "tea-berry": 340,
    # Leaf teas
    "tea-green-jasmine": 290,
    "tea-milk-oolong": 290,
    "tea-sencha": 290,
    "tea-assam": 290,
    "tea-black-thyme": 290,
    "tea-earl-grey": 290,
    # Soft drinks
    "coca-cola": 220,
    "coca-cola-zero": 220,
    "water-still": 160,
    "water-sparkling": 160,
    "juice-rich-orange": 190,
    "juice-rich-apple": 190,
}

# id -> (new_price, new_priceLarge) for items with priceLarge
DOUBLE = {
    "hot-chocolate": (270, 370),
    "kakao": (270, 370),
    "cappuccino": (240, 260),
    "raf": (270, 320),
}


def replace_first(text: str, marker: str, pattern: str, replacement: str) -> str:
    """Find marker in text, then replace the first occurrence of pattern after it."""
    idx = text.find(marker)
    if idx == -1:
        raise ValueError(f"Marker not found: {marker}")
    rest = text[idx:]
    new_rest, n = re.subn(pattern, replacement, rest, count=1)
    if n != 1:
        raise ValueError(f"Pattern not matched after marker: {marker} / {pattern}")
    return text[:idx] + new_rest


def main() -> None:
    src = PATH.read_text(encoding="utf-8")
    original = src

    for item_id, new_price in SINGLE.items():
        marker = f"id: '{item_id}',"
        src = replace_first(src, marker, r"price: \d+,", f"price: {new_price},")

    for item_id, (new_price, new_price_large) in DOUBLE.items():
        marker = f"id: '{item_id}',"
        src = replace_first(src, marker, r"price: \d+,", f"price: {new_price},")
        src = replace_first(src, marker, r"priceLarge: \d+,", f"priceLarge: {new_price_large},")

    if src == original:
        print("NO CHANGES")
        return

    PATH.write_text(src, encoding="utf-8")
    print(f"OK — updated {len(SINGLE) + len(DOUBLE)} items")


if __name__ == "__main__":
    main()
