import * as chalk from "chalk";
import { ColorSupport, Chalk, ChalkOptions } from 'chalk';
import { getTokens } from './lexer';
import { colorize } from './colorizer';

const colors: { [index: string]: Chalk & { supportsColor: ColorSupport; } } = {
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

const jsonColorizer = (jsonString: string, options: any) => {
  return colorize(getTokens(jsonString), options);
};

export const colorjson = (jsonStringOrObject: object | string): string => {

  let json: object = {};

  try {
    switch (typeof jsonStringOrObject) {
      case "string":
        return jsonColorizer(
          JSON.stringify(JSON.parse(jsonStringOrObject as string), null, 2),
          colors
        );
      case "object":
        return jsonColorizer(
          JSON.stringify(jsonStringOrObject as object, null, 2),
          colors
        );
      default:
        return jsonStringOrObject as string;
    }
  } catch (error) {
    // any problems just send back what was sent in unchanged
    return jsonStringOrObject as string;
  }
};