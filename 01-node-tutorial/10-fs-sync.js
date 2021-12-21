//syncronous approch
const { readFileSync, writeFileSync } = require("fs")
const shake = readFileSync("./content/first.txt", "utf8")
const bake = readFileSync("./content/subfolder/second.txt", "utf8")

console.log(shake, bake)

writeFileSync(
  "./content/result.txt",
  `this gonna be awesome:${shake},${bake}`,
  { flag: "a" }
)
