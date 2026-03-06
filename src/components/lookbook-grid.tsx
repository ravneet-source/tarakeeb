"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLocaleText } from "@/components/localized-text";
import type { LookbookItem } from "@/data/lookbook";
import type { LocalizedString } from "@/lib/i18n";

type LookbookGridProps = {
  items: LookbookItem[];
};

function fileNameFromPath(path: string) {
  const base = path.split("/").pop() || path;
  return base.replace(/\.pdf$/i, "");
}

function buildCoverPath(item: LookbookItem) {
  if (item.cover) return item.cover;
  const fileName = fileNameFromPath(item.file);
  return `/lookbooks/covers/${fileName}.png`;
}

export function LookbookGrid({ items }: LookbookGridProps) {
  const t = useLocaleText();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const normalized = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        label: item.title?.trim() || fileNameFromPath(item.file),
        coverSrc: encodeURI(buildCoverPath(item)),
        fileSrc: encodeURI(item.file),
      })),
    [items],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  if (!normalized.length) {
    return (
      <div className="rounded-none border border-dashed border-[#CBB8A5] bg-[#F6EFE6] p-10 text-center">
        <p className="font-serif text-3xl text-[#1A1A1A]">
          {t({
            en: "No Catalog PDFs Added Yet",
            ar: "لم تتم إضافة ملفات كتالوج بعد",
          } satisfies LocalizedString)}
        </p>
        <p className="mt-3 text-lg text-[#4A4A4A]">
          {t({
            en: "Add PDFs to public/lookbooks, then list them in src/data/lookbook.ts.",
            ar: "أضف ملفات PDF داخل public/lookbooks ثم أدرجها في src/data/lookbook.ts.",
          } satisfies LocalizedString)}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {normalized.map((item, index) => (
          <motion.button
            key={item.file}
            type="button"
            onClick={() => setActiveIndex(index)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group overflow-hidden border border-[#DCCBB8] bg-[#F8F2EA] text-left"
          >
            <div className="relative h-[24rem] w-full overflow-hidden border-b border-[#DCCBB8] bg-[#EFE6DA] p-2">
              <img
                src={item.coverSrc}
                alt={`${item.label} cover`}
                loading="lazy"
                className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            <div className="p-4">
              <p className="font-serif text-2xl font-semibold text-[#1A1A1A]">{item.label}</p>
              <p className="meta-text mt-2">
                {t({ en: "Open Catalogue", ar: "افتح الكتالوج" } satisfies LocalizedString)}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-[rgba(20,16,13,0.78)] p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-[1400px] flex-col border border-[#DCCBB8] bg-[#F6EFE6]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#DCCBB8] px-4 py-3 md:px-6">
                <p className="font-serif text-2xl text-[#1A1A1A]">{normalized[activeIndex].label}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={normalized[activeIndex].fileSrc}
                    download
                    className="border border-[#CBB8A5] px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#1A1A1A]"
                  >
                    {t({ en: "Download", ar: "تحميل" } satisfies LocalizedString)}
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="border border-[#CBB8A5] px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#1A1A1A]"
                  >
                    {t({ en: "Close", ar: "إغلاق" } satisfies LocalizedString)}
                  </button>
                </div>
              </div>
              <div className="h-full min-h-0 p-2 md:p-4">
                <iframe
                  title={`${normalized[activeIndex].label} catalog`}
                  src={`${normalized[activeIndex].fileSrc}#page=1&view=FitH`}
                  className="h-full w-full border border-[#DCCBB8] bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
