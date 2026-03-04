import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { NeedleCursor } from "@/components/needle-cursor";
import { Navbar } from "@/components/navbar";
import { LanguageProvider } from "@/lib/context/language-context";
import "./globals.css";

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
      <body className="antialiased">
        <LanguageProvider>
          <MotionProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="pt-20">{children}</main>
              <Footer />
              <NeedleCursor />
            </div>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
