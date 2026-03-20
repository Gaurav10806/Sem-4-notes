// var EventEmitter = require('events')
// var e = new EventEmitter()
// e.on('sayname',()=>{
//     console.log("my name is abc")
// })
// e.emit('sayname')
// e.on('sayname',()=>{
//     console.log("Hello")
// })
// e.emit('sayname')



// var e = require('events')
// var ee = new e()
// fun = ()=>{
//     console.log("Hello")
// }
// fun2 = ()=>{
//     console.log("Hi")
// }
// ee.on('a',fun)
// ee.on('b',fun2)
// ee.emit('b')
// ee.emit('a')


// var e = require('events')
// var ee = new e()
// ee.addListener('status',(code,msg)=>{
//     console.log(`Your status code is ${code} with ${msg} message`)
// })
// ee.emit("status",200,'ok')



// var e = require('events')
// var ee = new e()
// fun = ()=>{
//     console.log("Hello")
// }
// fun2 = ()=>{
//     console.log("Hi")
// }

// ee.on("conn",fun)
// ee.on("conn",fun2)
// let c = ee.listenerCount("conn")
// console.log(c)
// ee.emit("conn")
// ee.removeListener('conn',fun)
// let d = ee.listenerCount('conn')
// console.log(d)
// ee.emit('conn')



