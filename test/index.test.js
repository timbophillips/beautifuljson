"use strict";
exports.__esModule = true;
var lib_1 = require("../lib");
lib_1.consoleLogBeautifulJSON({
    name: "Tim",
    status: "Legend"
});
console.log(lib_1.beautifulJSON({
    name: "Ben",
    status: "Not bad"
}));
lib_1.consoleLogBeautifulJSON('{"name":"Katie","status":"Average"}');
