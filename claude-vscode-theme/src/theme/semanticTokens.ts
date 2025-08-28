import type { SemanticTokenRule, ThemeContext } from '../types';

export function getSemanticTokens(context: ThemeContext): SemanticTokenRule {
  const { palette, options } = context;
  
  return {
    // Classes
    'class': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    'class.defaultLibrary': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    
    // Enums
    'enum': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    'enumMember': {
      foreground: palette.teal,
    },
    
    // Functions
    'function': {
      foreground: palette.orange,
      fontStyle: 'italic',
    },
    'function.defaultLibrary': {
      foreground: palette.orange,
      fontStyle: 'italic',
    },
    'method': {
      foreground: palette.orange,
      fontStyle: 'italic',
    },
    
    // Interfaces
    'interface': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    
    // Keywords
    'keyword': {
      foreground: palette.purple,
      fontStyle: options.boldKeywords ? 'bold' : '',
    },
    
    // Macros
    'macro': {
      foreground: palette.pink,
    },
    
    // Namespaces
    'namespace': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    
    // Parameters
    'parameter': {
      foreground: palette.crail,
    },
    
    // Properties
    'property': {
      foreground: palette.cloudy,
    },
    'property.readonly': {
      foreground: palette.cloudy,
    },
    
    // Strings
    'string': {
      foreground: palette.green,
    },
    
    // Types
    'type': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    'type.defaultLibrary': {
      foreground: palette.blue,
      fontStyle: 'italic',
    },
    'typeParameter': {
      foreground: palette.yellow,
      fontStyle: 'italic',
    },
    
    // Variables
    'variable': {
      foreground: palette.text,
    },
    'variable.readonly': {
      foreground: palette.yellow,
    },
    'variable.defaultLibrary': {
      foreground: palette.purple,
      fontStyle: 'italic',
    },
    
    // Comments
    'comment': {
      foreground: palette.overlay2,
      fontStyle: options.italicComments ? 'italic' : '',
    },
    
    // Decorators
    'decorator': {
      foreground: palette.pink,
      fontStyle: 'italic',
    },
    
    // Operators
    'operator': {
      foreground: palette.teal,
    },
    
    // Regular expressions
    'regexp': {
      foreground: palette.pink,
    },
    
    // Numbers
    'number': {
      foreground: palette.yellow,
    },
    
    // Booleans
    'boolean': {
      foreground: palette.yellow,
    },
    
    // Events
    'event': {
      foreground: palette.orange,
    },
    
    // Modifiers
    '*.async': {
      fontStyle: 'italic',
    },
    '*.modification': {
      fontStyle: 'italic',
    },
    '*.declaration': {
      fontStyle: '',
    },
    '*.readonly': {
      fontStyle: '',
    },
    '*.static': {
      fontStyle: 'italic',
    },
    '*.deprecated': {
      fontStyle: 'strikethrough',
    },
    '*.abstract': {
      fontStyle: 'italic',
    },
  };
}