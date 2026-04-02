export interface Experience {
  id: string;
  name: string;
  neighborhood: string;
  category: string;
  categoryLabel: string;
  type: "dining" | "culture" | "courts" | "drop" | "experience";
  priceFly: number;
  imageUrl: string;
  secondImageUrl?: string;
  orbitMatchScore: number;
  details: [string, string];
  description: string;
  isBlackbirdPartner: boolean;
  actionLabel: string;
  timeRange: string;
  capacity: string;
  matchReasons: string[];
}

export interface ItineraryStop {
  time: string;
  name: string;
  neighborhood: string;
  flyPrice: number;
  status: "confirmed" | "upcoming";
  code?: string;
}

export interface City {
  name: string;
  visits: number;
}

export interface Neighborhood {
  name: string;
  count: number;
}

export const user = {
  name: "Alex Mora",
  flynetId: "88-B.49",
  flyBalance: 2450,
  orbitTier: "Insider",
  accessTier: "T1",
  orbitScore: 94,
  citiesVisited: 7,
  flySpent: 8420,
  experiences: 23,
  diningTier: "Insider",
  neighborhoods: ["Tribeca", "West Village", "Williamsburg"],
  tasteTags: [
    "Late Dining",
    "Fine Casual",
    "Padel",
    "Independent Boutiques",
    "Art/Photo",
    "City Walks",
  ],
  cities: [
    { name: "New York", visits: 14 },
    { name: "San Francisco", visits: 6 },
    { name: "Charleston", visits: 2 },
    { name: "Miami", visits: 1 },
    { name: "London", visits: 3 },
  ] as City[],
};

export const cityNames = ["NEW YORK", "SAN FRANCISCO", "CHARLESTON", "MIAMI", "LONDON"];

export const experiences: Experience[] = [
  {
    id: "don-angie",
    name: "Don Angie",
    neighborhood: "West Village",
    category: "Italian",
    categoryLabel: "BLACKBIRD PARTNER",
    type: "dining",
    priceFly: 400,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    secondImageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80",
    orbitMatchScore: 94,
    details: ["TABLE FOR 2", "8:00 PM — PRIX FIXE"],
    description:
      "Don Angie is a Michelin-starred Italian-American restaurant in the West Village known for its pinwheel lasagna and inventive takes on red-sauce classics. The intimate dining room, draped in warm tones and vintage accents, feels like a neighborhood secret that somehow earned a star.",
    isBlackbirdPartner: true,
    actionLabel: "SECURE RESERVATION",
    timeRange: "8:00 PM — 10:30 PM",
    capacity: "TABLE FOR 2–4",
    matchReasons: ["DINING PATTERN", "NEIGHBORHOOD FIT", "PEER NETWORK"],
  },
  {
    id: "fotografiska",
    name: "Fotografiska",
    neighborhood: "Flatiron",
    category: "Photography",
    categoryLabel: "CULTURE",
    type: "culture",
    priceFly: 200,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    secondImageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    orbitMatchScore: 88,
    details: ["AFTER-HOURS ACCESS", "9:00 PM — 11:00 PM"],
    description:
      "Fotografiska is a globally renowned photography museum housed in a landmark building on Park Avenue South. The after-hours program strips away the crowds, giving you three floors of world-class photography exhibitions with a cocktail bar and rooftop views across the Flatiron skyline.",
    isBlackbirdPartner: false,
    actionLabel: "ACCESS EVENT",
    timeRange: "9:00 PM — 11:00 PM",
    capacity: "LIMITED TO 40",
    matchReasons: ["ART/PHOTO INTEREST", "EVENING PATTERN", "CULTURAL TIER"],
  },
  {
    id: "reserve-padel",
    name: "Reserve Padel",
    neighborhood: "Hudson Yards",
    category: "Sport",
    categoryLabel: "ACTIVITY",
    type: "courts",
    priceFly: 600,
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    secondImageUrl: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80",
    orbitMatchScore: 97,
    details: ["COURT 3 — 1 HR", "2:00 PM — 3:00 PM"],
    description:
      "Reserve Padel brings the fastest-growing racquet sport in the world to a premium indoor facility overlooking the Hudson. Glass-walled courts, top-tier equipment rentals, and a members-only lounge make this the city's best spot to play.",
    isBlackbirdPartner: false,
    actionLabel: "BOOK COURT",
    timeRange: "2:00 PM — 3:00 PM",
    capacity: "COURT FOR 4",
    matchReasons: ["PADEL PREFERENCE", "ACTIVITY FREQUENCY", "TIME MATCH"],
  },
  {
    id: "noah-nyc",
    name: "Noah NYC",
    neighborhood: "SoHo",
    category: "Streetwear",
    categoryLabel: "DROP ACCESS",
    type: "drop",
    priceFly: 100,
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    secondImageUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
    orbitMatchScore: 82,
    details: ["MEMBERS ONLY DROP", "EXCLUSIVE COLORWAY"],
    description:
      "Noah blends streetwear with prep and punk in its SoHo flagship. Founded by Brendon Babenzien, the shop stocks limited-run capsules that sell out within hours. Flynet members get first access to drops before they hit the floor.",
    isBlackbirdPartner: false,
    actionLabel: "CLAIM ACCESS",
    timeRange: "12:00 PM — 6:00 PM",
    capacity: "FIRST 20 MEMBERS",
    matchReasons: ["BOUTIQUE PREFERENCE", "BRAND AFFINITY", "SPEND TIER"],
  },
  {
    id: "flyover-nyc",
    name: "FlyOver NYC",
    neighborhood: "Downtown Heliport",
    category: "Aerial",
    categoryLabel: "EXPERIENCE",
    type: "experience",
    priceFly: 2000,
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    secondImageUrl: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=800&q=80",
    orbitMatchScore: 91,
    details: ["PRIVATE FLIGHT — 30 MIN", "SUNSET DEPARTURE"],
    description:
      "A private helicopter experience departing from the Downtown Manhattan Heliport, tracing the full skyline from the Statue of Liberty to the George Washington Bridge. Timed to sunset, it's the single best way to see New York from above — and a Flynet signature.",
    isBlackbirdPartner: false,
    actionLabel: "RESERVE",
    timeRange: "6:30 PM — 7:00 PM",
    capacity: "2 PASSENGERS",
    matchReasons: ["EXPERIENCE SEEKER", "PREMIUM TIER", "NYC ENTHUSIAST"],
  },
];

export const itinerary: ItineraryStop[] = [
  {
    time: "2:00 PM",
    name: "Reserve Padel",
    neighborhood: "Hudson Yards",
    flyPrice: 600,
    status: "confirmed",
    code: "DSRT-NYC-0011",
  },
  {
    time: "5:30 PM",
    name: "Noah NYC",
    neighborhood: "SoHo",
    flyPrice: 100,
    status: "confirmed",
    code: "DSRT-NYC-0024",
  },
  {
    time: "8:00 PM",
    name: "Don Angie",
    neighborhood: "West Village",
    flyPrice: 400,
    status: "upcoming",
  },
  {
    time: "10:30 PM",
    name: "Fotografiska",
    neighborhood: "Flatiron",
    flyPrice: 200,
    status: "upcoming",
  },
];

export const neighborhoods: Neighborhood[] = [
  { name: "West Village", count: 12 },
  { name: "Williamsburg", count: 8 },
  { name: "SoHo", count: 15 },
  { name: "Flatiron", count: 6 },
  { name: "Lower East Side", count: 9 },
  { name: "Hudson Yards", count: 4 },
];

export const savedExperienceIds = ["don-angie", "fotografiska", "flyover-nyc"];

export const categories = [
  "For You",
  "Dining",
  "Boutiques",
  "Courts",
  "Culture",
  "Drops",
];

export const westVillageExperiences: Experience[] = [
  experiences[0], // Don Angie
  {
    id: "buvette",
    name: "Buvette",
    neighborhood: "West Village",
    category: "French",
    categoryLabel: "DINING",
    type: "dining",
    priceFly: 250,
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80",
    orbitMatchScore: 89,
    details: ["TABLE FOR 2", "7:30 PM — CHEF'S SELECTION"],
    description: "A tiny, jewel-box French gastrotèque on Grove Street with an impossibly charming patio.",
    isBlackbirdPartner: false,
    actionLabel: "SECURE RESERVATION",
    timeRange: "7:30 PM — 9:30 PM",
    capacity: "TABLE FOR 2",
    matchReasons: ["DINING PATTERN", "CUISINE MATCH", "NEIGHBORHOOD FIT"],
  },
  {
    id: "village-vanguard",
    name: "Village Vanguard",
    neighborhood: "West Village",
    category: "Jazz",
    categoryLabel: "CULTURE",
    type: "culture",
    priceFly: 150,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    orbitMatchScore: 85,
    details: ["FRONT ROW — 2 SEATS", "9:00 PM — 11:00 PM"],
    description: "The legendary jazz club that has hosted Coltrane, Monk, and Evans since 1935.",
    isBlackbirdPartner: false,
    actionLabel: "ACCESS EVENT",
    timeRange: "9:00 PM — 11:00 PM",
    capacity: "2 SEATS",
    matchReasons: ["CULTURE INTEREST", "EVENING PATTERN", "NEIGHBORHOOD FIT"],
  },
];
