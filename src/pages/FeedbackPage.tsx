import { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TELEGRAM_API_URL, TELEGRAM_CHAT_ID } from '../config/telegram';
import './FeedbackPage.css';

const STAR_LABELS = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично!'];
const CONFETTI_EMOJIS = ['✦', '🤎', '☕', '★', '✦', '☕'];

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ratingHint, setRatingHint] = useState(false);
  const [messageHint, setMessageHint] = useState(false);

  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const displayedRating = hoveredStar || rating;

  // Lock scroll when success overlay is shown
  useEffect(() => {
    if (showSuccess) {
      window.lenis?.stop();
    } else {
      window.lenis?.start();
    }
    return () => {
      window.lenis?.start();
    };
  }, [showSuccess]);

  // Auto-dismiss error toast
  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => setErrorMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const handleStarClick = useCallback((value: number) => {
    setRating(value);
    setRatingHint(false);
  }, []);

  const handleStarKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = Math.min(4, index + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = Math.max(0, index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = 4;
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleStarClick(index + 1);
      return;
    } else {
      return;
    }

    // Move focus and select
    const stars = starsRef.current?.querySelectorAll<HTMLButtonElement>('.feedback-page__star');
    if (stars?.[newIndex]) {
      stars[newIndex].focus();
      handleStarClick(newIndex + 1);
    }
  }, [handleStarClick]);

  const spawnConfetti = useCallback(() => {
    particlesRef.current.forEach(el => el?.remove());
    particlesRef.current = [];

    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');
      el.className = 'feedback-page__particle';
      el.textContent = CONFETTI_EMOJIS[i % CONFETTI_EMOJIS.length];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = '-20px';
      el.style.setProperty('--fall-duration', `${2 + Math.random() * 2}s`);
      el.style.setProperty('--fall-delay', `${Math.random() * 0.8}s`);
      document.body.appendChild(el);
      particlesRef.current.push(el);
    }

    setTimeout(() => {
      particlesRef.current.forEach(el => el?.remove());
      particlesRef.current = [];
    }, 5000);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (rating === 0) {
      setRatingHint(true);
      return;
    }
    if (!message.trim()) {
      setMessageHint(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const text = [
      `⭐ Оценка: ${stars} (${rating}/5)`,
      `💬 Отзыв: ${message.trim()}`,
      contact.trim() ? `📧 Контакт: ${contact.trim()}` : '📧 Контакт: Не указан',
      `📅 ${new Date().toLocaleString('ru-RU')}`,
    ].join('\n');

    try {
      const res = await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
      });
      if (!res.ok) throw new Error('Telegram API error');
      setShowSuccess(true);
      spawnConfetti();
    } catch {
      setErrorMessage('Не удалось отправить отзыв. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  }, [rating, message, contact, spawnConfetti]);

  if (showSuccess) {
    return (
      <div className="feedback-page__success" role="alert">
        <svg className="feedback-page__success-check" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" />
          <path d="M24 42 L34 52 L56 30" />
        </svg>
        <div className="feedback-page__success-title">Спасибо за ваш отзыв!</div>
        <div className="feedback-page__success-subtitle">Мы ценим каждое мнение 🤎</div>
        <Link to="/" className="feedback-page__success-link">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="feedback-page">
      {/* Hero Section */}
      <section className="feedback-page__hero">
        <div className="feedback-page__hero-content">
          <div className="feedback-page__logo-circle" aria-hidden="true">
            <span className="feedback-page__logo-letter">M</span>
          </div>
          <h1 className="feedback-page__hero-title">Оставьте отзыв</h1>
          <p className="feedback-page__hero-subtitle">Ваше мнение делает нас лучше</p>
          <div className="feedback-page__divider" aria-hidden="true">
            <span className="feedback-page__divider-line"></span>
            <span className="feedback-page__divider-dot"></span>
            <span className="feedback-page__divider-line"></span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="feedback-page__form-section">
        {/* Floating accent dots */}
        <div className="feedback-page__dot feedback-page__dot--1" aria-hidden="true"></div>
        <div className="feedback-page__dot feedback-page__dot--2" aria-hidden="true"></div>
        <div className="feedback-page__dot feedback-page__dot--3" aria-hidden="true"></div>

        <form className="feedback-page__arch" onSubmit={handleSubmit} noValidate>
          {/* Star Rating */}
          <div
            className="feedback-page__stars"
            role="radiogroup"
            aria-label="Оценка"
            ref={starsRef}
          >
            {[1, 2, 3, 4, 5].map((value, index) => {
              const isFilled = value <= displayedRating;
              const isHovered = hoveredStar > 0 && value <= hoveredStar;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={rating === value}
                  aria-label={`${value} — ${STAR_LABELS[value - 1]}`}
                  tabIndex={rating === value || (rating === 0 && value === 1) ? 0 : -1}
                  className={[
                    'feedback-page__star',
                    isFilled ? 'feedback-page__star--filled' : '',
                    isHovered ? 'feedback-page__star--hovered' : '',
                  ].join(' ')}
                  onClick={() => handleStarClick(value)}
                  onMouseEnter={() => setHoveredStar(value)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onKeyDown={(e) => handleStarKeyDown(e, index)}
                >
                  ★
                </button>
              );
            })}
          </div>
          <div className="feedback-page__star-label" aria-live="polite">
            {displayedRating > 0 ? STAR_LABELS[displayedRating - 1] : ''}
          </div>
          <div className={`feedback-page__hint ${ratingHint ? 'feedback-page__hint--visible' : ''}`}>
            Пожалуйста, выберите оценку
          </div>

          {/* Textarea */}
          <div className="feedback-page__field">
            <label className="feedback-page__label" htmlFor="feedback-message">
              Ваш отзыв
            </label>
            <textarea
              id="feedback-message"
              className="feedback-page__textarea"
              placeholder="Расскажите о вашем впечатлении..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim()) setMessageHint(false);
              }}
            />
            <div className={`feedback-page__hint ${messageHint ? 'feedback-page__hint--visible' : ''}`}>
              Пожалуйста, напишите отзыв
            </div>
          </div>

          {/* Contact Info */}
          <div className="feedback-page__field">
            <label className="feedback-page__label" htmlFor="feedback-contact">
              Контакт <span className="feedback-page__optional">(необязательно)</span>
            </label>
            <input
              id="feedback-contact"
              type="text"
              className="feedback-page__input"
              placeholder="Телефон, Telegram или email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="feedback-page__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : (
              <>Отправить<span className="feedback-page__star-accent">✦</span></>
            )}
          </button>
        </form>
      </section>

      {/* Error Toast */}
      <div
        className={`feedback-page__toast ${errorMessage ? 'feedback-page__toast--visible' : ''}`}
        role="alert"
      >
        {errorMessage}
      </div>
    </div>
  );
}
