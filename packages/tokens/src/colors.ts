// Design Tokens — R2 Agência Digital Brand Color Palette (Dark & Light Themes)
export const colors = {
  // Brand Primary Palette & Gradient
  brand: {
    50: "#FFF4ED",
    100: "#FFE6D5",
    200: "#FFC8AA",
    300: "#FFA375",
    400: "#FF7D40",
    500: "#FF5722", // R2 Agência Primary Orange
    600: "#FF3D00", // Vibrant Red-Orange
    700: "#E63300",
    800: "#CC2500",
    900: "#991B00",
    gradient: "linear-gradient(135deg, #FF6B00 0%, #FF3D00 100%)",
    glow: "rgba(255, 87, 34, 0.4)",
  },

  // Dark Theme Neutrals
  dark: {
    950: "#09090B", // Main App Background
    900: "#121215", // Elevated Surface
    850: "#18181C", // Card Background
    800: "#222228", // Card Hover Surface
    700: "#2D2D36", // Border Primary
    600: "#3F3F4A", // Border Muted
    500: "#71717A", // Text Muted
    400: "#A1A1AA", // Text Secondary
    50: "#FAFAFA",  // Text Primary
  },

  // Light Theme Neutrals
  light: {
    50: "#FFFFFF",  // Main App Background (Pure White)
    100: "#F4F4F5", // Elevated Surface Background
    200: "#E4E4E7", // Card Background
    300: "#D4D4D8", // Card Hover Surface
    400: "#A1A1AA", // Border Primary
    500: "#71717A", // Text Muted
    700: "#3F3F46", // Text Secondary
    900: "#18181B", // Text Primary (Dark Ink)
  },

  // Semantic Status Colors
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;
