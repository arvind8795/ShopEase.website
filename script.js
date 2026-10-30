/**
 * ==============================================================================
 * ShopEase - Modern E-Commerce Storefront
 * Pure Vanilla JavaScript (ES6+)
 * Full shopping cart, wishlist, search, category filter, modals & localStorage
 * ==============================================================================
 */

// Global State
const STATE = {
  products: [
    // 1. Electronics
    {
      id: 1,
      name: "Aura Pro Wireless ANC Headphones",
      category: "electronics",
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      rating: 4.9,
      reviewsCount: 248,
      badge: "HOT",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
      description: "Flagship wireless over-ear headphones featuring Hybrid Active Noise Cancellation, 45-hour battery life, and custom 40mm titanium dynamic drivers."
    },
    {
      id: 2,
      name: "SonicPulse Waterproof Bluetooth Speaker",
      category: "electronics",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4.7,
      reviewsCount: 185,
      badge: null,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
      description: "IPX7 waterproof portable Bluetooth speaker with punchy 360-degree bass, 16-hour playtime, and rugged shockproof exterior."
    },
    {
      id: 3,
      name: "Titan Ultra Smartwatch Series 8",
      category: "electronics",
      price: 149.99,
      originalPrice: 219.99,
      discount: 32,
      rating: 4.8,
      reviewsCount: 310,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
      description: "Advanced fitness smartwatch with continuous SpO2 & ECG tracking, always-on AMOLED display, GPS navigation, and 7-day battery."
    },
    {
      id: 4,
      name: "Apex Mechanical Gaming Keyboard RGB",
      category: "electronics",
      price: 119.99,
      originalPrice: 159.99,
      discount: 25,
      rating: 4.9,
      reviewsCount: 142,
      badge: null,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
      description: "Aerospace-grade aluminum mechanical keyboard with hot-swappable linear switches, per-key RGB illumination, and magnetic wrist rest."
    },

    // 2. Fashion
    {
      id: 5,
      name: "Essential Heavyweight Cotton Hoodie",
      category: "fashion",
      price: 59.99,
      originalPrice: 89.99,
      discount: 33,
      rating: 4.8,
      reviewsCount: 412,
      badge: "HOT",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
      description: "Crafted from 480gsm organic French terry cotton with a relaxed streetwear silhouette, double-layered hood, and ribbed hems."
    },
    {
      id: 6,
      name: "Relaxed Linen Blend Casual Shirt",
      category: "fashion",
      price: 44.99,
      originalPrice: 64.99,
      discount: 31,
      rating: 4.6,
      reviewsCount: 198,
      badge: null,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
      description: "Breathable pure linen button-up shirt featuring a relaxed camp collar, mother-of-pearl buttons, and effortless summer draping."
    },
    {
      id: 7,
      name: "Vintage Washed Denim Trucker Jacket",
      category: "fashion",
      price: 89.99,
      originalPrice: 129.99,
      discount: 31,
      rating: 4.9,
      reviewsCount: 164,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",
      description: "Timeless 14oz Japanese denim jacket with subtle vintage wash, copper rivet accents, and interior welt pockets."
    },
    {
      id: 8,
      name: "Tailored Slim-Fit Stretch Chinos",
      category: "fashion",
      price: 54.99,
      originalPrice: 74.99,
      discount: 27,
      rating: 4.7,
      reviewsCount: 120,
      badge: null,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
      description: "Modern slim-fit trousers crafted with four-way stretch twill, wrinkle-resistant finish, and versatile dress-up or down styling."
    },

    // 3. Shoes
    {
      id: 9,
      name: "AeroGlide Pro Carbon Running Shoes",
      category: "shoes",
      price: 129.99,
      originalPrice: 169.99,
      discount: 24,
      rating: 4.9,
      reviewsCount: 520,
      badge: "HOT",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
      description: "Ultra-responsive marathon footwear featuring full-length carbon fiber propulsion plate and high-rebound supercritical foam."
    },
    {
      id: 10,
      name: "Urban Heritage Leather Penny Loafers",
      category: "shoes",
      price: 99.99,
      originalPrice: 149.99,
      discount: 33,
      rating: 4.7,
      reviewsCount: 88,
      badge: null,
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
      description: "Handcrafted calfskin leather loafers with Goodyear-welted construction, memory foam cushioned insoles, and classic penny slot."
    },
    {
      id: 11,
      name: "StreetWave High-Top Canvas Sneakers",
      category: "shoes",
      price: 69.99,
      originalPrice: 89.99,
      discount: 22,
      rating: 4.6,
      reviewsCount: 275,
      badge: null,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
      description: "Iconic streetwear high-top sneakers with vulcanized rubber sole, 12oz duck canvas, and reinforced heel counter."
    },
    {
      id: 12,
      name: "Apex Waterproof Trail Hiking Boots",
      category: "shoes",
      price: 139.99,
      originalPrice: 189.99,
      discount: 26,
      rating: 4.8,
      reviewsCount: 140,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
      description: "All-weather waterproof leather hiking boots with Vibram Megagrip traction lug soles and ankle stability cradle."
    },

    // 4. Watches
    {
      id: 13,
      name: "Vanguard Minimalist Chronograph Watch",
      category: "watches",
      price: 159.99,
      originalPrice: 229.99,
      discount: 30,
      rating: 4.9,
      reviewsCount: 195,
      badge: "HOT",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
      description: "Precision Japanese quartz chronograph encased in 316L brushed stainless steel, sapphire crystal glass, and genuine Italian leather."
    },
    {
      id: 14,
      name: "Riviera Rose Gold Luxury Timepiece",
      category: "watches",
      price: 189.99,
      originalPrice: 259.99,
      discount: 27,
      rating: 4.8,
      reviewsCount: 134,
      badge: null,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
      description: "Opulent rose gold plated case with sunray midnight dial, ceramic bezel inlay, and seamless butterfly deployment clasp."
    },
    {
      id: 15,
      name: "Oceanic Automatic 200M Diver Watch",
      category: "watches",
      price: 249.99,
      originalPrice: 349.99,
      discount: 29,
      rating: 5.0,
      reviewsCount: 92,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
      description: "Professional dive watch with NH35 automatic mechanical movement, 200m water resistance, screw-down crown, and Super-LumiNova markers."
    },
    {
      id: 16,
      name: "Heritage Classic Tan Leather Watch",
      category: "watches",
      price: 119.99,
      originalPrice: 169.99,
      discount: 29,
      rating: 4.7,
      reviewsCount: 210,
      badge: null,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
      description: "Understated elegance featuring a minimalist matte dial, date aperture, hand-stitched saddle leather band, and 50m water resistance."
    },

    // 5. Accessories
    {
      id: 17,
      name: "Maverick UV400 Polarized Sunglasses",
      category: "accessories",
      price: 49.99,
      originalPrice: 79.99,
      discount: 38,
      rating: 4.8,
      reviewsCount: 340,
      badge: "HOT",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
      description: "Classically styled square frame sunglasses with TAC polarized lenses, anti-reflective coating, and durable acetate construction."
    },
    {
      id: 18,
      name: "Artisan Full-Grain Leather Bi-Fold Wallet",
      category: "accessories",
      price: 39.99,
      originalPrice: 59.99,
      discount: 33,
      rating: 4.9,
      reviewsCount: 480,
      badge: null,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
      description: "Slim RFID-blocking bi-fold wallet handcrafted from vegetable-tanned full-grain leather that patinas beautifully over time."
    },
    {
      id: 19,
      name: "Nomad Canvas & Leather Travel Duffel",
      category: "accessories",
      price: 89.99,
      originalPrice: 129.99,
      discount: 31,
      rating: 4.9,
      reviewsCount: 160,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
      description: "Heavy-duty 18oz waxed canvas weekender bag with full-grain leather trims, padded laptop compartment, and shoe storage sleeve."
    },
    {
      id: 20,
      name: "Merino Wool Ribbed Beanie & Scarf Set",
      category: "accessories",
      price: 45.99,
      originalPrice: 65.99,
      discount: 30,
      rating: 4.7,
      reviewsCount: 115,
      badge: null,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
      description: "Luxuriously soft 100% extra-fine Merino wool winter set offering natural thermal regulation, ribbed knit stretch, and itch-free comfort."
    }
  ],

  // Persisted or interactive application state
  cart: [],
  wishlist: [],
  currentUser: null,
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  discountPercent: 0,
  freeShippingThreshold: 75.0,
  flatShippingRate: 9.99
};

// Storage Keys
const STORAGE_KEYS = {
  CART: "shopease_cart_v1",
  WISHLIST: "shopease_wishlist_v1",
  USER: "shopease_user_v1"
};

// Valid Promo Codes
const VALID_PROMOS = {
  "SHOPEASE10": 10,
  "WELCOME20": 20,
  "FLASH30": 30
};

/* ==============================================================================
   DOM Elements
   ============================================================================== */
const DOM = {
  // Navigation & Search
  header: document.getElementById("header"),
  mobileMenuToggle: document.getElementById("mobileMenuToggle"),
  mainNav: document.getElementById("mainNav"),
  closeNavBtn: document.getElementById("closeNavBtn"),
  navLinks: document.querySelectorAll(".nav-link"),
  searchInput: document.getElementById("searchInput"),
  searchClearBtn: document.getElementById("searchClearBtn"),
  
  // Header Badges & Action Buttons
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  cartCountBadge: document.getElementById("cartCountBadge"),
  wishlistToggleBtn: document.getElementById("wishlistToggleBtn"),
  wishlistCountBadge: document.getElementById("wishlistCountBadge"),
  userModalBtn: document.getElementById("userModalBtn"),
  userGreeting: document.getElementById("userGreeting"),

  // Products Section & Filters
  productsGrid: document.getElementById("productsGrid"),
  categoryFilterBar: document.getElementById("categoryFilterBar"),
  sortSelect: document.getElementById("sortSelect"),
  resultsCounter: document.getElementById("resultsCounter"),
  emptyState: document.getElementById("emptyState"),
  resetSearchBtn: document.getElementById("resetSearchBtn"),
  activeFilterChips: document.getElementById("activeFilterChips"),
  chipsList: document.getElementById("chipsList"),
  clearAllFiltersBtn: document.getElementById("clearAllFiltersBtn"),

  // Cart Drawer
  cartDrawer: document.getElementById("cartDrawer"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartItemsContainer: document.getElementById("cartItemsContainer"),
  drawerCartCount: document.getElementById("drawerCartCount"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDiscount: document.getElementById("cartDiscount"),
  discountLine: document.getElementById("discountLine"),
  discountPercentText: document.getElementById("discountPercent"),
  cartShipping: document.getElementById("cartShipping"),
  cartGrandTotal: document.getElementById("cartGrandTotal"),
  shippingStatusText: document.getElementById("shippingStatusText"),
  shippingProgressBar: document.getElementById("shippingProgressBar"),
  promoInput: document.getElementById("promoInput"),
  promoForm: document.getElementById("promoForm"),
  promoStatusMessage: document.getElementById("promoStatusMessage"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  proceedToCheckoutBtn: document.getElementById("proceedToCheckoutBtn"),

  // Wishlist Drawer
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistBackdrop: document.getElementById("wishlistBackdrop"),
  closeWishlistBtn: document.getElementById("closeWishlistBtn"),
  wishlistItemsContainer: document.getElementById("wishlistItemsContainer"),
  drawerWishlistCount: document.getElementById("drawerWishlistCount"),
  wishlistFooter: document.getElementById("wishlistFooter"),
  addAllWishlistToCartBtn: document.getElementById("addAllWishlistToCartBtn"),

  // Quick View Modal
  quickViewModal: document.getElementById("quickViewModal"),
  quickViewContent: document.getElementById("quickViewContent"),
  closeQuickViewBtn: document.getElementById("closeQuickViewBtn"),

  // User Auth Modal
  userModal: document.getElementById("userModal"),
  closeUserModalBtn: document.getElementById("closeUserModalBtn"),
  tabLoginBtn: document.getElementById("tabLoginBtn"),
  tabRegisterBtn: document.getElementById("tabRegisterBtn"),
  loginForm: document.getElementById("loginForm"),
  registerForm: document.getElementById("registerForm"),
  loggedInView: document.getElementById("loggedInView"),
  profileUserName: document.getElementById("profileUserName"),
  profileUserEmail: document.getElementById("profileUserEmail"),
  logoutBtn: document.getElementById("logoutBtn"),

  // Checkout Modal
  checkoutModal: document.getElementById("checkoutModal"),
  closeCheckoutBtn: document.getElementById("closeCheckoutBtn"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutTotalAmount: document.getElementById("checkoutTotalAmount"),
  orderSuccessModal: document.getElementById("orderSuccessModal"),
  orderIdDisplay: document.getElementById("orderIdDisplay"),
  continueShoppingBtn: document.getElementById("continueShoppingBtn"),

  // Info Modal
  infoModal: document.getElementById("infoModal"),
  closeInfoModalBtn: document.getElementById("closeInfoModalBtn"),
  infoModalTitle: document.getElementById("infoModalTitle"),
  infoModalBody: document.getElementById("infoModalBody"),

  // Other widgets
  scrollToTopBtn: document.getElementById("scrollToTopBtn"),
  toastContainer: document.getElementById("toastContainer"),
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),
  viewDealsBtn: document.getElementById("viewDealsBtn"),
  shopNowHeroBtn: document.getElementById("shopNowHeroBtn"),
  countHours: document.getElementById("countHours"),
  countMins: document.getElementById("countMins"),
  countSecs: document.getElementById("countSecs")
};

/* ==============================================================================
   Initialization & Storage Management
   ============================================================================== */
function initApp() {
  loadFromStorage();
  bindEvents();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  updateUserUI();
  startDealsCountdown();
}

function loadFromStorage() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) STATE.cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    if (savedWishlist) STATE.wishlist = JSON.parse(savedWishlist);

    const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (savedUser) STATE.currentUser = JSON.parse(savedUser);
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(STATE.cart));
  } catch (err) {
    console.error("Failed to save cart to localStorage:", err);
  }
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(STATE.wishlist));
  } catch (err) {
    console.error("Failed to save wishlist to localStorage:", err);
  }
}

function saveUserToStorage() {
  try {
    if (STATE.currentUser) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(STATE.currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  } catch (err) {
    console.error("Failed to save user to localStorage:", err);
  }
}

/* ==============================================================================
   Product Filtering, Sorting & Rendering
   ============================================================================== */
function getFilteredAndSortedProducts() {
  let list = [...STATE.products];

  // 1. Category Filter
  if (STATE.activeCategory !== "all") {
    list = list.filter(item => item.category === STATE.activeCategory);
  }

  // 2. Search Query Filter
  if (STATE.searchQuery.trim() !== "") {
    const query = STATE.searchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

  // 3. Sorting
  switch (STATE.sortBy) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      list.sort((a, b) => b.discount - a.discount);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "featured":
    default:
      // Keep natural catalog order
      break;
  }

  return list;
}

function renderProducts() {
  const filtered = getFilteredAndSortedProducts();

  // Update Result Counter
  if (DOM.resultsCounter) {
    DOM.resultsCounter.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${STATE.products.length}</strong> products`;
  }

  // Handle Empty State
  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = "";
    DOM.emptyState.style.display = "block";
  } else {
    DOM.emptyState.style.display = "none";
    DOM.productsGrid.innerHTML = filtered.map(product => createProductCardHTML(product)).join("");
  }

  // Update active chips bar
  updateActiveChipsUI();
}

function createProductCardHTML(product) {
  const isWishlisted = STATE.wishlist.includes(product.id);
  const isInCart = STATE.cart.some(item => item.id === product.id);

  let badgeHTML = "";
  if (product.discount > 0) {
    badgeHTML += `<span class="badge badge-discount">-${product.discount}%</span>`;
  }
  if (product.badge === "HOT") {
    badgeHTML += `<span class="badge badge-tag-hot"><i class="fa-solid fa-fire"></i> Hot</span>`;
  } else if (product.badge === "NEW") {
    badgeHTML += `<span class="badge badge-tag-new"><i class="fa-solid fa-sparkles"></i> New</span>`;
  }

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="card-media-wrapper">
        <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy">
        <div class="card-badges">
          ${badgeHTML}
        </div>
        <div class="card-actions-hover">
          <button 
            class="card-action-btn wishlist-btn ${isWishlisted ? 'active' : ''}" 
            data-id="${product.id}" 
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          >
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
        </div>
        <button class="quick-view-overlay-btn" data-id="${product.id}">
          <i class="fa-regular fa-eye"></i> Quick View
        </button>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="card-cat">${product.category}</span>
          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating.toFixed(1)}</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
        </div>

        <h3 class="card-title" title="${product.name}">${product.name}</h3>

        <div class="card-price-row">
          <span class="card-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="card-price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
          ${product.discount > 0 ? `<span class="card-discount-tag">Save $${(product.originalPrice - product.price).toFixed(2)}</span>` : ''}
        </div>

        <button class="card-add-btn ${isInCart ? 'added' : ''}" data-id="${product.id}">
          <i class="${isInCart ? 'fa-solid fa-check' : 'fa-solid fa-cart-plus'}"></i>
          <span>${isInCart ? 'Added in Cart' : 'Add to Cart'}</span>
        </button>
      </div>
    </article>
  `;
}

function updateActiveChipsUI() {
  const hasCategoryFilter = STATE.activeCategory !== "all";
  const hasSearchFilter = STATE.searchQuery.trim() !== "";

  if (!hasCategoryFilter && !hasSearchFilter) {
    DOM.activeFilterChips.style.display = "none";
    DOM.chipsList.innerHTML = "";
    return;
  }

  DOM.activeFilterChips.style.display = "flex";
  let chips = [];

  if (hasCategoryFilter) {
    chips.push(`
      <span class="filter-chip">
        Category: <strong>${capitalizeFirstLetter(STATE.activeCategory)}</strong>
        <i class="fa-solid fa-xmark chip-remove" data-action="remove-category"></i>
      </span>
    `);
  }

  if (hasSearchFilter) {
    chips.push(`
      <span class="filter-chip">
        Search: <strong>"${STATE.searchQuery}"</strong>
        <i class="fa-solid fa-xmark chip-remove" data-action="remove-search"></i>
      </span>
    `);
  }

  DOM.chipsList.innerHTML = chips.join("");
}

/* ==============================================================================
   Cart Business Logic & UI
   ============================================================================== */
function addToCart(productId, quantity = 1) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  const existing = STATE.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    STATE.cart.push({
      id: productId,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh card button state

  showToast(`"${product.name}" added to cart!`, "success", "fa-solid fa-cart-shopping");
}

function updateCartQuantity(productId, delta) {
  const index = STATE.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  STATE.cart[index].quantity += delta;
  if (STATE.cart[index].quantity <= 0) {
    removeFromCart(productId, false);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId, notify = true) {
  const product = STATE.products.find(p => p.id === productId);
  STATE.cart = STATE.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderProducts();

  if (notify && product) {
    showToast(`Removed "${product.name}" from cart`, "info", "fa-regular fa-trash-can");
  }
}

function clearCart() {
  if (STATE.cart.length === 0) return;
  STATE.cart = [];
  STATE.discountPercent = 0;
  if (DOM.promoInput) DOM.promoInput.value = "";
  if (DOM.promoStatusMessage) DOM.promoStatusMessage.innerHTML = "";
  saveCartToStorage();
  updateCartUI();
  renderProducts();
  showToast("Your shopping cart has been cleared", "info", "fa-solid fa-trash-arrow-up");
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalItemsCount = 0;

  STATE.cart.forEach(cartItem => {
    const product = STATE.products.find(p => p.id === cartItem.id);
    if (product) {
      subtotal += product.price * cartItem.quantity;
      totalItemsCount += cartItem.quantity;
    }
  });

  const discountAmount = subtotal * (STATE.discountPercent / 100);
  const discountedSubtotal = subtotal - discountAmount;
  
  // Free shipping check
  const isFreeShipping = subtotal >= STATE.freeShippingThreshold || subtotal === 0;
  const shipping = isFreeShipping ? 0 : STATE.flatShippingRate;
  const grandTotal = discountedSubtotal + shipping;

  return {
    subtotal,
    discountAmount,
    shipping,
    grandTotal,
    totalItemsCount,
    isFreeShipping
  };
}

function updateCartUI() {
  const totals = calculateCartTotals();

  // Update Badges
  DOM.cartCountBadge.textContent = totals.totalItemsCount;
  DOM.drawerCartCount.textContent = totals.totalItemsCount;

  // Toggle badge visibility / animation
  if (totals.totalItemsCount > 0) {
    DOM.cartCountBadge.style.display = "flex";
  } else {
    DOM.cartCountBadge.style.display = "flex";
    DOM.cartCountBadge.textContent = "0";
  }

  // Free shipping bar calculation
  if (totals.subtotal === 0) {
    DOM.shippingProgressBar.style.width = "0%";
    DOM.shippingStatusText.innerHTML = `<span>Add <strong>$${STATE.freeShippingThreshold.toFixed(2)}</strong> more for <strong>FREE Shipping!</strong></span>`;
  } else if (totals.isFreeShipping) {
    DOM.shippingProgressBar.style.width = "100%";
    DOM.shippingStatusText.innerHTML = `<span class="text-green"><i class="fa-solid fa-circle-check"></i> Congratulations! You unlocked <strong>FREE Shipping!</strong></span>`;
  } else {
    const remaining = STATE.freeShippingThreshold - totals.subtotal;
    const progress = Math.min(100, (totals.subtotal / STATE.freeShippingThreshold) * 100);
    DOM.shippingProgressBar.style.width = `${progress}%`;
    DOM.shippingStatusText.innerHTML = `<span>Add <strong>$${remaining.toFixed(2)}</strong> more to get <strong>FREE Shipping!</strong></span>`;
  }

  // Render items inside drawer
  if (STATE.cart.length === 0) {
    DOM.cartItemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <h4>Your Shopping Cart is Empty</h4>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button class="btn btn-primary" id="drawerStartShoppingBtn">
          <i class="fa-solid fa-arrow-left"></i> Start Shopping
        </button>
      </div>
    `;
    const startBtn = document.getElementById("drawerStartShoppingBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        closeCartDrawer();
        scrollToSection("products-section");
      });
    }
  } else {
    DOM.cartItemsContainer.innerHTML = STATE.cart.map(cartItem => {
      const product = STATE.products.find(p => p.id === cartItem.id);
      if (!product) return "";
      const itemTotal = (product.price * cartItem.quantity).toFixed(2);

      return `
        <div class="cart-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title" title="${product.name}">${product.name}</h4>
            <div class="cart-item-price">$${product.price.toFixed(2)}</div>
            <div class="cart-item-actions">
              <div class="qty-controller">
                <button class="qty-btn" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="qty-value">${cartItem.quantity}</span>
                <button class="qty-btn" data-action="increase" data-id="${product.id}" aria-label="Increase quantity">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <button class="cart-item-remove-btn" data-id="${product.id}" title="Remove item">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Update Summary Breakdown
  DOM.cartSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;
  
  if (STATE.discountPercent > 0) {
    DOM.discountLine.style.display = "flex";
    DOM.discountPercentText.textContent = `${STATE.discountPercent}%`;
    DOM.cartDiscount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
  } else {
    DOM.discountLine.style.display = "none";
  }

  DOM.cartShipping.textContent = totals.isFreeShipping ? "FREE" : `$${totals.shipping.toFixed(2)}`;
  DOM.cartGrandTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;

  // Also sync checkout modal total
  if (DOM.checkoutTotalAmount) {
    DOM.checkoutTotalAmount.textContent = `$${totals.grandTotal.toFixed(2)}`;
  }
}

function openCartDrawer() {
  DOM.cartDrawer.classList.add("open");
  DOM.cartBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  DOM.cartDrawer.classList.remove("open");
  DOM.cartBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

/* ==============================================================================
   Wishlist Business Logic & UI
   ============================================================================== */
function toggleWishlist(productId) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  const index = STATE.wishlist.indexOf(productId);
  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from your wishlist`, "info", "fa-regular fa-heart");
  } else {
    STATE.wishlist.push(productId);
    showToast(`Added "${product.name}" to your wishlist!`, "success", "fa-solid fa-heart");
  }

  saveWishlistToStorage();
  updateWishlistUI();
  renderProducts(); // Refresh heart icon state on cards
}

function updateWishlistUI() {
  const count = STATE.wishlist.length;
  DOM.wishlistCountBadge.textContent = count;
  DOM.drawerWishlistCount.textContent = count;

  if (count === 0) {
    DOM.wishlistItemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <i class="fa-regular fa-heart text-coral"></i>
        <h4>Your Wishlist is Empty</h4>
        <p>Save items you love so you can easily find and purchase them later.</p>
        <button class="btn btn-primary" id="drawerWishlistBrowseBtn">
          <i class="fa-solid fa-compass"></i> Discover Products
        </button>
      </div>
    `;
    DOM.wishlistFooter.style.display = "none";

    const browseBtn = document.getElementById("drawerWishlistBrowseBtn");
    if (browseBtn) {
      browseBtn.addEventListener("click", () => {
        closeWishlistDrawer();
        scrollToSection("products-section");
      });
    }
  } else {
    DOM.wishlistFooter.style.display = "block";
    DOM.wishlistItemsContainer.innerHTML = STATE.wishlist.map(id => {
      const product = STATE.products.find(p => p.id === id);
      if (!product) return "";

      return `
        <div class="cart-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${product.name}</h4>
            <div class="cart-item-price">$${product.price.toFixed(2)}</div>
            <div class="cart-item-actions">
              <button class="btn btn-sm btn-primary wishlist-move-cart-btn" data-id="${product.id}">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
              <button class="cart-item-remove-btn wishlist-remove-btn" data-id="${product.id}" title="Remove from wishlist">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

function openWishlistDrawer() {
  DOM.wishlistDrawer.classList.add("open");
  DOM.wishlistBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  DOM.wishlistDrawer.classList.remove("open");
  DOM.wishlistBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function moveAllWishlistToCart() {
  if (STATE.wishlist.length === 0) return;
  STATE.wishlist.forEach(id => {
    addToCart(id, 1);
  });
  STATE.wishlist = [];
  saveWishlistToStorage();
  updateWishlistUI();
  closeWishlistDrawer();
  openCartDrawer();
  showToast("All wishlisted items moved to your cart!", "success", "fa-solid fa-cart-arrow-down");
}

/* ==============================================================================
   Quick View Modal
   ============================================================================== */
function openQuickViewModal(productId) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  const isWishlisted = STATE.wishlist.includes(product.id);

  DOM.quickViewContent.innerHTML = `
    <div class="quick-view-media">
      <img src="${product.image}" alt="${product.name}">
      ${product.discount > 0 ? `<div class="card-badges"><span class="badge badge-discount">-${product.discount}%</span></div>` : ''}
    </div>

    <div class="quick-view-meta">
      <span class="category-pill">${product.category}</span>
      <h2>${product.name}</h2>
      
      <div class="rating-row">
        <div class="card-rating">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
          <span>${product.rating.toFixed(1)}</span>
        </div>
        <span class="text-muted">| ${product.reviewsCount} customer ratings</span>
      </div>

      <div class="prices">
        <span class="current-price">$${product.price.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        ${product.discount > 0 ? `<span class="card-discount-tag">Save $${(product.originalPrice - product.price).toFixed(2)} (${product.discount}%)</span>` : ''}
      </div>

      <p class="description">${product.description}</p>

      <div class="quick-view-features">
        <span><i class="fa-solid fa-check"></i> In Stock & Ready to Ship</span>
        <span><i class="fa-solid fa-shield"></i> 2-Year Official Manufacturer Warranty</span>
        <span><i class="fa-solid fa-truck"></i> Free Shipping Eligible</span>
      </div>

      <div class="quick-view-actions">
        <div class="qty-controller">
          <button class="qty-btn" id="modalQtyMinus"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-value" id="modalQtyVal">1</span>
          <button class="qty-btn" id="modalQtyPlus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="btn btn-primary" id="modalAddToCartBtn" style="flex: 1;">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button class="icon-btn ${isWishlisted ? 'text-coral' : ''}" id="modalWishlistBtn" title="Wishlist">
          <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
        </button>
      </div>
    </div>
  `;

  // Bind modal-internal controls
  let currentQty = 1;
  const qtyVal = document.getElementById("modalQtyVal");
  const minusBtn = document.getElementById("modalQtyMinus");
  const plusBtn = document.getElementById("modalQtyPlus");
  const addBtn = document.getElementById("modalAddToCartBtn");
  const wishBtn = document.getElementById("modalWishlistBtn");

  minusBtn.addEventListener("click", () => {
    if (currentQty > 1) {
      currentQty--;
      qtyVal.textContent = currentQty;
    }
  });

  plusBtn.addEventListener("click", () => {
    currentQty++;
    qtyVal.textContent = currentQty;
  });

  addBtn.addEventListener("click", () => {
    addToCart(product.id, currentQty);
    closeQuickViewModal();
    openCartDrawer();
  });

  wishBtn.addEventListener("click", () => {
    toggleWishlist(product.id);
    const wishState = STATE.wishlist.includes(product.id);
    wishBtn.classList.toggle("text-coral", wishState);
    wishBtn.querySelector("i").className = wishState ? "fa-solid fa-heart" : "fa-regular fa-heart";
  });

  DOM.quickViewModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
  DOM.quickViewModal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==============================================================================
   User Auth Modal & Account System
   ============================================================================== */
function updateUserUI() {
  if (STATE.currentUser) {
    DOM.userGreeting.textContent = STATE.currentUser.name.split(" ")[0];
    DOM.userModalBtn.classList.add("logged-in");
  } else {
    DOM.userGreeting.textContent = "Login";
    DOM.userModalBtn.classList.remove("logged-in");
  }
}

function openUserModal() {
  if (STATE.currentUser) {
    DOM.loginForm.style.display = "none";
    DOM.registerForm.style.display = "none";
    DOM.loggedInView.style.display = "block";
    DOM.tabLoginBtn.style.display = "none";
    DOM.tabRegisterBtn.style.display = "none";
    DOM.profileUserName.textContent = STATE.currentUser.name;
    DOM.profileUserEmail.textContent = STATE.currentUser.email;
  } else {
    DOM.loggedInView.style.display = "none";
    DOM.tabLoginBtn.style.display = "block";
    DOM.tabRegisterBtn.style.display = "block";
    showLoginForm();
  }

  DOM.userModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeUserModal() {
  DOM.userModal.classList.remove("open");
  document.body.style.overflow = "";
}

function showLoginForm() {
  DOM.tabLoginBtn.classList.add("active");
  DOM.tabRegisterBtn.classList.remove("active");
  DOM.loginForm.style.display = "block";
  DOM.registerForm.style.display = "none";
}

function showRegisterForm() {
  DOM.tabRegisterBtn.classList.add("active");
  DOM.tabLoginBtn.classList.remove("active");
  DOM.registerForm.style.display = "block";
  DOM.loginForm.style.display = "none";
}

function handleLogin(email, password) {
  STATE.currentUser = {
    name: "Alex Morgan",
    email: email
  };
  saveUserToStorage();
  updateUserUI();
  closeUserModal();
  showToast(`Welcome back, ${STATE.currentUser.name}!`, "success", "fa-solid fa-circle-user");
}

function handleRegister(name, email, password) {
  STATE.currentUser = {
    name: name || "Valued Shopper",
    email: email
  };
  saveUserToStorage();
  updateUserUI();
  closeUserModal();
  showToast(`Account created! Welcome to ShopEase, ${STATE.currentUser.name}`, "success", "fa-solid fa-gift");
}

function handleLogout() {
  STATE.currentUser = null;
  saveUserToStorage();
  updateUserUI();
  closeUserModal();
  showToast("You have been safely signed out.", "info", "fa-solid fa-right-from-bracket");
}

/* ==============================================================================
   Checkout & Order Placement Flow
   ============================================================================== */
function openCheckoutModal() {
  if (STATE.cart.length === 0) {
    showToast("Your cart is empty. Add products first!", "warning", "fa-solid fa-triangle-exclamation");
    return;
  }

  const totals = calculateCartTotals();
  DOM.checkoutTotalAmount.textContent = `$${totals.grandTotal.toFixed(2)}`;

  closeCartDrawer();
  DOM.checkoutModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  DOM.checkoutModal.classList.remove("open");
  document.body.style.overflow = "";
}

function completeCheckout() {
  const randomId = Math.floor(100000 + Math.random() * 900000);
  DOM.orderIdDisplay.textContent = `#SE-${randomId}`;

  // Clear cart upon successful order
  STATE.cart = [];
  STATE.discountPercent = 0;
  saveCartToStorage();
  updateCartUI();
  renderProducts();

  closeCheckoutModal();

  DOM.orderSuccessModal.classList.add("open");
  document.body.style.overflow = "hidden";

  showToast(`Order #SE-${randomId} confirmed! Check your email.`, "success", "fa-solid fa-envelope-circle-check");
}

/* ==============================================================================
   Footer Info Modals (Shipping, Returns, FAQ, etc.)
   ============================================================================== */
const INFO_TOPICS = {
  shipping: {
    title: "Shipping & Delivery Policy",
    body: `
      <h4>Fast & Free Global Shipping</h4>
      <p>ShopEase delivers to over 80 countries worldwide. Standard shipping is complimentary on all orders over $75.</p>
      <h4>Standard Delivery (3-5 business days)</h4>
      <p>Domestic orders are fulfilled within 24 hours from our centralized warehouses. Real-time tracking will be emailed immediately.</p>
      <h4>Express Delivery (1-2 business days)</h4>
      <p>Express courier options are available during checkout via FedEx and DHL Priority.</p>
    `
  },
  returns: {
    title: "Returns & 30-Day Guarantee",
    body: `
      <h4>Hassle-Free 30-Day Returns</h4>
      <p>We want you to love your purchase. If you are not completely satisfied, you may return items in their original condition within 30 days for a 100% full refund.</p>
      <h4>Instant Exchanges</h4>
      <p>Need a different size or color? Contact support@shopease.store for free prepaid return shipping labels.</p>
    `
  },
  tracking: {
    title: "Track Your Order",
    body: `
      <h4>Live Shipment Status</h4>
      <p>Enter your order confirmation number (e.g., #SE-849204) sent to your registered email to view real-time tracking.</p>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <input type="text" placeholder="Enter Order ID..." style="flex: 1; padding: 0.6rem; border: 1px solid #cbd5e1; border-radius: 6px;">
        <button class="btn btn-primary btn-sm" onclick="showToast('Your package is on transit - on schedule!', 'info', 'fa-solid fa-truck-fast')">Track</button>
      </div>
    `
  },
  faq: {
    title: "Frequently Asked Questions",
    body: `
      <h4>Are products 100% authentic?</h4>
      <p>Yes. All electronics, watches, fashion and accessories are 100% genuine and sourced directly from licensed brand manufacturers.</p>
      <h4>What payment methods are supported?</h4>
      <p>We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Cash on Delivery.</p>
      <h4>How do I use a promo code?</h4>
      <p>Type code <strong>SHOPEASE10</strong> or <strong>WELCOME20</strong> inside the shopping cart slide-over to save instantly!</p>
    `
  },
  privacy: {
    title: "Privacy & Security Commitment",
    body: `
      <h4>Data Protection</h4>
      <p>ShopEase strictly adheres to GDPR & CCPA privacy standards. We will never sell, lease, or share your personal data with third-party advertisers.</p>
      <h4>Bank-Grade Encryption</h4>
      <p>All payment transactions are encrypted using high-grade 256-bit TLS protocol.</p>
    `
  }
};

function openInfoModal(type) {
  const data = INFO_TOPICS[type] || INFO_TOPICS.faq;
  DOM.infoModalTitle.textContent = data.title;
  DOM.infoModalBody.innerHTML = data.body;
  DOM.infoModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeInfoModal() {
  DOM.infoModal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==============================================================================
   Toast Notification System
   ============================================================================== */
function showToast(message, type = "info", iconClass = "fa-solid fa-circle-info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <span class="toast-message">${message}</span>
    <i class="fa-solid fa-xmark toast-close" aria-label="Dismiss"></i>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  DOM.toastContainer.appendChild(toast);

  // Auto remove after 3.8s
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

/* ==============================================================================
   Countdown Timer & Utilities
   ============================================================================== */
function startDealsCountdown() {
  let totalSeconds = 18 * 3600 + 42 * 60 + 30;

  setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 24 * 3600;
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (DOM.countHours) DOM.countHours.textContent = String(hours).padStart(2, "0");
    if (DOM.countMins) DOM.countMins.textContent = String(mins).padStart(2, "0");
    if (DOM.countSecs) DOM.countSecs.textContent = String(secs).padStart(2, "0");
  }, 1000);
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ==============================================================================
   Event Bindings
   ============================================================================== */
function bindEvents() {
  // Sticky Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      DOM.header.classList.add("scrolled");
      DOM.scrollToTopBtn.classList.add("visible");
    } else {
      DOM.header.classList.remove("scrolled");
      DOM.scrollToTopBtn.classList.remove("visible");
    }
  });

  // Scroll to Top
  DOM.scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Menu Toggle
  DOM.mobileMenuToggle.addEventListener("click", () => {
    DOM.mainNav.classList.add("open");
  });

  DOM.closeNavBtn.addEventListener("click", () => {
    DOM.mainNav.classList.remove("open");
  });

  // Nav Links click
  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      DOM.navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      DOM.mainNav.classList.remove("open");
    });
  });

  // Search Input live filter
  DOM.searchInput.addEventListener("input", (e) => {
    STATE.searchQuery = e.target.value;
    if (STATE.searchQuery.trim() !== "") {
      DOM.searchClearBtn.classList.add("visible");
    } else {
      DOM.searchClearBtn.classList.remove("visible");
    }
    renderProducts();
  });

  DOM.searchClearBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    STATE.searchQuery = "";
    DOM.searchClearBtn.classList.remove("visible");
    renderProducts();
    DOM.searchInput.focus();
  });

  // Category Tab Filters
  DOM.categoryFilterBar.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    DOM.categoryFilterBar.querySelectorAll(".filter-tab").forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    STATE.activeCategory = tab.dataset.filter;
    renderProducts();
  });

  // Department / Category Cards in Hero Section click
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      STATE.activeCategory = cat;

      // Sync tabs
      DOM.categoryFilterBar.querySelectorAll(".filter-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.filter === cat);
      });

      renderProducts();
      scrollToSection("products-section");
    });
  });

  // Footer Category links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      STATE.activeCategory = cat;
      DOM.categoryFilterBar.querySelectorAll(".filter-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.filter === cat);
      });
      renderProducts();
      scrollToSection("products-section");
    });
  });

  // Sort Select Dropdown
  DOM.sortSelect.addEventListener("change", (e) => {
    STATE.sortBy = e.target.value;
    renderProducts();
  });

  // Active Chips Removal & Reset
  DOM.activeFilterChips.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".chip-remove");
    if (!removeBtn) return;

    const action = removeBtn.dataset.action;
    if (action === "remove-category") {
      STATE.activeCategory = "all";
      DOM.categoryFilterBar.querySelectorAll(".filter-tab").forEach(t => {
        t.classList.toggle("active", t.dataset.filter === "all");
      });
    } else if (action === "remove-search") {
      STATE.searchQuery = "";
      DOM.searchInput.value = "";
      DOM.searchClearBtn.classList.remove("visible");
    }

    renderProducts();
  });

  DOM.clearAllFiltersBtn.addEventListener("click", resetAllFilters);
  DOM.resetSearchBtn.addEventListener("click", resetAllFilters);

  function resetAllFilters() {
    STATE.activeCategory = "all";
    STATE.searchQuery = "";
    STATE.sortBy = "featured";
    DOM.searchInput.value = "";
    DOM.searchClearBtn.classList.remove("visible");
    DOM.sortSelect.value = "featured";
    DOM.categoryFilterBar.querySelectorAll(".filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.filter === "all");
    });
    renderProducts();
  }

  // Hero Shop Now & Quick Add Buttons
  if (DOM.shopNowHeroBtn) {
    DOM.shopNowHeroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection("products-section");
    });
  }

  const heroQuickAdd = document.querySelector(".hero-quick-add");
  if (heroQuickAdd) {
    heroQuickAdd.addEventListener("click", () => {
      const id = parseInt(heroQuickAdd.dataset.id, 10);
      addToCart(id, 1);
      openCartDrawer();
    });
  }

  // Flash deals button
  if (DOM.viewDealsBtn) {
    DOM.viewDealsBtn.addEventListener("click", () => {
      STATE.sortBy = "discount";
      DOM.sortSelect.value = "discount";
      renderProducts();
      scrollToSection("products-section");
    });
  }

  // Product Grid Action Delegation (Add to cart, Wishlist, Quick view)
  DOM.productsGrid.addEventListener("click", (e) => {
    // Add to Cart
    const addBtn = e.target.closest(".card-add-btn");
    if (addBtn) {
      const id = parseInt(addBtn.dataset.id, 10);
      addToCart(id, 1);
      return;
    }

    // Wishlist Toggle
    const wishBtn = e.target.closest(".wishlist-btn");
    if (wishBtn) {
      const id = parseInt(wishBtn.dataset.id, 10);
      toggleWishlist(id);
      return;
    }

    // Quick View
    const qvBtn = e.target.closest(".quick-view-overlay-btn");
    if (qvBtn) {
      const id = parseInt(qvBtn.dataset.id, 10);
      openQuickViewModal(id);
      return;
    }
  });

  // Cart Drawer Events
  DOM.cartToggleBtn.addEventListener("click", openCartDrawer);
  DOM.closeCartBtn.addEventListener("click", closeCartDrawer);
  DOM.cartBackdrop.addEventListener("click", closeCartDrawer);
  DOM.clearCartBtn.addEventListener("click", clearCart);
  DOM.proceedToCheckoutBtn.addEventListener("click", openCheckoutModal);

  // Cart Item Quantity Controls & Delete Delegation
  DOM.cartItemsContainer.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      const id = parseInt(qtyBtn.dataset.id, 10);
      const action = qtyBtn.dataset.action;
      updateCartQuantity(id, action === "increase" ? 1 : -1);
      return;
    }

    const removeBtn = e.target.closest(".cart-item-remove-btn");
    if (removeBtn) {
      const id = parseInt(removeBtn.dataset.id, 10);
      removeFromCart(id, true);
      return;
    }
  });

  // Promo Code Form
  DOM.promoForm.addEventListener("submit", () => {
    const code = DOM.promoInput.value.trim().toUpperCase();
    if (!code) return;

    if (VALID_PROMOS[code]) {
      STATE.discountPercent = VALID_PROMOS[code];
      DOM.promoStatusMessage.className = "promo-status success";
      DOM.promoStatusMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i> Code <strong>${code}</strong> applied! You saved ${STATE.discountPercent}%.`;
      updateCartUI();
      showToast(`Promo "${code}" applied for ${STATE.discountPercent}% OFF!`, "success", "fa-solid fa-tags");
    } else {
      DOM.promoStatusMessage.className = "promo-status error";
      DOM.promoStatusMessage.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Invalid promo code. Try <strong>SHOPEASE10</strong> or <strong>WELCOME20</strong>.`;
    }
  });

  // Wishlist Drawer Events
  DOM.wishlistToggleBtn.addEventListener("click", openWishlistDrawer);
  DOM.closeWishlistBtn.addEventListener("click", closeWishlistDrawer);
  DOM.wishlistBackdrop.addEventListener("click", closeWishlistDrawer);
  DOM.addAllWishlistToCartBtn.addEventListener("click", moveAllWishlistToCart);

  DOM.wishlistItemsContainer.addEventListener("click", (e) => {
    const moveBtn = e.target.closest(".wishlist-move-cart-btn");
    if (moveBtn) {
      const id = parseInt(moveBtn.dataset.id, 10);
      addToCart(id, 1);
      toggleWishlist(id);
      openCartDrawer();
      return;
    }

    const removeBtn = e.target.closest(".wishlist-remove-btn");
    if (removeBtn) {
      const id = parseInt(removeBtn.dataset.id, 10);
      toggleWishlist(id);
      return;
    }
  });

  // Quick View Modal Close
  DOM.closeQuickViewBtn.addEventListener("click", closeQuickViewModal);
  DOM.quickViewModal.addEventListener("click", (e) => {
    if (e.target === DOM.quickViewModal) closeQuickViewModal();
  });

  // User Auth Modal Events
  DOM.userModalBtn.addEventListener("click", openUserModal);
  DOM.closeUserModalBtn.addEventListener("click", closeUserModal);
  DOM.userModal.addEventListener("click", (e) => {
    if (e.target === DOM.userModal) closeUserModal();
  });
  DOM.tabLoginBtn.addEventListener("click", showLoginForm);
  DOM.tabRegisterBtn.addEventListener("click", showRegisterForm);

  DOM.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();
    handleLogin(email, pass);
  });

  DOM.registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass = document.getElementById("regPassword").value.trim();
    handleRegister(name, email, pass);
  });

  DOM.logoutBtn.addEventListener("click", handleLogout);

  // Checkout Modal Events
  DOM.closeCheckoutBtn.addEventListener("click", closeCheckoutModal);
  DOM.checkoutModal.addEventListener("click", (e) => {
    if (e.target === DOM.checkoutModal) closeCheckoutModal();
  });

  // Payment Option selection radio styling
  document.querySelectorAll(".payment-option").forEach(label => {
    label.addEventListener("click", () => {
      document.querySelectorAll(".payment-option").forEach(l => l.classList.remove("selected"));
      label.classList.add("selected");
    });
  });

  DOM.checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    completeCheckout();
  });

  // Order Success Celebration Modal
  DOM.continueShoppingBtn.addEventListener("click", () => {
    DOM.orderSuccessModal.classList.remove("open");
    document.body.style.overflow = "";
    scrollToSection("products-section");
  });

  // Info Modal Events
  document.querySelectorAll(".footer-modal-trigger").forEach(link => {
    link.addEventListener("click", () => {
      const type = link.dataset.type;
      openInfoModal(type);
    });
  });

  DOM.closeInfoModalBtn.addEventListener("click", closeInfoModal);
  DOM.infoModal.addEventListener("click", (e) => {
    if (e.target === DOM.infoModal) closeInfoModal();
  });

  // Newsletter Form
  DOM.newsletterForm.addEventListener("submit", () => {
    const email = DOM.newsletterEmail.value.trim();
    if (email) {
      showToast(`Thank you for subscribing! Your 15% discount code was sent to ${email}`, "success", "fa-regular fa-envelope");
      DOM.newsletterEmail.value = "";
    }
  });

  // Keyboard accessibility: ESC key to close any active modal/drawer
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeWishlistDrawer();
      closeQuickViewModal();
      closeUserModal();
      closeCheckoutModal();
      closeInfoModal();
      DOM.orderSuccessModal.classList.remove("open");
      DOM.mainNav.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);
