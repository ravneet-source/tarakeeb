"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.992 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.996 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
