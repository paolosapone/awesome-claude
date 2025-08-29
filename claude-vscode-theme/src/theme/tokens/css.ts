import type { TextmateColors, ThemeContext } from '../../types';

export default function css(context: ThemeContext): TextmateColors {
  const { palette, options } = context;
  
  return [
    {
      name: 'CSS - Selectors',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.class.scss',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.id.scss',
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: 'CSS - Element selectors',
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.scss',
        'entity.name.tag.less',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'CSS - Pseudo classes/elements',
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'CSS - Properties',
      scope: [
        'support.type.property-name.css',
        'support.type.property-name.scss',
        'meta.property-name.css',
        'meta.property-name.scss',
      ],
      settings: {
        foreground: palette.cloudy,
      },
    },
    {
      name: 'CSS - Property values',
      scope: [
        'support.constant.property-value.css',
        'support.constant.property-value.scss',
        'meta.property-value.css',
        'meta.property-value.scss',
      ],
      settings: {
        foreground: palette.orange,
      },
    },
    {
      name: 'CSS - Units',
      scope: [
        'keyword.other.unit.css',
        'keyword.other.unit.scss',
        'constant.numeric.css',
        'constant.numeric.scss',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'CSS - Colors',
      scope: [
        'constant.other.color.css',
        'constant.other.color.scss',
        'support.constant.color.css',
        'support.constant.color.scss',
      ],
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: 'CSS - Functions',
      scope: [
        'support.function.css',
        'support.function.scss',
        'meta.function.css',
        'meta.function.scss',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'CSS - Variables',
      scope: [
        'variable.css',
        'variable.scss',
        'variable.argument.css',
        'variable.argument.scss',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    {
      name: 'CSS - Important',
      scope: [
        'keyword.other.important.css',
        'keyword.other.important.scss',
      ],
      settings: {
        foreground: palette.red,
        fontStyle: 'bold',
      },
    },
    {
      name: 'CSS - At-rules',
      scope: [
        'keyword.control.at-rule.css',
        'keyword.control.at-rule.scss',
        'meta.at-rule.css',
        'meta.at-rule.scss',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'CSS - Media features',
      scope: [
        'support.type.property-name.media.css',
        'support.type.property-name.media.scss',
      ],
      settings: {
        foreground: palette.cloudy,
      },
    },
    {
      name: 'SCSS - Variables',
      scope: [
        'variable.scss',
        'variable.sass',
        'punctuation.definition.variable.scss',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    {
      name: 'SCSS - Mixins',
      scope: [
        'entity.name.function.scss',
        'entity.other.attribute-name.placeholder-selector.scss',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'SCSS - Nesting',
      scope: [
        'entity.other.attribute-name.parent-selector.css',
        'entity.name.tag.reference.scss',
      ],
      settings: {
        foreground: palette.red,
      },
    },
  ];
}