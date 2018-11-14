"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = __importStar(require("chalk"));
var defaultColors = {
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
exports.colorize = function (tokens, colorOptions) {
    var colors = colorOptions || {};
    var str = '';
    var colorFn;
    tokens.forEach(function (token) {
        colorFn = colors[token.type] || defaultColors[token.type];
        str += colorFn ? colorFn(token.value) : token.value;
    });
    return str;
};
