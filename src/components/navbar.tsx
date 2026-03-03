"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/context/language-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Made-to-Order", href: "/made-to-order" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale, dir, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500",
        isScrolled && "border-[#E5DCD3] bg-[#FDFBF7]/80 backdrop-blur-sm",
      )}
    >
      <nav className="outer-padding mx-auto flex h-20 max-w-[1500px] items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.26em] uppercase transition-opacity hover:opacity-80"
        >
          Tarakeeb
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm tracking-[0.08em] uppercase text-[#1A1A1A]"
              >
                {item.label}
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-[#CBB8A5]"
                    />
                  ) : null}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="hidden text-xs tracking-[0.18em] uppercase text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] md:block"
            aria-label="Toggle language"
          >
            <span className={locale === "en" ? "text-[#1A1A1A]" : ""}>EN</span>
            <span className="px-2 text-[#CBB8A5]">|</span>
            <span className={locale === "ar" ? "text-[#1A1A1A]" : ""}>AR</span>
          </button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === "rtl" ? "left" : "right"} className="px-6 pt-14">
              <div className="flex flex-col gap-6">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="self-start text-xs tracking-[0.18em] uppercase text-[#4A4A4A]"
                >
                  <span className={locale === "en" ? "text-[#1A1A1A]" : ""}>EN</span>
                  <span className="px-2 text-[#CBB8A5]">|</span>
                  <span className={locale === "ar" ? "text-[#1A1A1A]" : ""}>AR</span>
                </button>

                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-[#E5DCD3] pb-3 font-serif text-2xl tracking-[0.06em]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
