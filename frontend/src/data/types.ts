export interface PackageCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  bannerImage: string;
}

export interface TravelPackage {
  id: string;
  slug: string;
  category: string; // matches Category slug
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  duration: string;
  groupSize: string;
  difficulty: string;
  season: string;
  heroImage: string;
  gallery: string[];
  itinerary: { day: string; description: string; image?: string }[];
  highlights: { text: string; icon?: string }[];
  inclusions: string[];
  description: string;
  location: string;
  continent: string;
  bestTime: string;
  mapEmbed?: string; // string iframe
  FAQs?: { question: string; answer: string }[];
  amenities: string[]; // For backwards compatibility or extra info
}
