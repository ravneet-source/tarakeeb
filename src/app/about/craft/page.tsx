import type { Metadata } from "next";
import { CraftStoryBlock } from "@/components/craft-story-block";
import { LocalizedText } from "@/components/localized-text";
import { SectionReveal } from "@/components/section-reveal";
import { craftIntro, craftNarrative } from "@/data/about";

export const metadata: Metadata = {
  title: "Craft & Process",
  description:
    "Discover the artisanal process behind Tarakeeb, from Bani Jamra hand-weaving to hand embroidery.",
};

export default function CraftPage() {
  return (
    <section className="outer-padding py-20 md:py-28">
      <SectionReveal className="mx-auto max-w-[1400px] border-b border-[#E5DCD3] pb-12">
        <LocalizedText text={{ en: "Craft & Process", ar: "الحرفة والعملية" }} as="p" className="meta-text font-bold" />
        <LocalizedText
          text={{ en: "Where Heritage Meets Modern Form", ar: "حيث يلتقي الإرث بالشكل المعاصر" }}
          as="h1"
          className="section-heading mt-4 max-w-4xl"
        />
        <LocalizedText text={craftIntro} as="p" className="mt-5 max-w-3xl whitespace-pre-line text-lg text-[#4A4A4A]" />
      </SectionReveal>

      <div className="mx-auto max-w-[1400px]">
        {craftNarrative.map((block, index) => (
          <CraftStoryBlock
            key={block.image}
            title={block.title}
            text={block.text}
            image={block.image}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
