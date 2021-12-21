const os = require("os")
// info about user
const user = os.userInfo()
console.log(user)
//method returns the system uptime is seconds
console.log(`the computer is running about ${os.uptime()}seconds`)

const currentOs = {
  type: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOs)
