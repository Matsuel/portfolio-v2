import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Languages } from "./languages";
import translationEN from './Lang/en.json';
import translationFR from './Lang/fr.json';
import translationES from './Lang/es.json';
import translationDE from './Lang/de.json';

let defaultLanguage = Languages.FR;

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    },
    es:{
        translation: translationES
    },
    de:{
        translation: translationDE
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: defaultLanguage,

        keySeparator: ".",  // to support nested translations

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;