// Supplement Product Database (6 items per category)
const products = [
  // Category 1: Proteins & Aminos
  {
    id: 'prot-9',
    type: 'isolate',
    name: 'ISO4M(Velvet Nut Melody) 900g',
    category: 'proteins',
    price: 5399,
    originalPrice: 8999,
    description: 'European Sourced Isolate whey protein by Transformium Nutrition in Velvet Nut Melody flavor. Formulated to optimize athletic performance, accelerate post-workout recovery, and provide efficient muscle replenishment with 25g protein per serving.',
    size: '900g',
    rating: 4.9,
    badge: '40% OFF',
    keywords: 'transformium nutrition iso4m velvet nut melody 900g european sourced isolate whey protein recovery muscle growth',
    images: [
      'images/ultra-iso4m-velvet-nut-front.png',
      'images/ultra-iso4m-velvet-nut-back.png',
      'images/ultra-iso4m-velvet-nut-nutrition.png'
    ]
  },
  {
    id: 'prot-10',
    type: 'isolate',
    name: 'ISO4M(Belgium Chocolate) 1.8kg',
    category: 'proteins',
    price: 10799,
    originalPrice: 17999,
    description: 'European Sourced Isolate whey protein by Transformium Nutrition in rich Belgium Chocolate flavor. Formulated to optimize athletic performance, accelerate post-workout recovery, and provide efficient muscle replenishment with 25g protein per serving across 55 servings.',
    size: '1.8kg',
    rating: 4.9,
    badge: '40% OFF',
    keywords: 'transformium nutrition iso4m belgium chocolate 1.8kg european sourced isolate whey protein recovery muscle growth',
    images: [
      'images/ultra-iso4m-belgium-chocolate-front.png',
      'images/ultra-iso4m-belgium-chocolate-back.png',
      'images/ultra-iso4m-belgium-chocolate-nutrition.png'
    ]
  },
  {
    id: 'prot-1',
    type: 'isolate',
    name: 'Transformium Nutrition- ISO4M 1kg (Choco lata bomb Flavor)',
    category: 'proteins',
    price: 4199,
    originalPrice: 6999,
    description: 'European Sourced Isolate whey protein by Transformium Nutrition. Formulated to optimize athletic performance, accelerate post-workout recovery, and provide efficient muscle replenishment.',
    size: '1kg',
    rating: 4.9,
    badge: '40% OFF',
    keywords: 'transformium nutrition iso4m choco lata bomb flavor chocolate isolate whey protein recovery muscle growth',
    images: [
      'images/ultra-iso4m-front.png',
      'images/ultra-iso4m-back.png'
    ]
  },
  {
    id: 'prot-2',
    type: 'gainer',
    name: 'Transformium Nutrition- Anabolic Gainz Mass Gainer 2.72 kg (Strawberry And Vanilla Flavor)',
    category: 'proteins',
    price: 3249,
    originalPrice: 4999,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a delicious Strawberry and Vanilla flavor. Features over 1160 healthy calories, 50g protein, and 3g creatine per serving for serious muscle growth.',
    size: '2.72kg',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer strawberry vanilla flavor weight gainer protein muscle growth',
    images: [
      'images/ultra-anabolic-gainz-front.png',
      'images/ultra-anabolic-gainz-back.png'
    ]
  },
  {
    id: 'prot-3',
    type: 'gainer',
    name: 'Transformium Nutrition- Anabolic Gainz Mass Gainer 1kg (DryFruit Kulfi Flavor)',
    category: 'proteins',
    price: 1559,
    originalPrice: 2399,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a premium DryFruit Kulfi flavor. Loaded with high protein, complex carbs, and creatine to fuel intense workouts and muscle expansion.',
    size: '1kg',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer dryfruit kulfi flavor weight gainer protein muscle growth',
    images: [
      'images/ultra-anabolic-gainz-kulfi-front.png',
      'images/ultra-anabolic-gainz-kulfi-back.png'
    ]
  },
  {
    id: 'prot-4',
    type: 'gainer',
    name: 'Transformium Nutrition- Anabolic Gainz 4.5kg',
    category: 'proteins',
    price: 4575,
    originalPrice: 7499,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a bulk 4.5kg tub. Loaded with over 1160 healthy calories, complex carbs, and high-quality protein designed for hardcore muscle gain.',
    size: '4.5kg',
    rating: 4.8,
    badge: '39% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer weight gainer 4.5kg protein muscle growth bulk value',
    images: [
      'images/ultra-anabolic-gainz-45kg-front.png',
      'images/ultra-anabolic-gainz-45kg-back.png'
    ]
  },
  {
    id: 'prot-5',
    type: 'blend',
    name: 'Transformium Nutrition- Grow Pro Beast Whey Protein 2kg (Caramel Coffee Flavor)',
    category: 'proteins',
    price: 6825,
    originalPrice: 10499,
    description: 'Grow Pro Beast Whey Protein with Collagen Peptides by Transformium Nutrition. Formulated in a delicious Caramel Coffee flavor, delivering 24g protein and 3g creatine per serving.',
    size: '2kg',
    rating: 4.9,
    badge: '35% OFF',
    keywords: 'transformium nutrition grow pro beast whey protein collagen peptides caramel coffee flavor recovery strength muscle',
    images: [
      'images/ultra-grow-pro-beast-front.png',
      'images/ultra-grow-pro-beast-back.png'
    ]
  },
  {
    id: 'prot-6',
    type: 'blend',
    name: 'Transformium Nutrition- WHEY4MIUM whey Protein Concentrate & Isolate 2kg (Agua Fresca Flavor)',
    category: 'proteins',
    price: 5545,
    originalPrice: 8799,
    description: 'WHEY4MIUM Whey Protein Concentrate & Isolate by Transformium Nutrition. Formulated in an exotic Agua Fresca flavor to support rapid post-workout recovery, build lean muscle mass, and improve strength.',
    size: '2kg',
    rating: 4.9,
    badge: '37% OFF',
    keywords: 'transformium nutrition whey4mium whey protein concentrate isolate agua fresca flavor recovery muscle growth strength',
    images: [
      'images/ultra-whey4mium-front.png',
      'images/ultra-whey4mium-back.png'
    ]
  },
  {
    id: 'prot-7',
    type: 'concentrate',
    name: 'Transformium Nutrition- Nitro Sensation 2.5kg (Pista Kulfi Flavor)',
    category: 'proteins',
    price: 3899,
    originalPrice: 6499,
    description: 'Nitro Sensation Whey Protein Concentrate by Transformium Nutrition. Infused with Ashwagandha, Ginseng, Tribulus, and Creatine in a rich Pista Kulfi flavor to maximize muscle breakdown prevention and high-intensity capacity.',
    size: '2.5kg',
    rating: 4.9,
    badge: '40% OFF',
    keywords: 'transformium nutrition nitro sensation whey protein concentrate ashwagandha ginseng tribulus creatine pista kulfi flavor recovery muscle size strength',
    images: [
      'images/ultra-nitro-sensation-front.png',
      'images/ultra-nitro-sensation-back.png'
    ]
  },
  {
    id: 'prot-8',
    type: 'aminos',
    name: 'Transformium Nutrition- Anabolic BCAA+EAA, 50 Servings (Orange Spice Sprilzer Flavor)',
    category: 'proteins',
    price: 1860,
    originalPrice: 2999,
    description: 'Anabolic BCAA+EAA by Transformium Nutrition. Formulated in a refreshing Orange Spice Spritzer flavor, providing essential amino acids and hydration support across 50 servings.',
    size: '50 Servings',
    rating: 4.8,
    badge: '38% OFF',
    keywords: 'transformium nutrition anabolic bcaa eaa hydration orange spice sprilzer spritzer flavor recovery muscle preservation amino acids',
    images: [
      'images/ultra-anabolic-bcaa-eaa-front.png',
      'images/ultra-anabolic-bcaa-eaa-back.png'
    ]
  },
  {
    id: 'crt-1',
    type: 'creatine',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Blue Berry Flavor)',
    category: 'creatine',
    price: 1430,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition ultra creatine blueberry blue berry flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-front.png',
      'images/ultra-creatine-back.png'
    ]
  },
  {
    id: 'crt-2',
    type: 'creatine',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Sex On The Beach Flavor)',
    category: 'creatine',
    price: 1430,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition in a refreshing Sex on the Beach flavor. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition ultra creatine sex on the beach flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-sex-on-the-beach-front.png',
      'images/ultra-creatine-sex-on-the-beach-back.png'
    ]
  },
  {
    id: 'crt-3',
    type: 'creatine',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Lemon Flavor)',
    category: 'creatine',
    price: 1430,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition in a tangy Lemon flavor. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition ultra creatine lemon flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-lemon-front.png',
      'images/ultra-creatine-lemon-back.png'
    ]
  },





  // Category 2: Pre-Workouts & Energy
  {
    id: 'energy-1',
    type: 'preworkout',
    name: 'Transformium Nutrition- Hazard Original Pre Workout 280g, 50 servings (Mixed Berries Flavor)',
    category: 'energy',
    price: 2300,
    originalPrice: 3599,
    description: 'Hazard Original Pre-Workout by Transformium Nutrition. Formulated in a delicious Mixed Berries flavor to enhance endurance, boost strength, and provide testosterone support across 50 servings.',
    size: '280g',
    rating: 4.9,
    badge: '36% OFF',
    keywords: 'transformium nutrition hazard original pre workout preworkout mixed berries flavor endurance testosterone support strength pump',
    images: [
      'images/ultra-hazard-preworkout-front.png',
      'images/ultra-hazard-preworkout-back.png'
    ]
  },

  // Category 3: Vitamins & Wellness
  {
    id: 'well-1',
    type: 'wellness',
    name: 'Transformium Nutrition- Performance Arginine Tablets 90N',
    category: 'wellness',
    price: 1039,
    originalPrice: 1599,
    description: 'Performance Arginine L-Arginine Tablets by Transformium Wellness. Promotes insane pumps, long-lasting erections, increased nitric oxide production, and enhanced vasodilation & recovery.',
    size: '90N Tablets',
    rating: 4.9,
    badge: '35% OFF',
    keywords: 'transformium nutrition performance arginine tablets 90n l-arginine nitric oxide recovery strength pump vasodilation',
    images: [
      'images/ultra-arginine-front.png',
      'images/ultra-arginine-back.png'
    ]
  },
  {
    id: 'well-2',
    type: 'fatburner',
    name: 'Transformium NUTRITION-ULTRA Shred&Tight 3500ml (Pink Guava Flavor)',
    category: 'wellness',
    price: 2045,
    originalPrice: 3299,
    description: 'Ultra Shred & Tight liquid formulation by Transformium Nutrition. Packing a 3500mg Carnitine Blend in Pink Guava flavor to accelerate metabolism, support a toned body, reduce body fat, and increase lean muscle.',
    size: '450ml',
    rating: 4.9,
    badge: '38% OFF',
    keywords: 'transformium nutrition ultra shred tight 3500ml pink guava flavor carnitine blend fat loss metabolism tone lean muscle',
    images: [
      'images/ultra-shred-tight-front.png',
      'images/ultra-shred-tight-back.png'
    ]
  },
  {
    id: 'well-3',
    type: 'multivitamin',
    name: 'Transformium Nutrition- Uni-Vit Multivitamin (Tablets)',
    category: 'wellness',
    price: 459,
    originalPrice: 699,
    description: 'Uni-Vit Multivitamin Tablets by Transformium Nutrition. Premium blend of vitamins and minerals to improve immunity, boost energy levels, and support overall health and wellness.',
    size: '30 Tablets',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition uni vit univit multivitamin tablets vitamins minerals health immunity wellness daily active',
    images: [
      'images/ultra-uni-vit-front.png',
      'images/ultra-uni-vit-back.png'
    ]
  },
  {
    id: 'well-4',
    type: 'fatburner',
    name: 'Transformium Nutrition- Ass Buster 60N Capsules',
    category: 'wellness',
    price: 1689,
    originalPrice: 2599,
    description: 'Ass Buster Advanced Thermogenic Fat Burning formulation by Transformium Nutrition. Features organic root extracts and stimulants to deliver extreme energy, power, and focus across 60 capsules.',
    size: '60N Capsules',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition ass buster advanced thermogenic fat burning capsules weight loss metabolism energy focus power',
    images: [
      'images/ultra-ass-buster-front.png',
      'images/ultra-ass-buster-back.png'
    ]
  },
  {
    id: 'well-5',
    type: 'wellness',
    name: 'Transformium Nutrition- Heart Revive Nattokinase+COQ10 30N Capsules',
    category: 'wellness',
    price: 1559,
    originalPrice: 2399,
    description: 'Heart Revive Nattokinase & COQ10 by Transformium Nutrition. Formulated to maximize VO2 capacity, decrease bad cholesterol, support endurance and stamina, and promote healthy heart functioning.',
    size: '30N Capsules',
    rating: 4.9,
    badge: '35% OFF',
    keywords: 'transformium nutrition heart revive nattokinase coq10 coq17 30n 90 capsules endurance stamina cholesterol heart health vo2 max',
    images: [
      'images/ultra-heart-revive-front.png',
      'images/ultra-heart-revive-back.png'
    ]
  },
  {
    id: 'well-6',
    type: 'wellness',
    name: 'Transformium Nutrition- Anabolic Veinz-SR 90N Tablets',
    category: 'wellness',
    price: 2145,
    originalPrice: 3299,
    description: 'Anabolic Veinz-SR Nitric Oxide Augmenter formulation by Transformium Nutrition. Packed with Charge 3™ complex to promote extreme vasodilation, muscle pumps, and enhanced athletic performance across 90 tablets.',
    size: '90N Tablets',
    rating: 4.9,
    badge: '35% OFF',
    keywords: 'transformium nutrition anabolic veinz sr veiz 90n tablets charge 3 nitric oxide augmenter vasodilation muscle pump performance',
    images: [
      'images/ultra-anabolic-veinz-front.png',
      'images/ultra-anabolic-veinz-back.png'
    ]
  },
  {
    id: 'well-7',
    type: 'wellness',
    name: 'Transformium Nutrition- Kidney Revive 60N Capsules',
    category: 'wellness',
    price: 1559,
    originalPrice: 2399,
    description: 'Kidney Revive Kidney Support by Transformium Nutrition. Formulated with milk thistle and other natural herbs to aid in kidney detox, normal creatinine levels, healthy bladder function, and gout/uric acid reduction.',
    size: '60 Capsules',
    rating: 4.8,
    badge: '35% OFF',
    keywords: 'transformium nutrition kidney revive 60n capsules kidney detox gout uric acid normal creatinine bladder function support',
    images: [
      'images/ultra-kidney-revive-front.png',
      'images/ultra-kidney-revive-back.png'
    ]
  },
  {
    id: 'well-8',
    type: 'wellness',
    name: 'Transformium Nutrition- Liver&Heart Shield 60N Capsules',
    category: 'wellness',
    price: 1585,
    originalPrice: 2599,
    description: 'Liver & Heart Shield by Transformium Wellness. Formulated to support optimal liver regeneration & heart health, promote healthy liver function, and aid in sluggish liver and fatty liver recovery.',
    size: '60 Capsules',
    rating: 4.8,
    badge: '38% OFF',
    keywords: 'transformium nutrition liver heart shield 60n capsules liver toxicity fatty liver sluggish liver on cycle essentials support',
    images: [
      'images/ultra-liver-heart-shield-front.png',
      'images/ultra-liver-heart-shield-back.png'
    ]
  },
];

// Freeze the product database to prevent any unauthorized run-time modifications via console
products.forEach(p => Object.freeze(p));
Object.freeze(products);

// Load cart state and validate integrity against the frozen products array to prevent tampering
let cart = [];
try {
  const savedCart = JSON.parse(localStorage.getItem('sph_supplement_cart')) || [];
  cart = savedCart.map(item => {
    const authenticProduct = products.find(p => p.id === (item.product && item.product.id));
    if (authenticProduct && typeof item.quantity === 'number' && item.quantity > 0) {
      return {
        product: authenticProduct,
        quantity: Math.floor(item.quantity)
      };
    }
    return null;
  }).filter(Boolean);
} catch (e) {
  cart = [];
}

// Category expanded state trackers
const expandedSections = {
  creatine: false,
  proteins: false,
  energy: false,
  wellness: false
};

// Filter & Sort Configuration
const PRODUCT_TYPES = [
  { id: 'all', label: 'All Product Types', icon: 'sparkles' },
  { id: 'isolate', label: 'Whey Isolate', icon: 'shield-check' },
  { id: 'gainer', label: 'Mass Gainers', icon: 'dumbbell' },
  { id: 'blend', label: 'Whey Blends & Concentrate', icon: 'layers' },
  { id: 'creatine', label: 'Creatine Monohydrate', icon: 'zap' },
  { id: 'preworkout', label: 'Pre-Workouts', icon: 'flame' },
  { id: 'aminos', label: 'BCAA & Aminos', icon: 'activity' },
  { id: 'fatburner', label: 'Fat Burners & Carnitine', icon: 'fire' },
  { id: 'wellness', label: 'Organ Care & Vitality', icon: 'heart-pulse' },
  { id: 'multivitamin', label: 'Daily Multivitamins', icon: 'pill' }
];

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-2000', label: 'Under ₹2,000' },
  { id: '2000-5000', label: '₹2,000 – ₹5,000' },
  { id: '5000-10000', label: '₹5,000 – ₹10,000' },
  { id: 'above-10000', label: 'Above ₹10,000' },
  { id: 'under-3000', label: 'Under ₹3,000' }
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured / Recommended' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'discount-desc', label: 'Highest Discount %' },
  { id: 'rating-desc', label: 'Top Customer Rating' }
];

// Current active filter state
let currentFilterState = {
  searchQuery: '',
  category: 'all',
  productType: 'all',
  priceRange: 'all',
  sortBy: 'featured',
  minDiscount: 0
};

// Backwards compatibility tracker for legacy search functions
let activeSearchQuery = '';

// System DOM action tracking to bypass MutationObserver triggers during code modifications
let isSystemAction = false;

function safeDOMOperation(action) {
  isSystemAction = true;
  try {
    action();
  } finally {
    setTimeout(() => {
      isSystemAction = false;
    }, 0);
  }
}

// Helper: Escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Helper: Highlight matching query text
function highlightMatch(text, query) {
  if (!query) return escapeHTML(text);
  const escapedText = escapeHTML(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapedText.replace(regex, '<span class="text-emerald-500 font-extrabold underline decoration-emerald-500/50">$1</span>');
}

// Filter evaluation for a product
function doesProductMatchFilters(product) {
  // 1. Search Query
  if (currentFilterState.searchQuery) {
    const q = currentFilterState.searchQuery.toLowerCase();
    const nameMatch = (product.name || '').toLowerCase().includes(q);
    const descMatch = (product.description || '').toLowerCase().includes(q);
    const kwMatch = (product.keywords || '').toLowerCase().includes(q);
    const sizeMatch = (product.size || '').toLowerCase().includes(q);
    const priceMatch = (product.price || '').toString().includes(q);
    const typeMatch = (product.type || '').toLowerCase().includes(q);
    if (!nameMatch && !descMatch && !kwMatch && !sizeMatch && !priceMatch && !typeMatch) {
      return false;
    }
  }

  // 2. Category
  if (currentFilterState.category !== 'all' && product.category !== currentFilterState.category) {
    return false;
  }

  // 3. Product Type
  if (currentFilterState.productType !== 'all') {
    if (currentFilterState.productType === 'blend') {
      if (product.type !== 'blend' && product.type !== 'concentrate') return false;
    } else if (product.type !== currentFilterState.productType) {
      return false;
    }
  }

  // 4. Price Range
  if (currentFilterState.priceRange !== 'all') {
    const p = product.price;
    if (currentFilterState.priceRange === 'under-2000' && p >= 2000) return false;
    if (currentFilterState.priceRange === '2000-5000' && (p < 2000 || p > 5000)) return false;
    if (currentFilterState.priceRange === '5000-10000' && (p < 5000 || p > 10000)) return false;
    if (currentFilterState.priceRange === 'above-10000' && p < 10000) return false;
    if (currentFilterState.priceRange === 'under-3000' && p >= 3000) return false;
  }

  // 5. Min Discount
  if (currentFilterState.minDiscount > 0) {
    const m = (product.badge || '').match(/(\\d+)%/);
    const disc = m ? parseInt(m[1], 10) : 0;
    if (disc < currentFilterState.minDiscount) return false;
  }

  return true;
}

// Sort products array
function sortProducts(list) {
  const sorted = [...list];
  switch (currentFilterState.sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'discount-desc': {
      const getD = p => {
        const m = (p.badge || '').match(/(\\d+)%/);
        return m ? parseInt(m[1], 10) : 0;
      };
      sorted.sort((a, b) => getD(b) - getD(a));
      break;
    }
    case 'rating-desc':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return sorted;
}

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize security protections
  initSecurity();

  // Setup Lucide Icons
  lucide.createIcons();

  // Initialize UI Features
  initTheme();
  renderHeroFilterOptions();
  renderProducts();
  setupEventListeners();
  updateCartUI();
  initAthletesSlider();
});

// Theme Logic
function initTheme() {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (isDark) {
      themeIcon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;
    } else {
      themeIcon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`;
    }
  }
}

// Render product grids
function renderProducts() {
  safeDOMOperation(() => {
    const categoryGrids = {
      creatine: document.getElementById('creatine-grid'),
      proteins: document.getElementById('proteins-grid'),
      energy: document.getElementById('energy-grid'),
      wellness: document.getElementById('wellness-grid')
    };

    // Clear existing items in grids
    Object.values(categoryGrids).forEach(grid => {
      if (grid) grid.innerHTML = '';
    });

    const isAnyFilterActive = Boolean(
      currentFilterState.searchQuery ||
      currentFilterState.productType !== 'all' ||
      currentFilterState.priceRange !== 'all' ||
      currentFilterState.sortBy !== 'featured' ||
      currentFilterState.minDiscount > 0
    );

    // Filter and sort products
    const filteredProducts = sortProducts(products.filter(doesProductMatchFilters));

    filteredProducts.forEach((product) => {
      const grid = categoryGrids[product.category];
      if (!grid) return;

      const categoryFilteredProducts = filteredProducts.filter(p => p.category === product.category);
      const itemIdx = categoryFilteredProducts.findIndex(p => p.id === product.id);

      const card = document.createElement('article');
      card.className = `premium-card rounded-2xl overflow-hidden flex flex-col h-full opacity-100 transition-all duration-300 cursor-pointer group`;
      card.setAttribute('data-id', product.id);
      card.setAttribute('data-name', product.name.toLowerCase());
      card.setAttribute('data-keywords', product.keywords.toLowerCase());

      // If any filter/search is active, show all matches immediately. Otherwise first 3 per category.
      const isHiddenByDefault = !isAnyFilterActive && itemIdx >= 3 && !expandedSections[product.category];
      if (isHiddenByDefault) {
        card.classList.add('grid-item-hidden');
      } else {
        card.classList.add('grid-item-visible');
      }

      // Rating stars
      let starsHtml = '';
      const fullStars = Math.floor(product.rating);
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          starsHtml += `<i data-lucide="star" class="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500"></i>`;
        } else {
          starsHtml += `<i data-lucide="star" class="w-2.5 h-2.5 sm:w-4 sm:h-4 text-zinc-400 dark:text-zinc-650"></i>`;
        }
      }

      card.innerHTML = `
        ${product.images ? `
          <div class="aspect-[4/3] relative w-full overflow-hidden group/img bg-zinc-50 dark:bg-zinc-900/10">
            <div class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full h-full" id="slider-${product.id}">
              ${product.images.map((img, i) => `
                <div class="w-full h-full flex-shrink-0 snap-start flex items-center justify-center p-3 sm:p-5">
                  <img src="${img}" class="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105" alt="${product.name} - Image ${i + 1}">
                </div>
              `).join('')}
            </div>
            
            <div class="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-10">
              <div class="bg-zinc-950/90 border border-zinc-700/80 text-white text-[9px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Quick View</span>
              </div>
            </div>

            ${product.badge ? `
              <div class="absolute top-2 left-2 bg-emerald-600 text-white dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-600/20 text-[7px] sm:text-[9px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display z-10">
                ${product.badge}
              </div>
            ` : ''}
            
            <div class="absolute top-2 right-2 text-zinc-500 dark:text-zinc-400 text-[7px] sm:text-xs font-semibold px-1 sm:px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800/75 border border-zinc-300/40 dark:border-zinc-700/40 font-mono z-10">
              ${product.size}
            </div>
          </div>
          
          ${product.images.length > 1 ? `
            <div class="flex gap-2 px-3 py-1.5 border-y border-zinc-200 dark:border-zinc-800/60 justify-center items-center bg-zinc-50/50 dark:bg-zinc-900/30 overflow-x-auto no-scrollbar scroll-smooth">
              ${product.images.map((img, i) => `
                <button 
                  onclick="event.stopPropagation(); document.getElementById('slider-${product.id}').scrollTo({left: document.getElementById('slider-${product.id}').offsetWidth * ${i}, behavior: 'smooth'})"
                  class="w-10 h-8 rounded border-2 ${i === 0 ? 'border-emerald-500 dark:border-emerald-400' : 'border-transparent'} overflow-hidden flex-shrink-0 transition-all duration-200 thumb-${product.id}"
                  aria-label="View photo ${i + 1}"
                >
                  <img src="${img}" class="object-cover w-full h-full">
                </button>
              `).join('')}
            </div>
          ` : `<div class="border-b border-zinc-200 dark:border-zinc-800"></div>`}
        ` : `
          <div class="aspect-[4/3] product-image-gap flex flex-col items-center justify-center p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 relative group">
            <div class="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-xl group-hover:scale-125 transition-transform duration-500"></div>
            <div class="z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-zinc-200/50 dark:bg-zinc-800/80 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
              ${getCategoryIcon(product.category)}
            </div>
            <span class="z-10 text-[7px] sm:text-[10px] tracking-widest text-zinc-500 dark:text-zinc-400 font-mono font-bold uppercase mt-2 sm:mt-4">IMAGE PLACEHOLDER</span>
            ${product.badge ? `
              <div class="absolute top-2 left-2 bg-emerald-600 text-white dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-600/20 text-[7px] sm:text-[9px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display">
                ${product.badge}
              </div>
            ` : ''}
            <div class="absolute top-2 right-2 text-zinc-500 dark:text-zinc-400 text-[7px] sm:text-xs font-semibold px-1 sm:px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800/75 border border-zinc-300/40 dark:border-zinc-700/40 font-mono">
              ${product.size}
            </div>
          </div>
        `}
        
        <div class="p-3 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 mb-1.5">
              <div class="flex">${starsHtml}</div>
              <span class="text-[9px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-semibold font-mono">${product.rating}</span>
            </div>
            
            <h3 class="card-title text-xs sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 sm:mb-2 font-display hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
              ${product.name}
            </h3>
            
            <p class="card-description text-zinc-600 dark:text-zinc-400 text-[9px] sm:text-xs leading-normal mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
              ${product.description}
            </p>
          </div>
          
          <div class="border-t border-zinc-150 dark:border-zinc-800/80 pt-2.5 sm:pt-4 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
            <div class="flex flex-col">
              <span class="card-mrp-label text-[7px] sm:text-[9px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold">MRP (Incl. taxes)</span>
              <div class="flex items-baseline gap-1.5">
                <span class="card-price text-sm sm:text-xl font-black text-zinc-900 dark:text-white font-display">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice ? `
                  <span class="text-[9px] sm:text-xs text-zinc-400 dark:text-zinc-505 line-through font-medium">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                ` : ''}
              </div>
            </div>
            
            <button 
              onclick="event.stopPropagation(); addToCart('${product.id}')"
              class="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-black font-bold text-[9px] sm:text-xs py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-emerald-600/10 dark:shadow-emerald-500/5 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              <i data-lucide="shopping-cart" class="w-3 sm:w-3.5 h-3 sm:h-3.5"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        openSpecsModal(product.id);
      });

      grid.appendChild(card);

      const slider = card.querySelector(`#slider-${product.id}`);
      const thumbs = card.querySelectorAll(`.thumb-${product.id}`);
      if (slider && thumbs.length > 0) {
        slider.addEventListener('scroll', () => {
          const index = Math.round(slider.scrollLeft / slider.offsetWidth);
          thumbs.forEach((thumb, idx) => {
            if (idx === index) {
              thumb.classList.add('border-emerald-500', 'dark:border-emerald-400');
              thumb.classList.remove('border-transparent');
            } else {
              thumb.classList.remove('border-emerald-500', 'dark:border-emerald-400');
              thumb.classList.add('border-transparent');
            }
          });
        });
      }
    });

    // Update section visibility
    const sections = {
      creatine: document.getElementById('creatine-section'),
      proteins: document.getElementById('proteins-section'),
      energy: document.getElementById('energy-section'),
      wellness: document.getElementById('wellness-section')
    };

    Object.entries(sections).forEach(([category, sec]) => {
      if (!sec) return;
      const count = filteredProducts.filter(p => p.category === category).length;
      if (count === 0) {
        sec.classList.add('hidden');
      } else {
        sec.classList.remove('hidden');
      }
    });

    // Toggle empty search state
    const emptyState = document.getElementById('search-empty-state');
    if (emptyState) {
      if (filteredProducts.length === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }

    // Re-adjust expandable buttons displays
    updateExpandButtonsVisibility();
    lucide.createIcons();
  });
}

// Return matching SVG paths for supplement categories
function getCategoryIcon(category) {
  if (category === 'creatine') {
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  } else if (category === 'proteins') {
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18h12M6 6h12M3 10h18M3 14h18M8 6v12M16 6v12"/></svg>`;
  } else if (category === 'energy') {
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  } else {
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`;
  }
}

// Render options inside the Interactive Filter Panel
function renderHeroFilterOptions() {
  const typeContainer = document.getElementById('filter-type-options');
  const priceContainer = document.getElementById('filter-price-options');
  const sortContainer = document.getElementById('filter-sort-options');

  if (typeContainer) {
    typeContainer.innerHTML = PRODUCT_TYPES.map(t => {
      const count = t.id === 'all'
        ? products.length
        : products.filter(p => t.id === 'blend' ? (p.type === 'blend' || p.type === 'concentrate') : p.type === t.id).length;
      const isActive = currentFilterState.productType === t.id;
      return `
        <button type="button" onclick="selectFilterOption('productType', '${t.id}')"
          class="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between filter-select-btn ${isActive ? 'active' : 'text-zinc-700 dark:text-zinc-300'} cursor-pointer">
          <span class="flex items-center gap-2 truncate">
            <i data-lucide="${t.icon || 'circle'}" class="w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-500' : 'text-zinc-400'}"></i>
            <span class="truncate">${t.label}</span>
          </span>
          <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? 'bg-emerald-500 text-white dark:text-black' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'} font-bold">
            ${count}
          </span>
        </button>
      `;
    }).join('');
  }

  if (priceContainer) {
    priceContainer.innerHTML = PRICE_RANGES.map(pr => {
      const isActive = currentFilterState.priceRange === pr.id;
      return `
        <button type="button" onclick="selectFilterOption('priceRange', '${pr.id}')"
          class="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between filter-select-btn ${isActive ? 'active' : 'text-zinc-700 dark:text-zinc-300'} cursor-pointer">
          <span>${pr.label}</span>
          ${isActive ? `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i>` : ''}
        </button>
      `;
    }).join('');
  }

  if (sortContainer) {
    sortContainer.innerHTML = SORT_OPTIONS.map(s => {
      const isActive = currentFilterState.sortBy === s.id;
      return `
        <button type="button" onclick="selectFilterOption('sortBy', '${s.id}')"
          class="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between filter-select-btn ${isActive ? 'active' : 'text-zinc-700 dark:text-zinc-300'} cursor-pointer">
          <span>${s.label}</span>
          ${isActive ? `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i>` : ''}
        </button>
      `;
    }).join('');
  }

  updateFilterBadges();
  lucide.createIcons();
}

// Select an option inside the filter panel
function selectFilterOption(filterKey, value) {
  currentFilterState[filterKey] = value;
  renderHeroFilterOptions();
  renderProducts();
}

// Update badges on the Live Filtering button and Quick Filter Chips
function updateFilterBadges() {
  const matchCount = products.filter(doesProductMatchFilters).length;
  const matchCountEl = document.getElementById('filter-match-count');
  if (matchCountEl) matchCountEl.textContent = matchCount;

  let activeCount = 0;
  if (currentFilterState.productType !== 'all') activeCount++;
  if (currentFilterState.priceRange !== 'all') activeCount++;
  if (currentFilterState.sortBy !== 'featured') activeCount++;
  if (currentFilterState.minDiscount > 0) activeCount++;

  const badgeEl = document.getElementById('hero-filter-badge');
  const filterBtn = document.getElementById('hero-filter-btn');
  if (badgeEl && filterBtn) {
    if (activeCount > 0) {
      badgeEl.textContent = activeCount;
      badgeEl.classList.remove('hidden');
      filterBtn.classList.add('active-filters');
    } else {
      badgeEl.classList.add('hidden');
      filterBtn.classList.remove('active-filters');
    }
  }

  // Update quick filter chips active class
  document.querySelectorAll('.quick-filter-chip').forEach(chip => {
    const fType = chip.getAttribute('data-filter-type');
    const fPrice = chip.getAttribute('data-filter-price');
    const fDisc = chip.getAttribute('data-filter-discount');

    let isActive = false;
    if (fType) {
      isActive = currentFilterState.productType === fType;
    } else if (fPrice) {
      isActive = currentFilterState.priceRange === fPrice;
    } else if (fDisc) {
      isActive = currentFilterState.minDiscount === parseInt(fDisc, 10);
    }

    if (isActive) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// Instant Live Search Dropdown Renderer
function renderLiveSearchDropdown() {
  const dropdown = document.getElementById('hero-search-dropdown');
  const input = document.getElementById('hero-search-input');
  if (!dropdown || !input) return;

  const query = input.value.trim();
  if (!query) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    return;
  }

  const matches = products.filter(doesProductMatchFilters);

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="p-6 text-center">
        <div class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 mx-auto flex items-center justify-center mb-2">
          <i data-lucide="package-search" class="w-5 h-5"></i>
        </div>
        <p class="text-xs font-bold text-zinc-800 dark:text-zinc-200">No supplements found matching "${escapeHTML(query)}"</p>
        <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Try quick searches: </p>
        <div class="flex items-center justify-center gap-1.5 mt-2.5 flex-wrap">
          <button type="button" onclick="quickSearchTag('ISO4M')" class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 cursor-pointer">ISO4M</button>
          <button type="button" onclick="quickSearchTag('Creatine')" class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 cursor-pointer">Creatine</button>
          <button type="button" onclick="quickSearchTag('Belgium')" class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 cursor-pointer">Belgium Chocolate</button>
          <button type="button" onclick="quickSearchTag('Gainz')" class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 cursor-pointer">Gainz</button>
        </div>
      </div>
    `;
    dropdown.classList.remove('hidden');
    lucide.createIcons();
    return;
  }

  const topMatches = matches.slice(0, 5);
  dropdown.innerHTML = `
    <div class="flex items-center justify-between px-2 py-1.5 border-b border-zinc-200 dark:border-zinc-800/80 mb-2">
      <span class="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
        Found ${matches.length} matching supplement${matches.length > 1 ? 's' : ''}
      </span>
      <span class="text-[9px] text-zinc-500 dark:text-zinc-400">Click item for specifications</span>
    </div>
    <div class="space-y-1">
      ${topMatches.map(p => `
        <div class="live-search-item flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all cursor-pointer group/item border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/60"
          onclick="selectSearchItem('${p.id}')">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 p-1 shrink-0 overflow-hidden border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center">
              <img src="${p.images[0]}" class="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-200" alt="${p.name}">
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">${p.badge}</span>
                <span class="text-[9px] text-zinc-500 font-mono font-bold">${p.size}</span>
              </div>
              <h4 class="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 font-display transition-colors">
                ${highlightMatch(p.name, query)}
              </h4>
              <div class="flex items-baseline gap-2">
                <span class="text-xs sm:text-sm font-black text-zinc-900 dark:text-white font-mono">₹${p.price.toLocaleString('en-IN')}</span>
                <span class="text-[10px] text-zinc-400 dark:text-zinc-500 line-through font-mono">₹${p.originalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button type="button" onclick="event.stopPropagation(); addToCart('${p.id}')" class="p-2 rounded-lg bg-emerald-600/10 hover:bg-emerald-600 text-emerald-600 hover:text-white dark:bg-emerald-500/10 dark:hover:bg-emerald-400 dark:text-emerald-400 dark:hover:text-black transition-all cursor-pointer" title="Add to Cart">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
            </button>
            <button type="button" onclick="event.stopPropagation(); openSpecsModal('${p.id}')" class="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-[10px] font-bold transition-all cursor-pointer">
              Quick View
            </button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="pt-2 mt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between px-2">
      <span class="text-[10px] text-zinc-500 font-mono">${matches.length > 5 ? `Showing top 5 of ${matches.length}` : `All ${matches.length} matching`}</span>
      <button type="button" onclick="scrollToMatchingCatalog()" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
        <span>View all in catalog</span>
        <i data-lucide="arrow-down" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;
  dropdown.classList.remove('hidden');
  lucide.createIcons();
}

function selectSearchItem(productId) {
  const dropdown = document.getElementById('hero-search-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  openSpecsModal(productId);
}

function quickSearchTag(tag) {
  const heroSearch = document.getElementById('hero-search-input');
  if (heroSearch) {
    heroSearch.value = tag;
    filterCatalog(tag);
    heroSearch.focus();
  }
}

function scrollToMatchingCatalog() {
  const dropdown = document.getElementById('hero-search-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  const panel = document.getElementById('hero-filter-panel');
  if (panel) panel.classList.add('hidden');

  const sections = ['creatine-section', 'proteins-section', 'energy-section', 'wellness-section'];
  for (const sId of sections) {
    const sec = document.getElementById(sId);
    if (sec && !sec.classList.contains('hidden')) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }
}

// Reset all filters and search state back to initial
function resetAllFilters() {
  currentFilterState = {
    searchQuery: '',
    category: 'all',
    productType: 'all',
    priceRange: 'all',
    sortBy: 'featured',
    minDiscount: 0
  };
  activeSearchQuery = '';

  const heroSearch = document.getElementById('hero-search-input');
  if (heroSearch) heroSearch.value = '';
  const headerSearch = document.getElementById('header-search-input');
  if (headerSearch) headerSearch.value = '';
  const mobileSearch = document.getElementById('mobile-search-input');
  if (mobileSearch) mobileSearch.value = '';

  const heroClear = document.getElementById('hero-search-clear');
  if (heroClear) heroClear.classList.add('hidden');
  const headerClear = document.getElementById('header-search-clear');
  if (headerClear) headerClear.classList.add('hidden');

  const dropdown = document.getElementById('hero-search-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  const panel = document.getElementById('hero-filter-panel');
  if (panel) panel.classList.add('hidden');

  renderHeroFilterOptions();
  renderProducts();
}

// Legacy bridge & unified search logic
function filterCatalog(query) {
  currentFilterState.searchQuery = (query || '').trim();
  activeSearchQuery = currentFilterState.searchQuery.toLowerCase();

  const heroClear = document.getElementById('hero-search-clear');
  if (heroClear) {
    if (currentFilterState.searchQuery) {
      heroClear.classList.remove('hidden');
    } else {
      heroClear.classList.add('hidden');
    }
  }

  const headerClear = document.getElementById('header-search-clear');
  if (headerClear) {
    if (currentFilterState.searchQuery) {
      headerClear.classList.remove('hidden');
    } else {
      headerClear.classList.add('hidden');
    }
  }

  renderLiveSearchDropdown();
  renderProducts();
  updateFilterBadges();
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme toggler buttons
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Hero Search Input
  const heroSearch = document.getElementById('hero-search-input');
  const headerSearch = document.getElementById('header-search-input');
  const mobileSearch = document.getElementById('mobile-search-input');

  if (heroSearch) {
    heroSearch.addEventListener('input', (e) => {
      filterCatalog(e.target.value);
      if (headerSearch) headerSearch.value = e.target.value;
      if (mobileSearch) mobileSearch.value = e.target.value;
    });

    heroSearch.addEventListener('focus', () => {
      if (heroSearch.value.trim()) {
        renderLiveSearchDropdown();
      }
    });

    heroSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        scrollToMatchingCatalog();
      }
    });
  }

  // Hero Search Clear button
  const heroClear = document.getElementById('hero-search-clear');
  if (heroClear) {
    heroClear.addEventListener('click', () => {
      if (heroSearch) heroSearch.value = '';
      if (headerSearch) headerSearch.value = '';
      if (mobileSearch) mobileSearch.value = '';
      filterCatalog('');
    });
  }

  // Header Search Input
  if (headerSearch) {
    headerSearch.addEventListener('input', (e) => {
      filterCatalog(e.target.value);
      if (heroSearch) heroSearch.value = e.target.value;
      if (mobileSearch) mobileSearch.value = e.target.value;
    });
  }

  // Header Clear Search
  const clearHeaderSearch = document.getElementById('header-search-clear');
  if (clearHeaderSearch) {
    clearHeaderSearch.addEventListener('click', () => {
      if (heroSearch) heroSearch.value = '';
      if (headerSearch) headerSearch.value = '';
      if (mobileSearch) mobileSearch.value = '';
      filterCatalog('');
    });
  }

  // Mobile Menu Search Input
  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      filterCatalog(e.target.value);
      if (headerSearch) headerSearch.value = e.target.value;
      if (heroSearch) heroSearch.value = e.target.value;
    });
  }

  // Live Filtering Button Toggle
  const heroFilterBtn = document.getElementById('hero-filter-btn');
  const filterPanel = document.getElementById('hero-filter-panel');
  if (heroFilterBtn && filterPanel) {
    heroFilterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isClosed = filterPanel.classList.contains('hidden');
      if (isClosed) {
        filterPanel.classList.remove('hidden');
        heroFilterBtn.setAttribute('aria-expanded', 'true');
        // Close search dropdown if open
        const dropdown = document.getElementById('hero-search-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
        renderHeroFilterOptions();
      } else {
        filterPanel.classList.add('hidden');
        heroFilterBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Close Filter Panel button
  const closeFilterPanelBtn = document.getElementById('close-filter-panel-btn');
  if (closeFilterPanelBtn && filterPanel) {
    closeFilterPanelBtn.addEventListener('click', () => {
      filterPanel.classList.add('hidden');
      if (heroFilterBtn) heroFilterBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Filter Panel Reset & Apply buttons
  const filterResetBtn = document.getElementById('filter-reset-btn');
  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', () => {
      currentFilterState.productType = 'all';
      currentFilterState.priceRange = 'all';
      currentFilterState.sortBy = 'featured';
      currentFilterState.minDiscount = 0;
      renderHeroFilterOptions();
      renderProducts();
    });
  }

  const filterApplyBtn = document.getElementById('filter-apply-btn');
  if (filterApplyBtn) {
    filterApplyBtn.addEventListener('click', () => {
      if (filterPanel) filterPanel.classList.add('hidden');
      if (heroFilterBtn) heroFilterBtn.setAttribute('aria-expanded', 'false');
      renderProducts();
      scrollToMatchingCatalog();
    });
  }

  // Quick Filter Chips Bar
  document.querySelectorAll('.quick-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const fType = chip.getAttribute('data-filter-type');
      const fPrice = chip.getAttribute('data-filter-price');
      const fDisc = chip.getAttribute('data-filter-discount');

      if (fType) {
        currentFilterState.productType = (currentFilterState.productType === fType && fType !== 'all') ? 'all' : fType;
      } else if (fPrice) {
        currentFilterState.priceRange = (currentFilterState.priceRange === fPrice) ? 'all' : fPrice;
      } else if (fDisc) {
        const dVal = parseInt(fDisc, 10);
        currentFilterState.minDiscount = (currentFilterState.minDiscount === dVal) ? 0 : dVal;
      }

      renderHeroFilterOptions();
      renderProducts();
      updateFilterBadges();
    });
  });

  // Reset Filters button on empty state
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  // Global click outside to dismiss popups
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('hero-search-dropdown');
    const heroSearchWrap = document.getElementById('hero-search-input')?.parentElement;
    if (dropdown && !dropdown.classList.contains('hidden')) {
      if (!dropdown.contains(e.target) && !heroSearchWrap?.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    }

    const panel = document.getElementById('hero-filter-panel');
    const filterBtn = document.getElementById('hero-filter-btn');
    if (panel && !panel.classList.contains('hidden')) {
      if (!panel.contains(e.target) && !filterBtn?.contains(e.target)) {
        panel.classList.add('hidden');
        if (filterBtn) filterBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Mobile Hamburger Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('translate-x-0');
      if (isOpen) {
        mobileDrawer.classList.remove('translate-x-0');
        mobileDrawer.classList.add('translate-x-full');
        mobileToggle.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
      } else {
        mobileDrawer.classList.remove('translate-x-full');
        mobileDrawer.classList.add('translate-x-0');
        mobileToggle.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
      }
      lucide.createIcons();
    });
  }

  // Handle mobile drawer links clicking
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('translate-x-0');
        mobileDrawer.classList.add('translate-x-full');
      }
      if (mobileToggle) {
        mobileToggle.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
        lucide.createIcons();
      }
    });
  });

  // Expand / Collapse buttons triggers
  document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.getAttribute('data-section');
      toggleSectionExpansion(section);
    });
  });

  // Cart Drawer triggers
  const cartIconContainer = document.getElementById('cart-icon-container');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
  
  if (cartIconContainer) {
    cartIconContainer.addEventListener('click', openCart);
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', closeCart);
  }

  // Specs modal backdrop click to close
  const specsModal = document.getElementById('specs-modal');
  if (specsModal) {
    specsModal.addEventListener('click', (e) => {
      if (e.target.id === 'specs-modal') {
        closeSpecsModal();
      }
    });
  }

  // Lightbox modal backdrop click to close
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox-modal') {
        closeLightboxModal();
      }
    });
  }

  // Keyboard shortcut to close open modal / drawer / dropdown on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const dropdown = document.getElementById('hero-search-dropdown');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
        return;
      }
      const panel = document.getElementById('hero-filter-panel');
      if (panel && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        return;
      }
      const lb = document.getElementById('lightbox-modal');
      if (lb && lb.classList.contains('open')) {
        closeLightboxModal();
        return;
      }
      closeSpecsModal();
      closeCart();
    }
  });

  // Setup header sticky scroll styles
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled-header');
        header.classList.remove('bg-transparent', 'border-transparent');
      } else {
        header.classList.remove('scrolled-header');
        header.classList.add('bg-transparent', 'border-transparent');
      }
    }
  });
}

// Update Expand Grid buttons
function updateExpandButtonsVisibility() {
  const categories = ['creatine', 'proteins', 'energy', 'wellness'];
  const isAnyFilterActive = Boolean(
    currentFilterState.searchQuery ||
    currentFilterState.productType !== 'all' ||
    currentFilterState.priceRange !== 'all' ||
    currentFilterState.sortBy !== 'featured' ||
    currentFilterState.minDiscount > 0
  );

  categories.forEach(cat => {
    const btnWrapper = document.querySelector(`.view-more-btn[data-section="${cat}"]`)?.closest('.view-more-wrapper');
    if (!btnWrapper) return;

    if (isAnyFilterActive) {
      btnWrapper.classList.add('hidden');
      return;
    }

    const catItems = products.filter(p => p.category === cat);
    if (catItems.length <= 3) {
      btnWrapper.classList.add('hidden');
    } else {
      btnWrapper.classList.remove('hidden');
    }
  });
}

// Toggle expansion state
function toggleSectionExpansion(category) {
  if (!category || expandedSections[category] === undefined) return;

  expandedSections[category] = !expandedSections[category];

  const btn = document.querySelector(`.view-more-btn[data-section="${category}"]`);
  if (btn) {
    const textSpan = btn.querySelector('span');
    const chevronIcon = btn.querySelector('.chevron-icon');

    if (expandedSections[category]) {
      if (textSpan) textSpan.textContent = 'View Less';
      if (chevronIcon) chevronIcon.classList.add('rotate-180');
    } else {
      if (textSpan) textSpan.textContent = 'View More';
      if (chevronIcon) chevronIcon.classList.remove('rotate-180');
    }
  }

  renderProducts();
}

// Cart Mechanics
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.product.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      product: product,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  
  // Slide open the cart drawer to show the newly added item (premium UX detail)
  openCart();
  
  // Visual button check animation feedback can be added here if needed
}

function updateCartQuantity(productId, change) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    // Remove if quantity reaches zero
    cart = cart.filter(i => i.product.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('sph_supplement_cart', JSON.stringify(cart));
}

function updateCartUI() {
  safeDOMOperation(() => {
    const cartItemsContainer = document.getElementById('cart-items-container');
  const emptyCartState = document.getElementById('cart-empty-state');
  const cartFilledState = document.getElementById('cart-filled-state');
  
  const floatingCount = document.getElementById('floating-cart-count');
  const stickyCount = document.getElementById('sticky-cart-count');

  // Compute counts
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update navbar/floating counts indicators
  if (floatingCount) {
    floatingCount.textContent = totalCount;
    if (totalCount > 0) {
      floatingCount.classList.remove('scale-0');
      floatingCount.classList.add('scale-100');
    } else {
      floatingCount.classList.remove('scale-100');
      floatingCount.classList.add('scale-0');
    }
  }

  if (stickyCount) {
    stickyCount.textContent = totalCount;
    if (totalCount > 0) {
      stickyCount.classList.remove('scale-0');
      stickyCount.classList.add('scale-100');
    } else {
      stickyCount.classList.remove('scale-100');
      stickyCount.classList.add('scale-0');
    }
  }

  // Toggle empty state
  if (cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove('hidden');
    if (cartFilledState) cartFilledState.classList.add('hidden');
    return;
  }

  if (emptyCartState) emptyCartState.classList.add('hidden');
  if (cartFilledState) cartFilledState.classList.remove('hidden');

  // Render list of cart products
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
      const itemRow = document.createElement('div');
      itemRow.className = `flex items-center gap-4 py-4 border-b border-zinc-150 dark:border-zinc-800/80 last:border-b-0`;
      
      itemRow.innerHTML = `
        <!-- Mini Image/Placeholder Gap inside Cart -->
        <div class="w-16 h-16 rounded-xl product-image-gap shrink-0 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 overflow-hidden">
          ${item.product.images && item.product.images.length > 0 ? `
            <img src="${item.product.images[0]}" class="object-cover w-full h-full" alt="${item.product.name}">
          ` : getCategoryIcon(item.product.category)}
        </div>
        
        <!-- Description details -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2 mb-1">
            <h4 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-display">
              ${item.product.name}
            </h4>
            <button 
              onclick="removeCartItem('${item.product.id}')"
              class="text-zinc-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition-colors"
              aria-label="Remove item"
            >
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
          
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mb-2 font-mono">${item.product.size}</p>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900">
              <button 
                onclick="updateCartQuantity('${item.product.id}', -1)"
                class="px-2 py-1 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Decrease quantity"
              >
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>
              <span class="px-3 text-xs font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                ${item.quantity}
              </span>
              <button 
                onclick="updateCartQuantity('${item.product.id}', 1)"
                class="px-2 py-1 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Increase quantity"
              >
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            
            <div class="flex flex-col items-end gap-0.5">
              <div class="flex items-center gap-1.5">
                ${item.product.originalPrice ? `
                  <span class="text-[10px] text-zinc-400 dark:text-zinc-500 line-through font-medium font-mono">
                    ₹${(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                  </span>
                ` : ''}
                <span class="text-sm font-black text-zinc-900 dark:text-white font-mono">
                  ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
              ${item.product.badge ? `
                <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-600/10 dark:border-emerald-500/10 px-1.5 py-0.2 rounded font-sans tracking-wide">
                  ${item.product.badge}
                </span>
              ` : (item.product.originalPrice && item.product.originalPrice > item.product.price ? `
                <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-600/10 dark:border-emerald-500/10 px-1.5 py-0.2 rounded font-sans tracking-wide">
                  ${Math.round(((item.product.originalPrice - item.product.price) / item.product.originalPrice) * 100)}% OFF
                </span>
              ` : '')}
            </div>
          </div>
        </div>
      `;
      
      cartItemsContainer.appendChild(itemRow);
    });
  }

  // Calculate pricing metrics using authentic, frozen data lookups
  const subtotal = cart.reduce((sum, item) => {
    const authenticProduct = products.find(p => p.id === item.product.id);
    const price = authenticProduct ? authenticProduct.price : 0;
    return sum + (price * item.quantity);
  }, 0);
  const originalSubtotal = cart.reduce((sum, item) => {
    const authenticProduct = products.find(p => p.id === item.product.id);
    const origPrice = authenticProduct ? (authenticProduct.originalPrice || authenticProduct.price) : 0;
    return sum + (origPrice * item.quantity);
  }, 0);
  const totalSavings = originalSubtotal - subtotal;
  const savingsPercentage = originalSubtotal > 0 ? Math.round((totalSavings / originalSubtotal) * 100) : 0;
  
  // Free Shipping criteria (> ₹3,000)
  const shippingFee = subtotal >= 3000 ? 0 : 150;
  const grandTotal = subtotal + shippingFee;

  // Render values
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const cartSavingsRow = document.getElementById('cart-savings-row');
  const cartSavingsEl = document.getElementById('cart-savings');
  const cartSavingsBadge = document.getElementById('cart-savings-badge');

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  if (cartShippingEl) {
    if (shippingFee === 0) {
      cartShippingEl.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px]">FREE</span>`;
    } else {
      cartShippingEl.textContent = `₹${shippingFee}`;
    }
  }

  if (cartTotalEl) cartTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  // Update savings row & badge
  if (totalSavings > 0) {
    if (cartSavingsRow) {
      cartSavingsRow.classList.remove('hidden');
      if (cartSavingsEl) {
        cartSavingsEl.textContent = `-₹${totalSavings.toLocaleString('en-IN')} (${savingsPercentage}% OFF)`;
      }
    }
    if (cartSavingsBadge) {
      cartSavingsBadge.textContent = `${savingsPercentage}% SAVED`;
      cartSavingsBadge.classList.remove('hidden');
    }
  } else {
    if (cartSavingsRow) cartSavingsRow.classList.add('hidden');
    if (cartSavingsBadge) cartSavingsBadge.classList.add('hidden');
  }

    // Parse newly rendered drawer buttons/icons
    lucide.createIcons();
  });
}

// Redirect and submit message to WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => {
    const authenticProduct = products.find(p => p.id === item.product.id);
    const price = authenticProduct ? authenticProduct.price : 0;
    return sum + (price * item.quantity);
  }, 0);
  const shippingFee = subtotal >= 3000 ? 0 : 150;
  const grandTotal = subtotal + shippingFee;

  // Format message lines strictly matching requirements
  let message = `Hello, I would like to place an order for the following supplements:\n`;
  
  cart.forEach(item => {
    const authenticProduct = products.find(p => p.id === item.product.id);
    if (authenticProduct) {
      message += `- ${authenticProduct.name} (Qty: ${item.quantity}) - Price: ₹${authenticProduct.price.toLocaleString('en-IN')}\n`;
    }
  });
  
  message += `\nTotal Price: ₹${grandTotal.toLocaleString('en-IN')}\n`;
  message += `Please confirm my order.`;

  // Encode message
  const encodedText = encodeURIComponent(message);
  
  // Destination phone number: 917003659088
  const whatsappUrl = `https://wa.me/917003659088?text=${encodedText}`;

  // Redirect in new tab
  window.open(whatsappUrl, '_blank');
}

// Transformium Athletes Horizontal Slider Logic
function initAthletesSlider() {
  const slider = document.getElementById('athletes-slider');
  const prevBtn = document.getElementById('athletes-prev');
  const nextBtn = document.getElementById('athletes-next');
  const dotsContainer = document.getElementById('athletes-dots');
  
  if (!slider) return;

  const cards = slider.querySelectorAll('.snap-start');
  if (cards.length === 0) return;
  
  const totalCards = cards.length;
  
  // Generate active dots pagination indicators
  function generateDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement('button');
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
        i === 0 ? 'bg-emerald-500 w-5' : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
      }`;
      dot.setAttribute('aria-label', `Go to athlete ${i + 1}`);
      
      dot.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // Gap between cards (gap-6 = 24px)
        slider.scrollTo({
          left: i * (cardWidth + gap),
          behavior: 'smooth'
        });
      });
      
      dotsContainer.appendChild(dot);
    }
  }

  // Next / Prev button event clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 24;
      slider.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 24;
      slider.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    });
  }

  // Track active slide on scroll and sync indicators
  slider.addEventListener('scroll', () => {
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const scrollLeft = slider.scrollLeft;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
    
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('button');
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.className = 'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer bg-emerald-500 w-5';
        } else {
          dot.className = 'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600';
        }
      });
    }
  });

  // Initial call to setup dots display
  generateDots();
}

// =========================================================================
// Flagship Specs Showcase Modal & Fullscreen Lightbox Logic
// =========================================================================
let activeSpecsProduct = null;
let specsQuantity = 1;

function getProductKeyHighlights(product) {
  const cat = product.category || '';
  if (cat === 'creatine') {
    return [
      { icon: 'shield-check', text: '100% Pure Micronized Creatine Monohydrate' },
      { icon: 'zap', text: 'Rapid ATP Resynthesis & Intracellular Volumization' },
      { icon: 'layers', text: 'Zero Added Sugar • European Lab Tested' }
    ];
  } else if (cat === 'proteins') {
    return [
      { icon: 'shield-check', text: 'European Sourced Whey Isolate / Concentrate' },
      { icon: 'sparkles', text: '24g+ High Bioavailable Protein & Essential BCAAs' },
      { icon: 'layers', text: 'Ultra-Filtered • Zero Bloat Instant Digestion' }
    ];
  } else if (cat === 'energy') {
    return [
      { icon: 'zap', text: 'Explosive Beta-Alanine, Citrulline & Caffeine Matrix' },
      { icon: 'activity', text: 'Extreme Nitric Oxide Pumps & Razor Focus' },
      { icon: 'shield-check', text: 'Zero Crash Formula • Prolonged Endurance' }
    ];
  } else {
    return [
      { icon: 'shield-check', text: 'High-Potency Therapeutic Botanical Extracts' },
      { icon: 'heart-pulse', text: 'Complete Organ Detox, Vitality & Health Shield' },
      { icon: 'award', text: '100% Authentic Daily Athletic Formulation' }
    ];
  }
}

function openSpecsModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeSpecsProduct = product;
  specsQuantity = 1;

  const modal = document.getElementById('specs-modal');
  if (!modal) return;

  // 1. Top Badges
  const badgeEl = document.getElementById('specs-modal-badge');
  if (badgeEl) {
    const categoryLabels = {
      creatine: 'Creatine & Strength',
      proteins: 'Proteins & Aminos',
      energy: 'Pre-Workout & Energy',
      wellness: 'Vitamins & Wellness'
    };
    badgeEl.textContent = categoryLabels[product.category] || 'Supplement';
  }

  const seriesEl = document.getElementById('specs-modal-header-series');
  if (seriesEl) {
    seriesEl.textContent = 'Transformium Heavy-Duty Series';
  }

  // 2. Product Name and Description
  const nameEl = document.getElementById('specs-modal-name');
  if (nameEl) nameEl.textContent = product.name;

  const descEl = document.getElementById('specs-modal-desc');
  if (descEl) descEl.textContent = product.description;

  // 3. Main Showcase Image
  const imgEl = document.getElementById('specs-modal-img');
  const defaultImg = (product.images && product.images.length > 0) ? product.images[0] : '';
  if (imgEl) {
    imgEl.src = defaultImg;
    imgEl.alt = product.name;
  }

  // 4. Thumbnails Row
  const thumbsContainer = document.getElementById('specs-modal-thumbnails');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    if (product.images && product.images.length > 1) {
      product.images.forEach((img, idx) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.type = 'button';
        thumbBtn.className = `w-14 h-12 rounded-xl border-2 ${idx === 0 ? 'border-orange-500 shadow-md shadow-orange-500/20' : 'border-zinc-800 hover:border-zinc-600'} bg-zinc-900/80 p-1 overflow-hidden transition-all duration-200 cursor-pointer specs-modal-thumb shrink-0`;
        const viewTitles = ['Front Label View', 'Back & MRP Details View', 'Nutrition Facts & Amino Profile View'];
        thumbBtn.setAttribute('title', viewTitles[idx] || `View ${idx + 1}`);
        thumbBtn.innerHTML = `<img src="${img}" class="w-full h-full object-contain pointer-events-none">`;
        
        thumbBtn.onclick = (e) => {
          e.stopPropagation();
          if (imgEl) imgEl.src = img;
          document.querySelectorAll('.specs-modal-thumb').forEach(t => {
            t.classList.remove('border-orange-500', 'shadow-md', 'shadow-orange-500/20');
            t.classList.add('border-zinc-800');
          });
          thumbBtn.classList.remove('border-zinc-800');
          thumbBtn.classList.add('border-orange-500', 'shadow-md', 'shadow-orange-500/20');
        };

        thumbsContainer.appendChild(thumbBtn);
      });
      thumbsContainer.classList.remove('hidden');
    } else {
      thumbsContainer.classList.add('hidden');
    }
  }

  // 5. Price & MRP Block
  const priceEl = document.getElementById('specs-modal-price');
  if (priceEl) priceEl.textContent = `₹${product.price.toLocaleString('en-IN')}`;

  const mrpEl = document.getElementById('specs-modal-mrp');
  if (mrpEl) {
    if (product.originalPrice) {
      mrpEl.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
      mrpEl.classList.remove('hidden');
    } else {
      mrpEl.classList.add('hidden');
    }
  }

  // 6. Dynamic Key Engineering / Formulation Highlights
  const featuresList = document.getElementById('specs-modal-features');
  if (featuresList) {
    const highlights = getProductKeyHighlights(product);
    featuresList.innerHTML = highlights.map(h => `
      <li class="flex items-start gap-2.5">
        <div class="w-5 h-5 rounded bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
          <i data-lucide="${h.icon}" class="w-3.5 h-3.5"></i>
        </div>
        <span class="text-zinc-300 font-medium">${h.text}</span>
      </li>
    `).join('');
  }

  // 7. Quantity UI Reset
  updateSpecsQtyUI();

  // 8. Open Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  lucide.createIcons();
}

function closeSpecsModal() {
  const modal = document.getElementById('specs-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function updateSpecsQtyUI() {
  const qtyEl = document.getElementById('specs-modal-qty');
  if (qtyEl) qtyEl.textContent = specsQuantity;
}

function incrementSpecsQty() {
  if (specsQuantity < 20) {
    specsQuantity += 1;
    updateSpecsQtyUI();
  }
}

function decrementSpecsQty() {
  if (specsQuantity > 1) {
    specsQuantity -= 1;
    updateSpecsQtyUI();
  }
}

function addSpecsProductToCart() {
  if (!activeSpecsProduct) return;

  const existingItem = cart.find(item => item.product.id === activeSpecsProduct.id);
  if (existingItem) {
    existingItem.quantity += specsQuantity;
  } else {
    cart.push({
      product: activeSpecsProduct,
      quantity: specsQuantity
    });
  }

  saveCart();
  updateCartUI();

  const addBtn = document.getElementById('specs-modal-cart-btn');
  if (addBtn) {
    const origHtml = addBtn.innerHTML;
    addBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span class="text-emerald-400">Added ${specsQuantity} to Cart!</span>`;
    lucide.createIcons();

    setTimeout(() => {
      addBtn.innerHTML = origHtml;
      closeSpecsModal();
      openCart();
    }, 500);
  } else {
    closeSpecsModal();
    openCart();
  }
}

function buySpecsProductWhatsApp() {
  if (!activeSpecsProduct) return;

  const total = activeSpecsProduct.price * specsQuantity;
  let message = `*SPH Nutrition Store - Direct Order Request*\n\n`;
  message += `Hello! I want to order from SPH Supplement Store:\n`;
  message += `📦 *Product:* ${activeSpecsProduct.name}\n`;
  message += `🔢 *Quantity:* ${specsQuantity}\n`;
  message += `💰 *Total Amount:* ₹${total.toLocaleString('en-IN')}\n`;
  message += `📍 *Delivery/Pickup:* SPH Gym Desk / Express Delivery\n\n`;
  message += `Please confirm my order.`;

  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/917003659088?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}

// Fullscreen Lightbox Modal Functions
function openLightboxModal(imgSrc, title, price) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-modal-img');
  const titleEl = document.getElementById('lightbox-modal-title');
  const priceEl = document.getElementById('lightbox-modal-price');

  if (!modal || !img) return;

  img.src = imgSrc || '';
  if (titleEl) titleEl.textContent = title || '';
  if (priceEl) priceEl.textContent = price || '';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openLightboxFromStage() {
  const imgEl = document.getElementById('specs-modal-img');
  const nameEl = document.getElementById('specs-modal-name');
  const priceEl = document.getElementById('specs-modal-price');

  if (imgEl && imgEl.src) {
    openLightboxModal(
      imgEl.src,
      nameEl ? nameEl.textContent : (activeSpecsProduct ? activeSpecsProduct.name : ''),
      priceEl ? priceEl.textContent : ''
    );
  }
}

function closeLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('open');
  const specsModal = document.getElementById('specs-modal');
  if (!specsModal || !specsModal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// Aliases for backwards compatibility
const openProductModal = openSpecsModal;
const closeProductModal = closeSpecsModal;
const decrementModalQty = decrementSpecsQty;
const incrementModalQty = incrementSpecsQty;
const addModalProductToCart = addSpecsProductToCart;
const buyModalProductWhatsApp = buySpecsProductWhatsApp;

/**
 * Initializes data integrity protections for products and catalog
 */
function initSecurity() {
  // Ensure product array remains immutable
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    products.forEach(p => {
      if (!Object.isFrozen(p)) Object.freeze(p);
    });
    if (!Object.isFrozen(products)) Object.freeze(products);
  }
}
