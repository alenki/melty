import './MenuPlaceholder.css';

export default function MenuPlaceholder() {
  return (
    <div className="menu-placeholder">
      {/* Center content */}
      <div className="menu-placeholder__center">
        <svg
          className="menu-placeholder__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z" />
        </svg>

        <div className="menu-placeholder__rule">
          <span className="menu-placeholder__rule-line" />
          <span className="menu-placeholder__rule-dot" />
          <span className="menu-placeholder__rule-line" />
        </div>
      </div>
    </div>
  );
}
