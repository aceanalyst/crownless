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
    image: "https://images.pexels.com/photos/27251855/pexels-photo-27251855/free-photo-of-a-woman-with-red-hair-posing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/17781161/pexels-photo-17781161/free-photo-of-woman-posing-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/1084641/pexels-photo-1084641.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/37728713/pexels-photo-37728713/free-photo-of-elegant-woman-in-white-satin-dress-posing.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/28185911/pexels-photo-28185911/free-photo-of-a-man-with-a-backpack-and-a-t-shirt-with-a-tiger-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/19751093/pexels-photo-19751093/free-photo-of-model-in-black-cargo-pants-and-a-graphite-shirt-with-white-buttons.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/30257616/pexels-photo-30257616/free-photo-of-casual-urban-fashion-in-concrete-setting.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/11558500/pexels-photo-11558500.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/16430970/pexels-photo-16430970/free-photo-of-a-man-posing-in-a-winter-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
    image: "https://images.pexels.com/photos/8217573/pexels-photo-8217573.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
  }
];
