"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CraftStoryBlockProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

export function CraftStoryBlock({ title, text, image, reverse }: CraftStoryBlockProps) {
  return (
    <article
      className={cn(
        "grid items-center gap-10 py-16 lg:grid-cols-2",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <p className="meta-text font-bold">{title}</p>
        <p className="text-xl text-[#4A4A4A]">{text}</p>
      </motion.div>
      <motion.div
        className="relative h-[62vh] min-h-[420px] overflow-hidden border border-[#E5DCD3]"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </motion.div>
    </article>
  );
}
