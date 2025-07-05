import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en';
import koTranslations from './translations/ko';
import zhTranslations from './translations/zh';

const resources = {
  en: {
    translation: enTranslations
  },
  ko: {
    translation: koTranslations
  },
  zh: {
    translation: zhTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n; 