const os = require ('os')
const luasSegitiga = require ('./segitiga')

const fs = require ('fs')
fs.writeFileSync('./name.txt', " I LOVE KANIA")
const isi = fs.readFileSync('./name.txt','utf-8')


console.log(isi)
console.log('Free Memory :', os.freemem())
console.log(luasSegitiga(3,4))