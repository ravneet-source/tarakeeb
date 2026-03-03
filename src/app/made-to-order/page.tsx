import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionReveal } from "@/components/section-reveal";
import { madeToOrderHero, processSteps } from "@/data/made-to-order";

export const metadata: Metadata = {
  title: "Made-to-Order",
  description:
    "Tarakeeb made-to-order service: consultation, fabric selection, and final fitting with artisanal precision.",
};

export default function MadeToOrderPage() {
  return (
    <>
      <section className="full-bleed relative h-[62vh] min-h-[420px] overflow-hidden">
        <Image
          src={madeToOrderHero.image}
          alt={madeToOrderHero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,13,0.62)] to-[rgba(20,16,13,0.24)]" />
        <div className="outer-padding relative z-10 mx-auto flex h-full max-w-[1500px] items-end pb-12">
          <h1 className="hero-heading max-w-4xl text-[#F6EFE6]">{madeToOrderHero.title}</h1>
        </div>
      </section>

      <SectionReveal className="outer-padding py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="max-w-3xl text-xl text-[#4A4A4A]">{madeToOrderHero.body}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.step} className="border border-[#E5DCD3] p-6">
                <p className="meta-text">{step.step}</p>
                <h2 className="mt-4 font-serif text-3xl">{step.title}</h2>
                <p className="mt-4 text-[#4A4A4A]">{step.detail}</p>
              </article>
            ))}
          </div>

          <InquiryForm />
        </div>
      </SectionReveal>
    </>
  );
}
