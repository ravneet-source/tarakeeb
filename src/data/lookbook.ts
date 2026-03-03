export type LookbookItem = {
  title: string;
  fabric: string;
  image: string;
  layout: "large" | "medium" | "small";
};

export const lookbookItems: LookbookItem[] = [
  {
    title: "Signature Editorial Look",
    fabric: "Handwoven cotton-silk",
    image: "/images/lookbook-1.svg",
    layout: "large",
  },
  {
    title: "Strong Silhouette Piece",
    fabric: "Structured linen blend",
    image: "/images/lookbook-2.svg",
    layout: "medium",
  },
  {
    title: "Embroidered Detail",
    fabric: "Threaded organza",
    image: "/images/lookbook-3.svg",
    layout: "small",
  },
  {
    title: "Woven Textile Garment",
    fabric: "Bani Jamra weave",
    image: "/images/lookbook-4.svg",
    layout: "medium",
  },
  {
    title: "Jewel Tone Look",
    fabric: "Silk crepe",
    image: "/images/lookbook-5.svg",
    layout: "medium",
  },
  {
    title: "Neutral Soft Look",
    fabric: "Matte tencel",
    image: "/images/lookbook-6.svg",
    layout: "small",
  },
  {
    title: "Texture Study",
    fabric: "Hand-finished jacquard",
    image: "/images/lookbook-7.svg",
    layout: "small",
  },
  {
    title: "Movement Portrait",
    fabric: "Fluid wool-silk",
    image: "/images/lookbook-8.svg",
    layout: "large",
  },
];
