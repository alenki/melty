import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { MenuItem } from '../../data/menu';
import './MenuItemModal.css';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

// Image counts for each dessert (based on available files)
const imageCountMap: Record<string, number> = {
  'choco-bum': 3,
  'brownie-crep': 3,
  'fondant': 1,
  'fondue': 1,
  'pancakes-berries': 3,
  'pancakes-chocolate': 3,
  'crep-roll': 3,
  'burrata': 2,
  'crep-banana-chocolate': 2,
  'sushi-crep': 2,
  'cinnabon': 3,
  'waffles': 3,
  'profiteroli-sable': 2,
  'profiteroli-big-sable': 2,
  'cheesecake': 2,
  'pistachio-knafe': 1,
  'date-dessert': 2,
};

export default function MenuItemModal({ item, isOpen, onClose }: MenuItemModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const imageCount = imageCountMap[item.id] || 1;

  // Generate image paths
  const getImagePaths = (): string[] => {
    const basePath = item.image.replace('/image_1.png', '');
    const paths: string[] = [];
    for (let i = 1; i <= imageCount; i++) {
      const parts = `${basePath}/image_${i}.png`.split('/');
      const encoded = parts.map((part, idx) => {
        if (idx < 3) return part;
        return encodeURIComponent(part);
      });
      paths.push(encoded.join('/'));
    }
    return paths;
  };

  const images = getImagePaths();

  const formatPrice = (price: number): string => {
    return `${price.toLocaleString('ru-RU')}₽`;
  };

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

  // Scroll lock effect - stop Lenis smooth scroll
  useEffect(() => {
    if (!isOpen) return;

    // Stop Lenis smooth scrolling
    window.lenis?.stop();

    return () => {
      // Resume Lenis smooth scrolling
      window.lenis?.start();
    };
  }, [isOpen]);

  // Keyboard navigation - separate effect
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, nextSlide, prevSlide]);

  // Reset slide when modal opens
  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, item.id]);

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
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image slider */}
        <div
          className="modal-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="modal-slider__track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="modal-slider__slide">
                <img
                  src={src}
                  alt={`${item.name} - фото ${index + 1}`}
                  className="modal-slider__image"
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows (only show if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                className="modal-slider__arrow modal-slider__arrow--prev"
                onClick={prevSlide}
                aria-label="Предыдущее фото"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="modal-slider__arrow modal-slider__arrow--next"
                onClick={nextSlide}
                aria-label="Следующее фото"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Slide indicators */}
          {images.length > 1 && (
            <div className="modal-slider__dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`modal-slider__dot ${index === currentSlide ? 'modal-slider__dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="modal-content">
          <div className="modal-content__header">
            <h2 className="modal-content__name">{item.name}</h2>
            <span className="modal-content__price">{formatPrice(item.price)}</span>
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
