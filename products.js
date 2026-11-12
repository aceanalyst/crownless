// ============================================================
// CROWNLESS — sample starter catalogue (placeholder products)
// Prices are in naira (NGN). Photos are styled text placeholders
// from placehold.co — swap in real product photos later.
// Fields: id, name, gender, category, price, oldPrice (sale only),
//         sizes, colours, badge ("New" / "Sale" / null), image
// ============================================================
const PRODUCTS = [
  // ---------- WOMEN ----------
  {
    id: "w1",
    name: "Bodycon Midi Dress",
    gender: "women",
    category: "Dresses",
    price: 38500,
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["Black", "Red", "Emerald"],
    badge: "New",
    image: "https://placehold.co/600x800/111111/ffffff?text=Bodycon+Midi+Dress"
  },
  {
    id: "w2",
    name: "High-Waist Skinny Jeans",
    gender: "women",
    category: "Jeans",
    price: 28500,
    sizes: ["26", "28", "30", "32", "34"],
    colours: ["Blue", "Black", "Light Wash"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=High-Waist+Skinny+Jeans"
  },
  {
    id: "w3",
    name: "2-Piece Skirt Set",
    gender: "women",
    category: "Sets",
    price: 32000,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Black", "Brown", "Cream"],
    badge: "New",
    image: "https://placehold.co/600x800/111111/ffffff?text=2-Piece+Skirt+Set"
  },
  {
    id: "w4",
    name: "Satin Slip Dress",
    gender: "women",
    category: "Dresses",
    price: 30000,
    sizes: ["XS", "S", "M", "L"],
    colours: ["Champagne", "Black", "Wine"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=Satin+Slip+Dress"
  },
  {
    id: "w5",
    name: "Cropped Denim Jacket",
    gender: "women",
    category: "Jackets",
    price: 42000,
    oldPrice: 52000,
    sizes: ["S", "M", "L", "XL"],
    colours: ["Blue", "Black"],
    badge: "Sale",
    image: "https://placehold.co/600x800/111111/ffffff?text=Cropped+Denim+Jacket"
  },
  {
    id: "w6",
    name: "Ribbed Bodysuit",
    gender: "women",
    category: "Tops",
    price: 18500,
    sizes: ["XS", "S", "M", "L", "XL"],
    colours: ["White", "Black", "Nude"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=Ribbed+Bodysuit"
  },

  // ---------- MEN ----------
  {
    id: "m1",
    name: "Oversized Graphic Tee",
    gender: "men",
    category: "Tees",
    price: 22500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Black", "White", "Grey"],
    badge: "New",
    image: "https://placehold.co/600x800/111111/ffffff?text=Oversized+Graphic+Tee"
  },
  {
    id: "m2",
    name: "Cargo Pants",
    gender: "men",
    category: "Pants",
    price: 36000,
    sizes: ["30", "32", "34", "36", "38"],
    colours: ["Black", "Khaki", "Olive"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=Cargo+Pants"
  },
  {
    id: "m3",
    name: "Hoodie + Jogger Set",
    gender: "men",
    category: "Sets",
    price: 45000,
    sizes: ["M", "L", "XL", "XXL"],
    colours: ["Black", "Grey", "Navy"],
    badge: "New",
    image: "https://placehold.co/600x800/111111/ffffff?text=Hoodie+%2B+Jogger+Set"
  },
  {
    id: "m4",
    name: "Distressed Denim Jeans",
    gender: "men",
    category: "Jeans",
    price: 38000,
    sizes: ["30", "32", "34", "36", "38"],
    colours: ["Blue", "Black"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=Distressed+Denim+Jeans"
  },
  {
    id: "m5",
    name: "Puffer Jacket",
    gender: "men",
    category: "Jackets",
    price: 65000,
    oldPrice: 78000,
    sizes: ["M", "L", "XL", "XXL"],
    colours: ["Black", "Red"],
    badge: "Sale",
    image: "https://placehold.co/600x800/111111/ffffff?text=Puffer+Jacket"
  },
  {
    id: "m6",
    name: "Basic Crew-Neck Tee (3-Pack)",
    gender: "men",
    category: "Tees",
    price: 27500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Mixed", "White", "Black"],
    badge: null,
    image: "https://placehold.co/600x800/111111/ffffff?text=Crew-Neck+Tee+3-Pack"
  }
];
