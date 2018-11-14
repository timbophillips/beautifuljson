"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var defaultColors = {
    BRACE: chalk["default"].yellow,
    BRACKET: chalk["default"].green,
    STRING_KEY: chalk["default"].cyan,
    STRING_LITERAL: chalk["default"].grey,
    COLON: chalk["default"].white,
    COMMA: chalk["default"].white,
    NUMBER_LITERAL: chalk["default"].magenta,
    BOOLEAN_LITERAL: chalk["default"].green,
    NULL_LITERAL: chalk["default"].blue
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
