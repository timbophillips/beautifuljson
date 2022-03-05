#!/usr/bin/env node

import { colorjson } from "./index";

const commandLineArgs = process.argv.slice(2);

// Promise based function to extract the (hopefully JSON)
// sent in through stdin
const stdinPipeInput = (): Promise<string> => {
  return new Promise(function (resolve, reject) {
    const stdin = process.stdin;
    let data = "";

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
  stdinPipeInput().then(
    (x) => console.log(colorjson(x)),
    (e) => console.error(e)
  );
} else {
  // output any command line arguments as JSON
  commandLineArgs.map((json) => {
    console.log(colorjson(json));
  });
}
