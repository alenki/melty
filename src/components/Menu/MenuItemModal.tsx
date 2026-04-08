import { useState, useEffect, useCallback, useRef } from 'react';
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

  const images = item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : [];
  const hasImage = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + images.length) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  // Reset slide when item changes
  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, item.id]);

  // Scroll lock effect
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (hasMultipleImages) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, hasMultipleImages, nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="modal-overlay"
      onClick={onClose}
      data-lenis-prevent
    >
      <div
        className="modal-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label={t.galleryPage.close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div
          className="modal-container"
          ref={containerRef}
        >
          {/* Image slider */}
          <div
            className="modal-slider"
            onTouchStart={hasMultipleImages ? handleTouchStart : undefined}
            onTouchEnd={hasMultipleImages ? handleTouchEnd : undefined}
          >
            {hasImage ? (
              hasMultipleImages ? (
                <div
                  className="modal-slider__track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <div key={index} className="modal-slider__slide">
                      <img
                        src={src}
                        alt={`${displayName} — ${index + 1}`}
                        className="modal-slider__image"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <img
                  src={images[0]}
                  alt={displayName}
                  className="modal-slider__image"
                  decoding="async"
                />
              )
            ) : (
              <MenuPlaceholder />
            )}

            {/* Navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  className="modal-slider__arrow modal-slider__arrow--prev"
                  onClick={prevSlide}
                  aria-label={language === 'en' ? 'Previous photo' : 'Предыдущее фото'}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="modal-slider__arrow modal-slider__arrow--next"
                  onClick={nextSlide}
                  aria-label={language === 'en' ? 'Next photo' : 'Следующее фото'}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            {/* Slide indicators */}
            {hasMultipleImages && (
              <div className="modal-slider__dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-slider__dot ${index === currentSlide ? 'modal-slider__dot--active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={language === 'en' ? `Go to photo ${index + 1}` : `Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>
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
