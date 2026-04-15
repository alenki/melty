import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { BackToTop, SEO } from '../components';
import './AboutPage.css';

export default function AboutPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://melty-cafe.ru/' },
      { '@type': 'ListItem', position: 2, name: 'О нас', item: 'https://melty-cafe.ru/about' },
    ],
  };

  const [revealedChapters, setRevealedChapters] = useState<Set<string>>(new Set());
  const chapterRefs = useRef<Map<string, HTMLElement>>(new Map());
  const craftCardLeftRef = useRef<HTMLDivElement>(null);
  const craftCardRightRef = useRef<HTMLDivElement>(null);
  const photoStripRef = useRef<HTMLDivElement>(null);
  const t = useTranslation();

  // Scroll-reveal observer for chapters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-chapter');
            if (id) {
              setRevealedChapters((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    chapterRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax effect for craft cards + photo strip
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const updateParallax = () => {
      const vh = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      // Craft cards parallax (vertical offset)
      [craftCardLeftRef.current, craftCardRightRef.current].forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;

        const progress = (vh - rect.top) / (vh + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const speed = i === 0 ? 0.3 : 0.5;
        const strength = isMobile ? 5 : 25;
        const baseOffset = i === 0 ? (isMobile ? -15 : -30) : (isMobile ? 15 : 30);
        const offset = baseOffset + (clamped - 0.5) * strength * speed;
        el.style.transform = `translateY(${offset}px)`;
      });

      // Photo strip parallax
      if (photoStripRef.current) {
        const rect = photoStripRef.current.getBoundingClientRect();
        if (rect.bottom > -200 && rect.top < vh + 200) {
          const progress = (vh - rect.top) / (vh + rect.height);
          const clamped = Math.max(0, Math.min(1, progress));
          if (isMobile) {
            const visibleImg = photoStripRef.current.querySelector('img:nth-child(2)') as HTMLElement;
            if (visibleImg) {
              const offset = (clamped - 0.5) * 80;
              visibleImg.style.transform = `scale(1.25) translateY(${offset}px)`;
            }
          } else {
            const offset = (clamped - 0.5) * -80;
            photoStripRef.current.style.transform = `translateX(${offset}px)`;
          }
        }
      }
    };

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
    };

    const onScroll = () => {
      scheduleLoop();
      clearTimeout(stopTimer);
      stopTimer = setTimeout(stopLoop, 200);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.lenis?.on('scroll', onScroll);
    updateParallax();

    return () => {
      stopLoop();
      clearTimeout(stopTimer);
      window.removeEventListener('scroll', onScroll);
      window.lenis?.off('scroll', onScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <SEO
        title="О нас | Melty"
        description="О кафе Melty в Нальчике: как мы создаём мир вкуса и уюта, почему выбираем лучший бельгийский шоколад и как наша атмосфера делает каждый визит особенным."
        path="/about"
        keywords="Melty Нальчик, о кафе Melty, история кафе, шоколадное кафе Нальчик, атмосферное кафе Нальчик"
        jsonLd={[
          breadcrumb,
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'О кафе Melty',
            url: 'https://melty-cafe.ru/about',
            description:
              'Страница о кафе Melty в Нальчике — наша философия, мастерство и атмосфера.',
            mainEntity: { '@id': 'https://melty-cafe.ru/#restaurant' },
          },
        ]}
      />

      {/* ===== CHAPTER 1: Our Story ===== */}
      <section
        className={`about-page__chapter about-page__story ${revealedChapters.has('story') ? 'about-page__chapter--revealed' : ''}`}
        data-chapter="story"
        ref={(el) => { if (el) chapterRefs.current.set('story', el); }}
      >
        <div className="about-page__story-hero">
          <div className="about-page__dots" aria-hidden="true">
            <span className="about-page__dot about-page__dot--1" />
            <span className="about-page__dot about-page__dot--2" />
            <span className="about-page__dot about-page__dot--3" />
          </div>

          <div className="about-page__story-hero-content">
            <h1 className="about-page__title">
              <span className="about-page__title-top">{t.aboutPage.titleTop}</span>
              <span className="about-page__title-bottom">{t.aboutPage.titleBottom}</span>
            </h1>
            <div className="about-page__rule">
              <span className="about-page__rule-line" />
              <span className="about-page__rule-dot" />
              <span className="about-page__rule-line" />
            </div>
            <div className="about-page__scroll-hint" aria-hidden="true">
              <span>{t.aboutPage.scrollHint}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 8L10 14L16 8" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="about-page__hero-fade" aria-hidden="true" />
        </div>

      </section>

      {/* ===== CHAPTER 2: Our Craft ===== */}
      <section
        className={`about-page__chapter about-page__craft ${revealedChapters.has('craft') ? 'about-page__chapter--revealed' : ''}`}
        data-chapter="craft"
        ref={(el) => { if (el) chapterRefs.current.set('craft', el); }}
      >
        <div className="about-page__craft-photos">
          <div
            className="about-page__craft-card about-page__craft-card--left"
            ref={craftCardLeftRef}
          >
            <img
              src="/data/photos/food/IMG_0142.webp"
              alt={t.aboutPage.imgAlts.dessert}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className="about-page__craft-card about-page__craft-card--right"
            ref={craftCardRightRef}
          >
            <img
              src="/data/photos/food/IMG_0587.webp"
              alt={t.aboutPage.imgAlts.chocolateDessert}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <svg
          className="about-page__swirl-separator"
          viewBox="0 0 350 60"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 30C0 30 40 10 80 20C120 30 140 50 175 30C210 10 230 50 270 30C310 10 350 30 350 30"
            stroke="var(--caramel, #8B6347)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.3"
          />
          <circle cx="175" cy="30" r="3" fill="var(--orange, #E85A24)" opacity="0.5" />
        </svg>

        <blockquote className="about-page__pullquote">
          {t.aboutPage.pullquote}
        </blockquote>

        <div className="about-page__craft-text">
          <p>{t.aboutPage.craftText1}</p>
          <p>{t.aboutPage.craftText2}</p>
          <p>{t.aboutPage.craftText3}</p>
        </div>
      </section>

      {/* ===== CHAPTER 3: Our World ===== */}
      <section
        className={`about-page__chapter about-page__world ${revealedChapters.has('world') ? 'about-page__chapter--revealed' : ''}`}
        data-chapter="world"
        ref={(el) => { if (el) chapterRefs.current.set('world', el); }}
      >
        <div className="about-page__world-strip" ref={photoStripRef}>
          <img
            src="/data/photos/inside/IMG_4561.webp"
            alt={t.aboutPage.imgAlts.cafeAtmosphere}
            loading="lazy"
            decoding="async"
          />
          <img
            src="/data/photos/inside/IMG_4566.webp"
            alt={t.aboutPage.imgAlts.warmLighting}
            loading="lazy"
            decoding="async"
          />
          <img
            src="/data/photos/inside/IMG_4588.webp"
            alt={t.aboutPage.imgAlts.eveningAtmosphere}
            loading="lazy"
            decoding="async"
          />
          <div className="about-page__world-strip-overlay" />
        </div>

        <div className="about-page__world-content">
          <span className="about-page__watermark" aria-hidden="true">{t.aboutPage.watermark}</span>
          <div className="about-page__world-text">
            <p>{t.aboutPage.worldText1}</p>
            <p>{t.aboutPage.worldText2}</p>
          </div>
        </div>

        <div className="about-page__dots" aria-hidden="true">
          <span className="about-page__dot about-page__dot--4" />
          <span className="about-page__dot about-page__dot--5" />
          <span className="about-page__dot about-page__dot--6" />
        </div>
      </section>

      {/* ===== CHAPTER 4: Your Melty ===== */}
      <section
        className={`about-page__chapter about-page__yours ${revealedChapters.has('yours') ? 'about-page__chapter--revealed' : ''}`}
        data-chapter="yours"
        ref={(el) => { if (el) chapterRefs.current.set('yours', el); }}
      >

        <div className="about-page__dots" aria-hidden="true">
          <span className="about-page__dot about-page__dot--7" />
          <span className="about-page__dot about-page__dot--8" />
          <span className="about-page__dot about-page__dot--9" />
        </div>

        <div className="about-page__yours-inner">
          <img
            src="/data/logo_dark.webp"
            alt="Melty"
            className="about-page__yours-logo"
          />

          <p className="about-page__yours-philosophy">
            {t.aboutPage.philosophy}
          </p>

          <div className="about-page__cta">
            <p className="about-page__cta-address">
              {t.aboutPage.address}
            </p>
            <p className="about-page__cta-hours">
              {t.aboutPage.hours}
            </p>
            <p className="about-page__cta-welcome">{t.aboutPage.welcome}</p>
            <Link to="/menu" className="about-page__cta-link">
              {t.aboutPage.ctaLink}
            </Link>
          </div>
        </div>

        <div className="about-page__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path
              d="M0 100V60C180 90 360 30 540 40C720 50 900 80 1080 60C1260 40 1350 70 1440 50V100H0Z"
              fill="var(--cream, #F8F3ED)"
            />
          </svg>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
