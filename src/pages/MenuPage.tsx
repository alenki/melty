import { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react';
import { menuItems } from '../data/menu';
import type { MenuCategory, MenuItem as MenuItemType } from '../data/menu';
import { useTranslation, useMenuTranslation, useLanguage } from '../i18n';
import MenuItem from '../components/Menu/MenuItem';
import MenuItemModal from '../components/Menu/MenuItemModal';
import MenuPlaceholder from '../components/Menu/MenuPlaceholder';
import { BackToTop, SEO } from '../components';
import './MenuPage.css';

const categoryOrder: MenuCategory[] = [
  'breakfasts',
  'other',
  'salads',
  'soups',
  'main-dishes',
  'sides',
  'crepes',
  'waffles-croissants',
  'chocolate-desserts',
  'chocolate-cups',
  'melty-desserts',
  'coffee',
  'cold-coffee',
  'author-coffee',
  'lemonades-mojito',
  'author-drinks',
  'smoothies',
  'fresh-juices',
  'milkshakes',
  'house-teas',
  'leaf-teas',
  'soft-drinks',
];

function FeaturedCard({ item, onClick }: { item: MenuItemType; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = item.image && !imgError;
  const { language } = useLanguage();
  const getTranslation = useMenuTranslation();
  const { name, description } = getTranslation(item);
  const locale = language === 'en' ? 'en-US' : 'ru-RU';

  const priceLabel = item.priceLarge
    ? `${item.price.toLocaleString(locale)}/${item.priceLarge.toLocaleString(locale)}₽`
    : `${item.price.toLocaleString(locale)}₽`;

  const volumeMatch = name.match(/\s*(\d+(?:\/\d+)?мл)$/) || name.match(/\s*(\d+(?:\/\d+)?ml)$/i);
  const displayName = volumeMatch ? name.replace(volumeMatch[0], '') : name;
  const volume = volumeMatch ? volumeMatch[1] : null;

  return (
    <article
      className="menu-page__featured"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="menu-page__featured-image-wrap">
        {hasImage ? (
          <img
            src={item.image}
            alt={displayName}
            className="menu-page__featured-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <MenuPlaceholder />
        )}
      </div>
      <div className="menu-page__featured-content">
        <h3 className="menu-page__featured-name">{displayName}</h3>
        <div className="menu-page__featured-divider">
          <span className="menu-page__featured-divider-line" />
          <span className="menu-page__featured-divider-dot" />
        </div>
        <p className="menu-page__featured-desc">{description}</p>
        <div className="menu-page__featured-bottom">
          <span className="menu-page__featured-price">{priceLabel}</span>
          {volume && <span className="menu-page__featured-volume">{volume}</span>}
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Меню', item: 'https://melty-cafe.ru/menu' },
    ],
  };

  // Full Menu schema — Google uses this for menu rich results and the
  // "see menu" knowledge-panel action. Sections are derived from real data.
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': 'https://melty-cafe.ru/menu#menu',
    name: 'Меню кафе Melty',
    description:
      'Полное меню кафе Melty в Нальчике: завтраки, салаты, супы, горячие блюда, крепы, вафли, шоколадные десерты, авторский кофе и лимонады.',
    inLanguage: 'ru-RU',
    url: 'https://melty-cafe.ru/menu',
    provider: { '@id': 'https://melty-cafe.ru/#restaurant' },
    hasMenuSection: [
      { '@type': 'MenuSection', name: 'Завтраки', description: 'Каши, эгг-роллы, омлеты и круассаны с 08:00' },
      { '@type': 'MenuSection', name: 'Салаты', description: 'Сезонные и классические салаты' },
      { '@type': 'MenuSection', name: 'Супы', description: 'Горячие супы дня' },
      { '@type': 'MenuSection', name: 'Горячие блюда', description: 'Блюда из мяса, птицы и рыбы' },
      { '@type': 'MenuSection', name: 'Крепы', description: 'Французские блинчики, сладкие и солёные' },
      { '@type': 'MenuSection', name: 'Вафли и круассаны', description: 'Бельгийские вафли и свежие круассаны' },
      { '@type': 'MenuSection', name: 'Шоколадные десерты', description: 'Авторские десерты из бельгийского шоколада' },
      { '@type': 'MenuSection', name: 'Кофе', description: 'Классический, холодный и авторский кофе' },
      { '@type': 'MenuSection', name: 'Лимонады и мохито', description: 'Домашние лимонады и безалкогольные мохито' },
      { '@type': 'MenuSection', name: 'Смузи и фреши', description: 'Свежевыжатые соки и фруктовые смузи' },
      { '@type': 'MenuSection', name: 'Чай', description: 'Авторские и листовые чаи' },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<MenuCategory>(categoryOrder[0]);
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [featuredModalItem, setFeaturedModalItem] = useState<MenuItemType | null>(null);
  const [navShadow, setNavShadow] = useState(false);
  const t = useTranslation();

  const categoryRefs = useRef<Map<string, HTMLElement>>(new Map());
  const navRef = useRef<HTMLElement>(null);
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

  // Detect nav overflow and toggle fade hint classes
  useEffect(() => {
    const track = navTrackRef.current;
    const nav = navRef.current;
    if (!track || !nav) return;

    const updateOverflow = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const threshold = 4;
      nav.classList.toggle('menu-page__nav--overflow-left', scrollLeft > threshold);
      nav.classList.toggle('menu-page__nav--overflow-right', scrollLeft + clientWidth < scrollWidth - threshold);
    };

    updateOverflow();
    track.addEventListener('scroll', updateOverflow, { passive: true });
    window.addEventListener('resize', updateOverflow);
    return () => {
      track.removeEventListener('scroll', updateOverflow);
      window.removeEventListener('resize', updateOverflow);
    };
  }, []);

  // Drag-to-scroll for mouse users on desktop
  useEffect(() => {
    const track = navTrackRef.current;
    if (!track) return;

    let isDown = false;
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      isDragging = false;
      startX = e.pageX;
      scrollStart = track.scrollLeft;
      track.style.scrollBehavior = 'auto';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (!isDragging && Math.abs(dx) > 5) {
        isDragging = true;
        track.style.cursor = 'grabbing';
      }
      if (isDragging) {
        e.preventDefault();
        track.scrollLeft = scrollStart - dx;
      }
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = '';
      track.style.scrollBehavior = '';
      // Prevent click on buttons after dragging
      if (isDragging) {
        const preventClick = (e: Event) => {
          e.stopPropagation();
          e.preventDefault();
        };
        track.addEventListener('click', preventClick, { capture: true, once: true });
      }
      isDragging = false;
    };

    track.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Nav shadow (only when truly sticky)
  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (nav) {
        const stickyTop = parseFloat(getComputedStyle(nav).top);
        const navTop = nav.getBoundingClientRect().top;
        setNavShadow(navTop <= stickyTop + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle body class so header can swap styles when menu nav is stuck
  useEffect(() => {
    document.body.classList.toggle('menu-nav-stuck', navShadow);
    return () => document.body.classList.remove('menu-nav-stuck');
  }, [navShadow]);

  const scrollToCategory = useCallback((cat: MenuCategory) => {
    const el = categoryRefs.current.get(cat);
    if (!el) return;
    isManualScroll.current = true;
    setActiveCategory(cat);

    // Pre-reveal all sections up to and including the target so that
    // heavy CSS reveal transitions don't fire mid-scroll (causes jank on mobile)
    const targetIdx = activeCategories.indexOf(cat);
    if (targetIdx !== -1) {
      setRevealedSections((prev) => {
        const next = new Set(prev);
        for (let i = 0; i <= targetIdx; i++) {
          next.add(activeCategories[i]);
        }
        return next;
      });
    }

    const isMobile = window.innerWidth < 768;
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: Element, opts?: { offset?: number; duration?: number }) => void } }).lenis;
    if (!isMobile && lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  }, [activeCategories]);

  const totalItems = menuItems.length;

  return (
    <div className="menu-page">
      <SEO
        title="Меню | Melty"
        description="Полное меню кафе Melty в Нальчике: завтраки, шоколадные десерты, авторские крепы, панкейки, вафли, горячие блюда, салаты, кофе и лимонады. Ежедневно 08:00–23:00."
        path="/menu"
        keywords="меню кафе Нальчик, меню Melty, завтраки Нальчик, десерты Нальчик, крепы Нальчик, кофе Нальчик, панкейки, вафли, шоколадные десерты, цены кафе Нальчик"
        jsonLd={[breadcrumb, menuSchema]}
      />
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

          <span className="menu-page__hero-count">{totalItems} {t.menuPage.itemsCount}</span>
          <h1 className="menu-page__hero-title">{t.menuPage.title}</h1>

          {/* Decorative rule with center dot */}
          <div className="menu-page__hero-rule-group">
            <span className="menu-page__hero-rule-line" />
            <span className="menu-page__hero-rule-dot" />
            <span className="menu-page__hero-rule-line" />
          </div>

          <p className="menu-page__hero-subtitle">
            {t.menuPage.subtitle}
          </p>

          {/* Category pills cloud */}
          <div className="menu-page__hero-pills">
            {t.menuPage.heroPills.map((pill, i) => (
              <button
                key={pill.label}
                className="menu-page__hero-pill"
                onClick={() => scrollToCategory(pill.target)}
                style={{ animationDelay: `${0.6 + i * 0.05}s` }}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="menu-page__hero-scroll">
            <span>{t.menuPage.scrollHint}</span>
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
        ref={navRef}
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
                {t.menuPage.categoryLabels[cat]}
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
                  {t.menuPage.categoryLabels[category]}
                </h2>
                <p className="menu-page__category-desc">
                  {t.menuPage.categoryDescriptions[category]}
                </p>
              </header>

              {/* Featured Item */}
              {featuredItem && (
                <FeaturedCard
                  item={featuredItem}
                  onClick={() => setFeaturedModalItem(featuredItem)}
                />
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

      <BackToTop />

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
