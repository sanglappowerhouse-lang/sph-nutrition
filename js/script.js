// Supplement Product Database (6 items per category)
const products = [
  // Category 1: Proteins & Aminos
  {
    id: 'prot-1',
    name: 'Transformium Nutrition- ISO4M 1kg (Choco lata bomb Flavor)',
    category: 'proteins',
    price: 3849,
    originalPrice: 6999,
    description: 'European Sourced Isolate whey protein by Transformium Nutrition. Formulated to optimize athletic performance, accelerate post-workout recovery, and provide efficient muscle replenishment.',
    size: '1kg',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition iso4m choco lata bomb flavor chocolate isolate whey protein recovery muscle growth',
    images: [
      'images/ultra-iso4m-front.png',
      'images/ultra-iso4m-back.png'
    ]
  },
  {
    id: 'prot-2',
    name: 'Transformium Nutrition- Anabolic Gainz Mass Gainer 2.72 kg (Strawberry And Vanilla Flavor)',
    category: 'proteins',
    price: 2749,
    originalPrice: 4999,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a delicious Strawberry and Vanilla flavor. Features over 1160 healthy calories, 50g protein, and 3g creatine per serving for serious muscle growth.',
    size: '2.72kg',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer strawberry vanilla flavor weight gainer protein muscle growth',
    images: [
      'images/ultra-anabolic-gainz-front.png',
      'images/ultra-anabolic-gainz-back.png'
    ]
  },
  {
    id: 'prot-3',
    name: 'Transformium Nutrition- Anabolic Gainz Mass Gainer 1kg (DryFruit Kulfi Flavor)',
    category: 'proteins',
    price: 1319,
    originalPrice: 2399,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a premium DryFruit Kulfi flavor. Loaded with high protein, complex carbs, and creatine to fuel intense workouts and muscle expansion.',
    size: '1kg',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer dryfruit kulfi flavor weight gainer protein muscle growth',
    images: [
      'images/ultra-anabolic-gainz-kulfi-front.png',
      'images/ultra-anabolic-gainz-kulfi-back.png'
    ]
  },
  {
    id: 'prot-4',
    name: 'Transformium Nutrition- Anabolic Gainz 4.5kg',
    category: 'proteins',
    price: 4124,
    originalPrice: 7499,
    description: 'Anabolic Mass Gainer by Transformium Nutrition in a bulk 4.5kg tub. Loaded with over 1160 healthy calories, complex carbs, and high-quality protein designed for hardcore muscle gain.',
    size: '4.5kg',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition anabolic gainz mass gainer weight gainer 4.5kg protein muscle growth bulk value',
    images: [
      'images/ultra-anabolic-gainz-45kg-front.png',
      'images/ultra-anabolic-gainz-45kg-back.png'
    ]
  },
  {
    id: 'prot-5',
    name: 'Transformium Nutrition- Grow Pro Beast Whey Protein 2kg (Caramel Coffee Flavor)',
    category: 'proteins',
    price: 5774,
    originalPrice: 10499,
    description: 'Grow Pro Beast Whey Protein with Collagen Peptides by Transformium Nutrition. Formulated in a delicious Caramel Coffee flavor, delivering 24g protein and 3g creatine per serving.',
    size: '2kg',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition grow pro beast whey protein collagen peptides caramel coffee flavor recovery strength muscle',
    images: [
      'images/ultra-grow-pro-beast-front.png',
      'images/ultra-grow-pro-beast-back.png'
    ]
  },
  {
    id: 'prot-6',
    name: 'Transformium Nutrition- WHEY4MIUM whey Protein Concentrate & Isolate 2kg (Agua Fresca Flavor)',
    category: 'proteins',
    price: 4839,
    originalPrice: 8799,
    description: 'WHEY4MIUM Whey Protein Concentrate & Isolate by Transformium Nutrition. Formulated in an exotic Agua Fresca flavor to support rapid post-workout recovery, build lean muscle mass, and improve strength.',
    size: '2kg',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition whey4mium whey protein concentrate isolate agua fresca flavor recovery muscle growth strength',
    images: [
      'images/ultra-whey4mium-front.png',
      'images/ultra-whey4mium-back.png'
    ]
  },
  {
    id: 'prot-7',
    name: 'Transformium Nutrition- Nitro Sensation 2.5kg (Pista Kulfi Flavor)',
    category: 'proteins',
    price: 3574,
    originalPrice: 6499,
    description: 'Nitro Sensation Whey Protein Concentrate by Transformium Nutrition. Infused with Ashwagandha, Ginseng, Tribulus, and Creatine in a rich Pista Kulfi flavor to maximize muscle breakdown prevention and high-intensity capacity.',
    size: '2.5kg',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition nitro sensation whey protein concentrate ashwagandha ginseng tribulus creatine pista kulfi flavor recovery muscle size strength',
    images: [
      'images/ultra-nitro-sensation-front.png',
      'images/ultra-nitro-sensation-back.png'
    ]
  },
  {
    id: 'prot-8',
    name: 'Transformium Nutrition- Anabolic BCAA+EAA, 50 Servings (Orange Spice Sprilzer Flavor)',
    category: 'proteins',
    price: 1649,
    originalPrice: 2999,
    description: 'Anabolic BCAA+EAA by Transformium Nutrition. Formulated in a refreshing Orange Spice Spritzer flavor, providing essential amino acids and hydration support across 50 servings.',
    size: '50 Servings',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition anabolic bcaa eaa hydration orange spice sprilzer spritzer flavor recovery muscle preservation amino acids',
    images: [
      'images/ultra-anabolic-bcaa-eaa-front.png',
      'images/ultra-anabolic-bcaa-eaa-back.png'
    ]
  },
  {
    id: 'crt-1',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Blue Berry Flavor)',
    category: 'creatine',
    price: 1209,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition ultra creatine blueberry blue berry flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-front.png',
      'images/ultra-creatine-back.png'
    ]
  },
  {
    id: 'crt-2',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Sex On The Beach Flavor)',
    category: 'creatine',
    price: 1209,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition in a refreshing Sex on the Beach flavor. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition ultra creatine sex on the beach flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-sex-on-the-beach-front.png',
      'images/ultra-creatine-sex-on-the-beach-back.png'
    ]
  },
  {
    id: 'crt-3',
    name: 'Transformium Nutrition- Ultra Creatine-250 g ( Lemon Flavor)',
    category: 'creatine',
    price: 1209,
    originalPrice: 2199,
    description: 'Ultra Creatine monohydrate by Transformium Nutrition in a tangy Lemon flavor. Formulated to enhance muscle volume, boost anaerobic power, and maximize ATP resynthesis.',
    size: '250g',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition ultra creatine lemon flavor powder strength power muscle growth',
    images: [
      'images/ultra-creatine-lemon-front.png',
      'images/ultra-creatine-lemon-back.png'
    ]
  },





  // Category 2: Pre-Workouts & Energy
  {
    id: 'energy-1',
    name: 'Transformium Nutrition- Hazard Original Pre Workout 280g, 50 servings (Mixed Berries Flavor)',
    category: 'energy',
    price: 1979,
    originalPrice: 3599,
    description: 'Hazard Original Pre-Workout by Transformium Nutrition. Formulated in a delicious Mixed Berries flavor to enhance endurance, boost strength, and provide testosterone support across 50 servings.',
    size: '280g',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition hazard original pre workout preworkout mixed berries flavor endurance testosterone support strength pump',
    images: [
      'images/ultra-hazard-preworkout-front.png',
      'images/ultra-hazard-preworkout-back.png'
    ]
  },

  // Category 3: Vitamins & Wellness
  {
    id: 'well-1',
    name: 'Transformium Nutrition- Performance Arginine Tablets 90N',
    category: 'wellness',
    price: 879,
    originalPrice: 1599,
    description: 'Performance Arginine L-Arginine Tablets by Transformium Wellness. Promotes insane pumps, long-lasting erections, increased nitric oxide production, and enhanced vasodilation & recovery.',
    size: '90N Tablets',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition performance arginine tablets 90n l-arginine nitric oxide recovery strength pump vasodilation',
    images: [
      'images/ultra-arginine-front.png',
      'images/ultra-arginine-back.png'
    ]
  },
  {
    id: 'well-2',
    name: 'Transformium NUTRITION-ULTRA Shred&Tight 3500ml (Pink Guava Flavor)',
    category: 'wellness',
    price: 1814,
    originalPrice: 3299,
    description: 'Ultra Shred & Tight liquid formulation by Transformium Nutrition. Packing a 3500mg Carnitine Blend in Pink Guava flavor to accelerate metabolism, support a toned body, reduce body fat, and increase lean muscle.',
    size: '450ml',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition ultra shred tight 3500ml pink guava flavor carnitine blend fat loss metabolism tone lean muscle',
    images: [
      'images/ultra-shred-tight-front.png',
      'images/ultra-shred-tight-back.png'
    ]
  },
  {
    id: 'well-3',
    name: 'Transformium Nutrition- Uni-Vit Multivitamin (Tablets)',
    category: 'wellness',
    price: 385,
    originalPrice: 699,
    description: 'Uni-Vit Multivitamin Tablets by Transformium Nutrition. Premium blend of vitamins and minerals to improve immunity, boost energy levels, and support overall health and wellness.',
    size: '30 Tablets',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition uni vit univit multivitamin tablets vitamins minerals health immunity wellness daily active',
    images: [
      'images/ultra-uni-vit-front.png',
      'images/ultra-uni-vit-back.png'
    ]
  },
  {
    id: 'well-4',
    name: 'Transformium Nutrition- Ass Buster 60N Capsules',
    category: 'wellness',
    price: 1429,
    originalPrice: 2599,
    description: 'Ass Buster Advanced Thermogenic Fat Burning formulation by Transformium Nutrition. Features organic root extracts and stimulants to deliver extreme energy, power, and focus across 60 capsules.',
    size: '60N Capsules',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition ass buster advanced thermogenic fat burning capsules weight loss metabolism energy focus power',
    images: [
      'images/ultra-ass-buster-front.png',
      'images/ultra-ass-buster-back.png'
    ]
  },
  {
    id: 'well-5',
    name: 'Transformium Nutrition- Heart Revive Nattokinase+COQ10 30N Capsules',
    category: 'wellness',
    price: 1319,
    originalPrice: 2399,
    description: 'Heart Revive Nattokinase & COQ10 by Transformium Nutrition. Formulated to maximize VO2 capacity, decrease bad cholesterol, support endurance and stamina, and promote healthy heart functioning.',
    size: '30N Capsules',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition heart revive nattokinase coq10 coq17 30n 90 capsules endurance stamina cholesterol heart health vo2 max',
    images: [
      'images/ultra-heart-revive-front.png',
      'images/ultra-heart-revive-back.png'
    ]
  },
  {
    id: 'well-6',
    name: 'Transformium Nutrition- Anabolic Veinz-SR 90N Tablets',
    category: 'wellness',
    price: 1814,
    originalPrice: 3299,
    description: 'Anabolic Veinz-SR Nitric Oxide Augmenter formulation by Transformium Nutrition. Packed with Charge 3™ complex to promote extreme vasodilation, muscle pumps, and enhanced athletic performance across 90 tablets.',
    size: '90N Tablets',
    rating: 4.9,
    badge: '45% OFF',
    keywords: 'transformium nutrition anabolic veinz sr veiz 90n tablets charge 3 nitric oxide augmenter vasodilation muscle pump performance',
    images: [
      'images/ultra-anabolic-veinz-front.png',
      'images/ultra-anabolic-veinz-back.png'
    ]
  },
  {
    id: 'well-7',
    name: 'Transformium Nutrition- Kidney Revive 60N Capsules',
    category: 'wellness',
    price: 1319,
    originalPrice: 2399,
    description: 'Kidney Revive Kidney Support by Transformium Nutrition. Formulated with milk thistle and other natural herbs to aid in kidney detox, normal creatinine levels, healthy bladder function, and gout/uric acid reduction.',
    size: '60 Capsules',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition kidney revive 60n capsules kidney detox gout uric acid normal creatinine bladder function support',
    images: [
      'images/ultra-kidney-revive-front.png',
      'images/ultra-kidney-revive-back.png'
    ]
  },
  {
    id: 'well-8',
    name: 'Transformium Nutrition- Liver&Heart Shield 60N Capsules',
    category: 'wellness',
    price: 1429,
    originalPrice: 2599,
    description: 'Liver & Heart Shield by Transformium Wellness. Formulated to support optimal liver regeneration & heart health, promote healthy liver function, and aid in sluggish liver and fatty liver recovery.',
    size: '60 Capsules',
    rating: 4.8,
    badge: '45% OFF',
    keywords: 'transformium nutrition liver heart shield 60n capsules liver toxicity fatty liver sluggish liver on cycle essentials support',
    images: [
      'images/ultra-liver-heart-shield-front.png',
      'images/ultra-liver-heart-shield-back.png'
    ]
  },
];

// Cart State (loaded from localStorage or empty)
let cart = JSON.parse(localStorage.getItem('sph_supplement_cart')) || [];

// Category expanded state trackers
const expandedSections = {
  creatine: false,
  proteins: false,
  energy: false,
  wellness: false
};

// Current active search query
let activeSearchQuery = '';

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Setup Lucide Icons
  lucide.createIcons();

  // Initialize UI Features
  initTheme();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// Theme Logic
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
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
      themeIcon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`; // Moon icon path
    } else {
      themeIcon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`; // Sun icon path
    }
  }
}

// Render product grids
function renderProducts() {
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

  products.forEach((product, idx) => {
    const grid = categoryGrids[product.category];
    if (!grid) return;

    // Count how many products exist in this category before this one (to check index inside category)
    const categoryProducts = products.filter(p => p.category === product.category);
    const itemIdx = categoryProducts.findIndex(p => p.id === product.id);

    // Create Card elements
    const card = document.createElement('article');
    card.className = `premium-card rounded-2xl overflow-hidden flex flex-col h-full opacity-100 transition-all duration-300`;
    card.setAttribute('data-id', product.id);
    card.setAttribute('data-name', product.name.toLowerCase());
    card.setAttribute('data-keywords', product.keywords.toLowerCase());

    // Define initial visible classes depending on expanded state & search queries
    const isHiddenByDefault = itemIdx >= 3 && !expandedSections[product.category] && !activeSearchQuery;
    if (isHiddenByDefault) {
      card.classList.add('grid-item-hidden');
    } else {
      card.classList.add('grid-item-visible');
    }

    // Dynamic product rating stars
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
        <div class="aspect-[4/3] relative w-full overflow-hidden group bg-zinc-50 dark:bg-zinc-900/10">
          <!-- Horizontal Scrollable Container -->
          <div class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full h-full" id="slider-${product.id}">
            ${product.images.map((img, i) => `
              <div class="w-full h-full flex-shrink-0 snap-start flex items-center justify-center p-3 sm:p-5">
                <img src="${img}" class="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105" alt="${product.name} - Image ${i + 1}">
              </div>
            `).join('')}
          </div>
          
          ${product.badge ? `
            <div class="absolute top-2 left-2 bg-emerald-600 text-white dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-600/20 text-[7px] sm:text-[9px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display">
              ${product.badge}
            </div>
          ` : ''}
          
          <div class="absolute top-2 right-2 text-zinc-500 dark:text-zinc-400 text-[7px] sm:text-xs font-semibold px-1 sm:px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800/75 border border-zinc-300/40 dark:border-zinc-700/40 font-mono">
            ${product.size}
          </div>
        </div>
        
        <!-- Horizontal Scrollable Thumbnails under the photo area -->
        ${product.images.length > 1 ? `
          <div class="flex gap-2 px-3 py-1.5 border-y border-zinc-200 dark:border-zinc-800/60 justify-center items-center bg-zinc-50/50 dark:bg-zinc-900/30 overflow-x-auto no-scrollbar scroll-smooth">
            ${product.images.map((img, i) => `
              <button 
                onclick="event.stopPropagation(); document.getElementById('slider-${product.id}').scrollTo({left: document.getElementById('slider-${product.id}').offsetWidth * ${i}, behavior: 'smooth'})"
                class="w-10 h-8 rounded border-2 ${i === 0 ? 'border-emerald-500 dark:border-emerald-400' : 'border-transparent'} overflow-hidden flex-shrink-0 transition-all duration-200 thumb-${product.id}"
              >
                <img src="${img}" class="object-cover w-full h-full">
              </button>
            `).join('')}
          </div>
        ` : `<div class="border-b border-zinc-200 dark:border-zinc-800"></div>`}
      ` : `
        <!-- Product Image Placeholder Gap -->
        <div class="aspect-[4/3] product-image-gap flex flex-col items-center justify-center p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 relative group">
          <!-- Accent Glow background shape inside gap -->
          <div class="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-xl group-hover:scale-125 transition-transform duration-500"></div>
          
          <!-- Supplement Type Icon Graphic -->
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
      
      <!-- Content -->
      <div class="p-3 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Star reviews -->
          <div class="flex items-center gap-1 mb-1.5">
            <div class="flex">${starsHtml}</div>
            <span class="text-[9px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-semibold font-mono">${product.rating}</span>
          </div>
          
          <h3 class="card-title text-xs sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 sm:mb-2 font-display hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 line-clamp-1">
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
            onclick="addToCart('${product.id}')"
            class="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-black font-bold text-[9px] sm:text-xs py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-emerald-600/10 dark:shadow-emerald-500/5 hover:-translate-y-0.5 cursor-pointer text-center"
          >
            <i data-lucide="shopping-cart" class="w-3 sm:w-3.5 h-3 sm:h-3.5"></i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Sync thumbnails scroll
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

  // Reset SVG icon parsing
  lucide.createIcons();

  // Show or hide categories depending on query search matching
  updateCategoriesVisibility();
  
  // Re-adjust expandable buttons displays
  updateExpandButtonsVisibility();
}

// Return matching SVG paths for supplement categories
function getCategoryIcon(category) {
  if (category === 'creatine') {
    // Hexagon / molecule icon for creatine
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  } else if (category === 'proteins') {
    // Protein powder container / dumbbell representation
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18h12M6 6h12M3 10h18M3 14h18M8 6v12M16 6v12"/></svg>`;
  } else if (category === 'energy') {
    // Lightning bolt for energy / pre-workout
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  } else {
    // Pill capsule / leaf representation for vitamins
    return `<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`;
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Theme toggler buttons
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Header Search Input
  const headerSearch = document.getElementById('header-search-input');
  if (headerSearch) {
    headerSearch.addEventListener('input', (e) => filterCatalog(e.target.value));
  }

  // Hero Search Input
  const heroSearch = document.getElementById('hero-search-input');
  if (heroSearch) {
    heroSearch.addEventListener('input', (e) => {
      filterCatalog(e.target.value);
      // Synchronize desktop header search bar input
      if (headerSearch) headerSearch.value = e.target.value;
    });
  }

  // Mobile Menu Search Input
  const mobileSearch = document.getElementById('mobile-search-input');
  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      filterCatalog(e.target.value);
      if (headerSearch) headerSearch.value = e.target.value;
      if (heroSearch) heroSearch.value = e.target.value;
    });
  }

  // Clear Search button header
  const clearHeaderSearch = document.getElementById('header-search-clear');
  if (clearHeaderSearch) {
    clearHeaderSearch.addEventListener('click', () => {
      if (headerSearch) headerSearch.value = '';
      if (heroSearch) heroSearch.value = '';
      if (mobileSearch) mobileSearch.value = '';
      filterCatalog('');
    });
  }

  // Reset Filters button on empty state
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (headerSearch) headerSearch.value = '';
      if (heroSearch) heroSearch.value = '';
      if (mobileSearch) mobileSearch.value = '';
      filterCatalog('');
    });
  }

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

// Live Search logic
function filterCatalog(query) {
  activeSearchQuery = query.trim().toLowerCase();
  
  const clearHeaderSearch = document.getElementById('header-search-clear');
  if (clearHeaderSearch) {
    if (activeSearchQuery) {
      clearHeaderSearch.classList.remove('hidden');
    } else {
      clearHeaderSearch.classList.add('hidden');
    }
  }

  // Rerender grids based on new matching query search
  renderProducts();
}

function updateCategoriesVisibility() {
  const sections = {
    creatine: document.getElementById('creatine-section'),
    proteins: document.getElementById('proteins-section'),
    energy: document.getElementById('energy-section'),
    wellness: document.getElementById('wellness-section')
  };

  let totalVisibleProducts = 0;

  Object.entries(sections).forEach(([category, sectionElement]) => {
    if (!sectionElement) return;

    // Find all products in database matching category
    const categoryProducts = products.filter(p => p.category === category);
    
    // Check which ones match search criteria
    const matchingProducts = categoryProducts.filter(p => {
      if (!activeSearchQuery) return true;
      return p.name.toLowerCase().includes(activeSearchQuery) || 
             p.description.toLowerCase().includes(activeSearchQuery) || 
             p.keywords.toLowerCase().includes(activeSearchQuery);
    });

    // Count matching
    totalVisibleProducts += matchingProducts.length;

    if (matchingProducts.length === 0 && (!['creatine', 'proteins', 'energy', 'wellness'].includes(category) || activeSearchQuery)) {
      sectionElement.classList.add('hidden');
    } else {
      sectionElement.classList.remove('hidden');
      
      // Update display of matching cards inside category container
      const cards = sectionElement.querySelectorAll('.premium-card');
      cards.forEach(card => {
        const id = card.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        const isMatch = matchingProducts.some(p => p.id === id);
        
        if (!isMatch) {
          card.classList.add('hidden');
          card.classList.remove('grid-item-visible', 'grid-item-hidden');
        } else {
          card.classList.remove('hidden');
          
          // Index of item among matches
          const matchIdx = matchingProducts.findIndex(p => p.id === id);
          
          // If search query is active, ignore "View More" constraints and show all matches.
          // Otherwise, apply default "View More" check logic.
          if (activeSearchQuery) {
            card.classList.add('grid-item-visible');
            card.classList.remove('grid-item-hidden');
          } else {
            if (matchIdx < 3) {
              card.classList.add('grid-item-visible');
              card.classList.remove('grid-item-hidden');
            } else if (expandedSections[category]) {
              card.classList.add('grid-item-visible');
              card.classList.remove('grid-item-hidden');
            } else {
              card.classList.add('grid-item-hidden');
              card.classList.remove('grid-item-visible');
            }
          }
        }
      });
    }
  });

  // If 0 total matches, show empty results alert view, else hide
  const emptyState = document.getElementById('search-empty-state');
  if (emptyState) {
    if (totalVisibleProducts === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  }
}

// Update Expand Grid buttons
function updateExpandButtonsVisibility() {
  const categories = ['creatine', 'proteins', 'energy', 'wellness'];
  
  categories.forEach(cat => {
    const btnWrapper = document.querySelector(`.view-more-btn[data-section="${cat}"]`)?.closest('.view-more-wrapper');
    if (!btnWrapper) return;

    // Under search query view: hide the expand buttons entirely since all results show
    if (activeSearchQuery) {
      btnWrapper.classList.add('hidden');
      return;
    }

    // Get total items in category
    const catItems = products.filter(p => p.category === cat);
    if (catItems.length <= 3) {
      btnWrapper.classList.add('hidden');
    } else {
      btnWrapper.classList.remove('hidden');
      
      const btn = btnWrapper.querySelector('.view-more-btn');
      const textSpan = btn.querySelector('span');
      const icon = btn.querySelector('.chevron-icon');

      if (expandedSections[cat]) {
        textSpan.textContent = 'View Less';
        icon.classList.add('rotate-180');
      } else {
        textSpan.textContent = 'View More';
        icon.classList.remove('rotate-180');
      }
    }
  });
}

// Expand/Collapse toggling
function toggleSectionExpansion(category) {
  expandedSections[category] = !expandedSections[category];
  
  // Re-run render to apply slide animations to cards index >= 3
  renderProducts();

  // Smooth scroll back to section header if collapsing
  if (!expandedSections[category]) {
    const headerElement = document.getElementById(`${category}-section`);
    if (headerElement) {
      const headerOffset = 90;
      const elementPosition = headerElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

// Cart Drawer opening and closing transitions
function openCart() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  const drawer = document.getElementById('cart-drawer');

  if (drawer && backdrop && panel) {
    drawer.classList.remove('hidden');
    // Force DOM reflow to trigger transition
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }, 10);
  }
}

function closeCart() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  const drawer = document.getElementById('cart-drawer');

  if (drawer && backdrop && panel) {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
    
    // Hide container once transition completes
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 300);
  }
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
            <h4 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate font-display">
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
            
            <span class="text-sm font-black text-zinc-900 dark:text-white font-mono">
              ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      `;
      
      cartItemsContainer.appendChild(itemRow);
    });
  }

  // Calculate pricing metrics
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Free Shipping criteria (> ₹3,000)
  const shippingFee = subtotal >= 3000 ? 0 : 150;
  const grandTotal = subtotal + shippingFee;

  // Render values
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  if (cartShippingEl) {
    if (shippingFee === 0) {
      cartShippingEl.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px]">FREE</span>`;
    } else {
      cartShippingEl.textContent = `₹${shippingFee}`;
    }
  }

  if (cartTotalEl) cartTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  // Parse newly rendered drawer buttons/icons
  lucide.createIcons();
}

// Redirect and submit message to WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shippingFee = subtotal >= 3000 ? 0 : 150;
  const grandTotal = subtotal + shippingFee;

  // Format message lines strictly matching requirements
  let message = `Hello, I would like to place an order for the following supplements:\n`;
  
  cart.forEach(item => {
    message += `- ${item.product.name} (Qty: ${item.quantity}) - Price: ₹${item.product.price.toLocaleString('en-IN')}\n`;
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
