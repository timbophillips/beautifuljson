#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var commandLineArgs = process.argv.slice(2);
// Promise based function to extract the (hopefully JSON)
// sent in through stdin
var stdinPipeInput = function () {
    return new Promise(function (resolve, reject) {
        var stdin = process.stdin;
        var data = "";
        stdin.setEncoding("utf8");
        stdin.on("data", function (chunk) {
            data += chunk;
        });
        stdin.on("end", function () {
            resolve(data);
        });
        stdin.on("error", reject);
    });
};
if (commandLineArgs[0] === "-s" || commandLineArgs[0] === "--stdin") {
    // pipe the stdin to beautifulJSON
    stdinPipeInput().then(function (x) { return console.log((0, index_1.beautifulJSON)(x)); }, function (e) { return console.error(e); });
}
else {
    // output any command line arguments as JSON
    commandLineArgs.map(function (json) {
        console.log((0, index_1.beautifulJSON)(json));
    });
}
