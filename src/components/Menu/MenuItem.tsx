import { useState } from 'react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import MenuItemModal from './MenuItemModal';
import MenuPlaceholder from './MenuPlaceholder';
import './MenuItem.css';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export default function MenuItem({ item, index }: MenuItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number): string => {
    return `${price.toLocaleString('ru-RU')}₽`;
  };

  return (
    <>
    <article
      className="menu-item"
      style={{ '--animation-delay': `${index * 50}ms` } as React.CSSProperties}
      onClick={() => setIsModalOpen(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsModalOpen(true);
        }
      }}
    >
      <div className="menu-item__image-wrapper">
        <MenuPlaceholder />
      </div>

      <div className="menu-item__content">
        <h3 className="menu-item__name">{item.name}</h3>
        <p className="menu-item__description">{item.description}</p>
        <span className="menu-item__price">{formatPrice(item.price)}</span>
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
