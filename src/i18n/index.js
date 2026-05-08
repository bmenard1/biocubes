import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInSpanish from '../locales/es/translation.json';
import translationsInFrench from "../locales/fr/translation.json";
import translationsInChinese from "../locales/zh/translation.json";
import translationsInPortuguese from "../locales/por/translation.json";

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  es: {
    translation: translationsInSpanish
  }, 
  fr: {
    translation: translationsInFrench
  },
  zh: {
    translation: translationsInChinese
  },
  por: {
    translation: translationsInPortuguese
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "en", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;