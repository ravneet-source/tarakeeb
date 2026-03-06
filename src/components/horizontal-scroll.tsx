"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLocaleText } from "@/components/localized-text";
import type { LocalizedString } from "@/lib/i18n";

type Panel = {
  image: string;
  title: LocalizedString;
  caption: LocalizedString;
};

type HorizontalScrollProps = {
  panels: Panel[];
};

export function HorizontalScroll({ panels }: HorizontalScrollProps) {
  const t = useLocaleText();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-132%"]);

  return (
    <>
      <section className="outer-padding md:hidden">
        <div className="space-y-6 py-16">
          {panels.map((panel) => (
            <article key={panel.image} className="relative overflow-hidden">
              <div className="relative h-[58vh] min-h-[360px]">
                <Image src={panel.image} alt={t(panel.title)} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="border border-t-0 border-[#E5DCD3] bg-[#FDFBF7] p-5">
                <p className="meta-text">{t(panel.title)}</p>
                <p className="mt-2 text-[#1A1A1A]">{t(panel.caption)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden h-[260vh] md:block">
        <div className="sticky top-0 overflow-hidden">
          <motion.div className="flex h-screen items-center gap-8 px-8 lg:px-12" style={{ x }}>
            {panels.map((panel) => (
              <article
                key={panel.image}
                className="relative h-[72vh] w-[80vw] shrink-0 overflow-hidden border border-[#E5DCD3]"
              >
                <Image src={panel.image} alt={t(panel.title)} fill sizes="80vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.58)] via-transparent to-transparent" />
                <div className="absolute bottom-0 p-8 text-[#F6EFE6]">
                  <p className="text-[1.75rem] uppercase tracking-[0.12em] leading-tight">
                    {t(panel.title)}
                  </p>
                  <p className="mt-3 max-w-md text-[1.75rem] leading-tight text-[#F1E8DD]">
                    {t(panel.caption)}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
