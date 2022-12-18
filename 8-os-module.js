const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method retuns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)
var sec = os.uptime()
var min = sec/60
var hour = min/60

sec = Math.floor(sec)
min = Math.floor(min)
hour = Math.floor(hour)

min = min % 60
sec = sec % 60

console.log(`This operating system has been running for ${hour} hours ${min} minutes and ${sec} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

