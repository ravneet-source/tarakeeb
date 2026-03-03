"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      {children}
    </MotionConfig>
  );
}
