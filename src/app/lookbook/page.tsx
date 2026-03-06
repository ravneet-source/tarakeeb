import type { Metadata } from "next";
import { LocalizedText } from "@/components/localized-text";
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
        <LocalizedText text={{ en: "Lookbook", ar: "الكتالوج" }} as="p" className="meta-text" />
        <LocalizedText
          text={{ en: "Collections Catalogue", ar: "كتالوج المجموعات" }}
          as="h1"
          className="section-heading mt-4 max-w-5xl"
        />
        <LocalizedText
          text={{
            en: "A curated set of Tarakeeb collections. Select a catalogue cover to open and view the full fashion line.",
            ar: "مجموعة مختارة من إصدارات تركيب. اختَر غلاف الكتالوج لفتح خط الأزياء كاملًا واستعراضه.",
          }}
          as="p"
          className="mt-5 max-w-full font-serif text-[1.35rem] leading-[1.6] text-[#4A4A4A] italic md:whitespace-nowrap"
        />
      </SectionReveal>

      <div className="mx-auto max-w-[1400px]">
        <LookbookGrid items={lookbookItems} />
      </div>
    </section>
  );
}
