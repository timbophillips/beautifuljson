import { beautifulJSON, consoleLogBeautifulJSON } from "./";

consoleLogBeautifulJSON({
    name: "Tim",
    status: "Legend"
})

console.log(beautifulJSON({
    name: "Ben",
    status: "Not bad"
}))

consoleLogBeautifulJSON('{"name":"Katie","status":"Average"}');
