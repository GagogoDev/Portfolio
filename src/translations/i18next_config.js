import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation_resources } from './translation_resources';

i18n.use(initReactI18next).init({
    resources: translation_resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
});

export { i18n };
