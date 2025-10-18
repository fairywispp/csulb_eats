import crepesBonaparte from '@/assets/food-trucks/crepes-bonaparte.webp';
import thaiMex from '@/assets/food-trucks/thai-mex.webp';
import wetzelsPretzels from '@/assets/food-trucks/wetzels-pretzel.jpg';
import habitGrill from '@/assets/food-trucks/habit-grill.jpg';
import higherTaste from '@/assets/food-trucks/higher-taste.png';
import citrusRose from '@/assets/food-trucks/citrus-rose.jpg';
import subway from '@/assets/food-trucks/subway.jpg';
import coffeeBean from '@/assets/food-trucks/coffee-bean.webp';
import nuggetGrillExpress from '@/assets/food-trucks/nuggetgrill-express.jpg';

// Use real-time in production
export const CURRENT_TIME = new Date();

export interface FoodTruckVendor {
  vendor_id: string;
  name: string;
  category: string;
  cuisine: string[];
  price_range: string;
  status_message: string;
  about: {
    description: string;
    tags: string[];
  };
  images: {
    hero_photo: string;
    food_icon: string;
    slideshow: Array<{
      type: string;
      url: string;
      caption: string;
    }>;
  };
  contact: {
    website_url: string;
    instagram_url: string;
    fooda_order_url: string;
  };
  menu: Array<{
    name: string;
    price: number;
    description: string;
    allergens: string[];
    image_url: string;
  }>;
}

export interface FoodTruckEvent {
  event_id: string;
  vendor_id: string;
  date: string;
  location_name: string;
  start_time: string;
  end_time: string;
}

export const mockFoodTruckVendors: FoodTruckVendor[] = [
  {
    vendor_id: 'crepes-bonaparte',
    name: 'Crepes Bonaparte',
    category: 'Food Trucks',
    cuisine: ['French', 'Crepes', 'Desserts'],
    price_range: '$8-14',
    status_message: 'Check schedule',
    about: {
      description:
        'French crepe catering specializing in authentic, made-to-order sweet and savory crepes.',
      tags: ['french', 'crepes', 'desserts'],
    },
    images: {
      hero_photo: crepesBonaparte,
      food_icon: crepesBonaparte,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.crepesbonaparte.com/',
      instagram_url: 'https://www.instagram.com/crepesbonaparte',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'thai-mex-cocina',
    name: 'Thai Mex Cocina',
    category: 'Food Trucks',
    cuisine: ['Thai', 'Mexican', 'Fusion'],
    price_range: '$10-18',
    status_message: 'Open 11am-3pm',
    about: {
      description: 'Unique fusion of Thai and Mexican flavors',
      tags: ['thai', 'mexican', 'fusion'],
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: [],
    },
    contact: {
      website_url: 'https://thaimex-cocina.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'wetzels-pretzels',
    name: "Wetzel's Pretzel's",
    category: 'Food Trucks',
    cuisine: ['Pretzels', 'Snacks', 'American'],
    price_range: '$5-10',
    status_message: 'Open 11am-3pm',
    about: {
      description: 'Hand-rolled pretzels, baked fresh',
      tags: ['pretzels', 'snacks', 'sweet'],
    },
    images: {
      hero_photo: wetzelsPretzels,
      food_icon: wetzelsPretzels,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.wetzels.com/menu',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'habit-grill',
    name: 'Habit Grill Trailer',
    category: 'Food Trucks',
    cuisine: ['Burgers', 'American', 'Grill'],
    price_range: '$12-18',
    status_message: 'Mon-Fri 10am-2pm',
    about: {
      description: 'Chargrilled burgers and fresh ingredients',
      tags: ['burgers', 'american', 'grill'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.habitburger.com/menu/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'nugget-grill-express',
    name: 'Nugget Grill Express Trailer',
    category: 'Food Trucks',
    cuisine: ['Burgers', 'Chicken', 'American'],
    price_range: '$8-15',
    status_message: 'Mon-Thu 8am-5pm, Fri 8am-2pm',
    about: {
      description:
        'College campus favorites - burgers, chicken tenders, and fries',
      tags: ['burgers', 'chicken', 'campus dining'],
    },
    images: {
      hero_photo: nuggetGrillExpress,
      food_icon: nuggetGrillExpress,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.csulb.edu/beach-shops/nugget-menu',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'higher-taste',
    name: 'Higher Taste, Plant-Based',
    category: 'Food Trucks',
    cuisine: ['Vegan', 'Plant-Based', 'Healthy'],
    price_range: '$10-16',
    status_message: 'Coming Soon',
    about: {
      description: 'Delicious plant-based meals for everyone - Coming Soon!',
      tags: ['vegan', 'plant-based', 'healthy', 'coming soon'],
    },
    images: {
      hero_photo: higherTaste,
      food_icon: higherTaste,
      slideshow: [],
    },
    contact: {
      website_url: '',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'citrus-rose',
    name: 'Citrus Rose',
    category: 'Food Trucks',
    cuisine: ['Mexican', 'Tacos', 'Street Food'],
    price_range: '$10-16',
    status_message: 'Coming Soon',
    about: {
      description: 'Fresh Mexican street food and tacos - Coming Soon!',
      tags: ['mexican', 'tacos', 'street food', 'coming soon'],
    },
    images: {
      hero_photo: citrusRose,
      food_icon: citrusRose,
      slideshow: [],
    },
    contact: {
      website_url: '',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'subway',
    name: 'Subway Trailer',
    category: 'Food Trucks',
    cuisine: ['Sandwiches', 'American', 'Subs'],
    price_range: '$8-12',
    status_message: 'Coming Soon',
    about: {
      description: 'Fresh subs, wraps and salads - Coming Soon!',
      tags: ['sandwiches', 'subs', 'coming soon'],
    },
    images: {
      hero_photo: subway,
      food_icon: subway,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.subway.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'coffee-bean',
    name: 'Coffee Bean and Tea Leaf Trailer',
    category: 'Food Trucks',
    cuisine: ['Coffee', 'Tea', 'Cafe'],
    price_range: '$5-10',
    status_message: 'Coming Soon',
    about: {
      description: 'Premium coffee and tea - Coming Soon!',
      tags: ['coffee', 'tea', 'coming soon'],
    },
    images: {
      hero_photo: coffeeBean,
      food_icon: coffeeBean,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.coffeebean.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'stopbye-cafe',
    name: 'StopBye Cafe',
    category: 'Food Trucks',
    cuisine: ['Cafe', 'Coffee', 'Snacks'],
    price_range: '$5-12',
    status_message: 'Check schedule',
    about: {
      description: 'Quick cafe bites and coffee',
      tags: ['cafe', 'coffee', 'snacks'],
    },
    images: {
      hero_photo: coffeeBean,
      food_icon: coffeeBean,
      slideshow: [],
    },
    contact: {
      website_url: 'https://stopbyecafe.com',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'deli-doctor',
    name: 'The Deli Doctor',
    category: 'Food Trucks',
    cuisine: ['Deli', 'Sandwiches', 'American'],
    price_range: '$8-14',
    status_message: 'Check schedule',
    about: {
      description: 'Fresh deli sandwiches and salads',
      tags: ['deli', 'sandwiches', 'fresh'],
    },
    images: {
      hero_photo: subway,
      food_icon: subway,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.delidoctor.com',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },

  {
    vendor_id: 'messi-burger',
    name: 'Messi Burger',
    category: 'Food Trucks',
    cuisine: ['Burgers', 'American'],
    price_range: '$10-16',
    status_message: 'Check schedule',
    about: {
      description: 'Gourmet burgers with a kick',
      tags: ['burgers', 'gourmet', 'american'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.instagram.com/messiburgertruck/',
      instagram_url: 'https://www.instagram.com/messiburgertruck/',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'aloha-fridays',
    name: 'Aloha Fridays (Trailer)',
    category: 'Food Trucks',
    cuisine: ['Hawaiian', 'BBQ', 'Fusion'],
    price_range: '$12-18',
    status_message: 'Check schedule',
    about: {
      description: 'Hawaiian BBQ and island favorites',
      tags: ['hawaiian', 'bbq', 'island'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.instagram.com/alohafridaysla',
      instagram_url: 'https://www.instagram.com/alohafridaysla',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'wise-barbecue',
    name: 'Wise Barbecue',
    category: 'Food Trucks',
    cuisine: ['BBQ', 'American', 'Smoked'],
    price_range: '$12-20',
    status_message: 'Check schedule',
    about: {
      description: 'Authentic smoked BBQ',
      tags: ['bbq', 'smoked', 'american'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.wisebarbecue.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'dds-chick',
    name: "DD's Chick and Cat Shack LLC",
    category: 'Food Trucks',
    cuisine: ['Chicken', 'American', 'Soul Food'],
    price_range: '$10-16',
    status_message: 'Check schedule',
    about: {
      description: 'Southern-style chicken and comfort food',
      tags: ['chicken', 'soul food', 'southern'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://ddschickandcatshack.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'asian-street-food',
    name: 'Asian Street Food Truck',
    category: 'Food Trucks',
    cuisine: ['Asian', 'Street Food', 'Fusion'],
    price_range: '$10-16',
    status_message: 'Check schedule',
    about: {
      description: 'Variety of Asian street food favorites',
      tags: ['asian', 'street food', 'fusion'],
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.asianstreetfood.net/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'gochu-gang',
    name: 'Gochu Gang',
    category: 'Food Trucks',
    cuisine: ['Korean', 'Asian', 'Fusion'],
    price_range: '$12-18',
    status_message: 'Check schedule',
    about: {
      description: 'Korean fusion street food',
      tags: ['korean', 'fusion', 'spicy'],
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: [],
    },
    contact: {
      website_url: 'https://getgochu.com/',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'cjs-wings',
    name: "CJ's Wings the Broaster Kings",
    category: 'Food Trucks',
    cuisine: ['Wings', 'American', 'Fried'],
    price_range: '$10-18',
    status_message: 'Check schedule',
    about: {
      description: 'Crispy wings and fried favorites',
      tags: ['wings', 'fried', 'american'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.instagram.com/cjs_wings/',
      instagram_url: 'https://www.instagram.com/cjs_wings/',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'surfer-taco',
    name: 'The Surfer Taco',
    category: 'Food Trucks',
    cuisine: ['Mexican', 'Tacos', 'Beach Food'],
    price_range: '$10-16',
    status_message: 'Check schedule',
    about: {
      description: 'Fresh tacos with a beach vibe',
      tags: ['mexican', 'tacos', 'beach'],
    },
    images: {
      hero_photo: citrusRose,
      food_icon: citrusRose,
      slideshow: [],
    },
    contact: {
      website_url: 'https://thesurfertaco.com/index.html',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'babys-burgers',
    name: "Baby's Burgers (LA)",
    category: 'Food Trucks',
    cuisine: ['Burgers', 'American'],
    price_range: '$12-18',
    status_message: 'Check schedule',
    about: {
      description: "LA's favorite gourmet burgers",
      tags: ['burgers', 'gourmet', 'la'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: 'https://www.babysbadassburgers.com',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
  {
    vendor_id: 'nugget-grill-express',
    name: 'Nugget Grill Express Trailer',
    category: 'Food Trucks',
    cuisine: ['Burgers', 'American', 'Grill'],
    price_range: '$8-14',
    status_message: 'Mon-Thu 8am-5pm, Fri 8am-2pm',
    about: {
      description: 'Quick American grill serving burgers, sandwiches, and more',
      tags: ['burgers', 'american', 'grill', 'sandwiches'],
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: [],
    },
    contact: {
      website_url: '',
      instagram_url: '',
      fooda_order_url: '',
    },
    menu: [],
  },
];

export const mockFoodTruckEvents: FoodTruckEvent[] = [
  // Habit Grill & Nugget Grill - Fixed Location Trailers (recurring daily)
  // Wed Oct 08 2025
  {
    event_id: 'evt-habit-001',
    vendor_id: 'habit-grill',
    date: '2025-10-08',
    location_name: 'Near Fine Arts Building (FA-1)',
    start_time: '10:00 AM',
    end_time: '2:00 PM',
  },
  {
    event_id: 'evt-nugget-001',
    vendor_id: 'nugget-grill-express',
    date: '2025-10-08',
    location_name: 'Upper Campus',
    start_time: '8:00 AM',
    end_time: '5:00 PM',
  },

  // Thu Oct 09 2025
  {
    event_id: 'evt-habit-002',
    vendor_id: 'habit-grill',
    date: '2025-10-09',
    location_name: 'Near Fine Arts Building (FA-1)',
    start_time: '10:00 AM',
    end_time: '2:00 PM',
  },
  {
    event_id: 'evt-nugget-002',
    vendor_id: 'nugget-grill-express',
    date: '2025-10-09',
    location_name: 'Upper Campus',
    start_time: '8:00 AM',
    end_time: '5:00 PM',
  },

  // Fri Oct 10 2025
  {
    event_id: 'evt-habit-003',
    vendor_id: 'habit-grill',
    date: '2025-10-10',
    location_name: 'Near Fine Arts Building (FA-1)',
    start_time: '10:00 AM',
    end_time: '2:00 PM',
  },
  {
    event_id: 'evt-nugget-003',
    vendor_id: 'nugget-grill-express',
    date: '2025-10-10',
    location_name: 'Upper Campus',
    start_time: '8:00 AM',
    end_time: '2:00 PM',
  },

  // Mon Oct 13 2025
  {
    event_id: 'evt-habit-004',
    vendor_id: 'habit-grill',
    date: '2025-10-13',
    location_name: 'Near Fine Arts Building (FA-1)',
    start_time: '10:00 AM',
    end_time: '2:00 PM',
  },
  {
    event_id: 'evt-nugget-004',
    vendor_id: 'nugget-grill-express',
    date: '2025-10-13',
    location_name: 'Upper Campus',
    start_time: '8:00 AM',
    end_time: '5:00 PM',
  },

  // Tue Oct 14 2025
  {
    event_id: 'evt-habit-005',
    vendor_id: 'habit-grill',
    date: '2025-10-14',
    location_name: 'Near Fine Arts Building (FA-1)',
    start_time: '10:00 AM',
    end_time: '2:00 PM',
  },
  {
    event_id: 'evt-nugget-005',
    vendor_id: 'nugget-grill-express',
    date: '2025-10-14',
    location_name: 'Upper Campus',
    start_time: '8:00 AM',
    end_time: '5:00 PM',
  },

  // Regular food truck schedule continues...
  // Wed Oct 08 2025
  {
    event_id: 'evt-001',
    vendor_id: 'stopbye-cafe',
    date: '2025-10-08',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-002',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-08',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-003',
    vendor_id: 'deli-doctor',
    date: '2025-10-08',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Oct 09 2025
  {
    event_id: 'evt-004',
    vendor_id: '8e8-thai',
    date: '2025-10-09',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-005',
    vendor_id: 'thai-mex-cocina',
    date: '2025-10-09',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-006',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-09',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Fri Oct 10 2025
  {
    event_id: 'evt-007',
    vendor_id: 'messi-burger',
    date: '2025-10-10',
    location_name: 'Friday Night Lights',
    start_time: '4:30 PM',
    end_time: '8:30 PM',
  },

  // Mon Oct 13 2025
  {
    event_id: 'evt-008',
    vendor_id: 'aloha-fridays',
    date: '2025-10-13',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-009',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-13',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-010',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-13',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Tue Oct 14 2025
  {
    event_id: 'evt-011',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-14',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-012',
    vendor_id: 'wise-barbecue',
    date: '2025-10-14',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-013',
    vendor_id: '8e8-thai',
    date: '2025-10-14',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Oct 15 2025
  {
    event_id: 'evt-014',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-15',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-015',
    vendor_id: 'dds-chick',
    date: '2025-10-15',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-016',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-15',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Oct 16 2025
  {
    event_id: 'evt-017',
    vendor_id: 'asian-street-food',
    date: '2025-10-16',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-018',
    vendor_id: 'gochu-gang',
    date: '2025-10-16',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-019',
    vendor_id: 'stopbye-cafe',
    date: '2025-10-16',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Fri Oct 17 2025
  {
    event_id: 'evt-020',
    vendor_id: 'cjs-wings',
    date: '2025-10-17',
    location_name: 'Friday Night Lights',
    start_time: '4:30 PM',
    end_time: '8:30 PM',
  },

  // Mon Oct 20 2025
  {
    event_id: 'evt-021',
    vendor_id: 'aloha-fridays',
    date: '2025-10-20',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-022',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-20',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-023',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-20',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Tue Oct 21 2025
  {
    event_id: 'evt-024',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-21',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-025',
    vendor_id: 'stopbye-cafe',
    date: '2025-10-21',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-026',
    vendor_id: 'surfer-taco',
    date: '2025-10-21',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Oct 22 2025
  {
    event_id: 'evt-027',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-22',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-028',
    vendor_id: 'aloha-fridays',
    date: '2025-10-22',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-029',
    vendor_id: 'gochu-gang',
    date: '2025-10-22',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Oct 23 2025
  {
    event_id: 'evt-030',
    vendor_id: 'dds-chick',
    date: '2025-10-23',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-031',
    vendor_id: 'wise-barbecue',
    date: '2025-10-23',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-032',
    vendor_id: 'stopbye-cafe',
    date: '2025-10-23',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Fri Oct 24 2025
  {
    event_id: 'evt-033',
    vendor_id: 'surfer-taco',
    date: '2025-10-24',
    location_name: 'Friday Night Lights',
    start_time: '4:30 PM',
    end_time: '8:30 PM',
  },

  // Mon Oct 27 2025
  {
    event_id: 'evt-034',
    vendor_id: 'gochu-gang',
    date: '2025-10-27',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-035',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-27',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-036',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-27',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Tue Oct 28 2025
  {
    event_id: 'evt-037',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-28',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-038',
    vendor_id: '8e8-thai',
    date: '2025-10-28',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-039',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-28',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Oct 29 2025
  {
    event_id: 'evt-040',
    vendor_id: 'crepes-bonaparte',
    date: '2025-10-29',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-041',
    vendor_id: 'aloha-fridays',
    date: '2025-10-29',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-042',
    vendor_id: 'wise-barbecue',
    date: '2025-10-29',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Oct 30 2025
  {
    event_id: 'evt-043',
    vendor_id: 'stopbye-cafe',
    date: '2025-10-30',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-044',
    vendor_id: 'wetzels-pretzels',
    date: '2025-10-30',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-045',
    vendor_id: 'thai-mex-cocina',
    date: '2025-10-30',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Mon Nov 03 2025
  {
    event_id: 'evt-046',
    vendor_id: 'thai-mex-cocina',
    date: '2025-11-03',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-047',
    vendor_id: 'surfer-taco',
    date: '2025-11-03',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-048',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-03',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Tue Nov 04 2025
  {
    event_id: 'evt-049',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-04',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-050',
    vendor_id: 'asian-street-food',
    date: '2025-11-04',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-051',
    vendor_id: 'wise-barbecue',
    date: '2025-11-04',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Nov 05 2025
  {
    event_id: 'evt-052',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-05',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-053',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-05',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-054',
    vendor_id: 'gochu-gang',
    date: '2025-11-05',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Nov 06 2025
  {
    event_id: 'evt-055',
    vendor_id: 'dds-chick',
    date: '2025-11-06',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-056',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-06',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-057',
    vendor_id: 'aloha-fridays',
    date: '2025-11-06',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Fri Nov 07 2025
  {
    event_id: 'evt-058',
    vendor_id: 'babys-burgers',
    date: '2025-11-07',
    location_name: 'Friday Night Lights',
    start_time: '4:30 PM',
    end_time: '8:30 PM',
  },

  // Mon Nov 10 2025
  {
    event_id: 'evt-059',
    vendor_id: 'aloha-fridays',
    date: '2025-11-10',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-060',
    vendor_id: 'gochu-gang',
    date: '2025-11-10',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-061',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-10',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Nov 12 2025
  {
    event_id: 'evt-062',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-12',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-063',
    vendor_id: 'stopbye-cafe',
    date: '2025-11-12',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-064',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-12',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Nov 13 2025
  {
    event_id: 'evt-065',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-13',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-066',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-13',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-067',
    vendor_id: 'surfer-taco',
    date: '2025-11-13',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Fri Nov 14 2025
  {
    event_id: 'evt-068',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-14',
    location_name: 'Friday Night Lights',
    start_time: '4:30 PM',
    end_time: '8:30 PM',
  },

  // Mon Nov 17 2025
  {
    event_id: 'evt-069',
    vendor_id: 'gochu-gang',
    date: '2025-11-17',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-070',
    vendor_id: 'thai-mex-cocina',
    date: '2025-11-17',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-071',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-17',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Tue Nov 18 2025
  {
    event_id: 'evt-072',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-18',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-073',
    vendor_id: 'dds-chick',
    date: '2025-11-18',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-074',
    vendor_id: 'asian-street-food',
    date: '2025-11-18',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Wed Nov 19 2025
  {
    event_id: 'evt-075',
    vendor_id: 'wise-barbecue',
    date: '2025-11-19',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-076',
    vendor_id: 'crepes-bonaparte',
    date: '2025-11-19',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-077',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-19',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },

  // Thu Nov 20 2025
  {
    event_id: 'evt-078',
    vendor_id: 'wetzels-pretzels',
    date: '2025-11-20',
    location_name: 'Central Quad (LH1)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-079',
    vendor_id: 'wise-barbecue',
    date: '2025-11-20',
    location_name: 'CPACE/SSPAN Lawn',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
  {
    event_id: 'evt-080',
    vendor_id: '8e8-thai',
    date: '2025-11-20',
    location_name: 'Friendship Walk (HHS1 West Lawn)',
    start_time: '11:00 AM',
    end_time: '3:00 PM',
  },
];

/**
 * Check if a vendor is currently open based on real-time
 */
export function isVendorOpenNow(vendorId: string): boolean {
  const now = CURRENT_TIME;
  const today = now.toISOString().split('T')[0];
  const currentDay = now.getDay();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  // Specific vendor hours
  if (vendorId === 'habit-grill') {
    return (
      currentDay >= 1 &&
      currentDay <= 5 &&
      currentHours >= 10 &&
      currentHours < 14
    );
  }
  if (vendorId === 'nugget-grill-express') {
    if (currentDay >= 1 && currentDay <= 4)
      return currentHours >= 8 && currentHours < 17;
    if (currentDay === 5) return currentHours >= 8 && currentHours < 14;
    return false;
  }
  if (vendorId === 'thai-mex-cocina' || vendorId === 'wetzels-pretzels') {
    return currentHours >= 11 && currentHours < 15;
  }

  const todayEvents = mockFoodTruckEvents.filter(
    (e) => e.vendor_id === vendorId && e.date === today
  );
  if (todayEvents.length === 0) return false;

  return todayEvents.some((event) => {
    const [startHour, startMinute] =
      event.start_time.includes('PM') && !event.start_time.includes('12')
        ? [
            parseInt(event.start_time.split(':')[0]) + 12,
            parseInt(event.start_time.split(':')[1]),
          ]
        : [
            parseInt(event.start_time.split(':')[0]),
            parseInt(event.start_time.split(':')[1]),
          ];

    const [endHour, endMinute] =
      event.end_time.includes('PM') && !event.end_time.includes('12')
        ? [
            parseInt(event.end_time.split(':')[0]) + 12,
            parseInt(event.end_time.split(':')[1]),
          ]
        : [
            parseInt(event.end_time.split(':')[0]),
            parseInt(event.end_time.split(':')[1]),
          ];

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const startMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  });
}

/**
 * Get events happening today for specific locations
 */
export function getTodaysEventsByLocation(
  locationName?: string
): FoodTruckEvent[] {
  const today = CURRENT_TIME.toISOString().split('T')[0];
  let events = mockFoodTruckEvents.filter((event) => event.date === today);

  if (locationName) {
    events = events.filter((event) => event.location_name === locationName);
  }

  return events;
}
