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

{
  id: 39,
  category: "snacks",
  image: "double-burger.webp",
  price: 180,

  ar: {
    name: "دبل برغر",
    description: "برغر بلحمتي لحم مع الجبن والصوص."
  },

  fr: {
    name: "Double Burger",
    description: "Deux steaks de bœuf avec fromage et sauce."
  },

  en: {
    name: "Double Burger",
    description: "Double beef burger with cheese and sauce."
  }
},

{
  id: 40,
  category: "snacks",
  image: "double-chicken-burger.webp",
  price: 180,

  ar: {
    name: "دبل برغر دجاج",
    description: "برغر بقطعتي دجاج مقرمش مع الجبن والصوص."
  },

  fr: {
    name: "Double Chicken Burger",
    description: "Double filet de poulet croustillant avec fromage et sauce."
  },

  en: {
    name: "Double Chicken Burger",
    description: "Double crispy chicken burger with cheese and sauce."
  }
},
{
  id: 37,
  category: "snacks",
  image: "pain-corne-viande.webp",
  price: 220,

  ar: {
    name: "بان كورنيه باللحم",
    description: "خبز محشو باللحم المشوي والخضار مع الصوص."
  },

  fr: {
    name: "Pain Corné Viande",
    description: "Pain garni de viande grillée, légumes et sauce."
  },

  en: {
    name: "Beef Pain Corné",
    description: "Flatbread filled with grilled beef, vegetables and sauce."
  }
},

{
  id: 38,
  category: "snacks",
  image: "pain-corne-poulet.webp",
  price: 200,

  ar: {
    name: "بان كورنيه بالدجاج",
    description: "خبز محشو بالدجاج المشوي والخضار مع الصوص."
  },

  fr: {
    name: "Pain Corné Poulet",
    description: "Pain garni de poulet grillé, légumes et sauce."
  },

  en: {
    name: "Chicken Pain Corné",
    description: "Flatbread filled with grilled chicken, vegetables and sauce."
  }
},
{
  id: 31,
  category: "snacks",
  image: "pizza-fruits-de-mer.webp",
  price: 250,

  ar: {
    name: "بيتزا فواكه البحر",
    description: "بيتزا غنية بالروبيان والكالامار والأخطبوط مع الجبن."
  },

  fr: {
    name: "Pizza Fruits de Mer",
    description: "Pizza garnie de crevettes, calamars, poulpe et fromage."
  },

  en: {
    name: "Seafood Pizza",
    description: "Pizza topped with shrimp, calamari, octopus and cheese."
  }
},

{
  id: 32,
  category: "snacks",
  image: "pizza-crevettes.webp",
  price: 230,

  ar: {
    name: "بيتزا الروبيان",
    description: "بيتزا بالروبيان الطازج مع الجبن والفلفل الملون."
  },

  fr: {
    name: "Pizza Crevettes",
    description: "Pizza aux crevettes, fromage et poivrons."
  },

  en: {
    name: "Shrimp Pizza",
    description: "Pizza with shrimp, cheese and bell peppers."
  }
},

{
  id: 33,
  category: "snacks",
  image: "pizza-poulet.webp",
  price: 230,

  ar: {
    name: "بيتزا الدجاج",
    description: "بيتزا بالدجاج المشوي مع الجبن والخضار."
  },

  fr: {
    name: "Pizza Poulet",
    description: "Pizza au poulet grillé, fromage et légumes."
  },

  en: {
    name: "Chicken Pizza",
    description: "Pizza with grilled chicken, cheese and vegetables."
  }
},

{
  id: 34,
  category: "snacks",
  image: "pizza-viande.webp",
  price: 250,

  ar: {
    name: "بيتزا اللحم",
    description: "بيتزا باللحم المفروم مع الجبن والخضار."
  },

  fr: {
    name: "Pizza Viande",
    description: "Pizza à la viande hachée, fromage et légumes."
  },

  en: {
    name: "Meat Pizza",
    description: "Pizza with minced beef, cheese and vegetables."
  }
},

{
  id: 35,
  category: "snacks",
  image: "pizza-margarita.webp",
  price: 180,

  ar: {
    name: "بيتزا مارغريتا",
    description: "بيتزا كلاسيكية بصلصة الطماطم وجبن الموزاريلا."
  },

  fr: {
    name: "Pizza Margherita",
    description: "Pizza classique à la sauce tomate et mozzarella."
  },

  en: {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce and mozzarella cheese."
  }
},

{
  id: 36,
  category: "snacks",
  image: "pizza-thon.webp",
  price: 200,

  ar: {
    name: "بيتزا التونة",
    description: "بيتزا بالتونة والجبن والزيتون والفلفل."
  },

  fr: {
    name: "Pizza Thon",
    description: "Pizza au thon, fromage, olives et poivrons."
  },

  en: {
    name: "Tuna Pizza",
    description: "Pizza with tuna, cheese, olives and bell peppers."
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
  },
 
  id: 17,
  category: "dishes",
  image: "cordon-bleu.webp",
  price: 350,

  ar: {
    name: "كوردون بلو",
    description: "صدر دجاج محشو بالجبن واللحم المدخن، مقرمش من الخارج وطري من الداخل."
  },

  fr: {
    name: "Cordon Bleu",
    description: "Escalope de poulet farcie au fromage et jambon, croustillante à l'extérieur et fondante à l'intérieur."
  },

  en: {
    name: "Cordon Bleu",
    description: "Chicken breast stuffed with cheese and ham, crispy outside and tender inside."
  }
},

{
  id: 18,
  category: "dishes",
  image: "brochette-poulet.webp",
  price: 350,

  ar: {
    name: "أسياخ دجاج",
    description: "أسياخ دجاج مشوية ومتّبلة، تقدم بنكهة غنية ولمسة طازجة."
  },

  fr: {
    name: "Brochette de Poulet",
    description: "Brochettes de poulet grillées et marinées, servies avec une touche fraîche."
  },

  en: {
    name: "Chicken Skewers",
    description: "Grilled marinated chicken skewers served with a fresh touch."
  }
},

{
  id: 19,
  category: "dishes",
  image: "emince-poulet-creme-champignon.webp",
  price: 400,

  ar: {
    name: "إمينسي دجاج بالكريمة والفطر",
    description: "شرائح دجاج طرية مطهوة بصلصة كريمة الفطر الغنية."
  },

  fr: {
    name: "Émincé de Poulet à la Crème Champignon",
    description: "Émincé de poulet tendre dans une sauce crémeuse aux champignons."
  },

  en: {
    name: "Creamy Mushroom Chicken",
    description: "Tender sliced chicken served in a rich creamy mushroom sauce."
  }
},

{
  id: 20,
  category: "dishes",
  image: "filet-poisson.webp",
  price: 400,

  ar: {
    name: "فيليه سمك",
    description: "فيليه سمك مشوي يقدم بنكهة خفيفة مع الليمون والخضار."
  },

  fr: {
    name: "Filet de Poisson",
    description: "Filet de poisson grillé, servi avec une touche de citron et des légumes."
  },

  en: {
    name: "Fish Fillet",
    description: "Grilled fish fillet served with lemon and vegetables."
  }
},

{
  id: 21,
  category: "dishes",
  image: "plat-crevette.webp",
  price: 450,

  ar: {
    name: "طبق روبيان",
    description: "روبيان مطهو بتتبيلة لذيذة مع الليمون والأعشاب."
  },

  fr: {
    name: "Plat Crevette",
    description: "Crevettes savoureuses préparées avec citron, herbes et assaisonnement."
  },

  en: {
    name: "Shrimp Plate",
    description: "Flavorful shrimp prepared with lemon, herbs and seasoning."
  }
},

{
  id: 22,
  category: "dishes",
  image: "salade-mixte.webp",
  price: 300,

  ar: {
    name: "سلطة مشكلة",
    description: "سلطة طازجة مشكلة بالخضار، البيض، التونة والزيتون."
  },

  fr: {
    name: "Salade Mixte",
    description: "Salade fraîche composée de légumes, œufs, thon et olives."
  },

  en: {
    name: "Mixed Salad",
    description: "Fresh mixed salad with vegetables, eggs, tuna and olives."
  }
},
{
  id: 23,
  category: "dishes",
  image: "poisson-grille.webp",
  price: 500,

  ar: {
    name: "سمك مشوي",
    description: "سمك مشوي بتتبيلة خفيفة، يقدم مع الليمون والخضار المشوية."
  },

  fr: {
    name: "Poisson Grillé",
    description: "Poisson grillé avec une marinade légère, servi avec citron et légumes grillés."
  },

  en: {
    name: "Grilled Fish",
    description: "Grilled fish with a light marinade, served with lemon and grilled vegetables."
  }
},

{
  id: 24,
  category: "dishes",
  image: "plat-pecheur.webp",
  price: 650,

  ar: {
    name: "طبق الصياد",
    description: "تشكيلة بحرية غنية من السمك والروبيان والكالامار وبلح البحر."
  },

  fr: {
    name: "Plat Pêcheur",
    description: "Assortiment de fruits de mer avec poisson, crevettes, calamars et moules."
  },

  en: {
    name: "Fisherman's Plate",
    description: "Rich seafood platter with fish, shrimp, calamari and mussels."
  }
},

{
  id: 25,
  category: "dishes",
  image: "salade-fruits-de-mer.webp",
  price: 450,

  ar: {
    name: "سلطة فواكه البحر",
    description: "سلطة طازجة مع تشكيلة من فواكه البحر والخضار."
  },

  fr: {
    name: "Salade Fruits de Mer",
    description: "Salade fraîche garnie d'un assortiment de fruits de mer et légumes."
  },

  en: {
    name: "Seafood Salad",
    description: "Fresh salad topped with assorted seafood and vegetables."
  }
},

{
  id: 26,
  category: "dishes",
  image: "spaghetti-fruit-de-mer.webp",
  price: 450,

  ar: {
    name: "سباغيتي فواكه البحر",
    description: "سباغيتي بصلصة طماطم خفيفة مع الروبيان والكالامار."
  },

  fr: {
    name: "Spaghetti Fruits de Mer",
    description: "Spaghetti à la sauce tomate légère avec crevettes et calamars."
  },

  en: {
    name: "Seafood Spaghetti",
    description: "Spaghetti with light tomato sauce, shrimp and calamari."
  }
},

{
  id: 27,
  category: "dishes",
  image: "carbonara-fruit-de-mer.webp",
  price: 480,

  ar: {
    name: "كاربونارا فواكه البحر",
    description: "باستا كريمية مع تشكيلة من فواكه البحر وجبن مبشور."
  },

  fr: {
    name: "Carbonara Fruits de Mer",
    description: "Pâtes crémeuses aux fruits de mer avec fromage râpé."
  },

  en: {
    name: "Seafood Carbonara",
    description: "Creamy pasta with assorted seafood and grated cheese."
  }
},

{
  id: 28,
  category: "dishes",
  image: "carbonara-poulet.webp",
  price: 430,

  ar: {
    name: "كاربونارا دجاج",
    description: "باستا كريمية مع قطع دجاج طرية وجبن مبشور."
  },

  fr: {
    name: "Carbonara Poulet",
    description: "Pâtes crémeuses avec morceaux de poulet tendre et fromage râpé."
  },

  en: {
    name: "Chicken Carbonara",
    description: "Creamy pasta with tender chicken pieces and grated cheese."
  }
},

{
  id: 29,
  category: "dishes",
  image: "calamar-pane.webp",
  price: 490,

  ar: {
    name: "طبق كالامار بانيه",
    description: "حلقات كالامار مقرمشة تقدم مع صلصة كريمية وليمون."
  },

  fr: {
    name: "Plat Calamar Pané",
    description: "Anneaux de calamar croustillants servis avec sauce crémeuse et citron."
  },

  en: {
    name: "Breaded Calamari Plate",
    description: "Crispy calamari rings served with creamy sauce and lemon."
  }
},

{
  id: 30,
  category: "dishes",
  image: "crevettes-pane.webp",
  price: 500,

  ar: {
    name: "طبق روبيان بانيه",
    description: "روبيان مقرمش يقدم مع صلصة كريمية وليمون."
  },

  fr: {
    name: "Plat Crevettes Panées",
    description: "Crevettes croustillantes servies avec sauce crémeuse et citron."
  },

  en: {
    name: "Breaded Shrimp Plate",
    description: "Crispy breaded shrimp served with creamy sauce and lemon."
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

 

  // ─── games / ألعاب ───────────────────────────────────────────────────────────
 {
  id: 16,
  category: "games",
  image: "cover-games.webp",
  price: 200,

  ar: {
    name: "منطقة ألعاب الأطفال",
    description: "200 أوقية للطفل"
  },

  fr: {
    name: "Parc de jeux pour enfants",
    description: "200 MRU par enfant"
  },

  en: {
    name: "Kids Play Area",
    description: "200 MRU per child"
  }
},
 

];
