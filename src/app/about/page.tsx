import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocalizedText } from "@/components/localized-text";
import { SectionReveal } from "@/components/section-reveal";
import { aboutHero, aboutQuote, philosophy } from "@/data/about";

export const metadata: Metadata = {
  title: "About Tarakeeb",
  description:
    "Learn the philosophy behind Tarakeeb: a luxury Bahrain-based house rooted in craft, intention, and cross-cultural dialogue.",
};

export default function AboutPage() {
  return (
    <>
      <section className="full-bleed relative h-[62vh] min-h-[420px] overflow-hidden">
        <Image src={aboutHero.image} alt="About hero" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,13,0.6)] to-[rgba(20,16,13,0.2)]" />
        <div className="outer-padding relative z-10 mx-auto flex h-full max-w-[1500px] items-end pb-12">
          <LocalizedText text={aboutHero.title} as="h1" className="hero-heading max-w-4xl text-[#F6EFE6]" />
        </div>
      </section>

      <SectionReveal className="outer-padding py-20 md:py-28">
        <div className="text-container space-y-8">
          {philosophy.map((paragraph) => (
            <LocalizedText key={paragraph.en} text={paragraph} as="p" className="text-xl text-[#1A1A1A]" />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-20 md:pb-28">
        <blockquote className="text-container border-s border-[#CBB8A5] ps-6 font-serif text-3xl leading-tight md:text-5xl">
          <LocalizedText text={aboutQuote} />
        </blockquote>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-20 md:pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-4">
          <Link
            href="/about/founder"
            className="border border-[#CBB8A5] px-6 py-3 text-sm uppercase tracking-[0.14em] transition-colors hover:bg-[#CBB8A5] hover:text-[#F6EFE6]"
          >
            <LocalizedText text={{ en: "The Founder", ar: "المؤسِّسة" }} />
          </Link>
          <Link
            href="/about/craft"
            className="border border-[#E5DCD3] px-6 py-3 text-sm uppercase tracking-[0.14em] transition-colors hover:border-[#CBB8A5] hover:bg-[#F3EDE5]"
          >
            <LocalizedText text={{ en: "Craft & Process", ar: "الحرفة والعملية" }} />
          </Link>
        </div>
      </SectionReveal>
    </>
  );
}
