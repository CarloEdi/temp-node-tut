//Globals - NO WINDOW !!!!

// __ dirname - path to currrent directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is bieng executed

console.log(__dirname)
console.log(__filename)
const sample = setInterval(() => {
    console.log('I will stop in 5 seconds!')
}, 1000)
setTimeout(() => {
    clearInterval(sample)
    console.log('STOPED!')
}, 5000)