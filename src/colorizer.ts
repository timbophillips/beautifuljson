import * as chalk from "chalk";
import {ColorSupport, Chalk} from 'chalk';

const defaultColors: { [index: string]: Chalk & { supportsColor: ColorSupport; } } = {
  BRACE: chalk.default.yellow,
  BRACKET: chalk.default.green,
  STRING_KEY: chalk.default.cyan,
  STRING_LITERAL: chalk.default.grey,
  COLON: chalk.default.white,
  COMMA: chalk.default.white,
  NUMBER_LITERAL: chalk.default.magenta,
  BOOLEAN_LITERAL: chalk.default.green,
  NULL_LITERAL: chalk.default.blue
};

export const colorize = (tokens: Array<string>, colorOptions?: { [index: string]: Chalk & { supportsColor: ColorSupport; } }) => {
  const colors = colorOptions || {};
  let str: string = '';
  let colorFn: any;

  tokens.forEach(function (token: any) {
    colorFn = colors[token.type] || defaultColors[token.type]
    str += colorFn ? colorFn(token.value) : token.value;
  });

  return str;
};
