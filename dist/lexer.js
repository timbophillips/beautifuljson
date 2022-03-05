"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokens = void 0;
var tokenTypes = [
    { regex: /^\s+/, tokenType: 'WHITESPACE' },
    { regex: /^[{}]/, tokenType: 'BRACE' },
    { regex: /^[\[\]]/, tokenType: 'BRACKET' },
    { regex: /^:/, tokenType: 'COLON' },
    { regex: /^,/, tokenType: 'COMMA' },
    { regex: /^-?\d+(?:\.\d+)?(?:e[+\-]?\d+)?/i, tokenType: 'NUMBER_LITERAL' },
    { regex: /^"(?:\\.|[^"\\])*"(?=\s*:)/, tokenType: 'STRING_KEY' },
    { regex: /^"(?:\\.|[^"\\])*"/, tokenType: 'STRING_LITERAL' },
    { regex: /^true|false/, tokenType: 'BOOLEAN_LITERAL' },
    { regex: /^null/, tokenType: 'NULL_LITERAL' }
];
var getTokens = function (json) {
    var input = typeof json === 'string' ? json : JSON.stringify(json);
    var tokens = [];
    var foundToken;
    var match;
    var i;
    var numTokenTypes = tokenTypes.length;
    do {
        foundToken = false;
        for (i = 0; i < numTokenTypes; i++) {
            match = tokenTypes[i].regex.exec(input);
            if (match) {
                tokens.push({ type: tokenTypes[i].tokenType, value: match[0] });
                input = input.substring(match[0].length);
                foundToken = true;
                break;
            }
        }
    } while (input.length > 0 && foundToken);
    return tokens;
};
exports.getTokens = getTokens;
