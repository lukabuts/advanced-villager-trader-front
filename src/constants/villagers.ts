export const VILLAGER_LINES = [
  "Hmm... Hmm...",
  "I have no memory of this place.",
  "Have you tried turning it off and on again?",
  "I only trade enchanted books, not lost pages.",
  "This path leads nowhere. Like my trades at sunrise.",
  "404 emeralds could not find this page.",
];

export const PROFESSIONS = [
  "armorer",
  "butcher",
  "cartographer",
  "cleric",
  "farmer",
  "fisherman",
  "fletcher",
  "leatherworker",
  "librarian",
  "mason",
  "shepherd",
  "toolsmith",
  "weaponsmith",
] as const;

export const PROF_EMOJI = {
  armorer: "⚔",
  butcher: "🥩",
  cartographer: "🗺",
  cleric: "⚗",
  farmer: "🌾",
  fisherman: "🎣",
  fletcher: "🏹",
  leatherworker: "🧥",
  librarian: "📚",
  mason: "🪨",
  shepherd: "🐑",
  toolsmith: "🔧",
  weaponsmith: "🗡",
} as const;

export const PROF_COLORS = {
  armorer: "#7F8C8D",
  butcher: "#C0392B",
  cartographer: "#E67E22",
  cleric: "#8E44AD",
  farmer: "#27AE60",
  fisherman: "#2980B9",
  fletcher: "#8B6340",
  leatherworker: "#A04000",
  librarian: "#9B59B6",
  mason: "#95A5A6",
  shepherd: "#F39C12",
  toolsmith: "#7F8C8D",
  weaponsmith: "#7F8C8D",
} as const;

export const ENCHANTED_BOOKS = {
  sharpness: 5,
  smite: 5,
  bane_of_arthropods: 5,
  sweeping_edge: 3,
  fire_aspect: 2,
  knockback: 2,
  looting: 3,

  density: 5,
  breach: 4,

  efficiency: 5,
  unbreaking: 3,
  fortune: 3,
  silk_touch: 1,

  protection: 4,
  blast_protection: 4,
  fire_protection: 4,
  projectile_protection: 4,
  thorns: 3,
  aqua_affinity: 1,
  depth_strider: 3,
  feather_falling: 4,
  frost_walker: 2,
  respiration: 3,

  power: 5,
  punch: 2,
  flame: 1,
  infinity: 1,

  multishot: 1,
  piercing: 4,
  quick_charge: 3,

  impaling: 5,
  loyalty: 3,
  riptide: 3,
  channeling: 1,

  luck_of_the_sea: 3,
  lure: 3,

  mending: 1,
  curse_of_binding: 1,
  curse_of_vanishing: 1,
} as const;

export const VILLAGER_TRADES = {
  armorer: {
    buy: [
      { id: "iron_helmet", name: "Iron Helmet", quantity: 1 },
      { id: "iron_chestplate", name: "Iron Chestplate", quantity: 1 },
      { id: "iron_leggings", name: "Iron Leggings", quantity: 1 },
      { id: "iron_boots", name: "Iron Boots", quantity: 1 },
      { id: "bell", name: "Bell", quantity: 1 },
      { id: "chainmail_leggings", name: "Chainmail Leggings", quantity: 1 },
      { id: "chainmail_boots", name: "Chainmail Boots", quantity: 1 },
      { id: "chainmail_helmet", name: "Chainmail Helmet", quantity: 1 },
      { id: "chainmail_chestplate", name: "Chainmail Chestplate", quantity: 1 },
      { id: "shield", name: "Shield", quantity: 1 },
      {
        id: "enchanted_diamond_leggings",
        name: "Enchanted Diamond Leggings",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_boots",
        name: "Enchanted Diamond Boots",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_helmet",
        name: "Enchanted Diamond Helmet",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_chestplate",
        name: "Enchanted Diamond Chestplate",
        quantity: 1,
      },
    ],

    sell: [
      { id: "coal", name: "Coal", quantity: 15 },
      { id: "iron_ingot", name: "Iron Ingot", quantity: 4 },
      { id: "lava_bucket", name: "Lava Bucket", quantity: 1 },
      { id: "diamond", name: "Diamond", quantity: 1 },
    ],
  },

  butcher: {
    buy: [
      { id: "rabbit_stew", name: "Rabbit Stew", quantity: 1 },
      { id: "cooked_porkchop", name: "Cooked Porkchop", quantity: 1 },
      { id: "cooked_chicken", name: "Cooked Chicken", quantity: 1 },
    ],

    sell: [
      { id: "raw_chicken", name: "Raw Chicken", quantity: 14 },
      { id: "coal", name: "Coal", quantity: 15 },
      { id: "raw_porkchop", name: "Raw Porkchop", quantity: 7 },
      { id: "raw_rabbit", name: "Raw Rabbit", quantity: 4 },
      { id: "raw_beef", name: "Raw Beef", quantity: 10 },
      {
        id: "dried_kelp_block",
        name: "Dried Kelp Block",
        quantity: 10,
      },
      { id: "sweet_berries", name: "Sweet Berries", quantity: 10 },
    ],
  },

  cartographer: {
    buy: [
      { id: "empty_map", name: "Empty Map", quantity: 1 },
      { id: "explorer_map", name: "Explorer Map", quantity: 1 },
      {
        id: "ocean_explorer_map",
        name: "Ocean Explorer Map",
        quantity: 1,
      },
      {
        id: "trial_explorer_map",
        name: "Trial Explorer Map",
        quantity: 1,
      },
      { id: "item_frame", name: "Item Frame", quantity: 1 },
      { id: "banner", name: "Banner", quantity: 1 },
      {
        id: "globe_banner_pattern",
        name: "Globe Banner Pattern",
        quantity: 1,
      },
      {
        id: "woodland_explorer_map",
        name: "Woodland Explorer Map",
        quantity: 1,
      },
    ],

    sell: [
      { id: "paper", name: "Paper", quantity: 24 },
      { id: "glass_pane", name: "Glass Pane", quantity: 11 },
      { id: "compass", name: "Compass", quantity: 1 },
    ],
  },

  cleric: {
    buy: [
      { id: "redstone_dust", name: "Redstone Dust", quantity: 2 },
      { id: "lapis_lazuli", name: "Lapis Lazuli", quantity: 1 },
      { id: "glowstone", name: "Glowstone", quantity: 1 },
      { id: "ender_pearl", name: "Ender Pearl", quantity: 1 },
      {
        id: "bottle_o_enchanting",
        name: "Bottle o' Enchanting",
        quantity: 1,
      },
    ],

    sell: [
      { id: "rotten_flesh", name: "Rotten Flesh", quantity: 32 },
      { id: "gold_ingot", name: "Gold Ingot", quantity: 3 },
      { id: "rabbits_foot", name: "Rabbit's Foot", quantity: 2 },
      { id: "turtle_scute", name: "Turtle Scute", quantity: 4 },
      { id: "glass_bottle", name: "Glass Bottle", quantity: 9 },
      { id: "nether_wart", name: "Nether Wart", quantity: 22 },
    ],
  },

  farmer: {
    buy: [
      { id: "bread", name: "Bread", quantity: 6 },
      { id: "pumpkin_pie", name: "Pumpkin Pie", quantity: 4 },
      { id: "apple", name: "Apple", quantity: 4 },
      { id: "cookie", name: "Cookie", quantity: 18 },
      { id: "suspicious_stew", name: "Suspicious Stew", quantity: 1 },
      { id: "cake", name: "Cake", quantity: 1 },
      { id: "golden_carrot", name: "Golden Carrot", quantity: 3 },
      {
        id: "glistering_melon_slice",
        name: "Glistering Melon Slice",
        quantity: 3,
      },
    ],

    sell: [
      { id: "wheat", name: "Wheat", quantity: 20 },
      { id: "potato", name: "Potato", quantity: 26 },
      { id: "carrot", name: "Carrot", quantity: 22 },
      { id: "beetroot", name: "Beetroot", quantity: 15 },
      { id: "pumpkin", name: "Pumpkin", quantity: 6 },
      { id: "melon", name: "Melon", quantity: 4 },
    ],
  },

  fisherman: {
    buy: [
      { id: "bucket_of_cod", name: "Bucket of Cod", quantity: 1 },
      { id: "cooked_cod", name: "Cooked Cod", quantity: 6 },
      { id: "campfire", name: "Campfire", quantity: 1 },
      { id: "cooked_salmon", name: "Cooked Salmon", quantity: 6 },
      {
        id: "enchanted_fishing_rod",
        name: "Enchanted Fishing Rod",
        quantity: 1,
      },
      { id: "boat", name: "Boat", quantity: 1 },
    ],

    sell: [
      { id: "string", name: "String", quantity: 20 },
      { id: "coal", name: "Coal", quantity: 10 },
      { id: "raw_cod", name: "Raw Cod", quantity: 15 },
      { id: "raw_salmon", name: "Raw Salmon", quantity: 13 },
      { id: "tropical_fish", name: "Tropical Fish", quantity: 6 },
      { id: "pufferfish", name: "Pufferfish", quantity: 4 },
    ],
  },

  fletcher: {
    buy: [
      { id: "arrow", name: "Arrow", quantity: 16 },
      { id: "flint", name: "Flint", quantity: 10 },
      { id: "bow", name: "Bow", quantity: 1 },
      { id: "crossbow", name: "Crossbow", quantity: 1 },
      { id: "enchanted_bow", name: "Enchanted Bow", quantity: 1 },
      {
        id: "enchanted_crossbow",
        name: "Enchanted Crossbow",
        quantity: 1,
      },
      { id: "tipped_arrow", name: "Tipped Arrow", quantity: 5 },
    ],

    sell: [
      { id: "stick", name: "Stick", quantity: 32 },
      { id: "flint", name: "Flint", quantity: 26 },
      { id: "string", name: "String", quantity: 14 },
      { id: "feather", name: "Feather", quantity: 24 },
      { id: "tripwire_hook", name: "Tripwire Hook", quantity: 8 },
    ],
  },

  leatherworker: {
    buy: [
      { id: "leather_pants", name: "Leather Pants", quantity: 1 },
      { id: "leather_tunic", name: "Leather Tunic", quantity: 1 },
      { id: "leather_cap", name: "Leather Cap", quantity: 1 },
      { id: "leather_boots", name: "Leather Boots", quantity: 1 },
      {
        id: "leather_horse_armor",
        name: "Leather Horse Armor",
        quantity: 1,
      },
      { id: "saddle", name: "Saddle", quantity: 1 },
    ],

    sell: [
      { id: "leather", name: "Leather", quantity: 6 },
      { id: "flint", name: "Flint", quantity: 26 },
      { id: "rabbit_hide", name: "Rabbit Hide", quantity: 9 },
      { id: "turtle_scute", name: "Turtle Scute", quantity: 4 },
    ],
  },

  librarian: {
    buy: [
      // books
      { id: "sharpness", name: "Sharpness", quantity: 1 },
      { id: "smite", name: "Smite", quantity: 1 },
      {
        id: "bane_of_arthropods",
        name: "Bane of Arthropods",
        quantity: 1,
      },
      { id: "sweeping_edge", name: "Sweeping Edge", quantity: 1 },
      { id: "fire_aspect", name: "Fire Aspect", quantity: 1 },
      { id: "knockback", name: "Knockback", quantity: 1 },
      { id: "looting", name: "Looting", quantity: 1 },
      { id: "density", name: "Density", quantity: 1 },
      { id: "breach", name: "Breach", quantity: 1 },

      { id: "efficiency", name: "Efficiency", quantity: 1 },
      { id: "unbreaking", name: "Unbreaking", quantity: 1 },
      { id: "fortune", name: "Fortune", quantity: 1 },
      { id: "silk_touch", name: "Silk Touch", quantity: 1 },

      { id: "protection", name: "Protection", quantity: 1 },
      {
        id: "blast_protection",
        name: "Blast Protection",
        quantity: 1,
      },
      {
        id: "fire_protection",
        name: "Fire Protection",
        quantity: 1,
      },
      {
        id: "projectile_protection",
        name: "Projectile Protection",
        quantity: 1,
      },
      { id: "thorns", name: "Thorns", quantity: 1 },
      { id: "aqua_affinity", name: "Aqua Affinity", quantity: 1 },
      { id: "depth_strider", name: "Depth Strider", quantity: 1 },
      { id: "feather_falling", name: "Feather Falling", quantity: 1 },
      { id: "frost_walker", name: "Frost Walker", quantity: 1 },
      { id: "respiration", name: "Respiration", quantity: 1 },

      { id: "power", name: "Power", quantity: 1 },
      { id: "punch", name: "Punch", quantity: 1 },
      { id: "flame", name: "Flame", quantity: 1 },
      { id: "infinity", name: "Infinity", quantity: 1 },

      { id: "multishot", name: "Multishot", quantity: 1 },
      { id: "piercing", name: "Piercing", quantity: 1 },
      { id: "quick_charge", name: "Quick Charge", quantity: 1 },

      { id: "impaling", name: "Impaling", quantity: 1 },
      { id: "loyalty", name: "Loyalty", quantity: 1 },
      { id: "riptide", name: "Riptide", quantity: 1 },
      { id: "channeling", name: "Channeling", quantity: 1 },

      {
        id: "luck_of_the_sea",
        name: "Luck of the Sea",
        quantity: 1,
      },
      { id: "lure", name: "Lure", quantity: 1 },

      { id: "mending", name: "Mending", quantity: 1 },
      {
        id: "curse_of_binding",
        name: "Curse of Binding",
        quantity: 1,
      },
      {
        id: "curse_of_vanishing",
        name: "Curse of Vanishing",
        quantity: 1,
      },

      // rest
      { id: "bookshelf", name: "Bookshelf", quantity: 1 },
      { id: "lantern", name: "Lantern", quantity: 1 },
      { id: "glass", name: "Glass", quantity: 4 },
      { id: "compass", name: "Compass", quantity: 1 },
      { id: "clock", name: "Clock", quantity: 1 },
      { id: "red_candle", name: "Red Candle", quantity: 1 },
      { id: "yellow_candle", name: "Yellow Candle", quantity: 1 },
    ],

    sell: [
      { id: "paper", name: "Paper", quantity: 24 },
      { id: "book", name: "Book", quantity: 4 },
      { id: "ink_sac", name: "Ink Sac", quantity: 5 },
      {
        id: "book_and_quill",
        name: "Book and Quill",
        quantity: 1,
      },
    ],
  },

  mason: {
    buy: [
      { id: "brick", name: "Brick", quantity: 10 },
      {
        id: "chiseled_stone_bricks",
        name: "Chiseled Stone Bricks",
        quantity: 4,
      },
      {
        id: "dripstone_block",
        name: "Dripstone Block",
        quantity: 4,
      },
      {
        id: "polished_andesite",
        name: "Polished Andesite",
        quantity: 4,
      },
      {
        id: "polished_diorite",
        name: "Polished Diorite",
        quantity: 4,
      },
      {
        id: "polished_granite",
        name: "Polished Granite",
        quantity: 4,
      },
      {
        id: "colored_terracotta",
        name: "Colored Terracotta",
        quantity: 1,
      },
      {
        id: "glazed_terracotta",
        name: "Glazed Terracotta",
        quantity: 1,
      },
      {
        id: "quartz_pillar",
        name: "Quartz Pillar",
        quantity: 1,
      },
      {
        id: "block_of_quartz",
        name: "Block of Quartz",
        quantity: 1,
      },
    ],

    sell: [
      { id: "clay_ball", name: "Clay Ball", quantity: 10 },
      { id: "stone", name: "Stone", quantity: 20 },
      { id: "granite", name: "Granite", quantity: 16 },
      { id: "andesite", name: "Andesite", quantity: 16 },
      { id: "diorite", name: "Diorite", quantity: 16 },
      {
        id: "nether_quartz",
        name: "Nether Quartz",
        quantity: 12,
      },
    ],
  },

  shepherd: {
    buy: [
      { id: "shears", name: "Shears", quantity: 1 },
      { id: "colored_wool", name: "Colored Wool", quantity: 1 },
      { id: "colored_carpet", name: "Colored Carpet", quantity: 4 },
      { id: "colored_bed", name: "Colored Bed", quantity: 1 },
      { id: "colored_banner", name: "Colored Banner", quantity: 1 },
      { id: "painting", name: "Painting", quantity: 3 },
    ],

    sell: [
      { id: "white_wool", name: "White Wool", quantity: 18 },
      { id: "brown_wool", name: "Brown Wool", quantity: 18 },
      { id: "black_wool", name: "Black Wool", quantity: 18 },
      { id: "gray_wool", name: "Gray Wool", quantity: 18 },

      { id: "white_dye", name: "White Dye", quantity: 12 },
      { id: "gray_dye", name: "Gray Dye", quantity: 12 },
      { id: "black_dye", name: "Black Dye", quantity: 12 },
      {
        id: "light_blue_dye",
        name: "Light Blue Dye",
        quantity: 12,
      },
      { id: "lime_dye", name: "Lime Dye", quantity: 12 },

      { id: "yellow_dye", name: "Yellow Dye", quantity: 12 },
      {
        id: "light_gray_dye",
        name: "Light Gray Dye",
        quantity: 12,
      },
      { id: "orange_dye", name: "Orange Dye", quantity: 12 },
      { id: "red_dye", name: "Red Dye", quantity: 12 },
      { id: "pink_dye", name: "Pink Dye", quantity: 12 },

      { id: "brown_dye", name: "Brown Dye", quantity: 12 },
      { id: "purple_dye", name: "Purple Dye", quantity: 12 },
      { id: "blue_dye", name: "Blue Dye", quantity: 12 },
      { id: "green_dye", name: "Green Dye", quantity: 12 },
      { id: "magenta_dye", name: "Magenta Dye", quantity: 12 },
      { id: "cyan_dye", name: "Cyan Dye", quantity: 12 },
    ],
  },

  toolsmith: {
    buy: [
      { id: "stone_axe", name: "Stone Axe", quantity: 1 },
      { id: "stone_shovel", name: "Stone Shovel", quantity: 1 },
      { id: "stone_pickaxe", name: "Stone Pickaxe", quantity: 1 },
      { id: "stone_hoe", name: "Stone Hoe", quantity: 1 },
      { id: "bell", name: "Bell", quantity: 1 },

      {
        id: "enchanted_iron_axe",
        name: "Enchanted Iron Axe",
        quantity: 1,
      },
      {
        id: "enchanted_iron_shovel",
        name: "Enchanted Iron Shovel",
        quantity: 1,
      },
      {
        id: "enchanted_iron_pickaxe",
        name: "Enchanted Iron Pickaxe",
        quantity: 1,
      },

      { id: "diamond_hoe", name: "Diamond Hoe", quantity: 1 },

      {
        id: "enchanted_diamond_axe",
        name: "Enchanted Diamond Axe",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_shovel",
        name: "Enchanted Diamond Shovel",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_pickaxe",
        name: "Enchanted Diamond Pickaxe",
        quantity: 1,
      },
    ],

    sell: [
      { id: "coal", name: "Coal", quantity: 15 },
      { id: "iron_ingot", name: "Iron Ingot", quantity: 4 },
      { id: "flint", name: "Flint", quantity: 30 },
      { id: "diamond", name: "Diamond", quantity: 1 },
    ],
  },

  weaponsmith: {
    buy: [
      { id: "iron_axe", name: "Iron Axe", quantity: 1 },
      {
        id: "enchanted_iron_sword",
        name: "Enchanted Iron Sword",
        quantity: 1,
      },
      { id: "bell", name: "Bell", quantity: 1 },
      {
        id: "enchanted_diamond_axe",
        name: "Enchanted Diamond Axe",
        quantity: 1,
      },
      {
        id: "enchanted_diamond_sword",
        name: "Enchanted Diamond Sword",
        quantity: 1,
      },
    ],

    sell: [
      { id: "coal", name: "Coal", quantity: 15 },
      { id: "iron_ingot", name: "Iron Ingot", quantity: 4 },
      { id: "flint", name: "Flint", quantity: 24 },
      { id: "diamond", name: "Diamond", quantity: 1 },
    ],
  },
} as const;

export type Profession = keyof typeof PROF_EMOJI;
