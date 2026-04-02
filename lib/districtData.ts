export interface Experience {
  id: string;
  name: string;
  neighborhood: string;
  category: string;
  categoryLabel: string;
  type: "dining" | "culture" | "courts" | "drop" | "experience";
  price: number;
  imageUrl: string;
  orbitMatchScore: number;
  detailLines: { icon: string; label: string; value: string }[];
  description: string;
  isBlackbirdPartner: boolean;
  actionLabel: string;
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

export interface SavedItem {
  id: string;
  name: string;
  neighborhood: string;
  imageUrl: string;
}

export interface Neighborhood {
  name: string;
  count: number;
}

export const user = {
  name: "Alex Mora",
  initial: "A",
  flyBalance: 2450,
  orbitTier: "Insider",
  flynetId: "DST-88B49",
  citiesVisited: 7,
  flySpent: 8420,
  experiences: 23,
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

export const experiences: Experience[] = [
  {
    id: "don-angie",
    name: "Don Angie",
    neighborhood: "West Village",
    category: "Italian",
    categoryLabel: "Blackbird Partner",
    type: "dining",
    price: 400,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    orbitMatchScore: 94,
    detailLines: [
      { icon: "ph-users", label: "capacity", value: "TABLE FOR 2 — 8:00 PM" },
      { icon: "ph-clock", label: "type", value: "PRIX FIXE EXPERIENCE" },
    ],
    description:
      "Don Angie is a Michelin-starred Italian-American restaurant in the West Village known for its pinwheel lasagna and inventive takes on red-sauce classics. The intimate dining room, draped in warm tones and vintage accents, feels like a neighborhood secret that somehow earned a star.",
    isBlackbirdPartner: true,
    actionLabel: "Secure",
    matchReasons: ["Dining pattern", "Neighborhood fit", "Peer network"],
  },
  {
    id: "fotografiska",
    name: "Fotografiska",
    neighborhood: "Flatiron",
    category: "Photography",
    categoryLabel: "Culture",
    type: "culture",
    price: 200,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    orbitMatchScore: 88,
    detailLines: [
      { icon: "ph-ticket", label: "access", value: "PRIVATE AFTER-HOURS" },
      { icon: "ph-clock", label: "time", value: "9:00 PM — 11:00 PM" },
    ],
    description:
      "Fotografiska is a globally renowned photography museum housed in a landmark building on Park Avenue South. The after-hours program strips away the crowds, giving you three floors of world-class photography exhibitions with a cocktail bar and rooftop views across the Flatiron skyline.",
    isBlackbirdPartner: false,
    actionLabel: "Access",
    matchReasons: ["Art/Photo interest", "Evening pattern", "Cultural tier"],
  },
  {
    id: "reserve-padel",
    name: "Reserve Padel",
    neighborhood: "Hudson Yards",
    category: "Sport",
    categoryLabel: "Activity",
    type: "courts",
    price: 600,
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    orbitMatchScore: 97,
    detailLines: [
      { icon: "ph-tennis-ball", label: "court", value: "COURT 3 — 1 HOUR" },
      { icon: "ph-clock", label: "time", value: "2:00 PM — 3:00 PM" },
    ],
    description:
      "Reserve Padel brings the fastest-growing racquet sport in the world to a premium indoor facility overlooking the Hudson. Glass-walled courts, top-tier equipment rentals, and a members-only lounge make this the city's best spot to play.",
    isBlackbirdPartner: false,
    actionLabel: "Book",
    matchReasons: ["Padel preference", "Activity frequency", "Time match"],
  },
  {
    id: "noah-nyc",
    name: "Noah NYC",
    neighborhood: "SoHo",
    category: "Streetwear",
    categoryLabel: "Drop Access",
    type: "drop",
    price: 100,
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    orbitMatchScore: 82,
    detailLines: [
      { icon: "ph-tag", label: "access", value: "MEMBERS ONLY DROP" },
      { icon: "ph-tag", label: "exclusive", value: "EXCLUSIVE COLORWAY" },
    ],
    description:
      "Noah blends streetwear with prep and punk in its SoHo flagship. Founded by Brendon Babenzien, the shop stocks limited-run capsules that sell out within hours. Flynet members get first access to drops before they hit the floor.",
    isBlackbirdPartner: false,
    actionLabel: "Claim",
    matchReasons: ["Boutique preference", "Brand affinity", "Spend tier"],
  },
  {
    id: "flyover-nyc",
    name: "FlyOver NYC",
    neighborhood: "Downtown Heliport",
    category: "Aerial",
    categoryLabel: "Experience",
    type: "experience",
    price: 2000,
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    orbitMatchScore: 91,
    detailLines: [
      { icon: "ph-map-pin", label: "route", value: "PRIVATE FLIGHT (30 MIN)" },
      { icon: "ph-clock", label: "departure", value: "SUNSET DEPARTURE" },
    ],
    description:
      "A private helicopter experience departing from the Downtown Manhattan Heliport, tracing the full skyline from the Statue of Liberty to the George Washington Bridge. Timed to sunset, it's the single best way to see New York from above — and a Flynet signature.",
    isBlackbirdPartner: false,
    actionLabel: "Reserve",
    matchReasons: ["Experience seeker", "Premium tier", "NYC enthusiast"],
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
    name: "Le Bain",
    neighborhood: "Meatpacking",
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

export const savedItems: SavedItem[] = [
  {
    id: "don-angie",
    name: "Don Angie",
    neighborhood: "West Village",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "fotografiska",
    name: "Fotografiska",
    neighborhood: "Flatiron",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  },
  {
    id: "flyover-nyc",
    name: "FlyOver NYC",
    neighborhood: "Downtown Heliport",
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  },
];

export const categories = [
  "For You",
  "Dining",
  "Boutiques",
  "Courts",
  "Culture",
  "Drops",
];

export const westVillageExperiences: Experience[] = [
  {
    id: "don-angie",
    name: "Don Angie",
    neighborhood: "West Village",
    category: "Italian",
    categoryLabel: "Blackbird Partner",
    type: "dining",
    price: 400,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    orbitMatchScore: 94,
    detailLines: [
      { icon: "ph-users", label: "capacity", value: "TABLE FOR 2 — 8:00 PM" },
      { icon: "ph-clock", label: "type", value: "PRIX FIXE EXPERIENCE" },
    ],
    description: "Don Angie is a Michelin-starred Italian-American restaurant known for its pinwheel lasagna.",
    isBlackbirdPartner: true,
    actionLabel: "Secure",
    matchReasons: ["Dining pattern", "Neighborhood fit", "Peer network"],
  },
  {
    id: "buvette",
    name: "Buvette",
    neighborhood: "West Village",
    category: "French",
    categoryLabel: "Dining",
    type: "dining",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80",
    orbitMatchScore: 89,
    detailLines: [
      { icon: "ph-users", label: "capacity", value: "TABLE FOR 2 — 7:30 PM" },
      { icon: "ph-clock", label: "type", value: "CHEF'S SELECTION" },
    ],
    description: "A tiny, jewel-box French gastrotèque on Grove Street with an impossibly charming patio.",
    isBlackbirdPartner: false,
    actionLabel: "Secure",
    matchReasons: ["Dining pattern", "Cuisine match", "Neighborhood fit"],
  },
  {
    id: "village-vanguard",
    name: "Village Vanguard",
    neighborhood: "West Village",
    category: "Jazz",
    categoryLabel: "Culture",
    type: "culture",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    orbitMatchScore: 85,
    detailLines: [
      { icon: "ph-ticket", label: "access", value: "FRONT ROW — 2 SEATS" },
      { icon: "ph-clock", label: "time", value: "9:00 PM — 11:00 PM" },
    ],
    description: "The legendary jazz club that has hosted Coltrane, Monk, and Evans since 1935.",
    isBlackbirdPartner: false,
    actionLabel: "Access",
    matchReasons: ["Culture interest", "Evening pattern", "Neighborhood fit"],
  },
];
