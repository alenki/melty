import { createContext } from 'react';

export type Language = 'ru' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
});
