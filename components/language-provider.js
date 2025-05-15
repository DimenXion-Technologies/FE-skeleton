"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ENDATA from "../locals/en.json" assert { type: "json" };
import HIDATA from "../locals/hi.json" assert { type: "json" };
import TADATA from "../locals/ta.json" assert { type: "json" };

const translations = {
  en: ENDATA,
  hi: HIDATA,
  ta: TADATA,
};

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("appLanguage");
    if (storedLang && translations[storedLang]) {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      localStorage.setItem("appLanguage", lang);
      setLanguageState(lang);
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
