import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../i18n';
import { BackToTop, SEO } from '../components';
import { imgVariant } from '../utils/images';
import './GalleryPage.css';

/* ------------------------------------------------------------------ */
/*  Photo data - curated selection from all three folders              */
/* ------------------------------------------------------------------ */

interface GalleryItem {
  src: string;
  altKey: string;
  /** Approximate aspect ratio bucket so CSS can hint heights */
  ratio: 'tall' | 'medium' | 'square' | 'wide';
}

interface QuoteItem {
  index: number;
}

type MasonryItem =
  | { type: 'photo'; data: GalleryItem; index: number }
  | { type: 'quote'; data: QuoteItem };

const photos: GalleryItem[] = [
  // Mixed categories & ratios for varied masonry flow
  { src: '/data/photos/food/IMG_0142.webp', altKey: 'IMG_0142', ratio: 'square' },
  { src: '/data/photos/inside/IMG_2164.webp', altKey: 'IMG_2164', ratio: 'medium' },
  { src: '/data/photos/food/IMG_0587.webp', altKey: 'IMG_0587', ratio: 'square' },
  { src: '/data/photos/food/IMG_0590.webp', altKey: 'IMG_0590', ratio: 'tall' },
  { src: '/data/photos/inside/IMG_2170.webp', altKey: 'IMG_2170', ratio: 'medium' },
  { src: '/data/photos/food/IMG_0594.webp', altKey: 'IMG_0594', ratio: 'tall' },
  { src: '/data/photos/items/IMG_8435.webp', altKey: 'IMG_8435', ratio: 'medium' },
  { src: '/data/photos/food/IMG_0600.webp', altKey: 'IMG_0600', ratio: 'square' },
  { src: '/data/photos/food/IMG_0604.webp', altKey: 'IMG_0604', ratio: 'tall' },
  { src: '/data/photos/inside/IMG_4561.webp', altKey: 'IMG_4561', ratio: 'medium' },
  { src: '/data/photos/food/IMG_4563.webp', altKey: 'IMG_4563', ratio: 'tall' },
  { src: '/data/photos/items/IMG_8438.webp', altKey: 'IMG_8438', ratio: 'square' },
  { src: '/data/photos/food/IMG_4570.webp', altKey: 'IMG_4570', ratio: 'wide' },
  { src: '/data/photos/inside/IMG_4566.webp', altKey: 'IMG_4566', ratio: 'tall' },
  { src: '/data/photos/food/IMG_4575.webp', altKey: 'IMG_4575', ratio: 'medium' },
  { src: '/data/photos/items/IMG_8441.webp', altKey: 'IMG_8441', ratio: 'square' },
  { src: '/data/photos/inside/IMG_2176.webp', altKey: 'IMG_2176', ratio: 'medium' },
  { src: '/data/photos/food/IMG_4579.webp', altKey: 'IMG_4579', ratio: 'tall' },
  { src: '/data/photos/food/IMG_4585.webp', altKey: 'IMG_4585', ratio: 'square' },
  { src: '/data/photos/inside/IMG_4584.webp', altKey: 'IMG_4584', ratio: 'tall' },
  { src: '/data/photos/food/IMG_0598.webp', altKey: 'IMG_0598', ratio: 'medium' },
  { src: '/data/photos/items/IMG_8444.webp', altKey: 'IMG_8444', ratio: 'tall' },
  { src: '/data/photos/food/IMG_0139.webp', altKey: 'IMG_0139', ratio: 'square' },
  { src: '/data/photos/inside/IMG_4591.webp', altKey: 'IMG_4591', ratio: 'tall' },
  { src: '/data/photos/food/IMG_4577.webp', altKey: 'IMG_4577', ratio: 'medium' },
  { src: '/data/photos/items/IMG_8447.webp', altKey: 'IMG_8447', ratio: 'tall' },
  { src: '/data/photos/inside/IMG_2180.webp', altKey: 'IMG_2180', ratio: 'square' },
  { src: '/data/photos/items/IMG_8450.webp', altKey: 'IMG_8450', ratio: 'medium' },
  { src: '/data/photos/items/IMG_4580.webp', altKey: 'IMG_4580', ratio: 'tall' },
  { src: '/data/photos/items/IMG_8443.webp', altKey: 'IMG_8443', ratio: 'square' },
  { src: '/data/photos/items/IMG_8436.webp', altKey: 'IMG_8436', ratio: 'medium' },
  { src: '/data/photos/food/IMG_0140.webp', altKey: 'IMG_0140', ratio: 'tall' },
  { src: '/data/photos/inside/IMG_4588.webp', altKey: 'IMG_4588', ratio: 'medium' },
];

/** Build the flat masonry item list, inserting quotes at even intervals */
function buildMasonryItems(): MasonryItem[] {
  const items: MasonryItem[] = [];
  // Place quotes after photo indices 5, 17, 29 for wide visual spacing
  const quoteAfterPhoto = [5, 17, 29];
  let quoteIdx = 0;

  for (let photoIdx = 0; photoIdx < photos.length; photoIdx++) {
    items.push({ type: 'photo', data: photos[photoIdx], index: photoIdx });
    if (quoteIdx < 3 && photoIdx === quoteAfterPhoto[quoteIdx]) {
      items.push({ type: 'quote', data: { index: quoteIdx } });
      quoteIdx++;
    }
  }
  return items;
}

const masonryItems = buildMasonryItems();

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function GalleryPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Галерея', item: 'https://melty-cafe.ru/gallery' },
    ],
  };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<Map<number, HTMLElement>>(new Map());
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const navCooldown = useRef(false);
  const t = useTranslation();

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-card-index'));
            if (!isNaN(idx)) {
              setRevealedCards((prev) => new Set(prev).add(idx));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    cardRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect for photo images.
  //
  // Perf: the rAF loop NEVER calls getBoundingClientRect()/querySelector. Doing
  // that per frame forced a synchronous layout on every card each tick and
  // fought Lenis's own rAF, which is what made fast scrolling through the
  // image-heavy masonry stutter. Instead we measure each photo's document-
  // relative top ONCE (and on resize), then derive the parallax offset from a
  // single window.scrollY read per frame — pure arithmetic, zero layout reads.
  // will-change is applied only to photos currently in the viewport and released
  // when they leave or when scrolling stops, so we never keep 33 GPU layers
  // promoted at rest.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    type ParallaxEntry = {
      img: HTMLElement;
      docTop: number;
      height: number;
      active: boolean;
      lastOffset: number;
    };
    let entries: ParallaxEntry[] = [];

    // One batched layout read: cache each photo card's geometry in document
    // coordinates (transform-independent enough — card boxes are aspect-ratio
    // sized, so they don't shift when the lazy image decodes).
    const measure = () => {
      const scrollY = window.scrollY;
      const next: ParallaxEntry[] = [];
      cardRefs.current.forEach((el) => {
        const img = el.querySelector('.gallery-page__photo-img') as HTMLElement | null;
        if (!img) return; // quote cards have no image — no parallax
        const rect = el.getBoundingClientRect();
        next.push({ img, docTop: rect.top + scrollY, height: rect.height, active: false, lastOffset: NaN });
      });
      entries = next;
    };

    const updateParallax = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const strength = vh < 768 ? 10 : 50;
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        const top = e.docTop - scrollY; // viewport-relative, no layout read
        if (top + e.height < -200 || top > vh + 200) {
          if (e.active) {
            e.img.style.willChange = 'auto';
            e.active = false;
          }
          continue;
        }
        if (!e.active) {
          e.img.style.willChange = 'transform';
          e.active = true;
        }
        // 0 = entering from bottom, 1 = leaving at top
        const progress = (vh - top) / (vh + e.height);
        const clamped = progress < 0 ? 0 : progress > 1 ? 1 : progress;
        const offset = Math.round((clamped - 0.5) * strength);
        if (offset !== e.lastOffset) {
          e.img.style.transform = `scale(1.25) translateY(${offset}px)`;
          e.lastOffset = offset;
        }
      }
    };

    // Only run rAF while scrolling - stop after idle to save CPU
    let rafId: number | null = null;
    let stopTimer: ReturnType<typeof setTimeout>;

    const scheduleLoop = () => {
      if (rafId !== null) return;
      const loop = () => {
        updateParallax();
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      // Release GPU layers when idle — no need to keep them promoted at rest.
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].active) {
          entries[i].img.style.willChange = 'auto';
          entries[i].active = false;
        }
      }
    };

    const onScroll = () => {
      scheduleLoop();
      clearTimeout(stopTimer);
      stopTimer = setTimeout(stopLoop, 200);
    };

    // Column-count / widths change across breakpoints, so re-measure on resize
    // (coalesced to one rAF) rather than reading layout every frame.
    let resizeRaf: number | null = null;
    const onResize = () => {
      if (resizeRaf !== null) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = null;
        measure();
        updateParallax();
      });
    };

    measure();
    updateParallax(); // initial position

    window.addEventListener('scroll', onScroll, { passive: true });
    // Also listen to Lenis if available
    window.lenis?.on('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      stopLoop();
      clearTimeout(stopTimer);
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
      window.removeEventListener('scroll', onScroll);
      window.lenis?.off('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Lightbox keyboard nav
  const goNext = useCallback(() => {
    if (navCooldown.current) return;
    navCooldown.current = true;
    setTimeout(() => { navCooldown.current = false; }, 300);
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    if (navCooldown.current) return;
    navCooldown.current = true;
    setTimeout(() => { navCooldown.current = false; }, 300);
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const isLightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;
    window.lenis?.stop();
    document.body.classList.add('lightbox-open');
    return () => {
      document.body.classList.remove('lightbox-open');
      window.lenis?.start();
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="gallery-page">
      <SEO
        title="Галерея | Melty"
        description="Галерея кафе Melty в Нальчике: фотографии интерьера, десертов, крепов, вафель и уютной атмосферы. Загляните - и вам захочется прийти."
        path="/gallery"
        keywords="фото кафе Нальчик, интерьер кафе Melty, фото десертов Нальчик, атмосфера кафе Нальчик, Melty фотографии"
        jsonLd={[
          breadcrumb,
          {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Галерея кафе Melty',
            url: 'https://melty-cafe.ru/gallery',
            description:
              'Фотогалерея кафе Melty в Нальчике - интерьер, десерты и атмосфера.',
            about: { '@id': 'https://melty-cafe.ru/#restaurant' },
          },
        ]}
      />
      {/* ===== HERO ===== */}
      <section className="gallery-page__hero">
        <div className="gallery-page__hero-bg">
          <div className="gallery-page__hero-bg-gradient" />
          <div className="gallery-page__hero-bg-pattern" />
          <div className="gallery-page__hero-bg-glow" />
        </div>

        <svg className="gallery-page__swirl gallery-page__swirl--left" viewBox="0 0 200 600" fill="none" aria-hidden="true">
          <path
            d="M180 0C180 0 200 100 160 180C120 260 40 280 60 380C80 480 180 520 160 600"
            stroke="var(--chocolate)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.15"
          />
          <circle cx="160" cy="600" r="8" fill="var(--chocolate)" opacity="0.2" />
        </svg>

        <svg className="gallery-page__swirl gallery-page__swirl--right" viewBox="0 0 200 600" fill="none" aria-hidden="true">
          <path
            d="M20 0C20 0 0 120 50 200C100 280 180 320 150 420C120 520 20 560 40 600"
            stroke="var(--chocolate)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.15"
          />
          <circle cx="40" cy="600" r="8" fill="var(--chocolate)" opacity="0.2" />
        </svg>

        <div className="gallery-page__hero-content">
          <div className="gallery-page__accents" aria-hidden="true">
            <span className="gallery-page__dot gallery-page__dot--1" />
            <span className="gallery-page__dot gallery-page__dot--2" />
            <span className="gallery-page__dot gallery-page__dot--3" />
          </div>

          <span className="gallery-page__hero-count">{photos.length} {t.galleryPage.photosCount}</span>
          <h1 className="gallery-page__hero-title">{t.galleryPage.title}</h1>

          <div className="gallery-page__hero-rule-group">
            <span className="gallery-page__hero-rule-line" />
            <span className="gallery-page__hero-rule-dot" />
            <span className="gallery-page__hero-rule-line" />
          </div>

          <p className="gallery-page__hero-subtitle">
            {t.galleryPage.subtitle}
          </p>

          <div className="gallery-page__hero-scroll">
            <span>{t.galleryPage.scrollHint}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 8L10 14L16 8" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="gallery-page__hero-fade" aria-hidden="true" />
      </section>

      {/* ===== MASONRY GRID ===== */}
      <section className="gallery-page__grid-section">
        <div className="gallery-page__masonry">
          {masonryItems.map((item, i) => {
            const isRevealed = revealedCards.has(i);
            const delay = (i % 6) * 0.08;

            if (item.type === 'quote') {
              return (
                <div
                  key={`quote-${i}`}
                  className={`gallery-page__card gallery-page__quote ${isRevealed ? 'gallery-page__card--visible' : ''}`}
                  data-card-index={i}
                  ref={(el) => {
                    if (el) cardRefs.current.set(i, el);
                  }}
                  style={{ transitionDelay: `${delay}s` }}
                >
                  <span className="gallery-page__quote-mark" aria-hidden="true">"</span>
                  <p className="gallery-page__quote-text">{t.galleryPage.quotes[item.data.index]}</p>
                </div>
              );
            }

            return (
              <div
                key={`photo-${item.index}`}
                className={`gallery-page__card gallery-page__photo gallery-page__photo--${item.data.ratio} ${isRevealed ? 'gallery-page__card--visible' : ''}`}
                data-card-index={i}
                ref={(el) => {
                  if (el) cardRefs.current.set(i, el);
                }}
                style={{ transitionDelay: `${delay}s` }}
                onClick={() => setLightboxIndex(item.index)}
              >
                <img
                  src={imgVariant(item.data.src, 'sm')}
                  alt={t.galleryPage.photoAlts[item.data.altKey] || item.data.altKey}
                  className="gallery-page__photo-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Thumbnail missing → fall back to the full image.
                    const img = e.currentTarget;
                    if (img.src.includes('-sm.webp')) img.src = item.data.src;
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null &&
        createPortal(
          <div
            className="gallery-lightbox"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="gallery-lightbox__inner" onClick={(e) => e.stopPropagation()}>
              <img
                src={photos[lightboxIndex].src}
                alt={t.galleryPage.photoAlts[photos[lightboxIndex].altKey] || photos[lightboxIndex].altKey}
                className="gallery-lightbox__img"
              />
            </div>

            <button className="gallery-lightbox__close" onClick={closeLightbox} aria-label={t.galleryPage.close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button className="gallery-lightbox__arrow gallery-lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label={t.galleryPage.prevPhoto}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button className="gallery-lightbox__arrow gallery-lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label={t.galleryPage.nextPhoto}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="gallery-lightbox__counter">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </div>,
          document.body
        )}

      <BackToTop />
    </div>
  );
}
