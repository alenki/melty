import { useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './languageState';
import type { Language } from './languageState';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
