import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();

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
              <a href="#hero" className="footer__logo-link" aria-label={t.footer.toHome}>
                <img
                  src="/data/logo.webp"
                  alt="Melty - кафе-кофейня в Нальчике"
                  className="footer__logo-img"
                />
              </a>
              <p className="footer__tagline">{t.footer.tagline}</p>
            </div>

            {/* Center - Address */}
            <div className="footer__center">
              <div className="footer__address">
                <p className="footer__address-label">{t.footer.addressLabel}</p>
                <p className="footer__address-text">
                  {t.footer.address}
                </p>
                <span className="footer__address-city">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {t.footer.city}
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
              <p className="footer__social-label">{t.footer.socialLabel}</p>
              <a
                href="https://instagram.com/melty.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__instagram"
              >
                <svg className="footer__instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>@melty.ru</span>
              </a>
              <a href="tel:+79889399000" className="footer__phone">
                <svg className="footer__phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+7 (988) 939-90-00</span>
              </a>
              <Link to="/feedback" className="footer__feedback-link">
                {t.footer.feedbackLink}
              </Link>
            </div>
          </div>

          {/* Footer bottom line */}
          <div className="footer__credits">
            <p className="footer__copyright">
              &copy; {currentYear} Melty
            </p>
            <a
              href="https://lumako.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__made-by"
              aria-label={`${t.footer.madeBy} Lumako`}
            >
              {/* Lumako wordmark: mixed case, Inter Semibold, Lume dot */}
              <span className="footer__made-by-mark">
                Lumako<span className="footer__made-by-dot">.</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
