"use client";

import Link from "next/link";
import { useLocaleText } from "@/components/localized-text";
import { useLanguage } from "@/lib/context/language-context";
import type { LocalizedString } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLanguage();
  const t = useLocaleText();

  const inspiredBy = {
    en: "Inspired by Bahrain",
    ar: "مستوحاة من البحرين",
  } satisfies LocalizedString;

  const dialogue = {
    en: "A Dialogue in Fabric. Conceived in Bahrain, Crafted Across Cultures.",
    ar: "حوار في النسيج. وُلدت في البحرين وتشكّلت عبر ثقافات متعددة.",
  } satisfies LocalizedString;

  const note = {
    en: "All garments are created using natural fabrics, hand weaving, and hand embroidery. Limited production and made-to-order practices ensure each piece retains its individuality and quiet sense of exclusivity.",
    ar: "تُصنع جميع القطع باستخدام أقمشة طبيعية، وحياكة يدوية، وتطريز يدوي. كما يضمن الإنتاج المحدود وخدمة التفصيل حسب الطلب أن تحتفظ كل قطعة بفرديتها وإحساسها الهادئ بالتميّز.",
  } satisfies LocalizedString;

  return (
    <footer className="outer-padding border-t border-[#E5DCD3] py-12">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="font-serif text-xl tracking-[0.2em] uppercase">{locale === "ar" ? "تركيب" : "Tarakeeb"}</p>
          <p className="meta-text">{t(inspiredBy)}</p>
          <p className="max-w-md text-[#4A4A4A]">
            {t(dialogue)}
          </p>
        </div>
        <div className="space-y-4 md:justify-self-end md:text-end">
          <Link
            href="https://instagram.com/tarakeeb.official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-transparent text-sm uppercase tracking-[0.16em] transition-colors hover:border-[#CBB8A5]"
          >
            @tarakeeb.official
          </Link>
          <p className="max-w-lg text-xs leading-6 text-[#4A4A4A] md:ms-auto">
            {t(note)}
          </p>
        </div>
      </div>
      <p className="outer-padding mx-auto mt-10 max-w-[1500px] text-xs tracking-[0.14em] text-[#4A4A4A]">
        © {locale === "ar" ? "تركيب" : "Tarakeeb"} {new Date().getFullYear()}
      </p>
    </footer>
  );
}
