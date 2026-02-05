import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              {/* Decorative drip elements */}
              <svg className="about__drip about__drip--left" viewBox="0 0 30 80" fill="currentColor">
                <path d="M15 0C15 0 0 53.33 0 63.33C0 73.4 6.716 80 15 80C23.284 80 30 73.4 30 63.33C30 53.33 15 0 15 0Z"/>
              </svg>
              <svg className="about__drip about__drip--right" viewBox="0 0 25 60" fill="currentColor">
                <path d="M12.5 0C12.5 0 0 40 0 47.5C0 55.56 5.596 60 12.5 60C19.404 60 25 55.56 25 47.5C25 40 12.5 0 12.5 0Z"/>
              </svg>
              <img
                src="/data/logo.png"
                alt="ChocoDips Cafe"
                className="about__image"
              />
            </div>
          </div>

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
                <strong>ChocoDips</strong> — это уютное пространство в сердце Нальчика, где шоколад становится искусством. Каждый наш десерт создаётся с любовью и вниманием к деталям.
              </p>
              <p>
                Мы верим, что хороший десерт — это больше, чем просто сладость. Это момент радости, который вы делите с близкими. Наши крепы, панкейки и авторские десерты готовятся из лучших ингредиентов специально для вас.
              </p>
              <p>
                Приходите насладиться атмосферой уюта и попробовать наши фирменные шоколадные творения. Мы всегда рады гостям!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
