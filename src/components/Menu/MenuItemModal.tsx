import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { MenuItem } from '../../data/menu';
import { useMenuTranslation, useLanguage, useTranslation } from '../../i18n';
import MenuPlaceholder from './MenuPlaceholder';
import './MenuItemModal.css';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuItemModal({ item, isOpen, onClose }: MenuItemModalProps) {
  const { language } = useLanguage();
  const getTranslation = useMenuTranslation();
  const t = useTranslation();
  const { name, description } = getTranslation(item);
  const locale = language === 'en' ? 'en-US' : 'ru-RU';

  const priceLabel = item.priceLarge
    ? `${item.price.toLocaleString(locale)}/${item.priceLarge.toLocaleString(locale)}₽`
    : `${item.price.toLocaleString(locale)}₽`;

  const volumeMatch = name.match(/\s*(\d+(?:\/\d+)?мл)$/) || name.match(/\s*(\d+(?:\/\d+)?ml)$/i);
  const displayName = volumeMatch ? name.replace(volumeMatch[0], '') : name;
  const volume = volumeMatch ? volumeMatch[1] : null;

  const hasImage = !!item.image;

  // Scroll lock effect - stop Lenis smooth scroll
  useEffect(() => {
    if (!isOpen) return;

    window.lenis?.stop();

    return () => {
      window.lenis?.start();
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label={t.galleryPage.close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="modal-slider">
          {hasImage ? (
            <img
              src={item.image}
              alt={displayName}
              className="modal-slider__image"
            />
          ) : (
            <MenuPlaceholder />
          )}
        </div>

        {/* Content section */}
        <div className="modal-content">
          <div className="modal-content__header">
            <h2 className="modal-content__name">{displayName}</h2>
            <div className="modal-content__price-row">
              <span className="modal-content__price">{priceLabel}</span>
              {volume && <span className="modal-content__volume">{volume}</span>}
            </div>
          </div>

          <div className="modal-content__divider">
            <span className="modal-content__divider-icon">◆</span>
          </div>

          <p className="modal-content__description">{description}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
