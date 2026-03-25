const packages = [
  {
    id: '1',
    title: 'The Pearl of Indochina',
    location: 'Southeast Asia',
    price: '$12,500',
    duration: 14,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80',
    description: 'A deep dive into the spirituality of Southeast Asia through private villa stays and guided meditation. Experience the hidden temples of Angkor, private boat tours on the Mekong, and serene retreats in the heart of lush rainforests. Curated specifically for those seeking inner peace in uncompromising luxury.',
    highlights: [
      'Private sunrise meditation at Angkor Wat',
      'Exclusive access to secluded Mekong islands',
      'Personal wellness concierge throughout the journey',
      'Stay in world-class, ultra-luxury eco-resorts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome Dinner',
        description: 'Arrive in Siem Reap via private transfer. Evening welcome dinner prepared by a Michelin-starred chef focusing on traditional Khmer flavors.'
      },
      {
        day: 2,
        title: 'Spiritual Awakening',
        description: 'Pre-dawn tour of ancient temples followed by a private blessing ceremony with local monks.'
      },
      {
        day: 3,
        title: 'Mekong Serenity',
        description: 'Board a luxury private yacht for a 3-day cruise along the quieter stretches of the Mekong River.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80',
      'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1536605051910-1cba19cf5af7?w=1200&q=80',
      'https://images.unsplash.com/photo-1545564855-f2ebf540b0db?w=1200&q=80',
      'https://images.unsplash.com/photo-1600862590240-daef4e2d3bb6?w=1200&q=80',
      'https://images.unsplash.com/photo-1598460677103-34e8574fbbe9?w=1200&q=80'
    ],
    inclusions: ['All private transfers', 'Luxury Accommodations', 'Private Guide', 'Daily Spa Treatments', 'All Meals & Premium Beverages'],
    exclusions: ['International Flights', 'Travel Insurance'],
    reviews: [
      {
        name: 'Eleanor H.',
        avatar: 'https://i.pravatar.cc/150?u=eleanor',
        rating: 5,
        date: 'October 12, 2025',
        comment: 'An absolutely transformative experience. The level of detail and care provided by the Midnight Curator team was beyond anything I have experienced.'
      },
      {
        name: 'James V.',
        avatar: 'https://i.pravatar.cc/150?u=james',
        rating: 5,
        date: 'September 28, 2025',
        comment: 'Every sunrise felt tailored just for us. The private island dinner was the highlight of our decade.'
      }
    ],
    availability: ['Nov 2026', 'Jan 2027', 'Mar 2027']
  },
  {
    id: '2',
    title: 'Alpine Solitude',
    location: 'Swiss Alps',
    price: '$9,200',
    duration: 8,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1200&q=80',
    description: 'High-altitude luxury combined with heli-skiing and private observatory sessions under clear skies. Stay in exclusive chalets accessible only by helicopter. Your personal chef prepares warm, Alpine-inspired delicacies as you gaze over the snow-covered peaks.',
    highlights: [
      'Private heli-skiing in untouched powder',
      'Exclusive use of a 19th-century observatory',
      'Michelin-starred dining in your chalet',
      'Thermal spring treatments'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Helicopter Arrival',
        description: 'Scenic flight into the remote chalet. Champagne reception and altitude acclimatization.'
      },
      {
        day: 2,
        title: 'First Tracks',
        description: 'Heli-skiing with Olympic guides followed by a thermal spa recovery session.'
      },
      {
        day: 3,
        title: 'Midnight Astronomy',
        description: 'Night snow-cat ride to a private observatory for deep space viewing with a resident astronomer.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1200&q=80',
      'https://images.unsplash.com/photo-1414445300959-1e428d0e5120?w=1200&q=80',
      'https://images.unsplash.com/photo-1491403061559-99411964f4ec?w=1200&q=80',
      'https://images.unsplash.com/photo-1601955364867-00c71a3c7dd5?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80'
    ],
    inclusions: ['Helicopter Transfers', 'Private Chalet', 'Ski Passes & Equipment', 'Personal Chef', 'Professional Ski Guide'],
    exclusions: ['Winter Clothing', 'International Flights'],
    reviews: [
      {
        name: 'Marcus W.',
        avatar: 'https://i.pravatar.cc/150?u=marcus',
        rating: 5,
        date: 'February 14, 2026',
        comment: 'The powder was untouched, and the chalet was the epitome of luxury. Perfectly curated.'
      }
    ],
    availability: ['Dec 2026', 'Jan 2027', 'Feb 2027']
  },
  {
    id: '3',
    title: 'Amazonian Mystery',
    location: 'Amazon Basin, Brazil',
    price: '$15,800',
    duration: 10,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80',
    description: 'Journey into the heart of the rainforest aboard a luxury river cruiser with world-renowned naturalists. Discover unseen corners of the Earth without ever sacrificing the comforts of modern high-end hospitality.',
    highlights: [
      'Private luxury river yacht',
      'Guided excursions with top biologists',
      'Encounter indigenous tribes respectfully',
      'Canopy dining experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Embarkation',
        description: 'Board your private yacht in Manaus. Welcome briefing by your expedition leader.'
      },
      {
        day: 2,
        title: 'Meeting of Waters',
        description: 'Witness the incredible natural phenomenon where the dark Rio Negro meets the sandy Amazon River.'
      },
      {
        day: 3,
        title: 'Jungle Canopy',
        description: 'A morning trek followed by a multi-course lunch served 100 feet up in the rainforest canopy.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1540206395-6880f9493ea2?w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1610427976856-f6d231deac25?w=1200&q=80',
      'https://images.unsplash.com/photo-1596484549340-4299bdf99388?w=1200&q=80',
      'https://images.unsplash.com/photo-1517594422361-5e1f74cd0e03?w=1200&q=80',
      'https://images.unsplash.com/photo-1628173426723-95c5553eaf10?w=1200&q=80'
    ],
    inclusions: ['Luxury Yacht Charter', 'Expert Naturalist Guides', 'All Excursions', 'Gourmet Dining', 'Premium Spirits'],
    exclusions: ['Helicopter Transfers', 'International Flights'],
    reviews: [
      {
        name: 'Sofia P.',
        avatar: 'https://i.pravatar.cc/150?u=sofia',
        rating: 5,
        date: 'March 05, 2026',
        comment: 'I never thought an expedition could be this luxurious. The wildlife encounters were breathtaking.'
      }
    ],
    availability: ['Sep 2026', 'Oct 2026', 'Nov 2026']
  }
];

const getPackages = (req, res) => {
  res.json(packages);
};

const getPackageById = (req, res) => {
  const { id } = req.params;
  const pkg = packages.find(p => p.id === id);
  
  if (pkg) {
    res.json(pkg);
  } else {
    res.status(404).json({ message: 'Package not found' });
  }
};

module.exports = { getPackages, getPackageById };

