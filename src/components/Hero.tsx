import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  const t = useTranslation();

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <section className="hero" id="hero">
      {/* Layered background elements */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-pattern" />
        <div className="hero__bg-glow" />
      </div>

      {/* Decorative chocolate swirl - left */}
      <svg className="hero__swirl hero__swirl--left" viewBox="0 0 200 600" fill="none" aria-hidden="true">
        <path
          d="M180 0C180 0 200 100 160 180C120 260 40 280 60 380C80 480 180 520 160 600"
          stroke="var(--chocolate)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.15"
        />
        <circle cx="160" cy="600" r="8" fill="var(--chocolate)" opacity="0.2" />
      </svg>

      {/* Decorative chocolate swirl - right */}
      <svg className="hero__swirl hero__swirl--right" viewBox="0 0 200 600" fill="none" aria-hidden="true">
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
      <div className="hero__content">
        {/* Floating accent dots */}
        <div className="hero__accents" aria-hidden="true">
          <span className="hero__dot hero__dot--1" />
          <span className="hero__dot hero__dot--2" />
          <span className="hero__dot hero__dot--3" />
        </div>

        {/* Logo */}
        <div className="hero__logo-container">
          {/* Visually-hidden heading — gives crawlers a real H1 without
              disturbing the visual logo-first hero design. */}
          <h1 className="visually-hidden">
            Melty — кафе-кофейня в Нальчике. Мир вкуса и уюта: шоколадные десерты,
            авторские крепы, панкейки, вафли, завтраки и кофе.
          </h1>
          <img
            src="/data/logo_dark.webp"
            alt="Melty — кафе-кофейня в Нальчике"
            className="hero__logo"
          />
        </div>

        {/* Tagline with decorative line */}
        <div className="hero__tagline-wrapper">
          <span className="hero__line" aria-hidden="true" />
          <p className="hero__tagline">{t.hero.tagline}</p>
          <span className="hero__line" aria-hidden="true" />
        </div>

        {/* Instagram badge */}
        <a
          className="hero__location"
          href="https://www.instagram.com/melty.ru/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @melty.ru"
        >
          <svg className="hero__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>{t.hero.location}</span>
        </a>

        {/* CTA Button */}
        <button className="hero__cta" onClick={goToMenu}>
          <span className="hero__cta-text">{t.hero.cta}</span>
          <svg className="hero__cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>

      {/* Bottom fade to cream */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}
