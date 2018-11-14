"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var lexer_1 = require("./lexer");
var colorizer_1 = require("./colorizer");
var colors = {
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
var jsonColorizer = function (jsonString, options) {
    return colorizer_1.colorize(lexer_1.getTokens(jsonString), options);
};
exports.beautifulJSON = function (jsonStringOrObject) {
    var json = {};
    try {
        switch (typeof jsonStringOrObject) {
            case "string":
                return jsonColorizer(JSON.stringify(JSON.parse(jsonStringOrObject), null, 2), colors);
            case "object":
                return jsonColorizer(JSON.stringify(jsonStringOrObject, null, 2), colors);
            default:
                return jsonStringOrObject;
        }
    }
    catch (error) {
        // any problems just send back what was sent in unchanged
        return jsonStringOrObject;
    }
};
exports.consoleLogBeautifulJSON = function (jsonStringOrObject) {
    console.log(exports.beautifulJSON(jsonStringOrObject));
};
