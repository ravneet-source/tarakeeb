import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocalizedText } from "@/components/localized-text";
import { journalTeasers } from "@/data/homepage";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Tarakeeb journal: future editorial stories on craft, fabric, and cultural dialogue.",
};

export default function JournalPage() {
  return (
    <section className="outer-padding py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <LocalizedText text={{ en: "Journal", ar: "المجلة" }} as="p" className="meta-text" />
        <LocalizedText
          text={{ en: "Stories in Progress", ar: "حكايات قيد الإعداد" }}
          as="h1"
          className="section-heading mt-4"
        />
        <LocalizedText
          text={{
            en: "Our editorial journal will feature essays and process notes from the Tarakeeb world. The first stories are currently in preparation.",
            ar: "ستضم مجلتنا التحريرية مقالات وملاحظات عملية من عالم تركيب. والقصص الأولى قيد الإعداد حاليًا.",
          }}
          as="p"
          className="mt-4 max-w-2xl text-[#4A4A4A]"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {journalTeasers.map((item) => (
            <article key={item.image} className="space-y-4">
              <div className="relative h-[20rem] overflow-hidden border border-[#E5DCD3]">
                <Image
                  src={item.image}
                  alt="Journal preview"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <LocalizedText text={item.title} as="h2" className="font-serif text-2xl" />
              <Link href="#" className="text-sm uppercase tracking-[0.12em] text-[#4A4A4A]">
                <LocalizedText text={{ en: "Read more", ar: "اقرأ المزيد" }} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
