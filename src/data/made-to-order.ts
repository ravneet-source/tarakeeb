import type { LocalizedString } from "@/lib/i18n";

export const madeToOrderHero = {
  image: "/images/mto-hero-13.png",
  title: {
    en: "Made-to-Order",
    ar: "تفصيل حسب الطلب",
  } satisfies LocalizedString,
  body: {
    en: "Made-to-order allows each garment to be shaped with care, ensuring individuality remains at the heart of every creation.",
    ar: "خدمة التفصيل حسب الطلب تمنح كل قطعة عناية خاصة، لتبقى الفردية في قلب كل إبداع.",
  } satisfies LocalizedString,
};

export const processSteps = [
  {
    step: "01",
    title: {
      en: "Consultation",
      ar: "الاستشارة",
    } satisfies LocalizedString,
    detail: {
      en: "We begin with a personal conversation to understand your wardrobe needs, preferred silhouettes, and occasion.",
      ar: "نبدأ بحوار شخصي لفهم احتياجاتك، والخطوط التي تفضلينها، والمناسبة المطلوبة.",
    } satisfies LocalizedString,
  },
  {
    step: "02",
    title: {
      en: "Fabric Selection",
      ar: "اختيار القماش",
    } satisfies LocalizedString,
    detail: {
      en: "A considered edit of natural fabrics, textures, and tones is curated to match your lifestyle and expression.",
      ar: "ننتقي لكِ مجموعة مدروسة من الأقمشة الطبيعية والخامات والألوان بما يناسب أسلوب حياتك وتعبيرك الشخصي.",
    } satisfies LocalizedString,
  },
  {
    step: "03",
    title: {
      en: "Fitting & Delivery",
      ar: "القياس والتسليم",
    } satisfies LocalizedString,
    detail: {
      en: "The final garment is refined through fitting and delivered with full attention to comfort, proportion, and finish.",
      ar: "تُراجع القطعة النهائية عبر القياس الدقيق وتُسلّم مع اهتمام كامل بالراحة والتناسب واللمسة الأخيرة.",
    } satisfies LocalizedString,
  },
];
