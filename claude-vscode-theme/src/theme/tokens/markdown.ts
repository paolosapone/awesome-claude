import type { TextmateColors, ThemeContext } from '../../types';

export default function markdown(context: ThemeContext): TextmateColors {
  const { palette, options } = context;
  
  return [
    {
      name: 'Markdown - Headings',
      scope: [
        'markup.heading.markdown',
        'punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown - Bold',
      scope: ['markup.bold.markdown'],
      settings: {
        foreground: palette.orange,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown - Italic',
      scope: ['markup.italic.markdown'],
      settings: {
        foreground: palette.orange,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'Markdown - Code',
      scope: [
        'markup.inline.raw.markdown',
        'markup.fenced_code.block.markdown',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: 'Markdown - Links',
      scope: [
        'markup.underline.link.markdown',
        'string.other.link.title.markdown',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'underline',
      },
    },
    {
      name: 'Markdown - Lists',
      scope: [
        'punctuation.definition.list.begin.markdown',
        'markup.list.unnumbered.markdown',
        'markup.list.numbered.markdown',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'Markdown - Quotes',
      scope: ['markup.quote.markdown'],
      settings: {
        foreground: palette.cloudy,
        fontStyle: options.enableItalics ? 'italic' : '',
      },
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator.markdown'],
      settings: {
        foreground: palette.overlay1,
      },
    },
  ];
}