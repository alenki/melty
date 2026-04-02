import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);

  // Scroll lock effect - lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Prevent iOS elastic overscroll at top/bottom boundaries
  // Uses a 1px scroll buffer (via CSS padding-top) so momentum can be
  // intercepted by the scroll handler before the browser rubber-bands.
  useEffect(() => {
    if (!isOpen) return;

    const el = containerRef.current;
    if (!el) return;

    // Start scrolled past the 1px buffer so the buffer is hidden
    el.scrollTop = 1;

    let lastY = 0;

    const onTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - lastY;
      lastY = currentY;

      // At top and finger dragging down (trying to overscroll past top)
      if (el.scrollTop <= 1 && deltaY > 0) {
        e.preventDefault();
        return;
      }

      // At bottom and finger dragging up (trying to overscroll past bottom)
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1 && deltaY < 0) {
        e.preventDefault();
        return;
      }
    };

    // Clamp scroll position to catch momentum overscroll after finger lifts
    const onScroll = () => {
      if (el.scrollTop < 1) {
        el.scrollTop = 1;
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('scroll', onScroll);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('scroll', onScroll);
    };
  }, [isOpen]);

  // Check if content is scrollable and update fade indicator
  useEffect(() => {
    if (!isOpen) return;

    const el = containerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setShowFade(el.scrollHeight - el.scrollTop - el.clientHeight > 2);
    };

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
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
      data-lenis-prevent
    >
      <div
        className={`modal-wrapper${showFade ? ' modal-wrapper--faded' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - outside scrollable container so mobile touch/scroll doesn't eat taps */}
        <button className="modal-close" onClick={onClose} aria-label={t.galleryPage.close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div
          className="modal-container"
          ref={containerRef}
        >
          {/* Image */}
          <div className="modal-slider">
            {hasImage ? (
              <img
                src={item.image}
                alt={displayName}
                className="modal-slider__image"
                decoding="async"
              />
            ) : (
              <MenuPlaceholder />
            )}
          </div>

          {/* Content */}
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
    </div>
  );

  return createPortal(modalContent, document.body);
}
