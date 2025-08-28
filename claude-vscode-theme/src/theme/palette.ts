export interface ClaudePalette {
  // Brand colors
  crail: string;
  cloudy: string;
  pampas: string;
  white: string;

  // Syntax highlighting colors
  orange: string;
  blue: string;
  green: string;
  purple: string;
  red: string;
  yellow: string;
  teal: string;
  pink: string;

  // UI/Base colors
  base: string;
  mantle: string;
  crust: string;
  surface0: string;
  surface1: string;
  surface2: string;
  overlay0: string;
  overlay1: string;
  overlay2: string;

  // Text colors
  text: string;
  subtext0: string;
  subtext1: string;
}


export const darkPalette: ClaudePalette = {
  // Brand colors adapted for dark theme
  crail: "#E07A47", // Warmer, darker orange
  cloudy: "#9C9893", // Muted gray for dark backgrounds
  pampas: "#2A2A2A", // Dark equivalent
  white: "#FFFFFF",

  // Syntax highlighting colors - vibrant but not harsh
  orange: "#FFA65D",
  blue: "#7AB8FF",
  green: "#86E89A",
  purple: "#C79BFF",
  red: "#FF7A7A",
  yellow: "#FFDF61",
  teal: "#5DE4FA",
  pink: "#FF85C8",

  // UI/Base colors - dark theme
  base: "#141414",
  mantle: "#1A1A1A", 
  crust: "#202020",
  surface0: "#2A2A2A",
  surface1: "#353535",
  surface2: "#424242",
  overlay0: "#5E5E5E",
  overlay1: "#7A7A7A",
  overlay2: "#969696",

  // Text colors - light on dark
  text: "#E4E4E4",
  subtext0: "#D0D0D0",
  subtext1: "#B8B8B8",
};

export const darkHighContrastPalette: ClaudePalette = {
  // Brand colors - high contrast dark
  crail: "#FF8C42", // Brighter orange for dark backgrounds
  cloudy: "#B8B8B8",
  pampas: "#1A1A1A", 
  white: "#FFFFFF",

  // Syntax highlighting colors - maximum visibility on dark
  orange: "#FFBF7A",
  blue: "#8DD1FF",
  green: "#9FFAAF",
  purple: "#D4ABFF",
  red: "#FF9999",
  yellow: "#FFED7A",
  teal: "#7AEFFF",
  pink: "#FF99D6",

  // UI/Base colors - high contrast dark
  base: "#000000",
  mantle: "#0A0A0A",
  crust: "#121212",
  surface0: "#1C1C1C",
  surface1: "#282828",
  surface2: "#363636",
  overlay0: "#525252",
  overlay1: "#6E6E6E",
  overlay2: "#8A8A8A",

  // Text colors - high contrast light on dark
  text: "#FFFFFF",
  subtext0: "#F0F0F0",
  subtext1: "#E0E0E0",
};

// ANSI colors for terminal
export interface AnsiColors {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
}


export const darkAnsi: { normal: AnsiColors; bright: AnsiColors } = {
  normal: {
    black: "#1E1E1E",
    red: "#F87171",
    green: "#7BD88F",
    yellow: "#FCD34D",
    blue: "#6CABF7",
    magenta: "#B68BF7",
    cyan: "#4DD4E8",
    white: "#9C9893",
  },
  bright: {
    black: "#6A6A6A",
    red: "#FFA8A8",
    green: "#9FFFAF",
    yellow: "#FFED7D",
    blue: "#92D5FF",
    magenta: "#D6BBFF",
    cyan: "#7DFFFF",
    white: "#D4D4D4",
  },
};

export const darkHighContrastAnsi: { normal: AnsiColors; bright: AnsiColors } = {
  normal: {
    black: "#0D0D0D",
    red: "#FF8A8A",
    green: "#8FE99F",
    yellow: "#FFE066",
    blue: "#82C7FF",
    magenta: "#C49BFF",
    cyan: "#66E8FF",
    white: "#B8B8B8",
  },
  bright: {
    black: "#5A5A5A",
    red: "#FFAAAA",
    green: "#AAFFBB",
    yellow: "#FFF099",
    blue: "#AADDFF",
    magenta: "#DDBBFF",
    cyan: "#99FFFF",
    white: "#F0F0F0",
  },
};

export type ThemeVariant = 'dark' | 'dark-high-contrast';

export const palettes = {
  'dark': darkPalette,
  'dark-high-contrast': darkHighContrastPalette,
};

export const ansiPalettes = {
  'dark': darkAnsi,
  'dark-high-contrast': darkHighContrastAnsi,
};