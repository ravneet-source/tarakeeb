"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import type { LookbookItem } from "@/data/lookbook";
import { cn } from "@/lib/utils";

type LookbookGridProps = {
  items: LookbookItem[];
};

export function LookbookGrid({ items }: LookbookGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            className={cn(
              "group relative overflow-hidden border border-[#E5DCD3] text-start",
              item.layout === "large" && "md:col-span-2 md:row-span-2",
            )}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={cn(
                "relative w-full",
                item.layout === "large" && "h-[36rem]",
                item.layout === "medium" && "h-[28rem]",
                item.layout === "small" && "h-[22rem]",
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.58)] via-[rgba(26,26,26,0)] to-[rgba(26,26,26,0)] opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 p-5 text-[#F6EFE6] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-serif text-xl">{item.title}</p>
                <p className="meta-text mt-1 !text-[#DCCBB8]">{item.fabric}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrevious={() => {
          setActiveIndex((current) => {
            if (current === null) return 0;
            return current === 0 ? items.length - 1 : current - 1;
          });
        }}
        onNext={() => {
          setActiveIndex((current) => {
            if (current === null) return 0;
            return current === items.length - 1 ? 0 : current + 1;
          });
        }}
      />
    </>
  );
}
