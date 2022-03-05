# beautifulJSON

Typescript node library and command line app using chalk and json-colorizer together to print easy to read JSON for the command line

## usage
pipe stdin to the command line script
```bash
echo '{"name":"Katie","status":"Average"}' | bj
```
output
```json
{
  "name": "Katie",
  "status": "Average"
}
```
submit arguments to the command line script
```bash
bj '{"name":"Katie","status":"Average"}' '{"name":"Tim","status":"Legend"}'
```
output
```json
{
  "name": "Katie",
  "status": "Average"
}
{
  "name": "Tim",
  "status": "Legend"
}
```
use in nodeJS
```ts
import {beautifulJSON} from 'beautifuljson'

console.log(beautifulJSON({
    name: "Ben",
    status: "Not bad"
}))
```
