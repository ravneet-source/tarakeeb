"use client";

import type { ElementType } from "react";
import { useLanguage } from "@/lib/context/language-context";
import type { LocalizedString, LocalizedValue } from "@/lib/i18n";
import { resolveLocalized } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function useLocaleText() {
  const { locale } = useLanguage();

  return (value: LocalizedValue) => resolveLocalized(value, locale);
}

type LocalizedTextProps = {
  text: LocalizedValue;
  as?: ElementType;
  className?: string;
  preserveLines?: boolean;
};

export function LocalizedText({ text, as: Tag = "span", className, preserveLines }: LocalizedTextProps) {
  const translate = useLocaleText();
  const value = translate(text);

  return <Tag className={cn(preserveLines && "whitespace-pre-line", className)}>{value}</Tag>;
}

type LocalizedLinesProps = {
  text: LocalizedString;
  as?: ElementType;
  className?: string;
  lineClassName?: string;
};

export function LocalizedLines({ text, as: Tag = "div", className, lineClassName }: LocalizedLinesProps) {
  const translate = useLocaleText();
  const value = translate(text);

  return (
    <Tag className={className}>
      {value.split("\n").map((line) => (
        <span key={line} className={cn("block", lineClassName)}>
          {line}
        </span>
      ))}
    </Tag>
  );
}
