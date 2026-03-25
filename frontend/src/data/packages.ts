import type { PackageCategory, TravelPackage } from './types';
import { categoryFallbacks, GLOBAL_DEFAULT_FALLBACK } from '../utils/imageFallback';

export const categories: PackageCategory[] = [
  { id: '1', name: 'Adventure Tours', slug: 'adventure-tours', description: 'Thrill-seeking journeys for the brave.', bannerImage: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200' },
  { id: '2', name: 'Luxury Escapes', slug: 'luxury-escapes', description: 'Opulence and exclusivity at every turn.', bannerImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200' },
  { id: '3', name: 'Cultural Journeys', slug: 'cultural-journeys', description: 'Step back in time and discover our roots.', bannerImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200' },
  { id: '4', name: 'Nature & Wildlife', slug: 'nature-wildlife', description: 'Untamed nature and majestic creatures.', bannerImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200' },
  { id: '5', name: 'Beach Holidays', slug: 'beach-holidays', description: 'Sun, sand, and the soothing sounds of waves.', bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200' },
  { id: '6', name: 'City Breaks', slug: 'city-breaks', description: 'Explore the heartbeat of the world\'s greatest cities.', bannerImage: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200' },
  { id: '7', name: 'Family Packages', slug: 'family-packages', description: 'Memorable journeys for the whole family.', bannerImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200' },
  { id: '8', name: 'Honeymoon Specials', slug: 'honeymoon-specials', description: 'Romantic journeys for a lifetime of memories.', bannerImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200' },
  { id: '9', name: 'Spiritual Retreats', slug: 'spiritual-retreats', description: 'Inner peace and divine journeys.', bannerImage: 'https://images.unsplash.com/photo-1514222139-b570bbd73d48?w=1200' },
  { id: '10', name: 'International Packages', slug: 'international-packages', description: 'Global expeditions to exotic locations.', bannerImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200' },
];

export const packages: TravelPackage[] = [];

// Verified High-Fidelity Image Dictionary (6 unique IDs per category)
const categoryImages: Record<string, string[]> = {
  'adventure-tours': ['1533130061792-64b345e4a833', '1527631746610-1c44910ea2a6', '1464822759023-fed622ff2c3b', '1530122037265-a5f1f91d7b82', '1501555088652-021faa106b9b', '1506901437159-0521ca23bccb'],
  'luxury-escapes': ['1571003123894-1f0594d2b5d9', '1566073771259-6a8506099945', '1542314831-068cd1dbfeeb', '1520250497591-112f2f40a3f4', '1584132967332-612660d845e0', '1540541338036-3413fbb5140d'],
  'cultural-journeys': ['1544644181-1484b3fdfc62', '1533970919412-16fc7387cc02', '1526392060635-9d6019884377', '1518709268805-4e9042af9f23', '1523731407965-2430cd12f5e4', '1476514525535-07fb3b4ae5f1'],
  'nature-wildlife': ['1501854140801-50d01674af3e', '1472396961693-142e6e269027', '1475924156736-455f4e9524df', '1441974231531-c6227db76b6e', '1501785888041-af3ef285b470', '1470071459604-3b5ec3a7fe05'],
  'beach-holidays': ['1507525428034-b723cf961d3e', '1520967824495-b529aeba26df', '1589197331516-4d8391139493', '1545562083-c62043657577', '1437719417032-8595ff9c9d21', '1519046904884-53103b34b206'],
  'city-breaks': ['1449034446853-66c86144b0ad', '1477332552946-cfb384aeaf1c', '1480714378732-aef2bf1b5b1a', '1493397212122-2b85dda5d06b', '1506744038136-46273834b3fb', '1496442226666-8d4d2362e6e9'],
  'family-packages': ['1511895426328-dc8714191300', '1526232759531-d9d109c21596', '1502086223506-0adbc5a79a32', '1498839019146-cdec9efc5040', '1506869640319-2fc5240747e0', '1503944583220-7e5c97b715ae'],
  'honeymoon-specials': ['1522708323590-d24dbb6b0267', '1530593441091-f2f97c8d9c53', '1515130220455-05be3bc46bc6', '1505944270222-132711fa4df7', '1510312501069-46294747069d', '1518173946639-598e2079031c'],
  'spiritual-retreats': ['1514222139-b570bbd73d48', '1493173317335-977468160cca', '1505315534560-49a60e9a86a6', '1538332576231-0701f77d3f28', '1518423450371-331046755452', '1512467849953-274838636746'],
  'international-packages': ['1436491865332-7a61a109c0f3', '1476514525535-07fb3b4ae5f1', '1488085061353-066bc557c3d2', '1452415080140-22203930a59f', '1523906834647-25ea2bc44450', '1513682121212-d045c796798c'],
};

// Seed categories with 6 packages each to ensure high-fidelity (60 total)
categories.forEach(cat => {
  const images = categoryImages[cat.slug] || [GLOBAL_DEFAULT_FALLBACK];
  for (let i = 1; i <= 6; i++) {
    const photoId = images[(i - 1) % images.length];
    packages.push({
      id: `${cat.slug}-${i}`,
      slug: `${cat.slug}-expedition-${i}`,
      category: cat.slug,
      title: `${cat.name} ${i}`,
      subtitle: `Authentic ${cat.name} Experience`,
      price: 1500 + i * 200,
      rating: Number((4.5 + Math.random() * 0.5).toFixed(1)),
      duration: `${i + 4} Days`,
      groupSize: '4–12',
      difficulty: i % 2 === 0 ? 'Moderate' : 'Easy',
      season: 'Year round',
      heroImage: `https://images.unsplash.com/photo-${photoId}?w=1200`,
      gallery: [
        `https://images.unsplash.com/photo-${photoId}?w=1200`,
        `https://images.unsplash.com/photo-${images[(i) % images.length]}?w=1200`,
        `https://images.unsplash.com/photo-${images[(i + 1) % images.length]}?w=1200`,
      ],
      highlights: [
        { text: 'Premium Sightseeing', icon: 'star' },
        { text: 'Expert Local Guide', icon: 'person' },
        { text: 'Exclusive Access', icon: 'verified_user' }
      ],
      itinerary: [
        { day: 'Day 1', description: 'Welcome and luxury transfer to your hotel.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800' },
        { day: 'Day 2', description: 'Curated morning exploration and private lunch.' },
        { day: 'Day 3', description: 'Signature experience and sunset narrative.' }
      ],
      description: `An unparalleled ${cat.name} journey designed for the modern explorer. Experience the height of sophistication and depth of culture.`,
      location: 'Destinations Worldwide',
      continent: 'Global',
      bestTime: 'Year round',
      amenities: ['Private Stays', 'Concierge Service', 'Transfers'],
      inclusions: ['Breakfast', 'All Entry Fees', 'Guide Services']
    });
  }
});

// Photo Integrity Post-processing
packages.forEach(pkg => {
  const fallback = categoryFallbacks[pkg.category] || GLOBAL_DEFAULT_FALLBACK;
  if (!pkg.heroImage || pkg.heroImage.length < 10) pkg.heroImage = fallback;
  if (pkg.gallery.length < 3) {
    if (!pkg.gallery.includes(pkg.heroImage)) pkg.gallery.unshift(pkg.heroImage);
    while (pkg.gallery.length < 3) pkg.gallery.push(GLOBAL_DEFAULT_FALLBACK);
  }
});
