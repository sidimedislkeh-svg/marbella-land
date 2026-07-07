/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         BRAND CONFIGURATION — brand.js               ║
 * ║  Change everything here. Touch nothing else.         ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * To white-label this template for a new client:
 *   1. Update BRAND below (name, tagline, colors, logo)
 *   2. Replace images/logo.webp with the client's logo
 *   3. Replace images/hero-bg.webp with a hero background
 *   4. Deploy — done.
 */

const BRAND = {

  /* ── Identity ─────────────────────────────────────── */
  name: "Marbella Land",           // Shown in header & footer
  tagline: {
    ar: "اللحظة الوحيدة التي تستمتع فيها حقاً... بينما يلهو أطفالك...",
    fr: "Le seul moment où vous profitez vraiment... pendant que vos enfants s'amusent...",
    en: "The only moment you truly enjoy... while your children have fun..."
  },

  /* ── Logo ─────────────────────────────────────────── */
  // Set logoType to "image" and provide images/logo.webp,
  // OR set to "monogram" and provide a 1–2 letter monogram.
  logoType: "monogram",            // "image" | "monogram"
  logoImage: "images/logo.webp",   // used when logoType = "image"
  logoMonogram: "M",               // used when logoType = "monogram"

  /* ── Palette ──────────────────────────────────────── */
  colors: {
    bg:          "#0A0A0A",        // page background
    bgCard:      "#141414",        // card background
    bgCardHover: "#1C1A16",        // card hover
    surface:     "#1A1711",        // header / subtle surfaces
    border:      "#3A2E1E",        // card borders
    borderGold:  "#8B6914",        // subtle gold border
    gold:        "#C9A255",        // primary gold accent
    goldLight:   "#E4C47A",        // lighter gold (hover, text)
    goldDim:     "#7A6030",        // dimmed gold (muted elements)
    text:        "#F0E6D0",        // primary text (warm cream)
    textMuted:   "#8A7A60",        // secondary text
    textDark:    "#3A3020",        // dark text on gold backgrounds
    overlay:     "rgba(0,0,0,0.25)" // hero image overlay
  },

  /* ── Typography ───────────────────────────────────── */
  fonts: {
    display: "'Cormorant Garamond', serif",   // elegant headings
    arabic:  "'Cairo', sans-serif",           // Arabic text
    body:    "'Jost', sans-serif"             // Latin body
  },

  /* ── Hero (index page) ────────────────────────────── */
  hero: {
    // Path to a full-bleed background image for the homepage
    // Recommended: dark moody cafe/restaurant photo, 1200×800px
    image: "hero-bg.webp",
    // Fallback CSS gradient if the image is missing
    fallbackGradient: "linear-gradient(160deg, #1A1208 0%, #0A0A0A 60%, #1C1408 100%)"
  },

  /* ── Footer ───────────────────────────────────────── */
  footerYear: "2025",

  /* ── Currency (also in products.js) ──────────────── */
  // Note: the CURRENCY constant in products.js takes precedence for prices.
  // This is just a display fallback.
  currency: "MAD"

};