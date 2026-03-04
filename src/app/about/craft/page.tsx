import type { Metadata } from "next";
import { CraftStoryBlock } from "@/components/craft-story-block";
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
        <p className="meta-text font-bold">Craft & Process</p>
        <h1 className="section-heading mt-4 max-w-4xl">Where Heritage Meets Modern Form</h1>
        <p className="mt-5 max-w-3xl whitespace-pre-line text-lg text-[#4A4A4A]">{craftIntro}</p>
      </SectionReveal>

      <div className="mx-auto max-w-[1400px]">
        {craftNarrative.map((block, index) => (
          <CraftStoryBlock
            key={block.title}
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
