import type { Metadata } from "next";
import { LocalizedText } from "@/components/localized-text";

export const metadata: Metadata = {
  title: "Amira",
  description: "Amira by Tarakeeb - Coming Soon",
};

export default function AmiraPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center outer-padding pt-32 pb-20">
      <div className="relative overflow-hidden border border-[#E5DCD3] bg-[#FDFBF7] p-16 md:p-24 text-center max-w-4xl w-full shadow-sm">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#CBB8A5]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#CBB8A5]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#CBB8A5]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#CBB8A5]" />
        
        <div className="space-y-8 relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.1em] text-[#1A1A1A] uppercase">
            <LocalizedText text={{ en: "Amira", ar: "أميرة" }} />
          </h1>
          
          <div className="h-px w-24 bg-[#CBB8A5] mx-auto" />
          
          <p className="font-serif text-2xl md:text-3xl italic text-[#1A1A1A]/80 tracking-widest">
            <LocalizedText text={{ en: "Coming Soon", ar: "قريباً" }} />
          </p>
          
          <p className="max-w-md mx-auto text-sm tracking-[0.2em] uppercase text-[#1A1A1A]/60 pt-4">
            <LocalizedText 
              text={{ 
                en: "A new dialogue in artisanal elegance", 
                ar: "حوار جديد في الأناقة الحرفية" 
              }} 
            />
          </p>
        </div>
      </div>
    </div>
  );
}
