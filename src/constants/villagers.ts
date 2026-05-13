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
} as const;

export const ENCHANTED_BOOKS = {
  // Sword
  Sharpness: 5,
  Smite: 5,
  "Bane of Arthropods": 5,
  "Sweeping Edge": 3,
  "Fire Aspect": 2,
  Knockback: 2,
  Looting: 3,

  // Mace
  Density: 5,
  Breach: 4,

  // Tools
  Efficiency: 5,
  Unbreaking: 3,
  Fortune: 3,
  "Silk Touch": 1,

  // Armor
  Protection: 4,
  "Blast Protection": 4,
  "Fire Protection": 4,
  "Projectile Protection": 4,
  Thorns: 3,
  "Aqua Affinity": 1,
  "Depth Strider": 3,
  "Feather Falling": 4,
  "Frost Walker": 2,
  Respiration: 3,

  // Bow
  Power: 5,
  Punch: 2,
  Flame: 1,
  Infinity: 1,

  // Crossbow
  Multishot: 1,
  Piercing: 4,
  "Quick Charge": 3,

  // Trident
  Impaling: 5,
  Loyalty: 3,
  Riptide: 3,
  Channeling: 1,

  // Fishing Rod
  "Luck of the Sea": 3,
  Lure: 3,

  // Universal
  Mending: 1,
  "Curse of Binding": 1,
  "Curse of Vanishing": 1,
};

export const VILLAGER_TRADES = {
  armorer: {
    buy: [
      "Iron Helmet",
      "Iron Chestplate",
      "Iron Leggings",
      "Iron Boots",
      "Bell",
      "Chainmail Leggings",
      "Chainmail Boots",
      "Chainmail Helmet",
      "Chainmail Chestplate",
      "Shield",
      "Enchanted Diamond Leggings",
      "Enchanted Diamond Boots",
      "Enchanted Diamond Helmet",
      "Enchanted Diamond Chestplate",
    ],

    sell: [
      { name: "Coal", quantity: 15 },
      { name: "Iron Ingot", quantity: 4 },
      { name: "Lava Bucket", quantity: 1 },
      { name: "Diamond", quantity: 1 },
    ],
  },

  butcher: {
    buy: ["Rabbit Stew", "Cooked Porkchop", "Cooked Chicken"],

    sell: [
      { name: "Raw Chicken", quantity: 14 },
      { name: "Coal", quantity: 15 },
      { name: "Raw Porkchop", quantity: 7 },
      { name: "Raw Rabbit", quantity: 4 },
      { name: "Raw Beef", quantity: 10 },
      { name: "Dried Kelp Block", quantity: 10 },
      { name: "Sweet Berries", quantity: 10 },
    ],
  },

  cartographer: {
    buy: [
      "Empty Map",
      "Explorer Map",
      "Ocean Explorer Map",
      "Trial Explorer Map",
      "Item Frame",
      "Banner",
      "Globe Banner Pattern",
      "Woodland Explorer Map",
    ],

    sell: [
      { name: "Paper", quantity: 24 },
      { name: "Glass Pane", quantity: 11 },
      { name: "Compass", quantity: 1 },
    ],
  },

  cleric: {
    buy: [
      "Redstone Dust",
      "Lapis Lazuli",
      "Glowstone",
      "Ender Pearl",
      "Bottle o' Enchanting",
    ],

    sell: [
      { name: "Rotten Flesh", quantity: 32 },
      { name: "Gold Ingot", quantity: 3 },
      { name: "Rabbit's Foot", quantity: 2 },
      { name: "Turtle Scute", quantity: 4 },
      { name: "Glass Bottle", quantity: 9 },
      { name: "Nether Wart", quantity: 22 },
    ],
  },

  farmer: {
    buy: [
      "Bread",
      "Pumpkin Pie",
      "Apple",
      "Cookie",
      "Suspicious Stew",
      "Cake",
      "Golden Carrot",
      "Glistering Melon Slice",
    ],

    sell: [
      { name: "Wheat", quantity: 20 },
      { name: "Potato", quantity: 26 },
      { name: "Carrot", quantity: 22 },
      { name: "Beetroot", quantity: 15 },
      { name: "Pumpkin", quantity: 6 },
      { name: "Melon", quantity: 4 },
    ],
  },

  fisherman: {
    buy: [
      "Bucket of Cod",
      "Cooked Cod",
      "Campfire",
      "Cooked Salmon",
      "Enchanted Fishing Rod",
      "Boat",
    ],

    sell: [
      { name: "String", quantity: 20 },
      { name: "Coal", quantity: 10 },
      { name: "Raw Cod", quantity: 15 },
      { name: "Raw Salmon", quantity: 13 },
      { name: "Tropical Fish", quantity: 6 },
      { name: "Pufferfish", quantity: 4 },
    ],
  },

  fletcher: {
    buy: [
      "Arrow",
      "Flint",
      "Bow",
      "Crossbow",
      "Enchanted Bow",
      "Enchanted Crossbow",
      "Tipped Arrow",
    ],

    sell: [
      { name: "Stick", quantity: 32 },
      { name: "Flint", quantity: 26 },
      { name: "String", quantity: 14 },
      { name: "Feather", quantity: 24 },
      { name: "Tripwire Hook", quantity: 8 },
    ],
  },

  leatherworker: {
    buy: [
      "Leather Pants",
      "Leather Tunic",
      "Leather Cap",
      "Leather Boots",
      "Leather Horse Armor",
      "Saddle",
    ],

    sell: [
      { name: "Leather", quantity: 6 },
      { name: "Flint", quantity: 26 },
      { name: "Rabbit Hide", quantity: 9 },
      { name: "Turtle Scute", quantity: 4 },
    ],
  },

  librarian: {
    buy: [
      //books
      "Sharpness",
      "Smite",
      "Bane of Arthropods",
      "Sweeping Edge",
      "Fire Aspect",
      "Knockback",
      "Looting",
      "Density",
      "Breach",
      "Efficiency",
      "Unbreaking",
      "Fortune",
      "Silk Touch",
      "Protection",
      "Blast Protection",
      "Fire Protection",
      "Projectile Protection",
      "Thorns",
      "Aqua Affinity",
      "Depth Strider",
      "Feather Falling",
      "Frost Walker",
      "Respiration",
      "Power",
      "Punch",
      "Flame",
      "Infinity",
      "Multishot",
      "Piercing",
      "Quick Charge",
      "Impaling",
      "Loyalty",
      "Riptide",
      "Channeling",
      "Luck of the Sea",
      "Lure",
      "Mending",
      "Curse of Binding",
      "Curse of Vanishing",

      //rest
      "Bookshelf",
      "Lantern",
      "Glass",
      "Compass",
      "Clock",
      "Red Candle",
      "Yellow Candle",
    ],

    sell: [
      { name: "Paper", quantity: 24 },
      { name: "Book", quantity: 4 },
      { name: "Ink Sac", quantity: 5 },
      { name: "Book and Quill", quantity: 1 },
    ],
  },

  mason: {
    buy: [
      "Brick",
      "Chiseled Stone Bricks",
      "Dripstone Block",
      "Polished Andesite",
      "Polished Diorite",
      "Polished Granite",
      "Any Color Terracotta",
      "Any Color Glazed Terracotta",
      "Quartz Pillar",
      "Block of Quartz",
    ],

    sell: [
      { name: "Clay Ball", quantity: 10 },
      { name: "Stone", quantity: 20 },
      { name: "Granite", quantity: 16 },
      { name: "Andesite", quantity: 16 },
      { name: "Diorite", quantity: 16 },
      { name: "Nether Quartz", quantity: 12 },
    ],
  },

  shepherd: {
    buy: [
      "Shears",
      "Any Color Wool",
      "Any Color Carpet",
      "Any Color Bed",
      "Any Color Banner",
      "Painting",
    ],

    sell: [
      { name: "White Wool", quantity: 18 },
      { name: "Brown Wool", quantity: 18 },
      { name: "Black Wool", quantity: 18 },
      { name: "Gray Wool", quantity: 18 },
      { name: "White Dye", quantity: 12 },
      { name: "Gray Dye", quantity: 12 },
      { name: "Black Dye", quantity: 12 },
      { name: "Light Blue Dye", quantity: 12 },
      { name: "Lime Dye", quantity: 12 },
      { name: "Yellow Dye", quantity: 12 },
      { name: "Light Gray Dye", quantity: 12 },
      { name: "Orange Dye", quantity: 12 },
      { name: "Red Dye", quantity: 12 },
      { name: "Pink Dye", quantity: 12 },
      { name: "Brown Dye", quantity: 12 },
      { name: "Purple Dye", quantity: 12 },
      { name: "Blue Dye", quantity: 12 },
      { name: "Green Dye", quantity: 12 },
      { name: "Magenta Dye", quantity: 12 },
      { name: "Cyan Dye", quantity: 12 },
    ],
  },

  toolsmith: {
    buy: [
      "Stone Axe",
      "Stone Shovel",
      "Stone Pickaxe",
      "Stone Hoe",
      "Bell",
      "Enchanted Iron Axe",
      "Enchanted Iron Shovel",
      "Enchanted Iron Pickaxe",
      "Diamond Hoe",
      "Enchanted Diamond Axe",
      "Enchanted Diamond Shovel",
      "Enchanted Diamond Pickaxe",
    ],

    sell: [
      { name: "Coal", quantity: 15 },
      { name: "Iron Ingot", quantity: 4 },
      { name: "Flint", quantity: 30 },
      { name: "Diamond", quantity: 1 },
    ],
  },

  weaponsmith: {
    buy: [
      "Iron Axe",
      "Enchanted Iron Sword",
      "Bell",
      "Enchanted Diamond Axe",
      "Enchanted Diamond Sword",
    ],

    sell: [
      { name: "Coal", quantity: 15 },
      { name: "Iron Ingot", quantity: 4 },
      { name: "Flint", quantity: 24 },
      { name: "Diamond", quantity: 1 },
    ],
  },
};

export type Profession = keyof typeof PROF_EMOJI;
