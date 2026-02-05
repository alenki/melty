import { useState, useMemo } from 'react';
import type { MenuCategory } from '../../data/menu';
import { menuItems } from '../../data/menu';
import CategoryFilter from './CategoryFilter';
import MenuItem from './MenuItem';
import './MenuSection.css';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="menu-section section" id="menu">
      <div className="container">
        <header className="menu-section__header">
          <div className="menu-section__flourish">
            <span className="menu-section__line"></span>
            <svg className="menu-section__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 4 14 4 18C4 22.418 7.582 24 12 24C16.418 24 20 22.418 20 18C20 14 12 2 12 2Z"/>
            </svg>
            <span className="menu-section__line"></span>
          </div>
          <h2 className="menu-section__title">Наше меню</h2>
          <p className="menu-section__subtitle">Авторские десерты ручной работы</p>
        </header>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="menu-section__grid" key={activeCategory}>
          {filteredItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
