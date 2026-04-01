import { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isLoading: boolean;
}

function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      window.lenis?.stop();
    } else {
      window.lenis?.start();
    }

    return () => {
      window.lenis?.start();
    };
  }, [isLoading]);

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
