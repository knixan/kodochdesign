'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function LocalizationProvider({ children }: Props) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedLang = window.localStorage.getItem('i18nextLng');
    const browserLang = window.navigator.language.split('-')[0];
    const nextLang = savedLang ?? (['en', 'sv'].includes(browserLang) ? browserLang : 'sv');

    if (nextLang && nextLang !== i18n.language) {
      i18n.changeLanguage(nextLang);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
