import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { SectionReveal } from "@/components/section-reveal";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  craftPanels,
  exclusivity,
  hero,
  introduction,
  introductionReverse,
  journalTeasers,
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
            <p className="max-w-xl text-[#4A4A4A]">{introduction.body}</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="section-heading max-w-2xl">{introductionReverse.heading}</h2>
            <p className="max-w-xl text-[#4A4A4A]">{introductionReverse.body}</p>
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

      <HorizontalScroll panels={craftPanels} />

      <SectionReveal className="outer-padding py-24 text-center md:py-32">
        <p className="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-6xl">{quote}</p>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[64vh] min-h-[430px] overflow-hidden border border-[#E5DCD3]">
            <Image
              src={exclusivity.image}
              alt="Tarakeeb editorial portrait"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="meta-text">Exclusivity & Community</p>
            <p className="max-w-xl text-lg text-[#4A4A4A]">{exclusivity.body}</p>
            <Link
              href={exclusivity.cta.href}
              className="inline-flex border border-[#CBB8A5] px-6 py-3 text-sm uppercase tracking-[0.14em] transition-colors hover:bg-[#CBB8A5] hover:text-[#F6EFE6]"
            >
              {exclusivity.cta.label}
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="outer-padding pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="section-heading">Latest from the Journal</h2>
            <Link
              href="/journal"
              className="text-sm uppercase tracking-[0.12em] text-[#4A4A4A] underline-offset-4 transition-colors hover:text-[#1A1A1A] hover:underline"
            >
              Read More
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {journalTeasers.map((item) => (
              <Card key={item.title}>
                <div className="relative h-[18rem] overflow-hidden border border-[#E5DCD3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
                  <Link
                    href={item.href}
                    className="mt-3 inline-block text-sm uppercase tracking-[0.12em] text-[#4A4A4A] underline-offset-4 hover:underline"
                  >
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
