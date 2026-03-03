import type { Metadata } from "next";
import Image from "next/image";
import { SectionReveal } from "@/components/section-reveal";
import { founder } from "@/data/about";

export const metadata: Metadata = {
  title: "The Founder",
  description:
    "Meet Kaneka Subberwal, founder of Tarakeeb and curator of its quiet luxury language.",
};

export default function FounderPage() {
  return (
    <SectionReveal className="outer-padding py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
        <div className="relative h-[74vh] min-h-[500px] overflow-hidden border border-[#E5DCD3]">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="meta-text">The Founder</p>
          <h1 className="section-heading max-w-xl">{founder.name}</h1>
          <p className="max-w-xl text-lg text-[#4A4A4A]">{founder.story}</p>
        </div>
      </div>
    </SectionReveal>
  );
}
