# colorjson

Typescript node library and command line app using chalk and json-colorizer together to print easy to read JSON for the command line

## install

npm install -g @timbophillips/colorjson

## usage
### pipe stdin to the command line script
```bash
echo '{"name":"Katie","status":"Average"}' | colorjson -s
```
output
```json
{
  "name": "Katie",
  "status": "Average"
}
```
### submit arguments to the command line script
```bash
colorjson '{"name":"Katie","status":"Average"}' '{"name":"Tim","status":"Legend"}'
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
### use in node
```ts
import {colorjson} from '@timbophillips/colorjson'

console.log(colorjson({
    name: "Ben",
    status: "Not bad"
}))
```
