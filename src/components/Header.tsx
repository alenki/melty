import { useState, useEffect, useCallback } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      // Small delay to allow menu close animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('hero');
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <a
          href="#hero"
          className="header__logo"
          onClick={handleLogoClick}
          aria-label="На главную"
        >
          <img src="/data/logo.png" alt="ChocoDips" />
        </a>

        <nav
          className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('menu')}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Меню
          </button>
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
