import './Hero.css';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <img
            src="/data/logo.png"
            alt="ChocoDips"
            className="hero__logo"
          />
        </div>

        {/* Tagline with decorative line */}
        <div className="hero__tagline-wrapper">
          <span className="hero__line" aria-hidden="true" />
          <p className="hero__tagline">Шоколадные десерты с душой</p>
          <span className="hero__line" aria-hidden="true" />
        </div>

        {/* Location badge */}
        <div className="hero__location">
          <svg className="hero__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Нальчик</span>
        </div>

        {/* CTA Button */}
        <button className="hero__cta" onClick={scrollToMenu}>
          <span className="hero__cta-text">Смотреть меню</span>
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
