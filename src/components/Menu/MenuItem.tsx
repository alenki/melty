import { useState, memo } from 'react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import { useMenuTranslation } from '../../i18n';
import { imgVariant } from '../../utils/images';
import MenuItemModal from './MenuItemModal';
import MenuPlaceholder from './MenuPlaceholder';
import './MenuItem.css';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  isSelected?: boolean;
  /** Stable callback (passed item id) so this component can be memoized. */
  onSelect?: (id: string) => void;
}

function MenuItem({ item, index, isSelected, onSelect }: MenuItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  // Grid cards are tiny (~280px) — load the small thumbnail, not the full
  // image. Fall back to the full file if a thumbnail is ever missing.
  const [useFull, setUseFull] = useState(false);
  const getTranslation = useMenuTranslation();

  const { name, description } = getTranslation(item);
  const locale = 'en-US';

  const priceLabel = item.priceLarge
    ? `${item.price.toLocaleString(locale)}/${item.priceLarge.toLocaleString(locale)}₽`
    : `${item.price.toLocaleString(locale)}₽`;

  const volumeMatch = name.match(/\s*(\d+(?:\/\d+)?ml)$/i);
  const displayName = volumeMatch ? name.replace(volumeMatch[0], '') : name;
  const volume = volumeMatch ? volumeMatch[1] : null;

  const hasImage = item.image && !imageError;
  const thumbSrc = imgVariant(item.image, 'sm');
  const displaySrc = useFull || !thumbSrc ? item.image : thumbSrc;

  return (
    <>
    <article
      className={`menu-item ${isSelected ? 'menu-item--selected' : ''}`}
      style={{ '--animation-delay': `${index * 50}ms` } as React.CSSProperties}
      onClick={() => {
        onSelect?.(item.id);
        setIsModalOpen(true);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.(item.id);
          setIsModalOpen(true);
        }
      }}
    >
      <div className="menu-item__image-wrapper">
        {hasImage ? (
          <>
            {!imageLoaded && <MenuPlaceholder />}
            <img
              src={displaySrc}
              alt={displayName}
              width="600"
              height="600"
              className={`menu-item__image ${imageLoaded ? 'menu-item__image--loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                // Thumbnail missing → retry the full image; then give up.
                if (!useFull && thumbSrc && thumbSrc !== item.image) setUseFull(true);
                else setImageError(true);
              }}
              loading="lazy"
              decoding="async"
            />
          </>
        ) : (
          <MenuPlaceholder />
        )}
      </div>

      <div className="menu-item__content">
        <h3 className="menu-item__name">{displayName}</h3>
        <p className="menu-item__description">{description}</p>
        <div className="menu-item__bottom">
          <span className="menu-item__price">{priceLabel}</span>
          {volume && <span className="menu-item__volume">{volume}</span>}
        </div>
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

// Memoized so the menu's reveal / scroll-spy state changes (which re-render the
// MenuPage root) don't reconcile all 126 cards every time. Props are stable per
// item except `isSelected`, which only flips for the one selected card.
export default memo(MenuItem);
