import type { Metadata } from "next";
import Link from "next/link";
import { LocalizedText } from "@/components/localized-text";
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
        <LocalizedText text={{ en: "Contact", ar: "تواصل معنا" }} as="p" className="meta-text" />
        <LocalizedText text={{ en: "Private Inquiries", ar: "استفسارات خاصة" }} as="h1" className="section-heading" />
        <LocalizedText
          text={{
            en: "For made-to-order appointments, collaborations, or editorial requests, please contact our team.",
            ar: "لحجوزات التفصيل حسب الطلب، أو التعاونات، أو الطلبات التحريرية، يرجى التواصل مع فريقنا.",
          }}
          as="p"
          className="text-[#1A1A1A]"
        />
        <div className="space-y-3 text-lg">
          <p>
            <LocalizedText text={{ en: "Email", ar: "البريد الإلكتروني" }} />:{" "}
            <Link href={`mailto:${contactInfo.email}`} className="border-b border-[#CBB8A5]">
              {contactInfo.email}
            </Link>
          </p>
          <p>
            <LocalizedText text={{ en: "Instagram", ar: "إنستغرام" }} />:{" "}
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
