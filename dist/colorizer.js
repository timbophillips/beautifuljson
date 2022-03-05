"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorize = void 0;
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
var colorize = function (tokens, colorOptions) {
    var colors = colorOptions || {};
    var str = '';
    var colorFn;
    tokens.forEach(function (token) {
        colorFn = colors[token.type] || defaultColors[token.type];
        str += colorFn ? colorFn(token.value) : token.value;
    });
    return str;
};
exports.colorize = colorize;
