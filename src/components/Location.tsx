import { useTranslation } from '../i18n';
import './Location.css';

// Melty cafe coordinates (latitude, longitude).
const CAFE_LAT = 43.472607;
const CAFE_LON = 43.579251;

// Yandex.Maps embed (no API key required). Native to Russia and reliable for
// Russian users, unlike the previous OpenStreetMap tiles which are frequently
// throttled/slow inside Russia (hurting CWV + Yandex behavioral signals).
// Yandex expects lon,lat order in the `ll` and `pt` parameters.
const YANDEX_MAP_SRC =
  `https://yandex.ru/map-widget/v1/?ll=${CAFE_LON}%2C${CAFE_LAT}` +
  `&z=17&pt=${CAFE_LON}%2C${CAFE_LAT}%2Cpm2rdm`;

export default function Location() {
  const t = useTranslation();

  return (
    <section className="location section" id="location">
      <div className="container">
        <header className="location__header">
          <div className="location__flourish">
            <span className="location__line"></span>
            <svg className="location__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
            </svg>
            <span className="location__line"></span>
          </div>
          <h2 className="location__title">{t.location.title}</h2>
        </header>

        <div className="location__content">
          <div className="location__map-wrapper">
            <iframe
              src={YANDEX_MAP_SRC}
              className="location__map"
              title="Melty on Yandex.Maps — 15 Hero of Russia T.M. Tamazov St., Nalchik"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="location__info">
            <div className="location__card">
              <div className="location__card-item">
                <svg className="location__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <h3>{t.location.addressLabel}</h3>
                  <p>{t.location.fullAddress}</p>
                </div>
              </div>

              <div className="location__card-item">
                <svg className="location__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <h3>{t.location.hoursLabel}</h3>
                  <ul className="location__hours">
                    <li><span>{t.location.daily}</span><span>08:00 - 23:00</span></li>
                    <li><span>{t.location.kitchen}</span><span>08:00 - 22:15</span></li>
                  </ul>
                </div>
              </div>

              <div className="location__card-item">
                <svg className="location__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <div>
                  <h3>{t.location.socialLabel}</h3>
                  <p>
                    <a
                      href="https://instagram.com/melty.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @melty.ru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
