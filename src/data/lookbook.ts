export type LookbookItem = {
  file: string;
  title?: string;
  cover?: string;
};

// Add your catalog PDFs under /public/lookbooks and list them here.
// Example: /public/lookbooks/Resort-2026.pdf -> file: "/lookbooks/Resort-2026.pdf"
export const lookbookItems: LookbookItem[] = [
  { file: "/lookbooks/Aaliyah.pdf" },
  { file: "/lookbooks/Naya.pdf" },
  { file: "/lookbooks/Conversations.pdf" },
  { file: "/lookbooks/Legacy of Craft.pdf" },
  { file: "/lookbooks/Be Bahrain.pdf" },
  { file: "/lookbooks/Ramadan & Beyond.pdf" },
];
