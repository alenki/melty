import { useState } from 'react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import MenuItemModal from './MenuItemModal';
import './MenuItem.css';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export default function MenuItem({ item, index }: MenuItemProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number): string => {
    return `${price.toLocaleString('ru-RU')}₽`;
  };

  // Encode Cyrillic paths properly
  const getImageSrc = (path: string): string => {
    // Split path and encode each segment
    const parts = path.split('/');
    const encoded = parts.map((part, i) => {
      // Don't encode the first empty part or 'data'/'menu'
      if (i < 3) return part;
      return encodeURIComponent(part);
    });
    return encoded.join('/');
  };

  return (
    <>
    <article
      className="menu-item"
      style={{ '--animation-delay': `${index * 50}ms` } as React.CSSProperties}
      onClick={() => setIsModalOpen(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsModalOpen(true);
        }
      }}
    >
      <div className="menu-item__image-wrapper">
        {!imageLoaded && !imageError && (
          <div className="menu-item__image-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
            </svg>
          </div>
        )}
        {imageError ? (
          <div className="menu-item__image-error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
            </svg>
          </div>
        ) : (
          <img
            src={getImageSrc(item.image)}
            alt={item.name}
            className={`menu-item__image ${imageLoaded ? 'menu-item__image--loaded' : ''}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="menu-item__content">
        <h3 className="menu-item__name">{item.name}</h3>
        <p className="menu-item__description">{item.description}</p>
        <span className="menu-item__price">{formatPrice(item.price)}</span>
      </div>
    </article>

    <MenuItemModal
      item={item}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  );
}
