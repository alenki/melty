import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      const hero = document.getElementById('hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // On non-home pages, always show the solid header background
  const showBg = isScrolled || !isHomePage;
  // On non-home pages, logo is always visible
  const logoAlwaysVisible = !isHomePage;

  return (
    <header className={`header ${showBg ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <a
          href="/"
          className={`header__logo ${logoAlwaysVisible ? 'header__logo--always' : ''}`}
          onClick={handleLogoClick}
          aria-label="На главную"
        >
          <img src="/data/logo_dark.png" alt="Melty" />
        </a>

        <nav
          className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <Link
            to="/"
            className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Главная
          </Link>
          <Link
            to="/menu"
            className={`header__nav-link ${location.pathname === '/menu' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Меню
          </Link>
          <Link
            to="/gallery"
            className={`header__nav-link ${location.pathname === '/gallery' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Галерея
          </Link>
<Link
            to="/about"
            className={`header__nav-link ${location.pathname === '/about' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            О нас
          </Link>
          <Link
            to="/feedback"
            className={`header__nav-link ${location.pathname === '/feedback' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Обратная связь
          </Link>
        </nav>

        <div className="header__lang">
          <button
            className={`header__lang-btn ${lang === 'ru' ? 'header__lang-btn--active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <span className="header__lang-divider">|</span>
          <button
            className={`header__lang-btn ${lang === 'en' ? 'header__lang-btn--active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <button
          className={`header__burger ${isMobileMenuOpen ? 'header__burger--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
