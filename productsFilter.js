const productsFilter = [
  {
    id: 1,
    name: "SLIP ON FLANGES",
    image: "./images/flangs/SLIP ON FLANGES/Alloy-Steel-Slip-On-Flanges.webp",
    alt: "Stainless Steel Tubes",
    category: "flanges",
    description:
      "High-quality slip-on flanges for various industrial applications",
  },
  {
    id: 2,
    name: "WELD NECK FLANGES",
    image: "./images/flangs/WELD NECK FLANGES/Alloy Steel WNRF Flanges.webp",
    alt: "Carbon Steel Pipes",
    category: "flanges",
    description: "Durable weld neck flanges for secure, leak-proof connections",
  },
  {
    id: 3,
    name: "LONG_WELD",
    image: "./images/flangs/LONG_WELD/Alloy Steel Long Weld Neck Flanges.jpg",
    alt: "Alloy Steel Products",
    category: "flanges",
    description: "Extended weld neck flanges for high-strength pipeline joints",
  },
  {
    id: 4,
    name: "AWWA_FLANGES",
    image: "./images/flangs/AWWA_FLANGES/Awwa Flanges.jpg",
    alt: "Cold Drawn Precision Tubes",
    category: "flanges",
    description: "AWWA standard flanges designed for potable water systems",
  },
  {
    id: 5,
    name: "Body Flanges",
    image: "./images/flangs/Body Flanges/Body Flanges.jpg",
    alt: "Industrial Steel Pipes",
    category: "flanges",
    description: "Specialized body flanges for industrial piping applications",
  },
  {
    id: 6,
    name: "BLIND FLANGES",
    image: "./images/flangs/BLIND FLANGES/BLIND FLANGES.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "Blind flanges for sealing and capping pipeline ends",
  },
  {
    id: 7,
    name: "THREADED FLANGES",
    image: "./images/flangs/THREADED FLANGES/Stainless Threaded Flanges.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "Threaded flanges for easy and secure pipe threading",
  },
  {
    id: 8,
    name: "DIN FLANGES",
    image: "./images/flangs/DIN FLANGES/DIN PN6 PN40 Flanges.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "DIN standard flanges for European piping applications",
  },
  // {
  //   id: 9,
  //   name: "PADDLE BLANK FLANGES",
  //   image: "./images/flangs/PADDLE BLANK FLANGES/Hydrotest Flanges.jpg",
  //   alt: "Custom Steel Solutions",
  //   category: "flanges",
  //   description: "Paddle blank flanges for testing and isolation in pipelines",
  // },
  {
    id: 10,
    name: "PADDLE SPACER FLANGES",
    image: "./images/flangs/PADDLE SPACER FLANGES/Paddle Spacer Flanges.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "Spacer flanges designed to maintain pipeline spacing",
  },
  {
    id: 11,
    name: "SPECTACLE BLIND FLANGES",
    image:
      "./images/flangs/SPECTACLE BLIND FLANGES/Spectacle Blind Flanges_.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "Spectacle blind flanges for flow control and isolation",
  },
  {
    id: 12,
    name: "RING TYPE JOINT FLANGES",
    image:
      "./images/flangs/RING TYPE JOINT FLANGES/ring-type-joint-flanges.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "RTJ flanges engineered for high-pressure, leak-proof sealing",
  },
  {
    id: 13,
    name: "Nipo Flange",
    image: "./images/flangs/Nipo Flange/Steel Nipoflange.jpg",
    alt: "Custom Steel Solutions",
    category: "flanges",
    description: "Specialized nipo flanges for branch pipe connections",
  },
  // Buttweld Fittings
  {
    id: 14,
    name: "Pipe Tees",
    image: "./images/Buttweld Fittings/Tee/SS Cross Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Durable pipe tees for smooth branch connections",
  },
  {
    id: 15,
    name: "Cross Reducers",
    image:
      "./images/Buttweld Fittings/CONCENTRIC REDUCER/Duplex Steel Concentric Reducer.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Reducers available in concentric and eccentric designs",
  },
  // {
  //   id: 16,
  //   name: "Stainless Steel Tube",
  //   image:
  //     "./images/Buttweld Fittings/ECCENTRIC REDUCER/Duplex Steel Concentric Reducer.jpg",
  //   alt: "Custom Steel Solutions",
  //   category: "Buttweld Fittings",
  //   description: "High-grade stainless steel tubes for industrial use",
  // },
  {
    id: 17,
    name: "ASME / ANSI B16.9 Barred Tee",
    image: "./images/Buttweld Fittings/Barred Tees/Buttweld Barred Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Certified barred tees compliant with ASME and ANSI standards",
  },
  {
    id: 18,
    name: "ANSI B16.28 5D/6D Pipe Bend",
    image: "./images/Buttweld Fittings/BEND/SS 6D Bend.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Precision 5D/6D pipe bends for smooth flow and durability",
  },
  {
    id: 19,
    name: "ASTM A403 Stainless Steel Reducing Tee",
    image: "./images/Buttweld Fittings/Butt Weld Reducing Tee/Reducing Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Reducing tees compliant with ASTM and ANSI standards",
  },
  {
    id: 20,
    name: "STUBEND",
    image: "./images/Buttweld Fittings/ELBOW/Carbon Steel 45° Elbow.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Elbows with optimized flow dynamics to reduce turbulence",
  },
  // {
  //   id: 21,
  //   name: "ANSI B16.28 Reducing Elbow",
  //   image:
  //     "./images/Buttweld Fittings/Reducing Elbow/Carbon Steel 45° Reducing Elbow.jpg",
  //   alt: "Custom Steel Solutions",
  //   category: "Buttweld Fittings",
  //   description: "Reducing elbows with various thickness options and standards",
  // },
  {
    id: 22,
    name: "ANSI B16.28 Stainless Steel Cross Tee",
    image: "./images/Buttweld Fittings/CROSS TEE/SS Cross Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Cross tees available in multiple thickness schedules",
  },
  {
    id: 23,
    name: "ANSI B16.28 Swage Nipple",
    image: "./images/Buttweld Fittings/Swage Nipple/SS Swage Nipple.webp",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description:
      "Swage nipples meeting multiple ANSI and JIS dimension standards",
  },
  {
    id: 29,
    name: "ANSI B16.9 Forged Concentric Reducer",
    image:
      "./images/Forged Fittings/FORGED REDUCER/Forged Concentric Reducer.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Concentric reducers compliant with ASME and ASTM standards",
  },
  // COMPRESSION TUBE FITTINGS
  {
    id: 24,
    name: "Stainless Steel Insulation Gasket Kits",
    image:
      "./images/COMPRESSION TUBE FITTINGS/MALE CONNECTOR/Male Connector.jpg",
    alt: "Custom Steel Solutions",
    // category: "COMPRESSION TUBE FITTINGS",
    category: "Connectors",
    description:
      "Insulation gasket kits made from various stainless steel grades",
  },
  {
    id: 25,
    name: "Parker 8-6 HBZ-SS Reducing Union",
    image: "./images/COMPRESSION TUBE FITTINGS/TUBE TO UNION/Tube To Union.jpg",
    alt: "Custom Steel Solutions",
    category: "Connectors",
    description: "Reducing unions made of stainless steel AISI 316",
  },
  {
    id: 26,
    name: "Forged Stainless Steel Tube Union Elbow",
    image: "./images/COMPRESSION TUBE FITTINGS/UNION ELBOW/SS Union Elbow.jpg",
    alt: "Custom Steel Solutions",
    category: "Connectors",
    description: "Forged union elbows in multiple stainless alloys and metals",
  },
  {
    id: 27,
    name: "Corten Steel Panels",
    image: "./images/COMPRESSION TUBE FITTINGS/VALVES/CS Check Valves.jpg",
    alt: "Custom Steel Solutions",
    category: "Connectors",
    description: "Weathering steel panels with protective patina finish",
  },
  // Forged Fittings
  {
    id: 28,
    name: "Forged Cross Pipe Fittings",
    image: "./images/Forged Fittings/FORGED TEE/Socketweld Forged Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Forged cross fittings meeting ASME and MSS standards",
  },
  {
    id: 30,
    name: "Forged Cross Pipe Fittings",
    image: "./images/Forged Fittings/FORGED CROSS/Forged Threaded Cross.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description:
      "Forged threaded cross fittings for strong, precise connections",
  },
  {
    id: 31,
    name: "ANSI B16.9 Forged Welding Outlets",
    image: "./images/Forged Fittings/WELDING OUTLET/SS Welding Outlets.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Forged welding outlets manufactured per ANSI B16.9 standards",
  },
  {
    id: 32,
    name: "ASTM A182 Nipple Outlets",
    image: "./images/Forged Fittings/NIPPLE OUTLET/SS Nipple Outlet.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Robust forged nipple outlets for reliable pipe branches",
  },
  {
    id: 33,
    name: "ASTM A182 Nipple Outlets",
    image: "./images/Forged Fittings/Sweep Outlet/SS Sweep Outlet.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Sweep nipple outlets designed for smooth flow transitions",
  },
  {
    id: 34,
    name: "ASTM A182 Flange Outlets",
    image: "./images/Forged Fittings/Flange Outlets/SS Flange Outlets.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Flange outlets forged for secure pipeline connections",
  },
  {
    id: 35,
    name: "Stainless Steel Threaded Outlets",
    image: "./images/Forged Fittings/Threaded Outlet/Threaded Outlet.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Threaded outlets built for reliable high-pressure systems",
  },
  {
    id: 36,
    name: "Elbow Outlet Pipe Fittings",
    image: "./images/Forged Fittings/Elbow Outlet/Elbow Outlets.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Elbow outlet fittings designed for tight directional changes",
  },
  {
    id: 37,
    name: "ASTM A234 WP11 Pipe Reducing Tee",
    image:
      "./images/Forged Fittings/Forged Fittings - Reducing Tee/Carbon Steel Reducing Tee.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Reducing tees forged to ASTM standards for pipe size changes",
  },
  // Fasteners
  {
    id: 38,
    name: "ASTM A325 Hex Bolts",
    image: "./images/Fasteners/Hex Bolts/Hex Bolt.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "High-strength hex bolts for industrial fastening needs",
  },
  {
    id: 39,
    name: "ASTM A325 Heavy Hex Nuts",
    image: "./images/Fasteners/HEAVY HEX NUTS/Steel Heavy Hex Nuts.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Heavy hex nuts designed for structural security",
  },
  {
    id: 40,
    name: "ASTM A193 B7 Stud Bolts",
    image: "./images/Fasteners/STUD BOLTS/Stainless Steel Studs.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Stud bolts manufactured for heavy-duty industrial use",
  },
  {
    id: 41,
    name: "ASTM A325 Washers",
    image: "./images/Fasteners/WASHERS/SS Flat Washer.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Flat washers for load distribution in bolted joints",
  },
  {
    id: 42,
    name: "Stainless Steel Anchor & Foundation Bolts",
    image: "./images/Fasteners/Anchor Bolts/Sleeve Anchor Bolts.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Anchor and foundation bolts securing structural foundations",
  },
  {
    id: 43,
    name: "ASTM A325 Eye Bolts",
    image: "./images/Fasteners/Eye Bolts/Shoulder Eye Bolt.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Eye bolts for lifting and rigging applications",
  },
  {
    id: 44,
    name: "ASTM A325 Fasteners",
    image: "./images/Fasteners/HILTI FASTENERS/Anchor.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "Versatile ASTM A325 fasteners for multiple applications",
  },
  {
    id: 45,
    name: "ASTM A325 U Bolts",
    image: "./images/Fasteners/U BOLTS/Stainless Steel U Bolt.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "U-shaped bolts for pipe and rod support",
  },
  // REFRACTORY ANCHORS
  {
    id: 46,
    name: "V Shaped Refractory Anchors",
    image: "./images/REFRACTORY ANCHORS/V ANCHORS/Refractory V Anchors.jpg",
    alt: "Custom Steel Solutions",
    category: "REFRACTORY ANCHORS",
    description: "V-shaped anchors for secure refractory lining attachment",
  },
  {
    id: 47,
    name: "Stainless Steel Y Type Refractory Anchors",
    image:
      "./images/REFRACTORY ANCHORS/Y TYPE ANCHORS/Refractory Y Type Anchors.jpg",
    alt: "Custom Steel Solutions",
    category: "REFRACTORY ANCHORS",
    description: "Y-type anchors designed for high-temperature lining support",
  },
  {
    id: 48,
    name: "U Type Refractory Anchors",
    image: "./images/REFRACTORY ANCHORS/U ANCHORS/SS U ANCHORS.jpg",
    alt: "Custom Steel Solutions",
    category: "REFRACTORY ANCHORS",
    description: "U-shaped refractory anchors for reliable liner fixing",
  },
  {
    id: 49,
    name: "Customized Stainless Steel Refractory Anchors",
    image:
      "./images/REFRACTORY ANCHORS/CUSTOMIZE REFRACTORY ANCHORS/Refractory Anchors UV Type.jpg",
    alt: "Custom Steel Solutions",
    category: "REFRACTORY ANCHORS",
    description:
      "Customized anchors tailored for specific refractory lining needs",
  },
  // FORGING PRODUCTS
  {
    id: 50,
    name: "Carbon Steel Forged Rings ASTM A105",
    image:
      "./images/FORGING PRODUCTS/FORGED RINGS/Carbon Steel Forged Ring.jpg",
    alt: "Custom Steel Solutions",
    category: "FORGING PRODUCTS",
    description: "Carbon steel forged rings for heavy-duty industrial use",
  },
  {
    id: 51,
    name: "ASTM A105 Carbon Steel Rotor Shafts",
    image: "./images/FORGING PRODUCTS/ROTER SHAFT/ROTER SHAFT.jpg",
    alt: "Custom Steel Solutions",
    category: "FORGING PRODUCTS",
    description:
      "Carbon steel rotor shafts designed for machinery applications",
  },
  {
    id: 52,
    name: "Stainless Steel and Carbon Steel Propeller Shafts & Forged Round Bars",
    image: "./images/FORGING PRODUCTS/ROUND BARS/CS Forged Round Bar.jpg",
    alt: "Custom Steel Solutions",
    category: "FORGING PRODUCTS",
    description:
      "Propeller shafts and forged bars for marine and industrial use",
  },
  {
    id: 53,
    name: "Customized Stainless Steel and Carbon Steel Forgings",
    image:
      "./images/FORGING PRODUCTS/CUSTOMIZE FORGING/Customize Hot Forging.jpg",
    alt: "Custom Steel Solutions",
    category: "FORGING PRODUCTS",
    description: "Custom forged parts crafted for specialized applications",
  },
  // GASKETS
  {
    id: 54,
    name: "Stainless Steel Insulation Gasket Kits",
    image:
      "./images/GASKETS/INSULATION GASKET KITS/Monel Insulation Gasket.jpg",
    alt: "Custom Steel Solutions",
    category: "GASKETS",
    description: "Insulation gasket kits for reliable sealing and insulation",
  },
  {
    id: 55,
    name: "Spiral Wound Gaskets",
    image: "./images/GASKETS/SPIRAL WOUND GASKETS/Spiral Wound Gaskets_.jpg",
    alt: "Custom Steel Solutions",
    category: "GASKETS",
    description: "Spiral wound gaskets for high-pressure flange sealing",
  },
  {
    id: 56,
    name: "Alloy 20 and Stainless Steel Ring Type Joint Gaskets",
    image:
      "./images/GASKETS/RING JOINT TYPE GASKETS/RING JOINT TYPE GASKETS.jpg",
    alt: "Custom Steel Solutions",
    category: "GASKETS",
    description: "Ring joint gaskets for leak-proof high-pressure connections",
  },
  {
    id: 57,
    name: "SS 316 and High Nickel Octagonal Ring Type Joint Gaskets",
    image: "./images/GASKETS/OCTOGONAL GASKETS/OCTOGONAL GASKETS.jpg",
    alt: "Custom Steel Solutions",
    category: "GASKETS",
    description: "Octagonal gaskets for enhanced sealing in critical systems",
  },
  {
    id: 58,
    name: "Stainless Steel Graphite Filler Gaskets",
    image:
      "./images/GASKETS/GRAPHITE FILLER GASKETS/Monel Graphite Filler Gaskets.jpg",
    alt: "Custom Steel Solutions",
    category: "GASKETS",
    description: "Graphite filler gaskets for superior sealing performance",
  },
  // DESIGNER SHEETS
  {
    id: 59,
    name: "Stainless Steel Designer Sheets",
    image: "./images/DESIGNER SHEETS/SS Designer Sheets.png",
    alt: "Custom Steel Solutions",
    category: "DESIGNER SHEETS",
    description: "Designer stainless steel sheets for aesthetic applications",
  },
  //SHEETS, PLATES & COILS
  {
    id: 65,
    name: "Sheets, Plates & Coils",
    image: "./images/SP&C/sheet-plate-coil.png",
    alt: "Custom Steel Solutions",
    category: "Sheets, Plates & Coils",
    description:
      "High-quality sheets, plates, and coils known for superior strength, corrosion resistance, and smooth finish — ideal for industrial and construction applications.",
  },
  //ROADS AND BARS
  {
    id: 66,
    name: "Rods and Bars",
    image: "./images/RODS_BARS/Rods.jpg",
    alt: "Custom Steel Solutions",
    category: "Rods and Bars",
    description:
      "Precision-engineered rods and bars offering excellent strength, durability, and corrosion resistance for construction and manufacturing applications.",
  },
  //Non Ferrous Metals
  {
    id: 67,
    name: "Copper Tubes",
    image: "./images/coper/copper-pipe.jpg",
    alt: "Non Ferrous Metals",
    category: "Non Ferrous Metals",
    description:
      "High-conductivity copper products known for excellent electrical and thermal performance, ideal for wiring, heat exchangers, and industrial use.",
  },

  {
    id: 68,
    name: "Brass Tubes",
    image: "./images/Brass/Brass-tubes.jpg",
    alt: "Non Ferrous Metals",
    category: "Non Ferrous Metals",
    description:
      "Durable and corrosion-resistant brass materials suitable for fittings, valves, and decorative components in marine and industrial environments.",
  },

  {
    id: 69,
    name: "Cupronickel",
    image: "./images/Cupronickel/Cupronickel-Images.jpg",
    alt: "Non Ferrous Metals",
    category: "Non Ferrous Metals",
    description:
      "Cupronickel alloys offering superior resistance to seawater corrosion, widely used in shipbuilding, condensers, and desalination plants.",
  },

  // {
  //   id: 70,
  //   name: "Bronze",
  //   image: "./images/NonFerrous/bronze.jpg",
  //   alt: "Non Ferrous Metals",
  //   category: "Non Ferrous Metals",
  //   description:
  //     "Strong and wear-resistant bronze alloys including phosphorous and aluminium bronze, designed for bearings, bushings, and mechanical components.",
  // },
  // {
  //   id: 71,
  //   name: "Copper Tubes & Sections",
  //   image: "./images/NonFerrous/copper_tubes.jpg",
  //   alt: "Non Ferrous Metals",
  //   category: "Non Ferrous Metals",
  //   description:
  //     "Precision-engineered copper tubes, rods, and profiles with high strength and corrosion resistance for HVAC, electrical, and heat transfer systems.",
  // },

  // OTHER
  {
    id: 60,
    name: "Corten Steel Panels",
    image: "./images/OTHER/Corten Steel Panels/CORTEN PANEL.jpg",
    alt: "Custom Steel Solutions",
    category: "OTHER",
    description: "Durable weathering steel panels with protective finish",
  },
  {
    id: 61,
    name: "Stainless Steel T, U & C Profiles",
    image:
      "./images/OTHER/Stainless Steel 304 T, C & U Profile/stainless steel t patti.jpg",
    alt: "Custom Steel Solutions",
    category: "OTHER",
    description: "T, U, and C stainless steel profiles for versatile uses",
  },
  {
    id: 62,
    name: "Stainless Steel PVD Coated Color Profiles",
    image:
      "./images/OTHER/Colour PVD Profile/Stainless Steel 316 Decorative Color C Profile.jpg",
    alt: "Custom Steel Solutions",
    category: "OTHER",
    description: "PVD coated stainless steel color profiles for decorative use",
  },
  {
    id: 63,
    name: "Stainless Steel Omega Profiles",
    image: "./images/OTHER/Omega Profiles/Profile Omega.jpg",
    alt: "Custom Steel Solutions",
    category: "OTHER",
    description:
      "Omega shaped stainless steel profiles for architectural designs",
  },
  {
    id: 64,
    name: "Corten Steel Planters",
    image: "./images/OTHER/CORTEN PLANTERS/Corten Steel Square Planters.jpg",
    alt: "Custom Steel Solutions",
    category: "OTHER",
    description: "Durable corten steel planters for outdoor landscaping",
  },
];

let filteredProducts = [...productsFilter];
let currentFilter = "flanges";

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const loading = document.getElementById("loading");
const noResults = document.getElementById("noResults");
const totalProductsSpan = document.getElementById("totalProducts");
const visibleProductsSpan = document.getElementById("visibleProducts");

// Initialize
function init() {
  setTimeout(() => {
    loading.style.display = "none";

    const productId = getProductIdFromURL();

    if (productId) {
      // Apply filter from URL if available
      currentFilter = productId.toLowerCase();
      handleFilter(currentFilter, false); // false = don't trigger event.target issue
    } else {
      // Default view
      renderProducts();
    }

    animateStats();
  }, 1000);
}

function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("filter");
}
// Render productsFilter
function renderProducts() {
  productsGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    noResults.style.display = "block";
    visibleProductsSpan.textContent = "0";
    return;
  }

  noResults.style.display = "none";
  // visibleProductsSpan.textContent = filteredProducts.length;

  filteredProducts.forEach((product, index) => {
    const productElement = createProductElement(product, index);
    productsGrid.appendChild(productElement);
  });
}

// Create product element
function createProductElement(product, index) {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.style.animationDelay = `${index * 0.1}s`;

  div.innerHTML = `
                <img src="${product.image}" alt="${product.alt}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+'" />
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-category">${product.description}</div>
                    <button class="view-details-btn" onclick="viewDetails(${product.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            `;

  // Add click event for the entire product card
  div.addEventListener("click", () => {
    viewDetails(product.id);
  });

  return div;
}

// View product details
function viewDetails(productId) {
  const product = productsFilter.find((p) => p.id === productId);
  if (product) {
    // Create a modal or redirect to product details page

    //  window.location.href = `/product-details.html?product=product${productId}`;

    // alert(
    //   `Viewing details for: ${product.name}\n\n${product.description}\n\nThis would normally open a detailed product page.`
    // );
    // In a real application, you would redirect or open a modal:
    window.open(`product-details.html?product=${productId}`, "_self");
  }
}

// Search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  filteredProducts = productsFilter.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      // product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    const matchesFilter =
      currentFilter === "all" ||
      product.category.toLowerCase().includes(currentFilter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  renderProducts();
}

// Filter functionality
function handleFilter(filter, fromClick = true) {
  console.log("handleFilter==>", filter);
  currentFilter = filter.toLowerCase();

  // Update active button only if it came from a click
  if (fromClick) {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    const clickedBtn = [...filterButtons].find(
      (btn) => btn.dataset.filter.toLowerCase() === currentFilter
    );
    if (clickedBtn) clickedBtn.classList.add("active");
  }

  // Highlight active button
  filterButtons.forEach((btn) => {
    const btnFilter = btn.dataset.filter.toLowerCase();
    if (btnFilter === currentFilter) {
      btn.classList.add("active");
    } else if (currentFilter === "all" && btnFilter === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update URL without reloading (if clicked manually)
  if (fromClick) {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("filter", currentFilter);
    window.history.pushState({}, "", newUrl);
  }

  // Filter data
  filteredProducts = productsFilter.filter((product) =>
    currentFilter === "all"
      ? true
      : product.category.toLowerCase().includes(currentFilter)
  );

  renderProducts();
}

// Animate statistics
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const finalValue = parseInt(stat.textContent.replace("+", ""));
    if (!isNaN(finalValue)) {
      let currentValue = 0;
      const increment = Math.ceil(finalValue / 30);
      const isPlus = stat.textContent.includes("+");

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(timer);
        }
        stat.textContent = currentValue + (isPlus ? "+" : "");
      }, 50);
    }
  });
}

// Event listeners
searchInput.addEventListener("input", handleSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     handleFilter(e.target.dataset.filter);
//   });
// });

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selectedFilter = e.target.dataset.filter;
    handleFilter(selectedFilter, true);
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Initialize the gallery
document.addEventListener("DOMContentLoaded", init);

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".gallery-item");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    } else {
      card.style.transform = "";
    }
  });
});
