// ============================================================
// CROWNLESS — sample starter catalogue (placeholder products)
// Prices are in naira (NGN). Photos are free stock photos from Pexels (pexels.com),
// matched to each sample product — swap in real product photos later.
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
    image: "https://images.pexels.com/photos/26744719/pexels-photo-26744719/free-photo-of-woman-in-black-dress-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/4045705/pexels-photo-4045705.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/19534321/pexels-photo-19534321/free-photo-of-model-in-a-blue-skirt-and-high-heeled-boots-standing-on-the-stairs.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/19804504/pexels-photo-19804504/free-photo-of-young-woman-in-a-satin-dress-posing-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/39598425/pexels-photo-39598425/free-photo-of-portrait-of-smiling-woman-in-denim-jacket-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/29504841/pexels-photo-29504841/free-photo-of-stylish-woman-posing-in-denim-against-white-wooden-background.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/7236461/pexels-photo-7236461.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/18393526/pexels-photo-18393526/free-photo-of-young-man-posing-in-white-t-shirt-and-beige-cargo-sweatpants.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/6311150/pexels-photo-6311150.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/8601543/pexels-photo-8601543.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/10005224/pexels-photo-10005224.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/8498700/pexels-photo-8498700.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
  }
];
