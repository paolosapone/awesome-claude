#!/usr/bin/env tsx

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { compileTheme, defaultOptions } from './src/theme';
import type { ThemeVariant } from './src/theme/palette';
import type { ThemeOptions } from './src/types';

const variants: ThemeVariant[] = ['dark', 'dark-high-contrast'];

async function generateThemes() {
  const themesDir = join(process.cwd(), 'themes');
  
  // Create themes directory
  await mkdir(themesDir, { recursive: true });
  
  console.log('🎨 Generating Claude themes...');
  
  const fileNames = {
    'dark': 'claude-dark.json',
    'dark-high-contrast': 'claude-dark-high-contrast.json',
  };
  
  for (const variant of variants) {
    const theme = compileTheme(variant, defaultOptions);
    const filename = fileNames[variant];
    const filepath = join(themesDir, filename);
    
    await writeFile(filepath, JSON.stringify(theme, null, 2));
    console.log(`✅ Generated ${filename}`);
  }
  
  console.log('🚀 All themes generated successfully!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateThemes().catch(console.error);
}

export default generateThemes;