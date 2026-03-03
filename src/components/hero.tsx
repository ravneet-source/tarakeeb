"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type HeroProps = {
  data: {
    video?: string;
    poster: string;
    headline?: string;
  };
};

export function Hero({ data }: HeroProps) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1.08, 1]);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="full-bleed relative isolate h-[92vh] min-h-[620px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        {data.video && !videoFailed ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={data.poster}
            onError={() => setVideoFailed(true)}
          >
            <source src={data.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={data.poster}
            alt="Tarakeeb hero editorial frame"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,13,0.75)] via-[rgba(20,16,13,0.28)] to-[rgba(20,16,13,0.15)]" />

      {data.headline ? (
        <div className="outer-padding relative z-10 mx-auto flex h-full max-w-[1500px] items-center justify-center text-center">
          <h1 className="hero-heading max-w-5xl text-[#F6EFE6]">{data.headline}</h1>
        </div>
      ) : null}

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-[#F6EFE6]"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
