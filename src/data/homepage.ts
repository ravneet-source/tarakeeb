import type { LocalizedString } from "@/lib/i18n";

export const hero = {
  poster: "/images/12.png",
  headline: "",
  subtextLines: [
    `"A Dialogue in Fabric "`,
    `Conceived in Bahrain,`,
    `Crafted across Borders`
  ],
  subtextLinesAr: [
    `"حوار في النسيج"`,
    `وُلد في البحرين،`,
    `وتشكّل عبر الحدود`
  ],
};

export const introduction = {
  image: "/images/intro-man-15.png",
  heading: {
    en: `“There are garments that follow trends, at Tarakeeb garments carry memory ” KS`,
    ar: "«فيه أزياء تتبع الموجة، وفيه أزياء تحمل الذاكرة.»",
  } satisfies LocalizedString,
  body: {
    en: `Tarakeeb was conceived in Bahrain — shaped by its cultural depth, its artisans, and its enduring heritage. It was born from a belief that clothing should feel honest: natural in fabric, thoughtful in construction, and timeless in silhouette.

Each piece begins with pure textiles and evolves through hand weaving and hand embroidery. Some fabrics are woven in Bahrain, honouring traditional techniques such as those of Bani Jamra; others are carefully sourced and enriched through artisanal craftsmanship across regions.`,
    ar: `وُلدت تركيب في البحرين، وتشكّلت بهويتها الثقافية، وبحرفييها، وبإرثها المستمر. وانطلقت من قناعة بأن اللباس لازم يكون صادقًا: طبيعيًا في خامته، مدروسًا في بنائه، وخالدًا في خطّه.

كل قطعة تبدأ من نسيج نقي، وتتطور عبر الحياكة اليدوية والتطريز اليدوي. بعض الأقمشة تُنسج في البحرين، وفاءً لتقنيات أصيلة مثل حرفة بني جمرة، وأخرى تُنتقى بعناية وتُثريها الحرفية اليدوية عبر مناطق مختلفة.`,
  } satisfies LocalizedString,
};

export const introductionReverse = {
  image: "/images/frame-16.png",
  heading: {
    en: `“Tarakeeb is not only about design, It is an artisanal dialogue ” KS`,
    ar: `«تركيب ليست مجرد تصميم، إنها حوار حرفي» KS`,
  } satisfies LocalizedString,
  body: {
    en: `Between craft and culture.
Between tradition and contemporary expression.
Between the hands that create and the women who wear.`,
    ar: `بين الحرفة والثقافة.
بين الأصالة والتعبير المعاصر.
بين الأيدي التي تُبدع والنساء اللواتي يرتدين.`,
  } satisfies LocalizedString,
};

export const craftPanels = [
  {
    image: "/images/loom-17.png",
    title: {
      en: "Hand-weaving in Bani Jamra",
      ar: "الحياكة اليدوية في بني جمرة",
    } satisfies LocalizedString,
    caption: {
      en: "A living technique shaped by rhythm, patience, and inherited skill.",
      ar: "حرفة حيّة تتشكل بالإيقاع والصبر والمهارة المتوارثة.",
    } satisfies LocalizedString,
  },
  {
    image: "/images/embroidery-19.png",
    title: {
      en: "Hand Embroidery",
      ar: "تطريز يدوي",
    } satisfies LocalizedString,
    caption: {
      en: "Precise threadwork that turns surface into story.",
      ar: "غرز دقيقة تحول السطح إلى حكاية.",
    } satisfies LocalizedString,
  },
  {
    image: "/images/signature-19.png",
    title: {
      en: "Signature Finishes",
      ar: "لمسات نهائية مميزة",
    } satisfies LocalizedString,
    caption: {
      en: "Subtle cuffs and seams that reveal the hand behind the garment.",
      ar: "أكمام وخياطات هادئة تكشف أثر اليد خلف القطعة.",
    } satisfies LocalizedString,
  },
];

export const quote = {
  en: "“In a world of excess, Tarakeeb chooses intention.”",
  ar: "«في عالم الوفرة، تختار تركيب المعنى المقصود.»",
} satisfies LocalizedString;

export const exclusivity = {
  image: "/images/exclusivity-1221.png",
  body: {
    en: "",
    ar: "",
  } satisfies LocalizedString,
  cta: {
    label: {
      en: "Discover the Collection",
      ar: "اكتشف المجموعة",
    } satisfies LocalizedString,
    href: "/lookbook",
  },
};

export const journalTeasers = [
  {
    image: "/images/journal-1.svg",
    title: {
      en: "The Language of Natural Fibres",
      ar: "لغة الألياف الطبيعية",
    } satisfies LocalizedString,
    href: "/journal",
  },
  {
    image: "/images/journal-2.svg",
    title: {
      en: "Inside the Bani Jamra Looms",
      ar: "داخل أنوال بني جمرة",
    } satisfies LocalizedString,
    href: "/journal",
  },
  {
    image: "/images/journal-3.svg",
    title: {
      en: "Embroidery as Slow Luxury",
      ar: "التطريز كفخامة بطيئة",
    } satisfies LocalizedString,
    href: "/journal",
  },
];
