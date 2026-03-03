import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <p className="meta-text">Journal</p>
        <h1 className="section-heading mt-4">Stories in Progress</h1>
        <p className="mt-4 max-w-2xl text-[#4A4A4A]">
          Our editorial journal will feature essays and process notes from the Tarakeeb
          world. The first stories are currently in preparation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {journalTeasers.map((item) => (
            <article key={item.title} className="space-y-4">
              <div className="relative h-[20rem] overflow-hidden border border-[#E5DCD3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="font-serif text-2xl">{item.title}</h2>
              <Link href="#" className="text-sm uppercase tracking-[0.12em] text-[#4A4A4A]">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
