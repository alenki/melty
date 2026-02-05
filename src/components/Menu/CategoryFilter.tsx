import type { MenuCategory } from '../../data/menu';
import { categoryLabels } from '../../data/menu';
import './CategoryFilter.css';

interface CategoryFilterProps {
  activeCategory: MenuCategory | 'all';
  onCategoryChange: (category: MenuCategory | 'all') => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: Array<MenuCategory | 'all'> = ['all', 'chocolate', 'crepes', 'pancakes', 'pastries', 'specialty'];

  const getLabel = (category: MenuCategory | 'all'): string => {
    if (category === 'all') return 'Все';
    return categoryLabels[category];
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-filter__btn ${activeCategory === category ? 'category-filter__btn--active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {getLabel(category)}
        </button>
      ))}
    </div>
  );
}
