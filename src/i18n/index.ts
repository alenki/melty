import { useContext } from 'react';
import { LanguageContext } from './languageState';
import { translations } from './translations';
import { menuItemsEn } from './menuTranslations';
import type { MenuItem } from '../data/menu';
import type { Translations } from './translations';

export { LanguageProvider } from './LanguageContext';
export type { Language } from './languageState';
export { translations } from './translations';
export type { Translations } from './translations';
export { menuItemsEn } from './menuTranslations';

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Returns the translations object for the current language */
export function useTranslation(): Translations {
  const { language } = useContext(LanguageContext);
  return translations[language];
}

/** Returns translated menu item name and description based on current language */
export function useMenuTranslation() {
  const { language } = useContext(LanguageContext);

  return (item: MenuItem) => {
    if (language === 'en' && menuItemsEn[item.id]) {
      return {
        name: menuItemsEn[item.id].name,
        description: menuItemsEn[item.id].description,
      };
    }
    return { name: item.name, description: item.description };
  };
}
