import i18n from 'i18next';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';

import { EN, QQ, RU } from './locales';

const lang = Cookies.get('lang');

i18n.use(initReactI18next).init({
  resources: {
    RU,
    EN,
    QQ,
  },
  lng: lang || 'RU',
  fallbackLng: lang || 'RU',
  react: { useSuspense: true },
  interpolation: { escapeValue: false },
});

export default i18n;
