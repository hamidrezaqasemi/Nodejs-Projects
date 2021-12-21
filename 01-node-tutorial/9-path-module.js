const path = require("path")
console.log(path.sep)

const myFile = path.join("/content/", "subfolder", "test.txt")
console.log(myFile)
const myPath = path.basename(myFile)

console.log(myPath)
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
