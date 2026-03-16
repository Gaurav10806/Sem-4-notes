var fs = require('fs')
fs.writeFileSync("hello.txt","Good morning")
fs.appendFileSync("hello1.txt","\n It is warm day")
// var data =fs.readFileSync("hello1.txt")
// console.log(data)
// console.log(data.toString())

// var data = fs.readFileSync("hello.txt","utf-8")
// console.log(data)

fs.renameSync('hello.txt','hi.txt')
fs.unlinkSync('hello1.txt')
console.log(hi.txt)
