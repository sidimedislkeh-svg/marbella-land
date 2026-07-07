/**
 * APPETIZER - Digital Menu
 * ========================
 * Add your products here. Each product needs:
 *   - id:          unique number
 *   - category:    "drinks" | "snacks" | "dishes" | "desserts" | "breakfast" | "games"
 *   - image:       filename inside /images/ folder (e.g. "latte.webp")
 *   - price:       number (in your local currency)
 *   - ar: { name, description }   — Arabic text
 *   - fr: { name, description }   — French text
 *   - en: { name, description }   — English text
 *
 * Example of adding a new item:
 * {
 *   id: 20,
 *   category: "drinks",
 *   image: "mango-juice.webp",
 *   price: 35,
 *   ar: { name: "عصير مانجو", description: "عصير مانجو طازج بارد" },
 *   fr: { name: "Jus de mangue", description: "Jus de mangue fraîche et froide" },
 *   en: { name: "Mango Juice", description: "Fresh cold mango juice" }
 * },
 */

const CURRENCY = "MRU"; // Change to your currency symbol e.g. "DH", "SAR", "$"

const products = [

  // ─── DRINKS / مشروبات ───────────────────────────────────────────────────────
// ─── DRINKS / مشروبات ─────────────────────────────────────────

{
  id: 1,
  category: "drinks",
  image: "americano.webp",
  price: 80,

  ar: {
    name: "قهوة أمريكانو",
    description: "قهوة أمريكانو غنية بنكهة متوازنة وقوام خفيف."
  },

  fr: {
    name: "Café Américano",
    description: "Café Américano au goût équilibré et à la texture légère."
  },

  en: {
    name: "Americano Coffee",
    description: "Smooth and balanced Americano coffee with a rich aroma."
  }
},

{
  id: 2,
  category: "drinks",
  image: "espresso.webp",
  price: 80,

  ar: {
    name: "قهوة إسبريسو",
    description: "إسبريسو إيطالي مركز بنكهة قوية وغنية."
  },

  fr: {
    name: "Espresso",
    description: "Espresso italien intense au goût riche et corsé."
  },

  en: {
    name: "Espresso",
    description: "Strong Italian-style espresso with a rich, bold flavor."
  }
},

{
  id: 3,
  category: "drinks",
  image: "ice-coffee.webp",
  price: 120,

  ar: {
    name: "قهوة مثلجة",
    description: "قهوة باردة منعشة تقدم مع الثلج."
  },

  fr: {
    name: "Café Glacé",
    description: "Café froid rafraîchissant servi avec des glaçons."
  },

  en: {
    name: "Iced Coffee",
    description: "Refreshing chilled coffee served over ice."
  }
},

{
  id: 4,
  category: "drinks",
  image: "hot-chocolate.webp",
  price: 100,

  ar: {
    name: "هوت شوكليت",
    description: "مشروب شوكولاتة ساخن كريمي ولذيذ."
  },

  fr: {
    name: "Chocolat Chaud",
    description: "Boisson au chocolat chaude, onctueuse et gourmande."
  },

  en: {
    name: "Hot Chocolate",
    description: "Rich and creamy hot chocolate."
  }
},

{
  id: 5,
  category: "drinks",
  image: "the-lipton.webp",
  price: 70,

  ar: {
    name: "شاي ليبتون",
    description: "شاي ليبتون الساخن بنكهة كلاسيكية منعشة."
  },

  fr: {
    name: "Thé Lipton",
    description: "Thé Lipton chaud au goût classique et réconfortant."
  },

  en: {
    name: "Lipton Tea",
    description: "Classic hot Lipton tea with a smooth refreshing taste."
  }
},

  // ─── SNACKS / سناك ──────────────────────────────────────────────────────────
 // ─── SNACKS / سناك ─────────────────────────────────────────

{
  id: 6,
  category: "snacks",
  image: "tacos-poulet.webp",
  price: 150,

  ar: {
    name: "تاكوس دجاج",
    description: "تاكوس محشو بقطع الدجاج الطرية مع الجبن والبطاطس المقلية والصلصة الخاصة."
  },

  fr: {
    name: "Tacos Poulet",
    description: "Tacos garni de poulet tendre, fromage, frites et sauce spéciale."
  },

  en: {
    name: "Chicken Tacos",
    description: "Tacos filled with tender chicken, cheese, fries and special sauce."
  }
},

{
  id: 7,
  category: "snacks",
  image: "tacos-viande.webp",
  price: 150,

  ar: {
    name: "تاكوس لحم",
    description: "تاكوس محشو بلحم طري مع الجبن والبطاطس المقلية والصلصة الخاصة."
  },

  fr: {
    name: "Tacos Viande",
    description: "Tacos garni de viande tendre, fromage, frites et sauce spéciale."
  },

  en: {
    name: "Beef Tacos",
    description: "Tacos filled with tender beef, cheese, fries and special sauce."
  }
},

{
  id: 8,
  category: "snacks",
  image: "tacos-crispy.webp",
  price: 200,

  ar: {
    name: "تاكوس كريسبي",
    description: "تاكوس مقرمش مع الجبن والبطاطس المقلية والصلصة الخاصة."
  },

  fr: {
    name: "Tacos Crispy",
    description: "Tacos croustillant avec fromage, frites et sauce spéciale."
  },

  en: {
    name: "Crispy Tacos",
    description: "Crispy tacos with cheese, fries and special sauce."
  }
},

{
  id: 9,
  category: "snacks",
  image: "burger.webp",
  price: 150,

  ar: {
    name: "برغر",
    description: "برغر لحم مشوي مع الخس والطماطم والجبن والصلصة الخاصة."
  },

  fr: {
    name: "Burger",
    description: "Burger de bœuf grillé avec laitue, tomate, fromage et sauce spéciale."
  },

  en: {
    name: "Beef Burger",
    description: "Grilled beef burger with lettuce, tomato, cheese and special sauce."
  }
},

{
  id: 10,
  category: "snacks",
  image: "chicken-burger.webp",
  price: 180,

  ar: {
    name: "برغر دجاج",
    description: "برغر دجاج مقرمش مع الخس والطماطم والجبن والصلصة الخاصة."
  },

  fr: {
    name: "Chicken Burger",
    description: "Burger de poulet croustillant avec laitue, tomate, fromage et sauce spéciale."
  },

  en: {
    name: "Chicken Burger",
    description: "Crispy chicken burger with lettuce, tomato, cheese and special sauce."
  }
},

  // ─── DISHES / الأطباق ────────────────────────────────────────────────────────
 // ─── DISHES / الأطباق ───────────────────────────────────────

{
  id: 11,
  category: "dishes",
  image: "chicken-nuggets.webp",
  price: 350,

  ar: {
    name: "قطع دجاج ناجتس",
    description: "قطع دجاج مقرمشة تقدم مع البطاطس المقلية والصلصات."
  },

  fr: {
    name: "Chicken Nuggets",
    description: "Morceaux de poulet croustillants servis avec des frites et des sauces."
  },

  en: {
    name: "Chicken Nuggets",
    description: "Crispy chicken nuggets served with fries and dipping sauces."
  }
},

{
  id: 12,
  category: "dishes",
  image: "filet-poulet-grille.webp",
  price: 400,

  ar: {
    name: "فيليه دجاج مشوي",
    description: "صدر دجاج مشوي متبل يقدم مع البطاطس وسلطة طازجة."
  },

  fr: {
    name: "Filet de Poulet Grillé",
    description: "Filet de poulet grillé et mariné, servi avec des frites et une salade fraîche."
  },

  en: {
    name: "Grilled Chicken Fillet",
    description: "Marinated grilled chicken fillet served with fries and fresh salad."
  }
},

{
  id: 13,
  category: "dishes",
  image: "spaghetti-bolognaise.webp",
  price: 350,

  ar: {
    name: "سباغيتي بولونيز",
    description: "سباغيتي بصلصة بولونيز الغنية باللحم والطماطم."
  },

  fr: {
    name: "Spaghetti Bolognaise",
    description: "Spaghetti accompagnés d'une sauce bolognaise riche à la viande et aux tomates."
  },

  en: {
    name: "Spaghetti Bolognese",
    description: "Spaghetti served with a rich meat and tomato Bolognese sauce."
  }
},

  // ─── DESSERTS / تحلية ────────────────────────────────────────────────────────
// ─── DESSERTS / التحلية ─────────────────────────────────────

{
  id: 14,
  category: "desserts",
  image: "cheesecake.webp",
  price: 150,

  ar: {
    name: "تشيز كيك (حسب الاختيار)",
    description: "تشيز كيك كريمي متوفر بعدة نكهات حسب اختيارك."
  },

  fr: {
    name: "Cheesecake au Choix",
    description: "Cheesecake onctueux disponible en plusieurs saveurs au choix."
  },

  en: {
    name: "Cheesecake of Your Choice",
    description: "Creamy cheesecake available in a variety of flavors of your choice."
  }
},

{
  id: 15,
  category: "desserts",
  image: "waffle-nutella.webp",
  price: 150,

  ar: {
    name: "وافل بالنوتيلا",
    description: "وافل طازج يقدم مع نوتيلا الغنية."
  },

  fr: {
    name: "Gaufre au Nutella",
    description: "Gaufre fraîche servie avec une généreuse couche de Nutella."
  },

  en: {
    name: "Nutella Waffle",
    description: "Freshly baked waffle topped with rich Nutella."
  }
},

{
  id: 16,
  category: "desserts",
  image: "crepe-nutella.webp",
  price: 150,

  ar: {
    name: "كريب بالنوتيلا",
    description: "كريب رقيق محشو بنوتيلا اللذيذة."
  },

  fr: {
    name: "Crêpe au Nutella",
    description: "Crêpe fine garnie de délicieux Nutella."
  },

  en: {
    name: "Nutella Crêpe",
    description: "Thin crêpe filled with delicious Nutella."
  }
},

  // ─── BREAKFAST / فطور صباح ────────────────────────────────────────────────────
  {
    id: 13,
    category: "breakfast",
    image: "full-breakfast.webp",
    price: 70,
    ar: { name: "فطور كامل", description: "بيض مقلي، خبز مشوي، جبن، زيتون وعصير برتقال" },
    fr: { name: "Petit déjeuner complet", description: "Œufs frits, pain grillé, fromage, olives et jus d'orange" },
    en: { name: "Full Breakfast", description: "Fried eggs, toast, cheese, olives and orange juice" }
  },
 

  // ─── games / شيشة ───────────────────────────────────────────────────────────
  {
    id: 16,
    category: "games",
    image: "shisha-mint.webp",
    price: 80,
    ar: { name: "شيشة نعناع", description: "شيشة فاخرة بنكهة النعناع المنعش" },
    fr: { name: "Chicha menthe", description: "Chicha premium à la menthe fraîche et rafraîchissante" },
    en: { name: "Mint Shisha", description: "Premium shisha with fresh and refreshing mint flavor" }
  },
 

];