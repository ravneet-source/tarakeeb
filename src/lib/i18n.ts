export type Locale = "en" | "ar";

export type LocalizedString = {
  en: string;
  ar: string;
};

export type LocalizedValue = string | LocalizedString;

export function resolveLocalized(value: LocalizedValue, locale: Locale) {
  if (typeof value === "string") {
    return value;
  }

  return value[locale];
}
