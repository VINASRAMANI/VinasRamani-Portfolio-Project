// ============================================
// RESUME.JS - Enhanced with 100 Unique Templates
// ============================================

// Template Data: 100 Unique Templates with Different Styles
const TEMPLATES = [
  // === PROFESSIONAL (25 templates - Different Layouts) ===
  { id: "pro-1", name: "Executive Classic", cat: "professional", badge: "popular", 
    color: "#1e3a5f", accent: "#1e3a5f", bgColor: "#ffffff", 
    layout: "header-left", font: "Merriweather", sidebar: false },
  { id: "pro-2", name: "Corporate Elite", cat: "professional", badge: "new", 
    color: "#0f2b4b", accent: "#0f2b4b", bgColor: "#f8fafc",
    layout: "header-center", font: "Playfair Display", sidebar: false },
  { id: "pro-3", name: "Business Pro", cat: "professional", badge: "", 
    color: "#1a3a5c", accent: "#1a3a5c", bgColor: "#ffffff",
    layout: "header-left", font: "Lato", sidebar: false },
  { id: "pro-4", name: "Executive Suite", cat: "professional", badge: "popular", 
    color: "#2c3e50", accent: "#3498db", bgColor: "#ecf0f1",
    layout: "sidebar-left", font: "Montserrat", sidebar: true },
  { id: "pro-5", name: "Corporate Modern", cat: "professional", badge: "", 
    color: "#0a1929", accent: "#0a1929", bgColor: "#ffffff",
    layout: "header-left", font: "Roboto", sidebar: false },
  { id: "pro-6", name: "Business First", cat: "professional", badge: "new", 
    color: "#1e2b3a", accent: "#c7a74a", bgColor: "#f5f5f5",
    layout: "sidebar-left", font: "Georgia", sidebar: true },
  { id: "pro-7", name: "Executive Dark", cat: "professional", badge: "", 
    color: "#13294b", accent: "#ffffff", bgColor: "#13294b",
    layout: "dark-header", font: "Open Sans", sidebar: false },
  { id: "pro-8", name: "Corporate Light", cat: "professional", badge: "popular", 
    color: "#1a3442", accent: "#2c3e50", bgColor: "#ffffff",
    layout: "two-column", font: "Source Sans Pro", sidebar: false },
  { id: "pro-9", name: "Business Executive", cat: "professional", badge: "", 
    color: "#1a4e4e", accent: "#1a4e4e", bgColor: "#e8f0f0",
    layout: "header-left", font: "Merriweather", sidebar: false },
  { id: "pro-10", name: "Professional Plus", cat: "professional", badge: "new", 
    color: "#1a4d3e", accent: "#27ae60", bgColor: "#ffffff",
    layout: "sidebar-right", font: "Lato", sidebar: true },
  { id: "pro-11", name: "Corporate Prime", cat: "professional", badge: "", 
    color: "#4a2c2c", accent: "#4a2c2c", bgColor: "#fdf5f5",
    layout: "header-left", font: "Playfair Display", sidebar: false },
  { id: "pro-12", name: "Executive Gold", cat: "professional", badge: "popular", 
    color: "#3a2c4a", accent: "#d4af37", bgColor: "#faf5ff",
    layout: "header-center", font: "Times New Roman", sidebar: false },
  { id: "pro-13", name: "Business Silver", cat: "professional", badge: "", 
    color: "#3a322a", accent: "#95a5a6", bgColor: "#ffffff",
    layout: "two-column", font: "Roboto", sidebar: false },
  { id: "pro-14", name: "Professional Edge", cat: "professional", badge: "new", 
    color: "#2c3a4a", accent: "#2c3a4a", bgColor: "#f0f4f8",
    layout: "sidebar-left", font: "Montserrat", sidebar: true },
  { id: "pro-15", name: "Corporate Classic", cat: "professional", badge: "", 
    color: "#1a2c3a", accent: "#1a2c3a", bgColor: "#ffffff",
    layout: "header-left", font: "Lato", sidebar: false },
  { id: "pro-16", name: "Executive Modern", cat: "professional", badge: "popular", 
    color: "#2c1a3a", accent: "#8e44ad", bgColor: "#faf5fa",
    layout: "header-left", font: "Open Sans", sidebar: false },
  { id: "pro-17", name: "Business Pro Max", cat: "professional", badge: "", 
    color: "#1a3a2c", accent: "#27ae60", bgColor: "#f0f9f0",
    layout: "sidebar-right", font: "Merriweather", sidebar: true },
  { id: "pro-18", name: "Professional Elite", cat: "professional", badge: "new", 
    color: "#4a3a2c", accent: "#d35400", bgColor: "#fef5e7",
    layout: "header-center", font: "Playfair Display", sidebar: false },
  { id: "pro-19", name: "Corporate Steel", cat: "professional", badge: "", 
    color: "#3a4a5a", accent: "#3498db", bgColor: "#ffffff",
    layout: "two-column", font: "Roboto", sidebar: false },
  { id: "pro-20", name: "Executive Platinum", cat: "professional", badge: "popular", 
    color: "#2a2a2a", accent: "#bdc3c7", bgColor: "#ecf0f1",
    layout: "sidebar-left", font: "Montserrat", sidebar: true },
  { id: "pro-21", name: "Business Premium", cat: "professional", badge: "", 
    color: "#0a1a2a", accent: "#f1c40f", bgColor: "#fef9e7",
    layout: "header-left", font: "Lato", sidebar: false },
  { id: "pro-22", name: "Corporate Sapphire", cat: "professional", badge: "new", 
    color: "#0a2a4a", accent: "#2980b9", bgColor: "#ebf5fb",
    layout: "header-left", font: "Open Sans", sidebar: false },
  { id: "pro-23", name: "Executive Emerald", cat: "professional", badge: "", 
    color: "#0a3a2a", accent: "#2ecc71", bgColor: "#e8f8f5",
    layout: "sidebar-right", font: "Georgia", sidebar: true },
  { id: "pro-24", name: "Business Ruby", cat: "professional", badge: "popular", 
    color: "#4a2a2a", accent: "#e74c3c", bgColor: "#fdedec",
    layout: "two-column", font: "Times New Roman", sidebar: false },
  { id: "pro-25", name: "Professional Diamond", cat: "professional", badge: "new", 
    color: "#1e3a5f", accent: "#ecf0f1", bgColor: "#ffffff",
    layout: "header-left", font: "Merriweather", sidebar: false },

  // === MODERN (20 templates - Creative Layouts) ===
  { id: "modern-1", name: "Modern Dark", cat: "modern", badge: "popular", 
    color: "#1a2744", accent: "#1a6ef5", bgColor: "#ffffff",
    layout: "modern-asymmetric", font: "Poppins", sidebar: true },
  { id: "modern-2", name: "Modern Teal", cat: "modern", badge: "new", 
    color: "#134e4a", accent: "#14b8a6", bgColor: "#f0fdfa",
    layout: "modern-grid", font: "Inter", sidebar: false },
  { id: "modern-3", name: "Modern Violet", cat: "modern", badge: "", 
    color: "#2e1065", accent: "#8b5cf6", bgColor: "#f5f3ff",
    layout: "modern-overlay", font: "Manrope", sidebar: true },
  { id: "modern-4", name: "Modern Slate", cat: "modern", badge: "popular", 
    color: "#1e293b", accent: "#38bdf8", bgColor: "#f8fafc",
    layout: "modern-minimal", font: "Outfit", sidebar: false },
  { id: "modern-5", name: "Modern Crimson", cat: "modern", badge: "", 
    color: "#450a0a", accent: "#ef4444", bgColor: "#fef2f2",
    layout: "modern-bold", font: "Archivo", sidebar: true },
  { id: "modern-6", name: "Modern Forest", cat: "modern", badge: "new", 
    color: "#14532d", accent: "#22c55e", bgColor: "#f0fdf4",
    layout: "modern-cards", font: "Sora", sidebar: false },
  { id: "modern-7", name: "Modern Ocean", cat: "modern", badge: "", 
    color: "#0c4a6e", accent: "#0ea5e9", bgColor: "#f0f9ff",
    layout: "modern-wave", font: "Plus Jakarta Sans", sidebar: true },
  { id: "modern-8", name: "Modern Rose", cat: "modern", badge: "popular", 
    color: "#4c0519", accent: "#f43f5e", bgColor: "#fff1f2",
    layout: "modern-floating", font: "Clash Display", sidebar: false },
  { id: "modern-9", name: "Modern Amber", cat: "modern", badge: "", 
    color: "#431407", accent: "#f59e0b", bgColor: "#fffbeb",
    layout: "modern-stripes", font: "General Sans", sidebar: true },
  { id: "modern-10", name: "Modern Indigo", cat: "modern", badge: "new", 
    color: "#1e1b4b", accent: "#6366f1", bgColor: "#eef2ff",
    layout: "modern-asymmetric", font: "Poppins", sidebar: true },
  { id: "modern-11", name: "Modern Cyan", cat: "modern", badge: "", 
    color: "#083344", accent: "#06b6d4", bgColor: "#ecfeff",
    layout: "modern-grid", font: "Inter", sidebar: false },
  { id: "modern-12", name: "Modern Emerald", cat: "modern", badge: "popular", 
    color: "#064e3b", accent: "#10b981", bgColor: "#ecfdf5",
    layout: "modern-overlay", font: "Manrope", sidebar: true },
  { id: "modern-13", name: "Modern Purple", cat: "modern", badge: "", 
    color: "#3b0764", accent: "#a855f7", bgColor: "#faf5ff",
    layout: "modern-minimal", font: "Outfit", sidebar: false },
  { id: "modern-14", name: "Modern Pink", cat: "modern", badge: "new", 
    color: "#500724", accent: "#ec4899", bgColor: "#fdf2f8",
    layout: "modern-bold", font: "Archivo", sidebar: true },
  { id: "modern-15", name: "Modern Orange", cat: "modern", badge: "", 
    color: "#7c2d12", accent: "#f97316", bgColor: "#fff7ed",
    layout: "modern-cards", font: "Sora", sidebar: false },
  { id: "modern-16", name: "Modern Lime", cat: "modern", badge: "popular", 
    color: "#365314", accent: "#84cc16", bgColor: "#f7fee7",
    layout: "modern-wave", font: "Plus Jakarta Sans", sidebar: true },
  { id: "modern-17", name: "Modern Sky", cat: "modern", badge: "", 
    color: "#0c4a6e", accent: "#38bdf8", bgColor: "#f0f9ff",
    layout: "modern-floating", font: "Clash Display", sidebar: false },
  { id: "modern-18", name: "Modern Fuchsia", cat: "modern", badge: "new", 
    color: "#701a75", accent: "#d946ef", bgColor: "#fdf4ff",
    layout: "modern-stripes", font: "General Sans", sidebar: true },
  { id: "modern-19", name: "Modern Graphite", cat: "modern", badge: "", 
    color: "#1e1e2e", accent: "#94a3b8", bgColor: "#f8fafc",
    layout: "modern-asymmetric", font: "Poppins", sidebar: true },
  { id: "modern-20", name: "Modern Glacier", cat: "modern", badge: "popular", 
    color: "#155e75", accent: "#22d3ee", bgColor: "#cffafe",
    layout: "modern-grid", font: "Inter", sidebar: false },

  // === CREATIVE (15 templates - Unique Designs) ===
  { id: "creative-1", name: "Creative Flow", cat: "creative", badge: "popular", 
    color: "#2d3561", accent: "#a78bfa", bgColor: "#ffffff",
    layout: "creative-dynamic", font: "Quicksand", sidebar: true },
  { id: "creative-2", name: "Gradient Burst", cat: "creative", badge: "new", 
    color: "#1e1b4b", accent: "#8b5cf6", bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    layout: "creative-gradient", font: "Nunito", sidebar: false },
  { id: "creative-3", name: "Creative Coral", cat: "creative", badge: "", 
    color: "#7c2d12", accent: "#fb923c", bgColor: "#fff1e6",
    layout: "creative-geometric", font: "DM Sans", sidebar: true },
  { id: "creative-4", name: "Creative Mint", cat: "creative", badge: "popular", 
    color: "#064e3b", accent: "#34d399", bgColor: "#e6fffa",
    layout: "creative-organic", font: "Work Sans", sidebar: false },
  { id: "creative-5", name: "Creative Pink", cat: "creative", badge: "new", 
    color: "#500724", accent: "#ec4899", bgColor: "#fdf2f8",
    layout: "creative-artistic", font: "Rubik", sidebar: true },
  { id: "creative-6", name: "Creative Yellow", cat: "creative", badge: "", 
    color: "#451a03", accent: "#fbbf24", bgColor: "#fffbeb",
    layout: "creative-dynamic", font: "Quicksand", sidebar: true },
  { id: "creative-7", name: "Creative Dark", cat: "creative", badge: "popular", 
    color: "#09090b", accent: "#7c3aed", bgColor: "#faf5ff",
    layout: "creative-gradient", font: "Nunito", sidebar: false },
  { id: "creative-8", name: "Creative Azure", cat: "creative", badge: "", 
    color: "#0c4a6e", accent: "#38bdf8", bgColor: "#f0f9ff",
    layout: "creative-geometric", font: "DM Sans", sidebar: true },
  { id: "creative-9", name: "Creative Orange", cat: "creative", badge: "new", 
    color: "#431407", accent: "#f97316", bgColor: "#fff7ed",
    layout: "creative-organic", font: "Work Sans", sidebar: false },
  { id: "creative-10", name: "Two Tone", cat: "creative", badge: "", 
    color: "#18181b", accent: "#ec4899", bgColor: "#ffffff",
    layout: "creative-artistic", font: "Rubik", sidebar: true },
  { id: "creative-11", name: "Creative Aqua", cat: "creative", badge: "popular", 
    color: "#164e63", accent: "#22d3ee", bgColor: "#ecfeff",
    layout: "creative-dynamic", font: "Quicksand", sidebar: true },
  { id: "creative-12", name: "Creative Rose", cat: "creative", badge: "", 
    color: "#4c0519", accent: "#fb7185", bgColor: "#fff5f5",
    layout: "creative-gradient", font: "Nunito", sidebar: false },
  { id: "creative-13", name: "Creative Lime", cat: "creative", badge: "new", 
    color: "#365314", accent: "#a3e635", bgColor: "#f7fee7",
    layout: "creative-geometric", font: "DM Sans", sidebar: true },
  { id: "creative-14", name: "Creative Indigo", cat: "creative", badge: "", 
    color: "#2e1065", accent: "#818cf8", bgColor: "#eef2ff",
    layout: "creative-organic", font: "Work Sans", sidebar: false },
  { id: "creative-15", name: "Creative Peach", cat: "creative", badge: "popular", 
    color: "#7c2d12", accent: "#fdba74", bgColor: "#fff4e6",
    layout: "creative-artistic", font: "Rubik", sidebar: true },

  // === SIMPLE (10 templates - Clean Layouts) ===
  { id: "simple-1", name: "Simple Clean", cat: "simple", badge: "popular", 
    color: "#1a1a2e", accent: "#1a1a2e", bgColor: "#ffffff",
    layout: "simple-minimal", font: "Arial", sidebar: false },
  { id: "simple-2", name: "Ultra Minimal", cat: "simple", badge: "new", 
    color: "#111827", accent: "#111827", bgColor: "#f9fafb",
    layout: "simple-elegant", font: "Helvetica", sidebar: false },
  { id: "simple-3", name: "Line Accent", cat: "simple", badge: "", 
    color: "#0f172a", accent: "#0f172a", bgColor: "#ffffff",
    layout: "simple-lines", font: "Calibri", sidebar: false },
  { id: "simple-4", name: "Dot Style", cat: "simple", badge: "popular", 
    color: "#1e293b", accent: "#64748b", bgColor: "#f8fafc",
    layout: "simple-dots", font: "Verdana", sidebar: false },
  { id: "simple-5", name: "Bold Simple", cat: "simple", badge: "", 
    color: "#030712", accent: "#111827", bgColor: "#ffffff",
    layout: "simple-bold", font: "Tahoma", sidebar: false },
  { id: "simple-6", name: "Soft Pastel", cat: "simple", badge: "new", 
    color: "#1e3a5f", accent: "#93c5fd", bgColor: "#f0f7ff",
    layout: "simple-soft", font: "Segoe UI", sidebar: false },
  { id: "simple-7", name: "Monochrome", cat: "simple", badge: "", 
    color: "#000", accent: "#000", bgColor: "#ffffff",
    layout: "simple-monochrome", font: "Garamond", sidebar: false },
  { id: "simple-8", name: "Elegant", cat: "simple", badge: "popular", 
    color: "#1a1a2e", accent: "#c7a74a", bgColor: "#fcfaf7",
    layout: "simple-elegant", font: "Times New Roman", sidebar: false },
  { id: "simple-9", name: "Light & Airy", cat: "simple", badge: "new", 
    color: "#334155", accent: "#6366f1", bgColor: "#f5f7ff",
    layout: "simple-minimal", font: "Arial", sidebar: false },
  { id: "simple-10", name: "Pure White", cat: "simple", badge: "", 
    color: "#2c3e50", accent: "#2c3e50", bgColor: "#ffffff",
    layout: "simple-clean", font: "Helvetica", sidebar: false },

  // === EXECUTIVE (10 templates - Premium Designs) ===
  { id: "executive-1", name: "Executive Gold", cat: "executive", badge: "popular", 
    color: "#1a1a2e", accent: "#d4af37", bgColor: "#ffffff",
    layout: "executive-luxury", font: "Cormorant Garamond", sidebar: true },
  { id: "executive-2", name: "Executive Silver", cat: "executive", badge: "new", 
    color: "#1e293b", accent: "#94a3b8", bgColor: "#f8fafc",
    layout: "executive-modern", font: "Montserrat", sidebar: false },
  { id: "executive-3", name: "Executive Bronze", cat: "executive", badge: "", 
    color: "#1c1917", accent: "#cd7f32", bgColor: "#faf7f2",
    layout: "executive-classic", font: "Libre Baskerville", sidebar: true },
  { id: "executive-4", name: "Executive Platinum", cat: "executive", badge: "popular", 
    color: "#0f172a", accent: "#e2e8f0", bgColor: "#f1f5f9",
    layout: "executive-minimal", font: "Inter", sidebar: false },
  { id: "executive-5", name: "Executive Navy", cat: "executive", badge: "new", 
    color: "#1e3a5f", accent: "#93c5fd", bgColor: "#eff6ff",
    layout: "executive-luxury", font: "Cormorant Garamond", sidebar: true },
  { id: "executive-6", name: "Executive Emerald", cat: "executive", badge: "", 
    color: "#14532d", accent: "#4ade80", bgColor: "#f0fdf4",
    layout: "executive-modern", font: "Montserrat", sidebar: false },
  { id: "executive-7", name: "Executive Burgundy", cat: "executive", badge: "popular", 
    color: "#4a0519", accent: "#fb7185", bgColor: "#fff1f2",
    layout: "executive-classic", font: "Libre Baskerville", sidebar: true },
  { id: "executive-8", name: "Executive Sapphire", cat: "executive", badge: "", 
    color: "#0a2a4a", accent: "#7aa2f7", bgColor: "#f0f7ff",
    layout: "executive-minimal", font: "Inter", sidebar: false },
  { id: "executive-9", name: "Executive Ruby", cat: "executive", badge: "new", 
    color: "#4a2a2a", accent: "#f87171", bgColor: "#fef2f2",
    layout: "executive-luxury", font: "Cormorant Garamond", sidebar: true },
  { id: "executive-10", name: "Executive Diamond", cat: "executive", badge: "popular", 
    color: "#1a1a2e", accent: "#f0f9ff", bgColor: "#ffffff",
    layout: "executive-modern", font: "Montserrat", sidebar: false },

  // === TECH (10 templates - Digital Style) ===
  { id: "tech-1", name: "Tech Dark", cat: "tech", badge: "popular", 
    color: "#020617", accent: "#22d3ee", bgColor: "#0a0a0f",
    layout: "tech-terminal", font: "Fira Code", sidebar: true },
  { id: "tech-2", name: "Matrix", cat: "tech", badge: "new", 
    color: "#052e16", accent: "#4ade80", bgColor: "#0a0f0a",
    layout: "tech-matrix", font: "Courier New", sidebar: true },
  { id: "tech-3", name: "Tech Blue", cat: "tech", badge: "", 
    color: "#030712", accent: "#3b82f6", bgColor: "#0f172a",
    layout: "tech-modern", font: "Roboto Mono", sidebar: false },
  { id: "tech-4", name: "Terminal", cat: "tech", badge: "popular", 
    color: "#000", accent: "#a3e635", bgColor: "#1a1a1a",
    layout: "tech-terminal", font: "Source Code Pro", sidebar: true },
  { id: "tech-5", name: "Neon", cat: "tech", badge: "new", 
    color: "#0a0a0a", accent: "#f0abfc", bgColor: "#0f0f1a",
    layout: "tech-neon", font: "Poppins", sidebar: false },
  { id: "tech-6", name: "Dev Dark", cat: "tech", badge: "", 
    color: "#0d1117", accent: "#58a6ff", bgColor: "#010409",
    layout: "tech-modern", font: "JetBrains Mono", sidebar: true },
  { id: "tech-7", name: "Tech Modern", cat: "tech", badge: "popular", 
    color: "#0c0a09", accent: "#fb923c", bgColor: "#171717",
    layout: "tech-minimal", font: "Inter", sidebar: false },
  { id: "tech-8", name: "Cyber Punk", cat: "tech", badge: "new", 
    color: "#0f172a", accent: "#f43f5e", bgColor: "#020617",
    layout: "tech-cyber", font: "Orbitron", sidebar: true },
  { id: "tech-9", name: "Code Base", cat: "tech", badge: "", 
    color: "#18181b", accent: "#10b981", bgColor: "#09090b",
    layout: "tech-terminal", font: "Fira Code", sidebar: true },
  { id: "tech-10", name: "Digital", cat: "tech", badge: "popular", 
    color: "#0a0a0f", accent: "#818cf8", bgColor: "#050510",
    layout: "tech-neon", font: "Space Grotesk", sidebar: false },

  // === ADDITIONAL BONUS (10 templates) ===
  { id: "bonus-1", name: "Classic Blue", cat: "professional", badge: "popular", 
    color: "#1e40af", accent: "#1e40af", bgColor: "#ffffff",
    layout: "header-left", font: "Merriweather", sidebar: false },
  { id: "bonus-2", name: "Elegant Gray", cat: "professional", badge: "new", 
    color: "#334155", accent: "#334155", bgColor: "#f8fafc",
    layout: "sidebar-left", font: "Playfair Display", sidebar: true },
  { id: "bonus-3", name: "Sophisticated", cat: "executive", badge: "", 
    color: "#1e293b", accent: "#cbd5e1", bgColor: "#f1f5f9",
    layout: "executive-minimal", font: "Cormorant", sidebar: false },
  { id: "bonus-4", name: "Minimalist", cat: "simple", badge: "new", 
    color: "#2d3748", accent: "#2d3748", bgColor: "#ffffff",
    layout: "simple-minimal", font: "Arial", sidebar: false },
  { id: "bonus-5", name: "Bold Statement", cat: "creative", badge: "", 
    color: "#7b341e", accent: "#ed8936", bgColor: "#fff4e6",
    layout: "creative-bold", font: "Rubik", sidebar: true },
  { id: "bonus-6", name: "Clean Lines", cat: "simple", badge: "popular", 
    color: "#2c3e50", accent: "#3498db", bgColor: "#ffffff",
    layout: "simple-lines", font: "Helvetica", sidebar: false },
  { id: "bonus-7", name: "Modern Edge", cat: "modern", badge: "new", 
    color: "#0b1e33", accent: "#00b4d8", bgColor: "#f0f9ff",
    layout: "modern-minimal", font: "Outfit", sidebar: true },
  { id: "bonus-8", name: "Power Suite", cat: "executive", badge: "", 
    color: "#2d1b0e", accent: "#b68b40", bgColor: "#faf6f0",
    layout: "executive-luxury", font: "Garamond", sidebar: true },
  { id: "bonus-9", name: "Code Master", cat: "tech", badge: "popular", 
    color: "#1e1e2e", accent: "#89b4fa", bgColor: "#11111b",
    layout: "tech-terminal", font: "JetBrains Mono", sidebar: true },
  { id: "bonus-10", name: "Creative Flow", cat: "creative", badge: "new", 
    color: "#381426", accent: "#f687b3", bgColor: "#fdf2f8",
    layout: "creative-artistic", font: "Quicksand", sidebar: false },
];

// ============================================
// MINI THUMBNAIL FUNCTIONS (Updated for all layouts)
// ============================================

function buildMiniSidebar(c, a, bg = "#ffffff") {
  return `<div style="display:flex;width:100%;height:100%;font-family:sans-serif;background:${bg}">
    <div style="width:38%;background:${c};padding:8px 6px;flex-shrink:0">
      <div style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.15);margin:0 auto 6px"></div>
      <div style="height:4px;background:rgba(255,255,255,.6);border-radius:2px;width:80%;margin:0 auto 3px"></div>
      <div style="height:2px;background:${a};border-radius:2px;width:55%;margin:0 auto 8px"></div>
      <div style="height:1px;background:rgba(255,255,255,.12);margin-bottom:6px"></div>
      ${["90%", "70%", "85%", "60%"]
        .map(
          (w) =>
            `<div style="display:flex;align-items:center;gap:4px;margin-bottom:3px"><div style="width:5px;height:5px;border-radius:50%;background:${a};flex-shrink:0"></div><div style="height:2px;background:rgba(255,255,255,.25);border-radius:2px;width:${w}"></div></div>`
        )
        .join("")}
    </div>
    <div style="flex:1;padding:8px 6px;background:${bg}">
      <div style="height:6px;background:${c};border-radius:2px;width:60%;margin-bottom:2px"></div>
      <div style="height:3px;background:${a};border-radius:2px;width:35%;margin-bottom:6px"></div>
      <div style="height:2px;background:${a}40;border-radius:2px;width:35%;margin-bottom:2px"></div>
      <div style="height:1px;background:${a}30;margin-bottom:4px"></div>
      ${["100%", "100%", "80%"]
        .map(
          (w) =>
            `<div style="height:2px;background:#e2e8f0;border-radius:2px;width:${w};margin-bottom:2px"></div>`
        )
        .join("")}
    </div>
  </div>`;
}

function buildMiniSimple(c, a, bg = "#ffffff") {
  return `<div style="width:100%;height:100%;padding:10px;font-family:sans-serif;background:${bg}">
    <div style="height:5px;background:${c};border-radius:2px;width:50%;margin-bottom:2px"></div>
    <div style="height:3px;background:${a}80;border-radius:2px;width:30%;margin-bottom:4px"></div>
    <div style="display:flex;gap:8px;margin-bottom:6px;flex-wrap:wrap">
      ${["25%", "30%", "28%"]
        .map(
          (w) =>
            `<div style="display:flex;align-items:center;gap:3px"><div style="width:3px;height:3px;border-radius:50%;background:${a}"></div><div style="height:2px;background:#cbd5e1;border-radius:2px;width:${w}"></div></div>`
        )
        .join("")}
    </div>
    <div style="height:1px;background:${c};margin:4px 0"></div>
    ${[1, 2, 3]
      .map(
        () =>
          `<div style="margin-bottom:4px"><div style="height:2px;background:#e2e8f0;border-radius:2px;width:40%;margin-bottom:2px"></div><div style="display:flex;gap:6px"><div style="width:20px;height:2px;background:#cbd5e1;border-radius:2px;flex-shrink:0"></div><div style="flex:1"><div style="height:2px;background:${c};border-radius:2px;width:70%;margin-bottom:1px"></div><div style="height:2px;background:#e2e8f0;border-radius:2px;width:90%"></div></div></div></div>`
      )
      .join("")}
  </div>`;
}

function buildMiniExec(c, a, bg = "#ffffff") {
  return `<div style="width:100%;height:100%;font-family:Georgia,serif;background:${bg}">
    <div style="height:2px;background:linear-gradient(90deg,${a},${a}88,${a})"></div>
    <div style="background:${c};padding:5px;display:flex;align-items:center;gap:5px">
      <div style="width:16px;height:16px;border-radius:2px;background:rgba(255,255,255,.15);flex-shrink:0"></div>
      <div>
        <div style="height:4px;background:rgba(255,255,255,.8);border-radius:2px;width:45px;margin-bottom:1px"></div>
        <div style="height:2px;background:${a};border-radius:2px;width:30px"></div>
      </div>
    </div>
    <div style="display:flex;height:calc(100% - 35px)">
      <div style="flex:1;padding:5px">
        <div style="height:2px;background:${c};border-radius:2px;width:45%;margin-bottom:2px"></div>
        <div style="height:1px;background:linear-gradient(90deg,${a},transparent);margin-bottom:4px"></div>
        ${["100%", "100%", "75%"]
          .map(
            (w) =>
              `<div style="height:2px;background:#e2e8f0;border-radius:2px;width:${w};margin-bottom:1px"></div>`
          )
          .join("")}
      </div>
      <div style="width:35%;background:#f9f7f1;padding:5px;border-left:1px solid ${a}">
        <div style="height:2px;background:${a};border-radius:2px;width:70%;margin-bottom:3px"></div>
        ${["75%", "85%", "60%"]
          .map(
            (w) =>
              `<div style="height:2px;background:#e2e8f0;border-radius:2px;width:${w};margin-bottom:2px"></div>`
          )
          .join("")}
      </div>
    </div>
  </div>`;
}

function buildMiniPro(c, a, bg = "#ffffff") {
  return `<div style="width:100%;height:100%;font-family:Georgia,serif;background:${bg}">
    <div style="background:${c};height:30%;padding:5px;display:flex;align-items:center;gap:5px">
      <div style="width:16px;height:16px;border-radius:2px;background:rgba(255,255,255,.15);flex-shrink:0"></div>
      <div>
        <div style="height:4px;background:rgba(255,255,255,.8);border-radius:2px;width:40px;margin-bottom:1px"></div>
        <div style="height:2px;background:rgba(255,255,255,.5);border-radius:2px;width:30px"></div>
      </div>
    </div>
    <div style="display:flex;height:70%;padding:5px">
      <div style="flex:1">
        <div style="height:2px;background:${c};border-radius:2px;width:50%;margin-bottom:2px"></div>
        <div style="height:1px;background:${c};margin-bottom:4px"></div>
        ${["100%", "100%", "80%"]
          .map(
            (w) =>
              `<div style="height:2px;background:#e2e8f0;border-radius:2px;width:${w};margin-bottom:1px"></div>`
          )
          .join("")}
      </div>
      <div style="width:30%;background:#f8fafc;padding:4px;border-left:1px solid #e2e8f0">
        <div style="height:2px;background:${c};border-radius:2px;width:80%;margin-bottom:2px"></div>
        ${["75%", "85%"].map(
          (w) =>
            `<div style="height:2px;background:#e2e8f0;border-radius:2px;width:${w};margin-bottom:2px"></div>`
        ).join("")}
      </div>
    </div>
  </div>`;
}

function buildMiniTech(c, a, bg = "#0a0a0a") {
  return `<div style="width:100%;height:100%;font-family:'Courier New',monospace;background:${bg};color:#fff">
    <div style="padding:5px;border-bottom:1px solid ${a}">
      <div style="height:3px;background:${a};width:60%;margin-bottom:2px"></div>
      <div style="height:2px;background:${a}80;width:40%"></div>
    </div>
    <div style="padding:5px">
      ${["█", "█", "█", "█"].map(() => 
        `<div style="display:flex;gap:3px;margin-bottom:3px">
          <div style="color:${a}">></div>
          <div style="height:2px;background:${a}60;flex:1"></div>
        </div>`
      ).join("")}
    </div>
  </div>`;
}

function buildMini(t) {
  const c = t.color;
  const a = t.accent;
  const bg = t.bgColor || "#ffffff";
  
  if (t.cat === "simple") return buildMiniSimple(c, a, bg);
  if (t.cat === "executive") return buildMiniExec(c, a, bg);
  if (t.cat === "tech") return buildMiniTech(c, a, bg);
  if (t.cat === "professional" && t.sidebar) return buildMiniPro(c, a, bg);
  if (t.cat === "creative") return buildMiniSidebar(c, a, bg);
  if (t.cat === "modern") return buildMiniSidebar(c, a, bg);
  return buildMiniSidebar(c, a, bg);
}

// ============================================
// Generate TPL_DEFS from TEMPLATES
// ============================================

const TPL_DEFS = TEMPLATES.map(t => ({
  id: t.id,
  label: t.name,
  cat: t.cat.charAt(0).toUpperCase() + t.cat.slice(1),
  isNew: t.badge === "new",
  render: () => buildMini(t)
}));

// ============================================
// GLOBAL STATE (Builder)
// ============================================

let state = {
  template: 'modern-1',  // Default template
  photo: null,
  photoShape: 'circle',
  personal: {
    fullName: 'Alex Johnson',
    jobTitle: 'Senior Product Manager',
    phone: '+1 (555) 123-4567',
    email: 'alex.johnson@example.com',
    address: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexjohnson',
    website: 'alexjohnson.com'
  },
  summary: 'Results-driven Product Manager with 8+ years of experience in SaaS and enterprise software. Proven track record of launching successful products and leading cross-functional teams. Passionate about user-centered design and data-driven decision making.',
  education: [
    {
      id: 1,
      title: 'MBA',
      institution: 'Stanford University',
      startDate: '2016',
      endDate: '2018',
      description: 'Focus on Strategic Management and Marketing. Graduated with distinction.'
    },
    {
      id: 2,
      title: 'BS Computer Science',
      institution: 'UC Berkeley',
      startDate: '2010',
      endDate: '2014',
      description: 'Graduated with Honors. Specialized in Human-Computer Interaction.'
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Senior Product Manager',
      institution: 'TechCorp Inc.',
      startDate: '2020',
      endDate: 'Present',
      description: 'Lead product strategy for cloud platform serving 2M+ users. Increased revenue by 35% year-over-year through feature optimization and market expansion.'
    },
    {
      id: 2,
      title: 'Product Manager',
      institution: 'InnovateSoft',
      startDate: '2018',
      endDate: '2020',
      description: 'Managed mobile app development lifecycle from concept to launch. Achieved 4.8 star rating and 500K+ downloads in first year.'
    }
  ],
  skills: 'Product Strategy, User Research, Agile Methodologies, Data Analysis, UX Design, Team Leadership, Market Analysis, Product Marketing',
  projects: [
    {
      id: 1,
      title: 'Cloud Migration Project',
      institution: 'Lead Product Manager',
      description: 'Successfully migrated legacy system to cloud infrastructure, reducing costs by 40% and improving system reliability by 99.9%.'
    }
  ],
  languages: [
    {
      id: 1,
      title: 'English',
      proficiency: 'Native'
    },
    {
      id: 2,
      title: 'Spanish',
      proficiency: 'Professional Working'
    }
  ]
};

// ============================================
// DOM ELEMENTS & INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  loadFromSession();
  updatePreview();
  initEntryControls();
  updateCharCount();
  populateForm();
  
  // Set default template thumbnail
  const thumbEl = document.getElementById('templatePickThumb');
  const currentId = state.template || 'modern-1';
  const def = TPL_DEFS.find(t => t.id === currentId);
  if (thumbEl && def) {
    thumbEl.innerHTML = def.render();
    document.getElementById('templatePickLabel').textContent = def.label;
  }
});

function initializeEventListeners() {
  // Personal Info
  document.getElementById('fullName')?.addEventListener('input', updateState);
  document.getElementById('jobTitle')?.addEventListener('input', updateState);
  document.getElementById('phone')?.addEventListener('input', updateState);
  document.getElementById('email')?.addEventListener('input', updateState);
  document.getElementById('address')?.addEventListener('input', updateState);
  document.getElementById('linkedin')?.addEventListener('input', updateState);
  document.getElementById('website')?.addEventListener('input', updateState);
  
  // Summary - Fixed to show as paragraph
  document.getElementById('summary')?.addEventListener('input', (e) => {
    state.summary = e.target.value;
    updateCharCount();
    updatePreview();
    saveToSession();
  });
  
  // Skills
  document.getElementById('skills')?.addEventListener('input', (e) => {
    state.skills = e.target.value;
    updatePreview();
    saveToSession();
  });
  
  // Photo shape
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.shape-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.photoShape = btn.dataset.shape;
      updatePhotoPreview();
      updatePreview();
    });
  });
  
  // Download buttons
  document.getElementById('downloadBtn')?.addEventListener('click', downloadPDF);
  document.getElementById('downloadBtnBottom')?.addEventListener('click', downloadPDF);
  
  // Preview toggle on mobile
  document.getElementById('previewToggleBtn')?.addEventListener('click', () => {
    document.querySelector('.builder-layout').classList.add('show-preview');
  });
  
  document.getElementById('closePreviewBtn')?.addEventListener('click', () => {
    document.querySelector('.builder-layout').classList.remove('show-preview');
  });
}

function updateState(e) {
  const field = e.target.id;
  state.personal[field] = e.target.value;
  updatePreview();
  saveToSession();
}

function updateCharCount() {
  const summary = document.getElementById('summary');
  const count = document.getElementById('summaryCount');
  if (summary && count) {
    const len = summary.value.length;
    count.textContent = `${len} / 2000 characters`;
  }
}

// ============================================
// ENTRY MANAGEMENT (Education, Experience, etc)
// ============================================

function initEntryControls() {
  document.getElementById('addEducation')?.addEventListener('click', () => addEntry('education'));
  renderEntries('education');
  
  document.getElementById('addExperience')?.addEventListener('click', () => addEntry('experience'));
  renderEntries('experience');
  
  document.getElementById('addProject')?.addEventListener('click', () => addEntry('project'));
  renderEntries('project');
  
  document.getElementById('addLanguage')?.addEventListener('click', () => addEntry('language'));
  renderEntries('language');
}

function addEntry(type) {
  const newEntry = {
    id: Date.now(),
    title: '',
    institution: '',
    startDate: '',
    endDate: '',
    description: '',
    ...(type === 'language' && { proficiency: '' })
  };
  
  if (type === 'education') state.education.push(newEntry);
  if (type === 'experience') state.experience.push(newEntry);
  if (type === 'project') state.projects.push(newEntry);
  if (type === 'language') state.languages.push(newEntry);
  
  renderEntries(type);
  updatePreview();
  saveToSession();
}

function removeEntry(type, id) {
  if (type === 'education') {
    state.education = state.education.filter(e => e.id !== id);
  }
  if (type === 'experience') {
    state.experience = state.experience.filter(e => e.id !== id);
  }
  if (type === 'project') {
    state.projects = state.projects.filter(p => p.id !== id);
  }
  if (type === 'language') {
    state.languages = state.languages.filter(l => l.id !== id);
  }
  
  renderEntries(type);
  updatePreview();
  saveToSession();
}

function updateEntry(type, id, field, value) {
  let entry;
  if (type === 'education') {
    entry = state.education.find(e => e.id === id);
  }
  if (type === 'experience') {
    entry = state.experience.find(e => e.id === id);
  }
  if (type === 'project') {
    entry = state.projects.find(p => p.id === id);
  }
  if (type === 'language') {
    entry = state.languages.find(l => l.id === id);
  }
  
  if (entry) {
    entry[field] = value;
    updatePreview();
    saveToSession();
  }
}

function renderEntries(type) {
  const container = document.getElementById(`${type}Entries`);
  if (!container) return;
  
  let entries = [];
  if (type === 'education') entries = state.education;
  if (type === 'experience') entries = state.experience;
  if (type === 'project') entries = state.projects;
  if (type === 'language') entries = state.languages;
  
  container.innerHTML = entries.map(entry => {
    if (type === 'education') {
      return `
        <div class="entry-item" data-id="${entry.id}">
          <div class="entry-header">
            <span class="entry-title">${entry.institution || 'New Education'}</span>
            <button class="entry-remove" onclick="removeEntry('${type}', ${entry.id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="entry-grid">
            <input type="text" class="form-control-custom" placeholder="Institution" 
                   value="${escapeHtml(entry.institution || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'institution', this.value)">
            <input type="text" class="form-control-custom" placeholder="Degree" 
                   value="${escapeHtml(entry.title || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'title', this.value)">
            <input type="text" class="form-control-custom" placeholder="Start Date" 
                   value="${escapeHtml(entry.startDate || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'startDate', this.value)">
            <input type="text" class="form-control-custom" placeholder="End Date" 
                   value="${escapeHtml(entry.endDate || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'endDate', this.value)">
            <div class="entry-full">
              <textarea class="form-control-custom" placeholder="Description" rows="3"
                        oninput="updateEntry('${type}', ${entry.id}, 'description', this.value)">${escapeHtml(entry.description || '')}</textarea>
            </div>
          </div>
        </div>
      `;
    }
    
    if (type === 'experience') {
      return `
        <div class="entry-item" data-id="${entry.id}">
          <div class="entry-header">
            <span class="entry-title">${entry.title || 'New Experience'}</span>
            <button class="entry-remove" onclick="removeEntry('${type}', ${entry.id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="entry-grid">
            <input type="text" class="form-control-custom" placeholder="Job Title" 
                   value="${escapeHtml(entry.title || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'title', this.value)">
            <input type="text" class="form-control-custom" placeholder="Company" 
                   value="${escapeHtml(entry.institution || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'institution', this.value)">
            <input type="text" class="form-control-custom" placeholder="Start Date" 
                   value="${escapeHtml(entry.startDate || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'startDate', this.value)">
            <input type="text" class="form-control-custom" placeholder="End Date" 
                   value="${escapeHtml(entry.endDate || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'endDate', this.value)">
            <div class="entry-full">
              <textarea class="form-control-custom" placeholder="Description" rows="3"
                        oninput="updateEntry('${type}', ${entry.id}, 'description', this.value)">${escapeHtml(entry.description || '')}</textarea>
            </div>
          </div>
        </div>
      `;
    }
    
    if (type === 'project') {
      return `
        <div class="entry-item" data-id="${entry.id}">
          <div class="entry-header">
            <span class="entry-title">${entry.title || 'New Project'}</span>
            <button class="entry-remove" onclick="removeEntry('${type}', ${entry.id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="entry-grid">
            <input type="text" class="form-control-custom" placeholder="Project Name" 
                   value="${escapeHtml(entry.title || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'title', this.value)">
            <input type="text" class="form-control-custom" placeholder="Role" 
                   value="${escapeHtml(entry.institution || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'institution', this.value)">
            <div class="entry-full">
              <textarea class="form-control-custom" placeholder="Description" rows="3"
                        oninput="updateEntry('${type}', ${entry.id}, 'description', this.value)">${escapeHtml(entry.description || '')}</textarea>
            </div>
          </div>
        </div>
      `;
    }
    
    if (type === 'language') {
      return `
        <div class="entry-item" data-id="${entry.id}">
          <div class="entry-header">
            <span class="entry-title">${entry.title || 'New Language'}</span>
            <button class="entry-remove" onclick="removeEntry('${type}', ${entry.id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="entry-grid">
            <input type="text" class="form-control-custom" placeholder="Language" 
                   value="${escapeHtml(entry.title || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'title', this.value)">
            <input type="text" class="form-control-custom" placeholder="Proficiency" 
                   value="${escapeHtml(entry.proficiency || '')}" 
                   oninput="updateEntry('${type}', ${entry.id}, 'proficiency', this.value)">
          </div>
        </div>
      `;
    }
  }).join('');
}

// Helper function to escape HTML
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================
// PHOTO HANDLING - Fixed for proper display
// ============================================

document.getElementById('photoInput')?.addEventListener('change', handlePhotoUpload);

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  // Check if file is an image
  if (!file.type.match('image.*')) {
    alert('Please select an image file');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (event) => {
    // Directly set the photo without crop modal for simplicity
    // Or you can keep the crop modal if you prefer
    state.photo = event.target.result;
    updatePhotoPreview();
    updatePreview();
    saveToSession();
    
    // Optional: Show success message
    console.log('Photo uploaded successfully');
  };
  reader.onerror = (error) => {
    console.error('Error reading file:', error);
    alert('Error uploading photo. Please try again.');
  };
  reader.readAsDataURL(file);
  
  // Clear input
  e.target.value = '';
}

function updatePhotoPreview() {
  const preview = document.getElementById('photoPreview');
  if (!preview) return;
  
  if (state.photo) {
    const shapeStyle = getPhotoShapeStyle();
    preview.innerHTML = `<img src="${state.photo}" alt="Profile Photo" style="width:100%;height:100%;object-fit:cover;${shapeStyle}" onerror="this.onerror=null; this.src=''; this.parentNode.innerHTML='<i class=\\'fa-solid fa-user-circle\\'></i>';"/>`;
  } else {
    preview.innerHTML = '<i class="fa-solid fa-user-circle"></i>';
  }
}

function getPhotoShapeStyle() {
  switch(state.photoShape) {
    case 'circle': return 'border-radius: 50%;';
    case 'square': return 'border-radius: 4px;';
    case 'rounded': return 'border-radius: 20%;';
    case 'hexagon': return 'clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);';
    default: return 'border-radius: 50%;';
  }
}

// ============================================
// SESSION STORAGE
// ============================================

function saveToSession() {
  sessionStorage.setItem('resumeState', JSON.stringify(state));
}

function loadFromSession() {
  const saved = sessionStorage.getItem('resumeState');
  if (saved) {
    try {
      state = JSON.parse(saved);
      populateForm();
      updatePhotoPreview();
    } catch (e) {
      console.error('Failed to load from session', e);
    }
  }
}

function populateForm() {
  // Personal fields
  Object.keys(state.personal).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.value = state.personal[key] || '';
  });
  
  // Summary
  const summary = document.getElementById('summary');
  if (summary) summary.value = state.summary || '';
  
  // Skills
  const skills = document.getElementById('skills');
  if (skills) skills.value = state.skills || '';
  
  // Photo shape
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.shape === state.photoShape);
  });
  
  // Re-render entries
  renderEntries('education');
  renderEntries('experience');
  renderEntries('project');
  renderEntries('language');
}

// ============================================
// PDF DOWNLOAD
// ============================================

function downloadPDF() {
  const element = document.getElementById('resumeOutput');
  const opt = {
    margin:        [0.5, 0.5, 0.5, 0.5],
    filename:     `${state.personal.fullName || 'resume'}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, letterRendering: true, useCORS: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(element).save();
}

// ============================================
// PREVIEW UPDATE - Dynamic Template Styling
// ============================================

function updatePreview() {
  const output = document.getElementById('resumeOutput');
  if (!output) return;
  
  // Get current template info
  const currentTemplate = TEMPLATES.find(t => t.id === state.template) || TEMPLATES[0];
  const primaryColor = currentTemplate.color;
  const accentColor = currentTemplate.accent;
  const bgColor = currentTemplate.bgColor || '#ffffff';
  const fontFamily = currentTemplate.font || 'Lato';
  const layout = currentTemplate.layout || 'header-left';
  
  const skillsArray = state.skills.split(',').map(s => s.trim()).filter(s => s);
  
  // Generate resume HTML based on template layout
  let headerHTML = '';
  let mainContentHTML = '';
  
  // Common styles
  const commonStyles = `
    .resume-paper { font-family: '${fontFamily}', sans-serif; max-width: 800px; margin: 0 auto; background: ${bgColor}; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    .section-title { font-size: 1.2rem; font-weight: 700; color: ${primaryColor}; margin: 0 0 15px 0; padding-bottom: 5px; border-bottom: 2px solid ${accentColor}; }
    .date-badge { color: #666; font-size: 0.85rem; }
    .company-name { color: ${primaryColor}; font-weight: 600; margin: 3px 0 5px 0; }
    .description-text { margin: 5px 0 0 0; font-size: 0.9rem; line-height: 1.6; color: #555; }
  `;
  
  // Build header based on layout
  if (layout.includes('dark-header')) {
    headerHTML = `
      <div style="background: ${primaryColor}; color: white; padding: 30px 35px; text-align: center;">
        ${state.photo ? `
          <div style="width: 120px; height: 120px; margin: 0 auto 15px; ${getPhotoShapeStyle()}; overflow: hidden; border: 3px solid white;">
            <img src="${state.photo}" alt="Photo" style="width:100%; height:100%; object-fit:cover;"/>
          </div>
        ` : ''}
        <h1 style="font-size: 2.2rem; font-weight: 700; margin: 0 0 5px 0;">${state.personal.fullName || 'Your Name'}</h1>
        <div style="font-size: 1.1rem; margin-bottom: 15px; opacity: 0.9;">${state.personal.jobTitle || 'Job Title'}</div>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-size: 0.9rem;">
          ${state.personal.phone ? `<span><i class="fa-solid fa-phone" style="margin-right: 5px;"></i> ${state.personal.phone}</span>` : ''}
          ${state.personal.email ? `<span><i class="fa-solid fa-envelope" style="margin-right: 5px;"></i> ${state.personal.email}</span>` : ''}
          ${state.personal.address ? `<span><i class="fa-solid fa-location-dot" style="margin-right: 5px;"></i> ${state.personal.address}</span>` : ''}
        </div>
      </div>
    `;
  } else if (layout.includes('sidebar-left')) {
    headerHTML = `
      <div style="display: flex;">
        <div style="width: 35%; background: ${primaryColor}; color: white; padding: 30px 20px;">
          ${state.photo ? `
            <div style="width: 120px; height: 120px; margin: 0 auto 20px; ${getPhotoShapeStyle()}; overflow: hidden; border: 3px solid white;">
              <img src="${state.photo}" alt="Photo" style="width:100%; height:100%; object-fit:cover;"/>
            </div>
          ` : ''}
          <h2 style="font-size: 1.5rem; margin: 0 0 5px 0;">${state.personal.fullName || 'Your Name'}</h2>
          <div style="font-size: 1rem; margin-bottom: 20px; opacity: 0.9;">${state.personal.jobTitle || 'Job Title'}</div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Contact</h3>
            ${state.personal.phone ? `<div style="margin: 5px 0;"><i class="fa-solid fa-phone" style="width: 20px;"></i> ${state.personal.phone}</div>` : ''}
            ${state.personal.email ? `<div style="margin: 5px 0;"><i class="fa-solid fa-envelope" style="width: 20px;"></i> ${state.personal.email}</div>` : ''}
            ${state.personal.address ? `<div style="margin: 5px 0;"><i class="fa-solid fa-location-dot" style="width: 20px;"></i> ${state.personal.address}</div>` : ''}
            ${state.personal.linkedin ? `<div style="margin: 5px 0;"><i class="fa-brands fa-linkedin" style="width: 20px;"></i> ${state.personal.linkedin}</div>` : ''}
            ${state.personal.website ? `<div style="margin: 5px 0;"><i class="fa-solid fa-globe" style="width: 20px;"></i> ${state.personal.website}</div>` : ''}
          </div>
          
          <!-- Skills in sidebar -->
          ${skillsArray.length > 0 ? `
            <div>
              <h3 style="font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Skills</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px;">
                ${skillsArray.map(skill => `
                  <span style="background: rgba(255,255,255,0.2); padding: 3px 10px; border-radius: 15px; font-size: 0.8rem;">${skill}</span>
                `).join('')}
              </div>
            </div>
          ` : ''}
          
          <!-- Languages in sidebar -->
          ${state.languages.length > 0 ? `
            <div style="margin-top: 20px;">
              <h3 style="font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Languages</h3>
              ${state.languages.map(lang => `
                <div style="display: flex; justify-content: space-between; margin: 8px 0;">
                  <span>${lang.title || 'Language'}</span>
                  <span style="opacity: 0.8;">${lang.proficiency || ''}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div style="width: 65%; padding: 30px;">
    `;
    // The closing div will be added in the main content
  } else {
    // Default header
    headerHTML = `
      <div style="background: ${primaryColor}; color: white; padding: 30px 35px; display: flex; align-items: center; gap: 30px;">
        ${state.photo ? `
          <div style="width: 120px; height: 120px; ${getPhotoShapeStyle()}; overflow: hidden; border: 3px solid white; flex-shrink: 0;">
            <img src="${state.photo}" alt="Photo" style="width:100%; height:100%; object-fit:cover;"/>
          </div>
        ` : ''}
        <div style="flex: 1;">
          <h1 style="font-size: 2.2rem; font-weight: 700; margin: 0 0 5px 0;">${state.personal.fullName || 'Your Name'}</h1>
          <div style="font-size: 1.1rem; margin-bottom: 15px; opacity: 0.9;">${state.personal.jobTitle || 'Job Title'}</div>
          <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.9rem;">
            ${state.personal.phone ? `<span><i class="fa-solid fa-phone" style="margin-right: 5px;"></i> ${state.personal.phone}</span>` : ''}
            ${state.personal.email ? `<span><i class="fa-solid fa-envelope" style="margin-right: 5px;"></i> ${state.personal.email}</span>` : ''}
            ${state.personal.address ? `<span><i class="fa-solid fa-location-dot" style="margin-right: 5px;"></i> ${state.personal.address}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }
  
  // Build main content
  if (layout.includes('sidebar-left')) {
    // Start main content for sidebar layout
    mainContentHTML = `
      <!-- Summary -->
      ${state.summary ? `
        <div style="margin-bottom: 25px;">
          <h2 class="section-title">Profile Summary</h2>
          <p class="description-text">${state.summary}</p>
        </div>
      ` : ''}
      
      <!-- Education -->
      ${state.education.length > 0 ? `
        <div style="margin-bottom: 25px;">
          <h2 class="section-title">Education</h2>
          ${state.education.map(edu => `
            <div style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-weight: 700; font-size: 1rem;">${edu.title || 'Degree'}</span>
                <span class="date-badge">${edu.startDate || ''} ${edu.endDate ? '- ' + edu.endDate : ''}</span>
              </div>
              <div class="company-name">${edu.institution || 'Institution'}</div>
              ${edu.description ? `<p class="description-text">${edu.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <!-- Experience -->
      ${state.experience.length > 0 ? `
        <div style="margin-bottom: 25px;">
          <h2 class="section-title">Work Experience</h2>
          ${state.experience.map(exp => `
            <div style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-weight: 700; font-size: 1rem;">${exp.title || 'Position'}</span>
                <span class="date-badge">${exp.startDate || ''} ${exp.endDate ? '- ' + exp.endDate : ''}</span>
              </div>
              <div class="company-name">${exp.institution || 'Company'}</div>
              ${exp.description ? `<p class="description-text">${exp.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <!-- Projects -->
      ${state.projects.length > 0 ? `
        <div style="margin-bottom: 25px;">
          <h2 class="section-title">Projects</h2>
          ${state.projects.map(proj => `
            <div style="margin-bottom: 15px;">
              <div style="font-weight: 700; font-size: 1rem;">${proj.title || 'Project'}</div>
              ${proj.institution ? `<div class="company-name">${proj.institution}</div>` : ''}
              ${proj.description ? `<p class="description-text">${proj.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
    
    // Close the div for sidebar layout
    mainContentHTML = `
      <div style="width: 65%; padding: 30px;">
        ${mainContentHTML}
      </div>
    `;
  } else {
    // Default two-column layout
    mainContentHTML = `
      <div style="padding: 35px;">
        
        <!-- Summary -->
        ${state.summary ? `
          <div style="margin-bottom: 25px;">
            <h2 class="section-title">Profile Summary</h2>
            <p class="description-text">${state.summary}</p>
          </div>
        ` : ''}
        
        <!-- Two Column Layout -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
          
          <!-- Left Column -->
          <div>
            <!-- Education -->
            ${state.education.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h2 class="section-title">Education</h2>
                ${state.education.map(edu => `
                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                      <span style="font-weight: 700; font-size: 1rem;">${edu.title || 'Degree'}</span>
                      <span class="date-badge">${edu.startDate || ''} ${edu.endDate ? '- ' + edu.endDate : ''}</span>
                    </div>
                    <div class="company-name">${edu.institution || 'Institution'}</div>
                    ${edu.description ? `<p class="description-text">${edu.description}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}
            
            <!-- Skills -->
            ${skillsArray.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h2 class="section-title">Skills</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${skillsArray.map(skill => `
                    <span style="background: ${accentColor}20; color: ${primaryColor}; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">${skill}</span>
                  `).join('')}
                </div>
              </div>
            ` : ''}
            
            <!-- Languages -->
            ${state.languages.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h2 class="section-title">Languages</h2>
                ${state.languages.map(lang => `
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-weight: 600;">${lang.title || 'Language'}</span>
                    <span style="color: #666;">${lang.proficiency || ''}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
          
          <!-- Right Column -->
          <div>
            <!-- Experience -->
            ${state.experience.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h2 class="section-title">Work Experience</h2>
                ${state.experience.map(exp => `
                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                      <span style="font-weight: 700; font-size: 1rem;">${exp.title || 'Position'}</span>
                      <span class="date-badge">${exp.startDate || ''} ${exp.endDate ? '- ' + exp.endDate : ''}</span>
                    </div>
                    <div class="company-name">${exp.institution || 'Company'}</div>
                    ${exp.description ? `<p class="description-text">${exp.description}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}
            
            <!-- Projects -->
            ${state.projects.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h2 class="section-title">Projects</h2>
                ${state.projects.map(proj => `
                  <div style="margin-bottom: 15px;">
                    <div style="font-weight: 700; font-size: 1rem;">${proj.title || 'Project'}</div>
                    ${proj.institution ? `<div class="company-name">${proj.institution}</div>` : ''}
                    ${proj.description ? `<p class="description-text">${proj.description}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}
            
            <!-- Additional Contact -->
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
              ${state.personal.linkedin ? `<div style="margin-bottom: 5px;"><i class="fa-brands fa-linkedin" style="color: ${accentColor}; width: 20px;"></i> ${state.personal.linkedin}</div>` : ''}
              ${state.personal.website ? `<div><i class="fa-solid fa-globe" style="color: ${accentColor}; width: 20px;"></i> ${state.personal.website}</div>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Combine all parts
  output.innerHTML = `
    <style>${commonStyles}</style>
    <div class="resume-paper">
      ${headerHTML}
      ${mainContentHTML}
      ${layout.includes('sidebar-left') ? '</div>' : ''}
    </div>
  `;
}

// ============================================
// TEMPLATE PICKER FUNCTIONS
// ============================================

function openTemplatePicker() {
  // Show template selection modal
  alert('Template selection will open here. For now, templates are pre-loaded.');
}

function closeTemplatePicker() {
  // Close template modal
}

function selectTemplateFromPicker(id, label) {
  if (id) {
    state.template = id;
    updatePreview();
    saveToSession();
    
    // Update thumbnail
    const thumbEl = document.getElementById('templatePickThumb');
    const def = TPL_DEFS.find(t => t.id === id);
    if (thumbEl && def) {
      thumbEl.innerHTML = def.render();
      document.getElementById('templatePickLabel').textContent = def.label;
    }
  }
}

// ============================================
// CROP MODAL FUNCTIONS (Optional - can be removed if not needed)
// ============================================

let cropImageSrc = null;

function openCropModal(src) {
  cropImageSrc = src;
  const modal = document.getElementById('cropModalOverlay');
  const img = document.getElementById('cropImg');
  if (modal && img) {
    img.src = src;
    modal.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
  } else {
    // If modal doesn't exist, just set the photo directly
    state.photo = src;
    updatePhotoPreview();
    updatePreview();
    saveToSession();
  }
}

function closeCropModal() {
  const modal = document.getElementById('cropModalOverlay');
  if (modal) {
    modal.classList.add('d-none');
    document.body.style.overflow = '';
  }
}

function applyCrop() {
  if (cropImageSrc) {
    state.photo = cropImageSrc;
    updatePhotoPreview();
    updatePreview();
    saveToSession();
  }
  closeCropModal();
}

// ============================================
// MAKE FUNCTIONS GLOBAL
// ============================================

window.removeEntry = removeEntry;
window.updateEntry = updateEntry;
window.openLoginModal = openLoginModal || function() {};
window.closeLoginModal = closeLoginModal || function() {};
window.signOut = signOut || function() {};
window.toggleUserDropdown = toggleUserDropdown || function() {};
window.saveCurrentToCloud = saveCurrentToCloud || function() {};
window.openTemplatePicker = openTemplatePicker;
window.closeTemplatePicker = closeTemplatePicker;
window.selectTemplateFromPicker = selectTemplateFromPicker;
window.openCropModal = openCropModal;
window.closeCropModal = closeCropModal;
window.applyCrop = applyCrop;
window.state = state;
window.updatePreview = updatePreview;