import type { TextmateColors, ThemeContext } from '../../types';

export default function python(context: ThemeContext): TextmateColors {
  const { palette } = context;
  
  return [
    {
      name: 'Python - Self parameter',
      scope: [
        'variable.language.special.self.python',
        'variable.parameter.function.language.special.self.python',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Magic methods',
      scope: [
        'support.function.magic.python',
        'entity.name.function.decorator.python',
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - F-string',
      scope: [
        'string.interpolated.python',
        'string.quoted.single.format.python',
        'string.quoted.double.format.python',
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: 'Python - F-string expressions',
      scope: [
        'meta.interpolation.python',
        'punctuation.definition.interpolation.python',
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: 'Python - Decorators',
      scope: [
        'entity.name.function.decorator.python',
        'meta.function.decorator.python',
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Built-in functions',
      scope: [
        'support.function.builtin.python',
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: 'Python - Built-in types',
      scope: [
        'support.type.python',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Class definition',
      scope: [
        'entity.name.type.class.python',
        'meta.class.python entity.name.type.class',
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Function parameters',
      scope: [
        'variable.parameter.function.python',
        'meta.function.parameters.python',
      ],
      settings: {
        foreground: palette.crail,
      },
    },
    {
      name: 'Python - Type hints',
      scope: [
        'meta.function.return-type.python',
        'meta.function.parameters.annotation.python',
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Docstrings',
      scope: [
        'string.quoted.docstring.multi.python',
        'string.quoted.docstring.single.python',
      ],
      settings: {
        foreground: palette.cloudy,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Lambda',
      scope: [
        'keyword.control.flow.lambda.python',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Exception',
      scope: [
        'support.type.exception.python',
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'Python - Import',
      scope: [
        'keyword.control.import.python',
        'keyword.control.import.from.python',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Global/Nonlocal',
      scope: [
        'storage.modifier.global.python',
        'storage.modifier.nonlocal.python',
      ],
      settings: {
        foreground: palette.purple,
        fontStyle: 'italic',
      },
    },
  ];
}