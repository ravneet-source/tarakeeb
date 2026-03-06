import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { LocalizedLines, LocalizedText } from "@/components/localized-text";
import { SectionReveal } from "@/components/section-reveal";
import type { LocalizedString } from "@/lib/i18n";
import {
  craftPanels,
  exclusivity,
  hero,
  introduction,
  introductionReverse,
  quote,
} from "@/data/homepage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tarakeeb's editorial homepage exploring Bahraini craft, natural fabrics, and limited-edition artisanal garments.",
};

const dialogueBlock = {
  title: {
    en: "A Dialogue in Fabric",
    ar: "حوار في النسيج",
  } satisfies LocalizedString,
  subtitle: {
    en: "Conceived in Bahrain, Crafted Across Cultures.",
    ar: "وُلد في البحرين، وتشكّل عبر ثقافات متعددة.",
  } satisfies LocalizedString,
};

const philosophyBlockTitle = {
  en: "Our Philosophy",
  ar: "فلسفتنا",
} satisfies LocalizedString;

const craftBlock = {
  title: {
    en: "Our Craft",
    ar: "حرفتنا",
  } satisfies LocalizedString,
  body: {
    en: `Woven in Bahrain.
Sourced with integrity.
Embroidered by hand.

"What Begins in one place is enriched in another.
The Result is a garment that feels international, yet deeply grounded."`,
    ar: `منسوج في البحرين.
منتقى بنزاهة.
ومطرّز يدويًا.

ما يبدأ في مكان يزداد قيمة في مكان آخر.
والنتيجة قطعة بروح عالمية وجذور راسخة.`,
  } satisfies LocalizedString,
};

const statementBlock = {
  title: {
    en: "Tarakeeb is a Quiet Statement",
    ar: "تركيب رسالة هادئة —",
  } satisfies LocalizedString,
  body: {
    en: `"Elegance need not be loud, and heritage deserves continuity.
True luxury is found in restraint."`,
    ar: `أن الأناقة لا تحتاج صخبًا،
وأن الإرث يستحق الاستمرارية،
وأن الفخامة الحقيقية تكمن في الرصانة.`,
  } satisfies LocalizedString,
};

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <LocalizedText
            text={dialogueBlock.title}
            as="p"
            className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl"
          />
          <LocalizedText
            text={dialogueBlock.subtitle}
            as="p"
            className="mt-3 font-serif text-lg text-[#1A1A1A]"
          />
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[72vh] min-h-[560px] max-h-[900px] overflow-hidden lg:max-w-[32rem]">
            <Image
              src={introduction.image}
              alt="Bahraini artisan portrait"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-5">
            <LocalizedText text={introduction.heading} as="h2" className="section-heading max-w-2xl" />
            <LocalizedText
              text={introduction.body}
              as="p"
              className="max-w-xl whitespace-pre-line text-lg leading-[1.6] text-[#1A1A1A]"
            />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <LocalizedLines
              text={introductionReverse.heading}
              as="h2"
              className="max-w-3xl font-serif text-[clamp(2.25rem,4.2vw,3.7rem)] leading-[1.08]"
            />
            <LocalizedText
              text={introductionReverse.body}
              as="p"
              className="max-w-xl whitespace-pre-line text-lg leading-[1.6] text-[#1A1A1A]"
            />
          </div>
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden border border-[#E5DCD3]">
            <Image
              src={introductionReverse.image}
              alt="Embroidered velvet cuff detail"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <LocalizedText
            text={philosophyBlockTitle}
            as="p"
            className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl"
          />
          <LocalizedText text={quote} as="p" className="mt-3 font-serif text-lg text-[#1A1A1A]" />
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pt-12 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden border border-[#E5DCD3]" style={{ aspectRatio: "786 / 1086" }}>
            <Image
              src={exclusivity.image}
              alt="Tarakeeb editorial portrait"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <LocalizedText
              text={{ en: "Exclusivity & Community", ar: "الخصوصية والمجتمع" }}
              as="p"
              className="meta-text text-[1.35rem] font-semibold"
            />
            <LocalizedText
              text={exclusivity.body}
              as="p"
              className="max-w-xl whitespace-pre-line text-lg text-[#1A1A1A]"
            />
            <Link
              href={exclusivity.cta.href}
              className="inline-flex border border-[#CBB8A5] px-6 py-3 text-[1.05rem] uppercase tracking-[0.14em] transition-colors hover:bg-[#CBB8A5] hover:text-[#F6EFE6]"
            >
              <LocalizedText text={exclusivity.cta.label} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <LocalizedText
            text={craftBlock.title}
            as="p"
            className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl"
          />
          <LocalizedText
            text={craftBlock.body}
            as="p"
            className="mt-3 whitespace-pre-line font-serif text-lg text-[#1A1A1A]"
          />
        </div>
      </SectionReveal>

      <HorizontalScroll panels={craftPanels} />

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <LocalizedText
            text={statementBlock.title}
            as="p"
            className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl"
          />
          <LocalizedText
            text={statementBlock.body}
            as="p"
            className="mt-3 whitespace-pre-line font-serif text-lg text-[#1A1A1A]"
          />
        </div>
      </SectionReveal>

    </>
  );
}
