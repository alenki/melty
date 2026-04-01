import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { MenuItem } from '../../data/menu';
import MenuPlaceholder from './MenuPlaceholder';
import './MenuItemModal.css';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuItemModal({ item, isOpen, onClose }: MenuItemModalProps) {
  const priceLabel = item.priceLarge
    ? `${item.price.toLocaleString('ru-RU')}/${item.priceLarge.toLocaleString('ru-RU')}₽`
    : `${item.price.toLocaleString('ru-RU')}₽`;

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
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="modal-slider">
          {hasImage ? (
            <img
              src={item.image}
              alt={item.name}
              className="modal-slider__image"
            />
          ) : (
            <MenuPlaceholder />
          )}
        </div>

        {/* Content section */}
        <div className="modal-content">
          <div className="modal-content__header">
            <h2 className="modal-content__name">{item.name}</h2>
            <span className="modal-content__price">{priceLabel}</span>
          </div>

          <div className="modal-content__divider">
            <span className="modal-content__divider-icon">◆</span>
          </div>

          <p className="modal-content__description">{item.description}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
