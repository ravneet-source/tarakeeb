import type { Metadata } from "next";
import { FounderContent } from "@/components/founder-content";
import { SectionReveal } from "@/components/section-reveal";
import { founder } from "@/data/about";

export const metadata: Metadata = {
  title: "The Founder",
  description:
    "Meet Kanika Subberwal, founder of Tarakeeb and curator of its quiet luxury language.",
};

export default function FounderPage() {
  return (
    <SectionReveal className="outer-padding py-20 md:py-28">
      <FounderContent founder={founder} />
    </SectionReveal>
  );
}
