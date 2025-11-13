// lib/design-tokens.ts
/**
 * Centralized Design System Tokens
 * Primary color: #ed1651 (Pink Red)
 * Supporting colors: White (#ffffff), Black (#000000)
 */

export const designTokens = {
  // Color Palette
  colors: {
    primary: {
      50: "#fef2f5",
      100: "#fce4ea",
      200: "#fac9d5",
      300: "#f7aec0",
      400: "#f282a0",
      500: "#ed1651", // Main brand color
      600: "#d41348",
      700: "#bb113f",
      800: "#9b0e34",
      900: "#7c0b2a",
    },
    secondary: {
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
    accent: {
      lightPink: "#fef2f5",
      softGray: "#f5f5f5",
      darkGray: "#1a1a1a",
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
    primary: "bg-gradient-to-br from-primary-500 to-primary-600",
    primaryLight: "bg-gradient-to-br from-primary-50 to-primary-100",
    primarySubtle: "bg-gradient-to-br from-white via-primary-50 to-primary-100",
    dark: "bg-gradient-to-br from-gray-900 to-gray-800",
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
      "bg-primary-500 hover:bg-primary-600 text-white",
      "text-base h-14 font-semibold px-8",
      designTokens.rounded.md,
      designTokens.transitions.base
    ),
    secondary: cn(
      "bg-gray-900 hover:bg-gray-800 text-white",
      "text-base h-14 font-semibold px-8",
      designTokens.rounded.md,
      designTokens.transitions.base
    ),
    outline: cn(
      "bg-white hover:bg-gray-50 border-2 border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600",
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
      "border border-gray-200"
    ),
    interactive: cn(
      "bg-white",
      designTokens.rounded.lg,
      designTokens.shadows.md,
      "border border-gray-200",
      "hover:-translate-y-1",
      designTokens.transitions.base
    ),
    colored: (color: "primary" | "secondary" | "accent" | "pink") => {
      const colorMap = {
        primary: "bg-primary-50",
        secondary: "bg-gray-100",
        pink: "bg-[#FBE7E7]",
        accent: "bg-accent-lightPink",
      };
      return cn(colorMap[color], "border-none");
    },
  },

  section: {
    base: cn(designTokens.spacing.section.md),
    hero: cn(
      designTokens.spacing.section.lg,
      designTokens.gradients.primarySubtle
    ),
    colored: (color: "primary" | "secondary" | "neutral") => {
      const colorMap = {
        primary: "bg-primary-50",
        secondary: "bg-gray-900",
        neutral: "bg-gray-50",
      };
      return cn(designTokens.spacing.section.md, colorMap[color]);
    },
  },

  badge: {
    primary:
      "bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold",
    secondary:
      "bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold",
    outline:
      "border-2 border-primary-500 text-primary-500 px-4 py-1.5 rounded-full text-sm font-semibold",
  },

  icon: {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
};

export default designTokens;
