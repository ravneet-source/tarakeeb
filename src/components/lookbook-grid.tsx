"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { LookbookItem } from "@/data/lookbook";

type LookbookGridProps = {
  items: LookbookItem[];
};

function fileNameFromPath(path: string) {
  const base = path.split("/").pop() || path;
  return base.replace(/\.pdf$/i, "");
}

export function LookbookGrid({ items }: LookbookGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const normalized = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        label: item.title?.trim() || fileNameFromPath(item.file),
      })),
    [items],
  );

  if (!normalized.length) {
    return (
      <div className="rounded-none border border-dashed border-[#CBB8A5] bg-[#F6EFE6] p-10 text-center">
        <p className="font-serif text-3xl text-[#1A1A1A]">No Catalog PDFs Added Yet</p>
        <p className="mt-3 text-lg text-[#4A4A4A]">
          Add PDFs to <code>public/lookbooks</code>, then list them in <code>src/data/lookbook.ts</code>.
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
            <div className="relative h-[24rem] w-full overflow-hidden border-b border-[#DCCBB8] bg-[#EFE6DA]">
              <iframe
                title={`${item.label} preview`}
                src={`${item.file}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                className="pointer-events-none h-full w-full"
              />
            </div>
            <div className="p-4">
              <p className="font-serif text-2xl font-semibold text-[#1A1A1A]">{item.label}</p>
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
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="border border-[#CBB8A5] px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#1A1A1A]"
                >
                  Close
                </button>
              </div>
              <div className="h-full min-h-0 p-2 md:p-4">
                <iframe
                  title={`${normalized[activeIndex].label} catalog`}
                  src={`${normalized[activeIndex].file}#page=1&view=FitH`}
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
