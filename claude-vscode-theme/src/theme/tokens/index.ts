import type { TextmateColors, ThemeContext } from '../../types';
import javascript from './javascript';
import python from './python';
import css from './css';
import html from './html';
import markdown from './markdown';
import json from './json';
import yaml from './yaml';
import rust from './rust';
import golang from './golang';
import java from './java';
import cpp from './cpp';
import csharp from './csharp';
import php from './php';
import ruby from './ruby';
import shell from './shell';

export default function getBaseTokens(context: ThemeContext): TextmateColors {
  const { palette, options } = context;
  const accent = palette[options.accent];
  
  const baseTokens: TextmateColors = [
    // Basic text and variables
    {
      name: 'Basic text & variable names',
      scope: [
        'text',
        'source',
        'variable.other.readwrite',
        'punctuation.definition.variable',
      ],
      settings: {
        foreground: palette.text,
      },
    },
    
    // Comments
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: palette.overlay2,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Strings
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: {
        foreground: palette.green,
      },
    },
    
    // String escapes and special characters
    {
      name: 'String escapes',
      scope: ['constant.character.escape', 'constant.other.placeholder'],
      settings: {
        foreground: palette.pink,
      },
    },
    
    // Numbers and constants
    {
      name: 'Numbers and constants',
      scope: [
        'constant.numeric',
        'constant.language',
        'constant.language.boolean',
        'constant.language.null',
        'constant.language.undefined',
        'variable.other.constant',
        'entity.name.constant',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    
    // Keywords
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.word',
        'keyword.operator.new',
        'storage.type',
        'storage.modifier',
        'variable.language.this',
        'variable.language.super',
        'punctuation.definition.keyword',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'bold italic' : 'bold',
      },
    },
    
    // Operators
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'punctuation.accessor',
        'punctuation.separator',
        'punctuation.terminator',
        'meta.brace',
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    
    // Functions
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'support.function',
        'variable.function',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Classes and types
    {
      name: 'Classes and types',
      scope: [
        'entity.name.class',
        'entity.name.type',
        'entity.other.inherited-class',
        'support.class',
        'support.type',
        'entity.name.namespace',
        'entity.name.module',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Interfaces and traits
    {
      name: 'Interfaces',
      scope: [
        'entity.name.interface',
        'entity.name.trait',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Enums
    {
      name: 'Enums',
      scope: ['entity.name.enum'],
      settings: {
        foreground: palette.blue,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Enum members
    {
      name: 'Enum members',
      scope: [
        'variable.other.enummember',
        'constant.other.enum',
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    
    // Parameters
    {
      name: 'Parameters',
      scope: [
        'variable.parameter',
        'meta.function.parameters',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    
    // Properties
    {
      name: 'Object properties',
      scope: [
        'variable.other.property',
        'meta.property.object',
        'entity.name.tag.yaml',
        'support.type.property-name',
      ],
      settings: {
        foreground: palette.cloudy,
      },
    },
    
    // Decorators and annotations
    {
      name: 'Decorators',
      scope: [
        'meta.decorator',
        'meta.annotation',
        'punctuation.decorator',
        'punctuation.definition.decorator',
        'storage.type.annotation',
      ],
      settings: {
        foreground: palette.pink,
      },
    },
    
    // Regular expressions
    {
      name: 'Regular expressions',
      scope: [
        'string.regexp',
        'constant.regexp',
        'constant.character.character-class.regexp',
        'constant.other.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: palette.pink,
      },
    },
    
    // Tags (HTML/XML)
    {
      name: 'Tags',
      scope: [
        'entity.name.tag',
        'punctuation.definition.tag',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    
    // Attributes
    {
      name: 'Attributes',
      scope: [
        'entity.other.attribute-name',
        'entity.other.attribute',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Support
    {
      name: 'Support',
      scope: [
        'support.constant',
        'support.variable',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    
    // Invalid
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: palette.white,
        fontStyle: 'bold underline',
      },
    },
    
    // Markup headings
    {
      name: 'Markup headings',
      scope: [
        'markup.heading',
        'punctuation.definition.heading',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'bold',
      },
    },
    
    // Markup bold
    {
      name: 'Markup bold',
      scope: ['markup.bold'],
      settings: {
        foreground: palette.orange,
        fontStyle: 'bold',
      },
    },
    
    // Markup italic
    {
      name: 'Markup italic',
      scope: ['markup.italic'],
      settings: {
        foreground: palette.orange,
        fontStyle: 'italic',
      },
    },
    
    // Markup code
    {
      name: 'Markup code',
      scope: [
        'markup.inline.raw',
        'markup.raw',
        'markup.fenced_code',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    
    // Markup links
    {
      name: 'Markup links',
      scope: [
        'markup.underline.link',
        'string.other.link',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'underline',
      },
    },
    
    // Markup lists
    {
      name: 'Markup lists',
      scope: [
        'markup.list',
        'punctuation.definition.list',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    
    // Markup quotes
    {
      name: 'Markup quotes',
      scope: ['markup.quote'],
      settings: {
        foreground: palette.cloudy,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Punctuation
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'meta.brace.round',
        'meta.brace.square',
        'meta.brace.curly',
        'punctuation.section',
        'punctuation.definition.parameters',
        'punctuation.definition.arguments',
      ],
      settings: {
        foreground: palette.overlay1,
      },
    },
    
    // Storage modifiers
    {
      name: 'Storage modifiers',
      scope: [
        'storage.modifier.async',
        'storage.modifier.const',
        'storage.modifier.static',
        'storage.modifier.readonly',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Variable special
    {
      name: 'Special variables',
      scope: [
        'variable.language',
        'variable.other.predefined',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    
    // Diff
    {
      name: 'Diff added',
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: 'Diff removed',
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'Diff changed',
      scope: ['markup.changed'],
      settings: {
        foreground: palette.yellow,
      },
    },
  ];
  
  // Merge with language-specific tokens
  return [
    ...baseTokens,
    ...javascript(context),
    ...python(context),
    ...css(context),
    ...html(context),
    ...markdown(context),
    ...json(context),
    ...yaml(context),
    ...rust(context),
    ...golang(context),
    ...java(context),
    ...cpp(context),
    ...csharp(context),
    ...php(context),
    ...ruby(context),
    ...shell(context),
  ];
}