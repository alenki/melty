import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Decorative wave transition */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path
            d="M0 100V60C180 90 360 30 540 40C720 50 900 80 1080 60C1260 40 1350 70 1440 50V100H0Z"
            fill="#3D251A"
          />
        </svg>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            {/* Brand section */}
            <div className="footer__brand">
              <a href="#hero" className="footer__logo-link" aria-label="На главную">
                <img
                  src="/data/logo_footer.png"
                  alt="ChocoDips"
                  className="footer__logo-img"
                />
              </a>
              <p className="footer__tagline">Шоколадные десерты с душой</p>
            </div>

            {/* Center - Address */}
            <div className="footer__center">
              <div className="footer__address">
                <p className="footer__address-label">Адрес</p>
                <p className="footer__address-text">
                  ул. Пушкина, 85а
                </p>
                <span className="footer__address-city">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Нальчик
                </span>
              </div>
              <div className="footer__divider" aria-hidden="true">
                <span className="footer__divider-line"></span>
                <span className="footer__divider-dot"></span>
                <span className="footer__divider-line"></span>
              </div>
            </div>

            {/* Social & contact */}
            <div className="footer__connect">
              <p className="footer__social-label">Мы в соцсетях</p>
              <a
                href="https://instagram.com/chocodips.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__instagram"
              >
                <svg className="footer__instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>@chocodips.ru</span>
              </a>
            </div>
          </div>

          {/* Footer bottom line */}
          <div className="footer__credits">
            <p className="footer__copyright">
              &copy; {currentYear} ChocoDips
            </p>
            <a
              href="https://okaraf.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__made-by"
            >
              <span className="footer__made-by-text">made by</span>
              <span className="footer__made-by-name">KARAF</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
