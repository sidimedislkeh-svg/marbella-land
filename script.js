/**
 * MARBELLA LAND — script.js
 * Reads BRAND config, applies CSS vars, handles i18n + product rendering.
 * Do not edit for branding — use brand.js instead.
 */

// ── Language Config ────────────────────────────────────────
const LANGS = {
  ar: {
    dir: "rtl",
    labels: {
      drinks:    "مشروبات",
      snacks:    "سناك",
      dishes:    "الأطباق",
      desserts:  "تحلية",
      breakfast: "فطور صباح",
      games:    "ألعاب",
      back:      "العودة",
      empty:     "لا توجد منتجات في هذا القسم حتى الآن."
    }
  },
  fr: {
    dir: "ltr",
    labels: {
      drinks:    "Boissons",
      snacks:    "Snacks",
      dishes:    "Plats",
      desserts:  "Desserts",
      breakfast: "Petit déjeuner",
      games:    "jeux",
      back:      "Retour",
      empty:     "Aucun produit dans cette catégorie pour l'instant."
    }
  },
  en: {
    dir: "ltr",
    labels: {
      drinks:    "Drinks",
      snacks:    "Snacks",
      dishes:    "Dishes",
      desserts:  "Desserts",
      breakfast: "Breakfast",
      games:    "games",
      back:      "Back",
      empty:     "No products in this category yet."
    }
  }
};

const CAT_ORDER = ["snacks","drinks","games","desserts","dishes","breakfast"];
const CAT_PAGES = {
  drinks:    "drinks.html",
  snacks:    "snacks.html",
  dishes:    "dishes.html",
  desserts:  "desserts.html",
  breakfast: "breakfast.html",
   games:    "games.html"
};
const CAT_COVERS = {
  drinks:    "cover-drinks.webp",
  snacks:    "cover-snacks.webp",
  dishes:    "cover-dishes.webp",
  desserts:  "cover-desserts.webp",
  breakfast: "cover-breakfast.webp",
   games:    "cover-games.webp"
};
const CAT_ICONS = {
  drinks:    "☕",
  snacks:    "🍟",
  dishes:    "🍽️",
  desserts:  "🎂",
  breakfast: "🌅",
  games:    "🎮"
};

// ── State ──────────────────────────────────────────────────
let currentLang = localStorage.getItem("ml_lang") || "ar";

// ── Boot ───────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyBrandTokens();
  applyLang(currentLang);
  bindLangButtons();

  const grid = document.getElementById("categories-grid");
  if (grid) renderCategoryGrid(grid);

  const productsGrid = document.getElementById("products-grid");
  if (productsGrid) renderProducts(productsGrid, productsGrid.dataset.category);

  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      history.length > 1 ? history.back() : (window.location.href = "index.html");
    });
  }

  // Hero background
  const heroBg = document.getElementById("hero-bg");
  if (heroBg && typeof BRAND !== "undefined") {
    const img = new Image();
    img.onload = () => { heroBg.style.backgroundImage = `url('${BRAND.hero.image}')`; };
    img.onerror = () => { heroBg.style.background = BRAND.hero.fallbackGradient; };
    img.src = BRAND.hero.image;
  }

  // Brand name + tagline
  renderBrandText();
  renderLogoMark();
});

// ── Apply brand.js CSS custom properties ──────────────────
function applyBrandTokens() {
  if (typeof BRAND === "undefined") return;
  const r = document.documentElement.style;
  const c = BRAND.colors;
  r.setProperty("--bg",           c.bg);
  r.setProperty("--bg-card",      c.bgCard);
  r.setProperty("--bg-card-hover",c.bgCardHover);
  r.setProperty("--surface",      c.surface);
  r.setProperty("--border",       c.border);
  r.setProperty("--border-gold",  c.borderGold);
  r.setProperty("--gold",         c.gold);
  r.setProperty("--gold-light",   c.goldLight);
  r.setProperty("--gold-dim",     c.goldDim);
  r.setProperty("--text",         c.text);
  r.setProperty("--text-muted",   c.textMuted);
  r.setProperty("--text-dark",    c.textDark);
  r.setProperty("--overlay",      c.overlay);
  if (BRAND.fonts) {
    r.setProperty("--font-display", BRAND.fonts.display);
    r.setProperty("--font-ar",      BRAND.fonts.arabic);
    r.setProperty("--font-body",    BRAND.fonts.body);
  }
}

// ── Render brand name in all [data-brand] slots ────────────
function renderBrandText() {
  if (typeof BRAND === "undefined") return;
  document.querySelectorAll("[data-brand='name']").forEach(el => {
    el.textContent = BRAND.name;
  });
  document.querySelectorAll("[data-brand='tagline']").forEach(el => {
    el.textContent = BRAND.tagline[currentLang] || BRAND.tagline.en;
  });
  document.querySelectorAll("[data-brand='year']").forEach(el => {
    el.textContent = BRAND.footerYear || "2025";
  });
  // Page title tag
  if (BRAND.name) document.title = document.title.replace("APPETIZER", BRAND.name);
}

// ── Render logo mark (monogram or image) ──────────────────
function renderLogoMark() {
  if (typeof BRAND === "undefined") return;
  const slot = document.getElementById("logo-slot");
  if (!slot) return;

  if (BRAND.logoType === "image") {
    slot.innerHTML = `
      <div class="logo-img-circle">
        <img src="${BRAND.logoImage}" alt="${BRAND.name}"
          onerror="this.closest('.logo-img-circle').outerHTML=monogramHTML()">
      </div>`;
  } else {
    slot.innerHTML = monogramHTML();
  }
}

function monogramHTML() {
  const letter = (typeof BRAND !== "undefined") ? BRAND.logoMonogram : "M";
  return `<div class="monogram-wrap"><span class="monogram-letter">${letter}</span></div>`;
}

// ── Language ───────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("ml_lang", lang);
  const config = LANGS[lang] || LANGS.ar;
  document.documentElement.lang = lang;
  document.body.dir = config.dir;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (config.labels[key]) el.textContent = config.labels[key];
  });

  renderBrandText(); // re-render tagline in correct language

  const grid = document.getElementById("categories-grid");
  if (grid) renderCategoryGrid(grid);

  const pg = document.getElementById("products-grid");
  if (pg) renderProducts(pg, pg.dataset.category);

  const backLabel = document.querySelector(".back-label");
  if (backLabel) backLabel.textContent = config.labels.back;
}

function bindLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

// ── Category Grid ──────────────────────────────────────────
function renderCategoryGrid(container) {
  const labels = LANGS[currentLang].labels;
  container.innerHTML = CAT_ORDER.map(cat => {
    const name  = labels[cat];
    const href  = CAT_PAGES[cat];
    const cover = CAT_COVERS[cat];
    const icon  = CAT_ICONS[cat];
    return `
      <a class="cat-card" href="${href}" aria-label="${name}">
        <div class="cat-img-wrap">
          <img src="${cover}" alt="${name}" loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'cat-img-placeholder\\'>${icon}</div>'">
        </div>
        <div class="cat-footer">
          <span class="cat-arrow" aria-hidden="true">→</span>
          <span class="cat-name">${name}</span>
          <span class="cat-icon-emoji" aria-hidden="true">${icon}</span>
        </div>
      </a>`;
  }).join("");
}

// ── Product Grid ───────────────────────────────────────────
function renderProducts(container, category) {
  if (typeof products === "undefined") {
    container.innerHTML = `<p class="empty-state">products.js not loaded.</p>`;
    return;
  }
  const filtered = products.filter(p => p.category === category);
  const labels   = LANGS[currentLang].labels;

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>${labels.empty}</p>
      </div>`;
    return;
  }

  const currency = (typeof CURRENCY !== "undefined") ? CURRENCY : (BRAND && BRAND.currency) || "";

  container.innerHTML = filtered.map(p => {
    const info = p[currentLang] || p.en;
    const img  = p.image ? `${p.image}` : "";
    const icon = CAT_ICONS[p.category] || "🍴";
    return `
      <div class="product-card">
        <div class="product-img-wrap">
          ${img
            ? `<img src="${img}" alt="${info.name}" loading="lazy"
                onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder\\'>${icon}</div>'">`
            : `<div class="product-img-placeholder">${icon}</div>`}
        </div>
        <div class="product-body">
          <p class="product-name">${info.name}</p>
          <p class="product-desc">${info.description}</p>
          <span class="product-price">${p.price} ${currency}</span>
        </div>
      </div>`;
  }).join("");
}