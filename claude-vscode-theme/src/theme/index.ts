import { palettes, ansiPalettes, type ThemeVariant } from './palette';
import type { ThemeContext, ThemeOptions, CompiledTheme } from '../types';
import { getTokenColors } from './tokenColors';
import { getSemanticTokens } from './semanticTokens';
import { getUiColors } from './uiColors';

export const defaultOptions: ThemeOptions = {
  accent: 'crail',
  italicComments: true,
  italicKeywords: true,
  boldKeywords: true,
  bracketMode: 'rainbow',
  workbenchMode: 'default',
};

export function compileTheme(
  variant: ThemeVariant = 'dark',
  options: ThemeOptions = defaultOptions
): CompiledTheme {
  const palette = palettes[variant];
  const ansiColors = ansiPalettes[variant];
  
  const context: ThemeContext = {
    variant,
    palette,
    ansiColors,
    options,
  };
  
  // Determine theme name and type
  const themeNames = {
    'dark': 'Claude Dark',
    'dark-high-contrast': 'Claude Dark High Contrast',
  };
  
  const isDark = variant.includes('dark');
  const themeName = themeNames[variant];
  
  return {
    name: themeName,
    type: isDark ? 'dark' : 'light',
    colors: getUiColors(context),
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokens(context),
    tokenColors: getTokenColors(context),
  };
}