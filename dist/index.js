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
exports.consoleLogBeautifulJSON = exports.beautifulJSON = void 0;
var chalk = __importStar(require("chalk"));
var lexer_1 = require("./lexer");
var colorizer_1 = require("./colorizer");
var colors = {
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
var jsonColorizer = function (jsonString, options) {
    return (0, colorizer_1.colorize)((0, lexer_1.getTokens)(jsonString), options);
};
var beautifulJSON = function (jsonStringOrObject) {
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
exports.beautifulJSON = beautifulJSON;
var consoleLogBeautifulJSON = function (jsonStringOrObject) {
    console.log((0, exports.beautifulJSON)(jsonStringOrObject));
};
exports.consoleLogBeautifulJSON = consoleLogBeautifulJSON;
