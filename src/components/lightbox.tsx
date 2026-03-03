"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { LookbookItem } from "@/data/lookbook";

type LightboxProps = {
  items: LookbookItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function Lightbox({ items, activeIndex, onClose, onPrevious, onNext }: LightboxProps) {
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const currentIndex = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {activeItem ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(20,16,13,0.92)] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute end-5 top-5 border border-[#E5DCD3] p-2 text-[#F6EFE6] transition-colors hover:bg-[#CBB8A5]/30"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            className="absolute start-5 top-1/2 hidden -translate-y-1/2 border border-[#E5DCD3] p-2 text-[#F6EFE6] transition-colors hover:bg-[#CBB8A5]/30 md:block"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            className="absolute end-5 top-1/2 hidden -translate-y-1/2 border border-[#E5DCD3] p-2 text-[#F6EFE6] transition-colors hover:bg-[#CBB8A5]/30 md:block"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="size-5" />
          </button>

          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            onClick={(event) => event.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) onNext();
              if (info.offset.x > 100) onPrevious();
            }}
          >
            <div className="relative h-[72vh] w-full overflow-hidden border border-[#E5DCD3]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 text-[#F6EFE6]">
              <div>
                <p className="font-serif text-2xl">{activeItem.title}</p>
                <p className="meta-text mt-2 !text-[#DCCBB8]">{activeItem.fabric}</p>
              </div>
              <p className="meta-text !text-[#DCCBB8]">
                {currentIndex + 1}/{items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
