import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import './About.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslation();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('about--revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          {/* Image Side */}
          <div className="about__image-side">
            <div className="about__image-bg" aria-hidden="true" />
            <div className="about__photo-stack">
              <div className="about__photo about__photo--1">
                <img src="/data/photos/inside/IMG_4586.webp" alt={t.about.imgAlt1} />
              </div>
              <div className="about__photo about__photo--2">
                <img src="/data/photos/food/IMG_0593.webp" alt={t.about.imgAlt2} />
              </div>
              <span className="about__accent about__accent--1" aria-hidden="true" />
              <span className="about__accent about__accent--2" aria-hidden="true" />
              <span className="about__accent about__accent--3" aria-hidden="true" />
            </div>
          </div>

          {/* Text Side */}
          <div className="about__text">
            <header className="about__header">
              <div className="about__flourish">
                <span className="about__line"></span>
                <svg className="about__icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
                </svg>
                <span className="about__line"></span>
              </div>
              <h2 className="about__title">{t.about.title}</h2>
            </header>

            <div className="about__body">
              <p dangerouslySetInnerHTML={{ __html: t.about.text1 }} />
              <p>{t.about.text2}</p>
            </div>

            <Link to="/about" className="about__cta">
              {t.about.cta}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
