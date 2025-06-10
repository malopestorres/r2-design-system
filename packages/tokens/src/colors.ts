// Design Tokens — R2 Agência Digital Brand Color Palette
export const colors = {
  // Brand Primary Gradient Palette
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

  // Dark Mode Neutrals
  neutral: {
    950: "#09090B", // Main App Background
    900: "#121215", // Elevate Surface Background
    850: "#18181C", // Card Background
    800: "#222228", // Card Hover Surface
    700: "#2D2D36", // Border Primary
    600: "#3F3F4A", // Border Muted
    500: "#71717A", // Text Muted
    400: "#A1A1AA", // Text Secondary
    300: "#D4D4D8", // Text Subheading
    200: "#E4E4E7", // Text Body Light
    100: "#F4F4F5", // Text Bright
    50: "#FAFAFA",  // Text Pure White
  },

  // Semantic Status Colors
  semantic: {
    success: "#10B981",
    successSoft: "rgba(16, 185, 129, 0.15)",
    warning: "#F59E0B",
    warningSoft: "rgba(245, 158, 11, 0.15)",
    error: "#EF4444",
    errorSoft: "rgba(239, 68, 68, 0.15)",
    info: "#3B82F6",
    infoSoft: "rgba(59, 130, 246, 0.15)",
  },
} as const;
