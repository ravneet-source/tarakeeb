"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

type Locale = "en" | "ar";
type Direction = "ltr" | "rtl";

type LanguageContextValue = {
  locale: Locale;
  dir: Direction;
  toggleLanguage: () => void;
};

const LANGUAGE_STORAGE_KEY = "tarakeeb-locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const savedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLocale === "ar" || savedLocale === "en") {
        return savedLocale;
      }
    }
    return "en";
  });

  useEffect(() => {
    const dir: Direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    document.body.dataset.locale = locale;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  }, [locale]);

  const direction: Direction = locale === "ar" ? "rtl" : "ltr";

  const toggleLanguage = useCallback(() => {
    setLocale((currentLocale) => (currentLocale === "en" ? "ar" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: direction,
      toggleLanguage,
    }),
    [locale, direction, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }

  return context;
}
