import type { TextmateColors, ThemeContext } from '../types';
import getBaseTokens from './tokens';

export function getTokenColors(context: ThemeContext): TextmateColors {
  const { options } = context;
  const tokens = getBaseTokens(context);
  
  return tokens.map((token) => {
    if (token.name === 'Comments') return token;
    
    let fontStyle = token.settings.fontStyle || '';
    
    if (!options.italicKeywords && fontStyle.includes('italic')) {
      fontStyle = fontStyle.replace(/italic\s?/g, '').trim();
    }
    
    if (!options.boldKeywords && fontStyle.includes('bold') && token.scope !== 'markup.bold') {
      fontStyle = fontStyle.replace(/bold\s?/g, '').trim();
    }
    
    return {
      ...token,
      settings: {
        ...token.settings,
        fontStyle: fontStyle || undefined,
      },
    };
  });
}