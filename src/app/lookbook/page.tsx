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
        <h1 className="section-heading mt-4 max-w-5xl">A Curated Sequence of Signature Looks</h1>
        <p className="mt-5 max-w-3xl text-lg text-[#4A4A4A]">
          Every frame captures fabric, movement, and finish with editorial clarity.
        </p>
      </SectionReveal>

      <div className="mx-auto max-w-[1400px]">
        <LookbookGrid items={lookbookItems} />
      </div>
    </section>
  );
}
