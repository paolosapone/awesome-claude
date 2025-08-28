import type { TextmateColors, ThemeContext } from '../../types';

export default function javascript(context: ThemeContext): TextmateColors {
  const { palette } = context;
  
  return [
    {
      name: 'JS/TS - Exported variables',
      scope: [
        'meta.export variable.other.readwrite',
        'meta.export variable.other.constant',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    {
      name: 'JS/TS - Object properties',
      scope: [
        'variable.other.property.js',
        'variable.other.property.ts',
        'variable.other.property.tsx',
        'variable.other.property.jsx',
        'meta.object-literal.key',
      ],
      settings: {
        foreground: palette.cloudy,
      },
    },
    {
      name: 'JS/TS - Constants',
      scope: [
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.constant.tsx',
        'variable.other.constant.jsx',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'JS/TS - Template literals',
      scope: [
        'string.template',
        'punctuation.definition.template-expression',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: 'JS/TS - Template literal expressions',
      scope: [
        'meta.template.expression',
        'meta.embedded.line',
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: 'JSDoc parameters',
      scope: [
        'variable.other.jsdoc',
        'comment.block.documentation variable.other',
      ],
      settings: {
        foreground: palette.crail,
        fontStyle: '',
      },
    },
    {
      name: 'JSDoc keywords',
      scope: [
        'storage.type.class.jsdoc',
        'punctuation.definition.block.tag.jsdoc',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: '',
      },
    },
    {
      name: 'JS/TS - Arrow functions',
      scope: [
        'storage.type.function.arrow',
        'keyword.operator.arrow',
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: 'JS/TS - Async/Await',
      scope: [
        'storage.modifier.async',
        'keyword.control.flow.await',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JS/TS - Decorators',
      scope: [
        'meta.decorator punctuation.decorator',
        'meta.decorator variable.other.readwrite',
        'meta.decorator entity.name.function',
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JS/TS - Import/Export',
      scope: [
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.as',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JS/TS - Module',
      scope: [
        'support.type.object.module',
        'support.type.object.console',
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: 'JS/TS - Type parameters',
      scope: [
        'meta.type.parameters',
        'entity.name.type.parameter',
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JS/TS - Operators',
      scope: [
        'keyword.operator.expression.typeof',
        'keyword.operator.expression.instanceof',
        'keyword.operator.expression.in',
        'keyword.operator.expression.of',
        'keyword.operator.expression.keyof',
        'keyword.operator.expression.is',
      ],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: 'JSX/TSX - Tags',
      scope: [
        'entity.name.tag.jsx',
        'entity.name.tag.tsx',
        'support.class.component.jsx',
        'support.class.component.tsx',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'JSX/TSX - Attributes',
      scope: [
        'entity.other.attribute-name.jsx',
        'entity.other.attribute-name.tsx',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JSX/TSX - Embedded expressions',
      scope: [
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: 'JS/TS - Destructuring',
      scope: [
        'meta.object-binding-pattern variable.other.readwrite',
        'meta.array-binding-pattern variable.other.readwrite',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    {
      name: 'JS/TS - Null/Undefined',
      scope: [
        'constant.language.null',
        'constant.language.undefined',
      ],
      settings: {
        foreground: palette.purple,
      },
    },
  ];
}