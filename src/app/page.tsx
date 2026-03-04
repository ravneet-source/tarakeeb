import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { SectionReveal } from "@/components/section-reveal";
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

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <p className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            A Dialogue in Fabric
          </p>
          <p className="mt-3 font-serif text-xl text-[#4A4A4A] md:text-2xl">
            Conceived in Bahrain, Crafted Across Cultures.
          </p>
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
            <h2 className="section-heading max-w-2xl">{introduction.heading}</h2>
            <p className="max-w-xl whitespace-pre-line text-[#4A4A4A]">{introduction.body}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="max-w-3xl font-serif text-[clamp(2.25rem,4.2vw,3.7rem)] leading-[1.08]">
              {introductionReverse.heading.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="max-w-xl whitespace-pre-line text-[#4A4A4A]">{introductionReverse.body}</p>
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
          <p className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            Our Philosophy
          </p>
          <p className="mt-3 font-serif text-xl text-[#4A4A4A] md:text-2xl">{quote}</p>
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
            <p className="meta-text text-[1.2rem]">Exclusivity & Community</p>
            <p className="max-w-xl whitespace-pre-line text-[1.35rem] text-[#4A4A4A]">
              {exclusivity.body}
            </p>
            <Link
              href={exclusivity.cta.href}
              className="inline-flex border border-[#CBB8A5] px-6 py-3 text-[1.05rem] uppercase tracking-[0.14em] transition-colors hover:bg-[#CBB8A5] hover:text-[#F6EFE6]"
            >
              {exclusivity.cta.label}
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <p className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            Our Craft
          </p>
          <p className="mt-3 whitespace-pre-line font-serif text-xl text-[#4A4A4A] md:text-2xl">
            {`Woven in Bahrain.
Sourced with integrity.
Embroidered by hand.

What begins in one place is enriched in another.
The result is a garment that feels international, yet deeply grounded.`}
          </p>
        </div>
      </SectionReveal>

      <HorizontalScroll panels={craftPanels} />

      <SectionReveal className="full-bleed">
        <div className="w-full bg-[#DBC2AD] px-4 py-[3.25rem] text-center md:px-8 md:py-[3.9rem]">
          <p className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            Tarakeeb is a quiet statement —
          </p>
          <p className="mt-3 whitespace-pre-line font-serif text-xl text-[#4A4A4A] md:text-2xl">
            {`that elegance need not be loud,
that heritage deserves continuity,
and that true luxury is found in restraint.`}
          </p>
        </div>
      </SectionReveal>

    </>
  );
}
