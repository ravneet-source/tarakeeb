import type { Metadata } from "next";
import { LookbookGrid } from "@/components/lookbook-grid";
import { SectionReveal } from "@/components/section-reveal";
import { lookbookItems } from "@/data/lookbook";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Explore Tarakeeb's lookbook: limited silhouettes, natural fabrics, and handcrafted details.",
};

export default function LookbookPage() {
  return (
    <section className="outer-padding py-20 md:py-28">
      <SectionReveal className="mx-auto mb-14 max-w-[1400px]">
        <p className="meta-text">Lookbook</p>
        <h1 className="section-heading mt-4 max-w-5xl">Collections Catalogue</h1>
        <p className="mt-5 max-w-full font-serif text-[1.35rem] leading-[1.6] text-[#4A4A4A] md:whitespace-nowrap">
          A curated set of Tarakeeb collections. Select a catalogue to open and view the full fashion line.
        </p>
      </SectionReveal>

      <div className="mx-auto max-w-[1400px]">
        <LookbookGrid items={lookbookItems} />
      </div>
    </section>
  );
}
