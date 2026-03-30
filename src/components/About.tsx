import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <header className="about__header">
              <div className="about__flourish">
                <span className="about__line"></span>
                <svg className="about__icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
                </svg>
                <span className="about__line"></span>
              </div>
              <h2 className="about__title">О нас</h2>
            </header>

            <div className="about__body">
              <p>
                <strong>Melty</strong> — это уютное пространство, где шоколад становится искусством. Мир вкуса и уюта, где каждый десерт создаётся с любовью и вниманием к деталям.
              </p>
              <p>
                Мы верим, что хороший десерт — это больше, чем просто сладость. Это момент радости, который вы делите с близкими. Наши крепы, панкейки и авторские десерты готовятся из лучших ингредиентов специально для вас.
              </p>
            </div>

            <Link to="/about" className="about__cta">
              Наша история
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
