//asyncronous approch
const { readFile, writeFile } = require("fs")

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const shake = result
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const bake = result
    writeFile(
      "./content/result-Async.txt",
      `this gonna be awesome:${shake},${bake}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
