import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tarakeeb for private inquiries, made-to-order consultations, and atelier appointments.",
};

export default function ContactPage() {
  return (
    <section className="outer-padding py-24 md:py-32">
      <div className="mx-auto max-w-3xl space-y-6 border border-[#E5DCD3] p-8 md:p-12">
        <p className="meta-text">Contact</p>
        <h1 className="section-heading">Private Inquiries</h1>
        <p className="text-[#4A4A4A]">
          For made-to-order appointments, collaborations, or editorial requests, please
          contact our team.
        </p>
        <div className="space-y-3 text-lg">
          <p>
            Email:{" "}
            <Link href={`mailto:${contactInfo.email}`} className="border-b border-[#CBB8A5]">
              {contactInfo.email}
            </Link>
          </p>
          <p>
            Instagram:{" "}
            <Link
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#CBB8A5]"
            >
              @tarakeeb.official
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
