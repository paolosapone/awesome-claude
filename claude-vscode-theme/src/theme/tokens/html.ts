import type { TextmateColors, ThemeContext } from '../../types';

export default function html(context: ThemeContext): TextmateColors {
  const { palette, options } = context;
  
  return [
    {
      name: 'HTML - Tags',
      scope: [
        'entity.name.tag.html',
        'entity.name.tag.xml',
        'entity.name.tag.localname.xml',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'HTML - Tag brackets',
      scope: [
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
      ],
      settings: {
        foreground: palette.overlay1,
      },
    },
    {
      name: 'HTML - Attributes',
      scope: [
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.xml',
      ],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'HTML - Attribute values',
      scope: [
        'string.quoted.double.html',
        'string.quoted.single.html',
        'string.unquoted.html',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: 'HTML - Entities',
      scope: [
        'constant.character.entity.html',
        'constant.character.entity.xml',
      ],
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: 'HTML - Doctype',
      scope: [
        'meta.tag.metadata.doctype.html',
        'entity.name.tag.doctype.html',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'HTML - CDATA',
      scope: [
        'string.unquoted.cdata.xml',
        'punctuation.definition.string.begin.xml',
        'punctuation.definition.string.end.xml',
      ],
      settings: {
        foreground: palette.cloudy,
      },
    },
    {
      name: 'HTML - Script tags',
      scope: [
        'entity.name.tag.script.html',
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: 'HTML - Style tags',
      scope: [
        'entity.name.tag.style.html',
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: 'HTML - Special attributes',
      scope: [
        'entity.other.attribute-name.id.html',
        'entity.other.attribute-name.class.html',
      ],
      settings: {
        foreground: palette.crail,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'HTML - Event attributes',
      scope: [
        'entity.other.attribute-name.event.html',
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'HTML - Vue/React directives',
      scope: [
        'entity.other.attribute-name.directive',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
  ];
}