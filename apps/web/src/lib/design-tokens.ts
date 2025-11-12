// lib/design-tokens.ts
/**
 * Centralized Design System Tokens
 * Use these throughout the application for consistency
 */

export const designTokens = {
  // Color Palette
  colors: {
    primary: {
      50: "#fff5f7",
      100: "#ffe8ec",
      200: "#ffd1d8",
      300: "#ffc4ca",
      400: "#ffa9b1",
      500: "#ff8a95",
      600: "#ff6b7a",
      700: "#ff4d60",
      800: "#e63946",
      900: "#cc2936",
    },
    secondary: {
      50: "#f0f9f9",
      100: "#def1f1",
      200: "#c5e5e5",
      300: "#b8e4e4",
      400: "#9dd9d9",
      500: "#7fcfcf",
      600: "#5eb8b8",
      700: "#4a9999",
      800: "#3a7a7a",
      900: "#2d5f5f",
    },
    accent: {
      cream: "#fef3e1",
      lightPink: "#fbe7e7",
      softGray: "#eaeaea",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },

  // Typography Scale
  typography: {
    // Headings
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl lg:text-4xl font-bold",
    h4: "text-xl md:text-2xl lg:text-3xl font-bold",
    h5: "text-lg md:text-xl lg:text-2xl font-semibold",
    h6: "text-base md:text-lg lg:text-xl font-semibold",

    // Body text
    lead: "text-xl md:text-2xl leading-relaxed",
    body: "text-base md:text-lg leading-relaxed",
    bodySmall: "text-sm md:text-base leading-relaxed",
    caption: "text-xs md:text-sm",

    // Special
    quote: "text-lg md:text-xl italic leading-relaxed",
  },

  // Spacing System
  spacing: {
    // Sections
    section: {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20",
      lg: "py-20 md:py-24 lg:py-32",
    },

    // Containers
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    containerNarrow: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
    containerWide: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",

    // Cards
    card: {
      padding: "p-6 md:p-8 lg:p-10",
      paddingSm: "p-4 md:p-6",
      paddingLg: "p-8 md:p-10 lg:p-12",
    },

    // Gaps
    gap: {
      xs: "gap-2 md:gap-3",
      sm: "gap-3 md:gap-4",
      md: "gap-4 md:gap-6",
      lg: "gap-6 md:gap-8 lg:gap-10",
      xl: "gap-8 md:gap-10 lg:gap-12",
    },
  },

  // Grid System
  grid: {
    cols1: "grid grid-cols-1",
    cols2: "grid grid-cols-1 md:grid-cols-2",
    cols3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    cols4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    cols6: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  },

  // Gradients
  gradients: {
    primary: "bg-gradient-to-br from-pink-400 to-pink-500",
    primaryLight: "bg-gradient-to-br from-pink-200 to-pink-300",
    secondary: "bg-gradient-to-br from-cyan-400 to-teal-400",
    secondaryLight: "bg-gradient-to-br from-secondary-100 to-secondary-200",
    hero: "bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100",
    subtle: "bg-gradient-to-br from-gray-50 to-white",
  },

  // Shadows
  shadows: {
    sm: "shadow-sm hover:shadow-md transition-shadow duration-300",
    md: "shadow-md hover:shadow-lg transition-shadow duration-300",
    lg: "shadow-lg hover:shadow-xl transition-shadow duration-300",
    xl: "shadow-xl hover:shadow-2xl transition-shadow duration-300",
  },

  // Border Radius
  rounded: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    full: "rounded-full",
  },

  // Transitions
  transitions: {
    fast: "transition-all duration-150 ease-in-out",
    base: "transition-all duration-300 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
  },

  // Animation Classes
  animations: {
    fadeIn: "animate-in fade-in duration-700",
    slideInLeft: "animate-in slide-in-from-left duration-500",
    slideInRight: "animate-in slide-in-from-right duration-500",
    scaleIn: "animate-in zoom-in duration-500",
  },
};

// Helper function to combine classes
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// Preset component styles
export const componentPresets = {
  button: {
    primary: cn(
      "bg-primary-400 hover:bg-primary-300 text-gray-900",
      "text-base h-14 font-semibold px-8",
      designTokens.rounded.md,
      designTokens.transitions.base
    ),
    secondary: cn(
      "bg-secondary-100 hover:bg-secondary-200 text-gray-900",
      "text-base h-14 font-semibold px-8",
      designTokens.rounded.md,
      designTokens.transitions.base
    ),
    outline: cn(
      "bg-white hover:bg-gray-50 border-2 border-current",
      "text-base h-14 font-semibold px-8",
      designTokens.rounded.md,
      designTokens.transitions.base
    ),
  },

  card: {
    base: cn(
      "bg-white",
      designTokens.rounded.lg,
      designTokens.shadows.md,
      "border border-gray-100"
    ),
    interactive: cn(
      "bg-white",
      designTokens.rounded.lg,
      designTokens.shadows.md,
      "border border-gray-100",
      "hover:-translate-y-1",
      designTokens.transitions.base
    ),
    colored: (color: "primary" | "secondary" | "accent") => {
      const colorMap = {
        primary: "bg-accent-lightPink",
        secondary: "bg-secondary-100",
        accent: "bg-accent-cream",
      };
      return cn(colorMap[color], designTokens.rounded.lg, "border-none");
    },
  },

  section: {
    base: cn(designTokens.spacing.section.md),
    hero: cn(designTokens.spacing.section.lg, designTokens.gradients.hero),
    colored: (color: "primary" | "secondary" | "neutral") => {
      const colorMap = {
        primary: "bg-accent-lightPink",
        secondary: "bg-secondary-100",
        neutral: "bg-gray-50",
      };
      return cn(designTokens.spacing.section.md, colorMap[color]);
    },
  },

  badge: {
    primary:
      "bg-gradient-to-r from-primary-400 to-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold",
    secondary:
      "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold",
    outline:
      "border-2 border-current px-4 py-1.5 rounded-full text-sm font-semibold",
  },

  icon: {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
};

export default designTokens;
