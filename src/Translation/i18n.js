import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Languages } from "./languages";
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';
import translationES from './i18n/es.json';
import translationDE from './i18n/de.json';
import translationIT from './i18n/it.json';

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
    it:{
        translation: translationIT
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