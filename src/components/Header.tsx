import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(`/#${id}`);
    }
  }, [isHomePage, navigate]);

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
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('about')}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            О нас
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('location')}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Контакты
          </button>
          <Link
            to="/feedback"
            className={`header__nav-link ${location.pathname === '/feedback' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Отзыв
          </Link>
        </nav>

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
