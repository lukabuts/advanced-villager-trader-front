export const VILLAGER_LINES = [
  "Hmm... Hmm...",
  "I have no memory of this place.",
  "Have you tried turning it off and on again?",
  "I only trade enchanted books, not lost pages.",
  "This path leads nowhere. Like my trades at sunrise.",
  "404 emeralds could not find this page.",
];

export const PROFESSIONS = [
  "Armorer",
  "Butcher",
  "Cartographer",
  "Cleric",
  "Farmer",
  "Fisherman",
  "Fletcher",
  "Leatherworker",
  "Librarian",
  "Mason",
  "Shepherd",
  "Toolsmith",
  "Weaponsmith",
  "Nitwit",
] as const;

export const PROF_EMOJI = {
  Armorer: "⚔",
  Butcher: "🥩",
  Cartographer: "🗺",
  Cleric: "⚗",
  Farmer: "🌾",
  Fisherman: "🎣",
  Fletcher: "🏹",
  Leatherworker: "🧥",
  Librarian: "📚",
  Mason: "🪨",
  Shepherd: "🐑",
  Toolsmith: "🔧",
  Weaponsmith: "🗡",
  Nitwit: "🥬",
} as const;

export const PROF_COLORS = {
  Armorer: "#7F8C8D",
  Butcher: "#C0392B",
  Cartographer: "#E67E22",
  Cleric: "#8E44AD",
  Farmer: "#27AE60",
  Fisherman: "#2980B9",
  Fletcher: "#8B6340",
  Leatherworker: "#A04000",
  Librarian: "#9B59B6",
  Mason: "#95A5A6",
  Shepherd: "#F39C12",
  Toolsmith: "#7F8C8D",
  Weaponsmith: "#7F8C8D",
  Nitwit: "#27AE60",
} as const;

export type Profession = keyof typeof PROF_EMOJI;
