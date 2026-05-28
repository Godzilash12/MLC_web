import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@/lib/translations";

function getSavedLanguage() {
  try {
    return window.localStorage.getItem("mlc-language");
  } catch {
    return null;
  }
}

const savedLanguage = getSavedLanguage();
const defaultLanguage = "uz";
const supportedResources = {
  ...resources,
  zh: { translation: {} }
};

i18n.use(initReactI18next).init({
  resources: supportedResources,
  lng: savedLanguage ?? defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false
  }
});

document.documentElement.lang = savedLanguage ?? defaultLanguage;

i18n.on("languageChanged", (language) => {
  try {
    window.localStorage.setItem("mlc-language", language);
  } catch {
    // Ignore storage failures and keep UI usable.
  }

  document.documentElement.lang = language;
});

export default i18n;
