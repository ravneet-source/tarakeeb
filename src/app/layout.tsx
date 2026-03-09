import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { LanguageProvider } from "@/lib/context/language-context";
import { Cormorant_Garamond, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarakeeb.vercel.app"),
  title: {
    default: "Tarakeeb | A Dialogue in Fabric",
    template: "%s | Tarakeeb",
  },
  description:
    "Luxury artisanal clothing from Bahrain. Tarakeeb presents a digital lookbook of craftsmanship, heritage, and limited-edition collections.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`antialiased ${cormorantGaramond.variable} ${notoNaskhArabic.variable}`}>
        <LanguageProvider>
          <MotionProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="pt-20">{children}</main>
              <Footer />
            </div>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
