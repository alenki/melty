import { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react';
import { menuItems, categoryLabels } from '../data/menu';
import type { MenuCategory, MenuItem as MenuItemType } from '../data/menu';
import MenuItem from '../components/Menu/MenuItem';
import MenuItemModal from '../components/Menu/MenuItemModal';
import './MenuPage.css';

const categoryOrder: MenuCategory[] = [
  'melty-desserts',
  'chocolate-desserts',
  'crepes',
  'waffles-croissants',
  'breakfasts',
  'salads',
  'soups',
  'main-dishes',
  'sides',
  'coffee',
  'author-coffee',
  'lemonades',
  'other',
];

const categoryDescriptions: Record<MenuCategory, string> = {
  'melty-desserts': 'Фирменные десерты с шоу-подачей из бельгийского шоколада',
  'chocolate-desserts': 'Авторские десерты из настоящего бельгийского шоколада',
  'crepes': 'Нежные французские крепы с различными начинками',
  'waffles-croissants': 'Свежая выпечка: венские вафли и хрустящие круассаны',
  'breakfasts': 'Завтраки на каждый день',
  'salads': 'Свежие салаты из сезонных ингредиентов',
  'soups': 'Горячие домашние супы',
  'main-dishes': 'Сытные основные блюда на любой вкус',
  'sides': 'Гарниры к основным блюдам',
  'coffee': 'Классические кофейные напитки на зерне спешелти',
  'author-coffee': 'Авторские кофейные напитки от нашего бариста',
  'lemonades': 'Прохладительные напитки и лимонады',
  'other': 'Лёгкие закуски и перекусы',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(categoryOrder[0]);
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [featuredModalItem, setFeaturedModalItem] = useState<MenuItemType | null>(null);
  const [showBackTop, setShowBackTop] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  const categoryRefs = useRef<Map<string, HTMLElement>>(new Map());
  const navTrackRef = useRef<HTMLDivElement>(null);
  const isManualScroll = useRef(false);

  // Group items by category
  const itemsByCategory = useMemo(() => {
    const map = new Map<MenuCategory, MenuItemType[]>();
    for (const cat of categoryOrder) {
      const items = menuItems.filter((item) => item.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, []);

  // Categories that actually have items
  const activeCategories = useMemo(
    () => categoryOrder.filter((cat) => itemsByCategory.has(cat)),
    [itemsByCategory]
  );

  // Scroll spy — track which category is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cat = entry.target.getAttribute('data-category');
            if (cat) setActiveCategory(cat as MenuCategory);
          }
        }
      },
      { threshold: 0.15, rootMargin: '-120px 0px -45% 0px' }
    );

    categoryRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Section reveal — animate categories as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cat = entry.target.getAttribute('data-category');
            if (cat) {
              setRevealedSections((prev) => new Set(prev).add(cat));
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );

    categoryRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll active nav button into view
  useEffect(() => {
    const track = navTrackRef.current;
    if (!track) return;
    const activeBtn = track.querySelector<HTMLElement>('[data-active="true"]');
    if (activeBtn) {
      const trackRect = track.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const scrollLeft =
        activeBtn.offsetLeft - trackRect.width / 2 + btnRect.width / 2;
      track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Back-to-top visibility + nav shadow
  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 800);
      setNavShadow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = useCallback((cat: MenuCategory) => {
    const el = categoryRefs.current.get(cat);
    if (!el) return;
    isManualScroll.current = true;
    setActiveCategory(cat);
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.lenis?.scrollTo(0);
  }, []);

  const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')}₽`;

  const getImageSrc = (path: string): string => {
    const parts = path.split('/');
    const encoded = parts.map((part, i) => (i < 3 ? part : encodeURIComponent(part)));
    return encoded.join('/');
  };

  const totalItems = menuItems.length;

  return (
    <div className="menu-page">
      {/* ===== HERO ===== */}
      <section className="menu-page__hero">
        {/* Layered background (same as home hero) */}
        <div className="menu-page__hero-bg">
          <div className="menu-page__hero-bg-gradient" />
          <div className="menu-page__hero-bg-pattern" />
          <div className="menu-page__hero-bg-glow" />
        </div>

        {/* Decorative SVG curves — left */}
        <svg className="menu-page__swirl menu-page__swirl--left" viewBox="0 0 200 600" fill="none" aria-hidden="true">
          <path
            d="M180 0C180 0 200 100 160 180C120 260 40 280 60 380C80 480 180 520 160 600"
            stroke="var(--chocolate)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.15"
          />
          <circle cx="160" cy="600" r="8" fill="var(--chocolate)" opacity="0.2" />
        </svg>

        {/* Decorative SVG curves — right */}
        <svg className="menu-page__swirl menu-page__swirl--right" viewBox="0 0 200 600" fill="none" aria-hidden="true">
          <path
            d="M20 0C20 0 0 120 50 200C100 280 180 320 150 420C120 520 20 560 40 600"
            stroke="var(--chocolate)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.15"
          />
          <circle cx="40" cy="600" r="8" fill="var(--chocolate)" opacity="0.2" />
        </svg>

        {/* Main content */}
        <div className="menu-page__hero-content">
          {/* Floating accent dots */}
          <div className="menu-page__accents" aria-hidden="true">
            <span className="menu-page__dot menu-page__dot--1" />
            <span className="menu-page__dot menu-page__dot--2" />
            <span className="menu-page__dot menu-page__dot--3" />
          </div>

          <span className="menu-page__hero-count">{totalItems} позиций</span>
          <h1 className="menu-page__hero-title">Меню</h1>

          {/* Decorative rule with center dot */}
          <div className="menu-page__hero-rule-group">
            <span className="menu-page__hero-rule-line" />
            <span className="menu-page__hero-rule-dot" />
            <span className="menu-page__hero-rule-line" />
          </div>

          <p className="menu-page__hero-subtitle">
            Авторские десерты и блюда ручной работы
          </p>

          {/* Category pills cloud */}
          <div className="menu-page__hero-pills">
            {activeCategories.map((cat, i) => (
              <button
                key={cat}
                className="menu-page__hero-pill"
                onClick={() => scrollToCategory(cat)}
                style={{ animationDelay: `${0.6 + i * 0.05}s` }}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="menu-page__hero-scroll">
            <span>листайте вниз</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 8L10 14L16 8" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="menu-page__hero-fade" aria-hidden="true" />
      </section>

      {/* ===== STICKY CATEGORY NAV ===== */}
      <nav
        className={`menu-page__nav ${navShadow ? 'menu-page__nav--shadowed' : ''}`}
      >
        <div className="menu-page__nav-track" ref={navTrackRef}>
          {activeCategories.map((cat, i) => (
            <Fragment key={cat}>
              {i > 0 && <span className="menu-page__nav-sep" aria-hidden="true" />}
              <button
                className={`menu-page__nav-btn ${activeCategory === cat ? 'menu-page__nav-btn--active' : ''}`}
                onClick={() => scrollToCategory(cat)}
                data-active={activeCategory === cat || undefined}
              >
                {categoryLabels[cat]}
              </button>
            </Fragment>
          ))}
        </div>
      </nav>

      {/* ===== CATEGORY SECTIONS ===== */}
      <div className="menu-page__content">
        {activeCategories.map((category, catIndex) => {
          const items = itemsByCategory.get(category)!;
          const hasFeatured = items.length > 3;
          const featuredItem = hasFeatured ? items[0] : null;
          const gridItems = hasFeatured ? items.slice(1) : items;
          const isRevealed = revealedSections.has(category);

          return (
            <section
              key={category}
              className={`menu-page__category ${isRevealed ? 'menu-page__category--revealed' : ''}`}
              id={`cat-${category}`}
              data-category={category}
              ref={(el) => {
                if (el) categoryRefs.current.set(category, el);
              }}
            >
              {/* Category Header */}
              <header className="menu-page__category-header">
                <div className="menu-page__category-flourish">
                  <span className="menu-page__category-line" />
                  <svg
                    className="menu-page__category-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z" />
                  </svg>
                  <span className="menu-page__category-line" />
                </div>
                <h2 className="menu-page__category-title">
                  {categoryLabels[category]}
                </h2>
                <p className="menu-page__category-desc">
                  {categoryDescriptions[category]}
                </p>
              </header>

              {/* Featured Item */}
              {featuredItem && (
                <article
                  className="menu-page__featured"
                  onClick={() => setFeaturedModalItem(featuredItem)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFeaturedModalItem(featuredItem);
                    }
                  }}
                >
                  <div className="menu-page__featured-image-wrap">
                    <img
                      src={getImageSrc(featuredItem.image)}
                      alt={featuredItem.name}
                      className="menu-page__featured-image"
                      loading={catIndex < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="menu-page__featured-content">
                    <h3 className="menu-page__featured-name">
                      {featuredItem.name}
                    </h3>
                    <div className="menu-page__featured-divider">
                      <span className="menu-page__featured-divider-line" />
                      <span className="menu-page__featured-divider-dot" />
                    </div>
                    <p className="menu-page__featured-desc">
                      {featuredItem.description}
                    </p>
                    <div className="menu-page__featured-bottom">
                      <span className="menu-page__featured-price">
                        {formatPrice(featuredItem.price)}
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* Items Grid */}
              <div className="menu-page__items">
                {gridItems.map((item, index) => (
                  <MenuItem key={item.id} item={item} index={index} />
                ))}
              </div>

              {/* Divider between categories */}
              {catIndex < activeCategories.length - 1 && (
                <div className="menu-page__divider">
                  <span className="menu-page__divider-line" />
                  <span className="menu-page__divider-icon">◆</span>
                  <span className="menu-page__divider-line" />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Back to top */}
      <button
        className={`menu-page__back-top ${showBackTop ? 'menu-page__back-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Наверх"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Modal for featured items */}
      {featuredModalItem && (
        <MenuItemModal
          item={featuredModalItem}
          isOpen={!!featuredModalItem}
          onClose={() => setFeaturedModalItem(null)}
        />
      )}
    </div>
  );
}
