import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css';

// Nalchik coordinates (city center area)
const CAFE_COORDINATES: LatLngExpression = [43.483088, 43.607469];

// Fix for default Leaflet marker icon issue in bundlers
// Create a simple SVG marker
const createMarkerIcon = () => {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="32" height="48">
      <path fill="#4A2C1A" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"/>
      <circle fill="#F8F3ED" cx="12" cy="12" r="6"/>
      <circle fill="#E85A24" cx="12" cy="12" r="3"/>
    </svg>
  `;

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`,
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48]
  });
};

export default function Location() {
  // Create icon once using useMemo to avoid recreating on every render
  const markerIcon = useMemo(() => createMarkerIcon(), []);

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
          <h2 className="location__title">Где нас найти</h2>
        </header>

        <div className="location__content">
          <div className="location__map-wrapper">
            <MapContainer
              center={CAFE_COORDINATES}
              zoom={18}
              scrollWheelZoom={false}
              className="location__map"
              attributionControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={CAFE_COORDINATES} icon={markerIcon}>
                <Popup>
                  <div className="location__popup">
                    <strong>ChocoDips</strong>
                    <span>Шоколадные десерты с душой</span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="location__info">
            <div className="location__card">
              <div className="location__card-item">
                <svg className="location__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <h3>Адрес</h3>
                  <p>г. Нальчик, ул. Пушкина, 85а</p>
                </div>
              </div>

              <div className="location__card-item">
                <svg className="location__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <h3>Часы работы</h3>
                  <ul className="location__hours">
                    <li><span>Ежедневно</span><span>10:00 — 23:00</span></li>
                    <li><span>Кухня</span><span>10:00 — 22:15</span></li>
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
                  <h3>Мы в соцсетях</h3>
                  <p>
                    <a
                      href="https://instagram.com/chocodips.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @chocodips.ru
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
