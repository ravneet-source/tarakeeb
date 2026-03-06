import type { LocalizedString } from "@/lib/i18n";

export const hero = {
  poster: "/images/hero-13-new.png",
  headline: "",
};

export const introduction = {
  image: "/images/intro-man-15.png",
  heading: {
    en: "“There are garments that follow trends. And there are garments that carry memory.”",
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
    en: `“Tarakeeb is not simply about design.
It is about dialogue.”`,
    ar: `«تركيب ليست مجرد تصميم.
إنها حوار.»`,
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
    en: `Ready-to-wear pieces are released in limited numbers — no more than three per design and colour — preserving exclusivity and personal connection.

Select collections are entirely hand embroidered and created as singular works.

Made-to-order allows each garment to be shaped with care, ensuring individuality remains at the heart of every creation.`,
    ar: `تُطرح قطع الجاهز بأعداد محدودة — بحد أقصى ثلاث قطع لكل تصميم ولون — للحفاظ على الخصوصية والارتباط الشخصي.

بعض المجموعات تُنفذ بالكامل بتطريز يدوي وتُقدّم كقطع فريدة.

وخدمة التفصيل حسب الطلب تمنح كل قطعة عناية خاصة، لتبقى الفردية في قلب كل إبداع.`,
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
