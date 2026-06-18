import { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isLoading: boolean;
}

function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [visible, setVisible] = useState(isLoading);
  const [wasLoading, setWasLoading] = useState(isLoading);

  // Re-show during render the moment isLoading flips back to true (React's
  // "adjust state on prop change" pattern), so the loader is mounted in the same
  // commit — no flash before an effect could run.
  if (isLoading !== wasLoading) {
    setWasLoading(isLoading);
    if (isLoading) setVisible(true);
  }

  // The loader normally unmounts via the opacity transitionend handler below.
  // But under prefers-reduced-motion the transition is ~0ms, and a backgrounded
  // tab (or engines that skip sub-frame transitions) may never fire the event —
  // leaving the overlay mounted forever. This fallback guarantees it is removed.
  useEffect(() => {
    if (isLoading || !visible) return;
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, [isLoading, visible]);

  if (!visible) return null;

  const className = `loading-screen${!isLoading ? ' loading-screen--exiting' : ''}`;

  return (
    <div
      className={className}
      onTransitionEnd={(e) => {
        if (e.propertyName === 'opacity' && !isLoading) {
          setVisible(false);
        }
      }}
    >
      <div className="loading-screen__glow" />
      <div className="loading-screen__content">
        <img
          className="loading-screen__logo"
          src="/data/logo.webp"
          alt="Melty"
        />
        <span className="loading-screen__line" />
      </div>
    </div>
  );
}

export default LoadingScreen;
