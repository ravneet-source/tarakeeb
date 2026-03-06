"use client";

import Image from "next/image";
import { LocalizedText, useLocaleText } from "@/components/localized-text";
import type { LocalizedString } from "@/lib/i18n";

type FounderData = {
  image: string;
  name: LocalizedString;
  role: LocalizedString;
  story: LocalizedString;
};

type FounderContentProps = {
  founder: FounderData;
};

export function FounderContent({ founder }: FounderContentProps) {
  const t = useLocaleText();
  const storyParagraphs = t(founder.story).split("\n\n");
  const quoteParagraph = storyParagraphs[0] || "";
  const sideBodyParagraphs = storyParagraphs.slice(1, -2).join("\n\n");
  const bottomParagraphs = storyParagraphs.slice(-2);

  return (
    <div className="mx-auto max-w-[1400px] space-y-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div>
            <LocalizedText text={founder.name} as="p" className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl" />
            <LocalizedText text={founder.role} as="p" className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#4A4A4A] md:text-base" />
          </div>
          <div className="relative h-[74vh] min-h-[500px] overflow-hidden border border-[#E5DCD3] lg:h-[calc(100vh-10rem)]">
            <Image
              src={founder.image}
              alt={t(founder.name)}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-start justify-between gap-6">
            <p className="font-serif whitespace-pre-line text-lg font-semibold leading-[1.65] text-[#4A4A4A] italic">
              {quoteParagraph}
            </p>
            <div className="relative mt-1 h-16 w-44 shrink-0 md:h-20 md:w-56">
              <Image
                src="/images/kanika-signature.png"
                alt={t({ en: "Kanika Subberwal signature", ar: "توقيع كانيكا سوبروال" })}
                fill
                sizes="224px"
                className="object-contain object-right mix-blend-multiply"
              />
            </div>
          </div>
          <p className="font-serif whitespace-pre-line text-justify text-lg font-semibold leading-[1.65] text-[#4A4A4A]">
            {sideBodyParagraphs}
          </p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <p className="font-serif text-lg font-semibold leading-[1.65] text-[#4A4A4A]">{bottomParagraphs[0]}</p>
        <p className="font-serif text-lg font-bold leading-[1.65] text-[#4A4A4A]">{bottomParagraphs[1]}</p>
      </div>
    </div>
  );
}
