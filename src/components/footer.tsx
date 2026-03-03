import Link from "next/link";

export function Footer() {
  return (
    <footer className="outer-padding border-t border-[#E5DCD3] py-12">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="font-serif text-xl tracking-[0.2em] uppercase">Tarakeeb</p>
          <p className="meta-text">Inspired by Bahrain</p>
          <p className="max-w-md text-[#4A4A4A]">
            A Dialogue in Fabric. Conceived in Bahrain, Crafted Across Cultures.
          </p>
        </div>
        <div className="space-y-4 md:justify-self-end md:text-end">
          <Link
            href="https://instagram.com/tarakeeb.official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-transparent text-sm uppercase tracking-[0.16em] transition-colors hover:border-[#CBB8A5]"
          >
            @tarakeeb.official
          </Link>
          <p className="max-w-lg text-xs leading-6 text-[#4A4A4A] md:ms-auto">
            All garments are created using natural fabrics, hand weaving, and hand
            embroidery. Limited production and made-to-order practices ensure each piece
            retains its individuality and quiet sense of exclusivity.
          </p>
        </div>
      </div>
      <p className="outer-padding mx-auto mt-10 max-w-[1500px] text-xs uppercase tracking-[0.14em] text-[#4A4A4A]">
        © Tarakeeb {new Date().getFullYear()}
      </p>
    </footer>
  );
}
