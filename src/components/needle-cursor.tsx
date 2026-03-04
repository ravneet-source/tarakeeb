"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BASE_ANGLE = -22;
const IDLE_THREAD_PATH = "M14 30 C30 12 56 12 75 24 C66 22 58 24 51 30 C73 28 88 31 98 36";
const CLICK_THREAD_PATH = "M14 32 C30 18 56 18 75 27 C66 25 58 27 51 33 C73 30 88 34 98 39";

export function NeedleCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const rawX = useMotionValue(-220);
  const rawY = useMotionValue(-220);

  const x = useSpring(rawX, { stiffness: 520, damping: 42, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 520, damping: 42, mass: 0.2 });
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const finePointerMedia = window.matchMedia("(pointer: fine) and (hover: hover)");
    const updateEnabled = () => {
      setEnabled(finePointerMedia.matches);
    };

    updateEnabled();
    finePointerMedia.addEventListener("change", updateEnabled);

    return () => {
      finePointerMedia.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("needle-cursor-active");
      document.body.classList.remove("needle-cursor-active");
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("needle-cursor-active");
    document.body.classList.add("needle-cursor-active");

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      rawX.set(clientX);
      rawY.set(clientY);
      setVisible(true);
    };

    const onClick = () => {
      setIsClicking(true);

      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }

      clickTimer.current = setTimeout(() => {
        setIsClicking(false);
      }, 220);
    };

    const onLeave = () => {
      setVisible(false);
    };

    const onEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onClick);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("needle-cursor-active");
      document.body.classList.remove("needle-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }
    };
  }, [enabled, rawX, rawY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y, rotate: BASE_ANGLE }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div style={{ transform: "translate(-19px, -33px)" }}>
        <svg width="36" height="36" viewBox="0 0 108 108" role="presentation">
          <motion.path
            d={isClicking ? CLICK_THREAD_PATH : IDLE_THREAD_PATH}
            stroke="#FAF6F0"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.path
            d={isClicking ? CLICK_THREAD_PATH : IDLE_THREAD_PATH}
            stroke="#111111"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <ellipse cx="54" cy="40" rx="7.1" ry="10.8" fill="#FAF6F0" />
          <ellipse cx="54" cy="40" rx="5.1" ry="8.6" fill="#111111" />
          <ellipse cx="54" cy="40" rx="2.3" ry="4.8" fill="#FAF6F0" />

          <path d="M51 49 L48 84 L54 103 L60 84 L57 49 Z" fill="#FAF6F0" />
          <path d="M52 50 L50 84 L54 98 L58 84 L56 50 Z" fill="#111111" />

          <motion.circle
            cx="54"
            cy="98"
            r="4.6"
            fill="none"
            stroke="#FAF6F0"
            strokeWidth="1.6"
            animate={{
              opacity: isClicking ? 0.8 : 0,
              scale: isClicking ? 1.45 : 0.6,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ transformOrigin: "54px 98px" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
