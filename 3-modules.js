// Modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utulis')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(names)
console.log(data)

sayHi('Edi')
sayHi(names.john)
sayHi(names.peter)