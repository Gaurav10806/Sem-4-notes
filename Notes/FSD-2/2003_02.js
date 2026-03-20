// var e = require('events')
// var ee = new e()

// fun = ()=>{
//      console.log("Data received")
//  }

// ee.on('connection',()=>{
//     console.log("Connection successfully")
// })
//  ee.on('connection',fun)

// ee.emit('connection')
// console.log("Thanks")




// Task-3
// var fs = require('fs')
// var e = require('events')
// var ee = new e()
// ee.on('write',()=>{
//     fs.writeFile('2003_02.txt','this is data',(err)=>{
//         if(err) throw err
//         console.log('write done')
//         ee.emit('append')
//     })
// })
// ee.on('append',()=>{
//     fs.appendFile('2003_02.txt','that is data',(err)=>{
//         if(err) throw err
//         console.log('append done')
//         ee.emit('read')
//     })
// })
// ee.on('read',()=>{
//     fs.readFile('2003_02.txt','utf-8',(err,data)=>{
//         if(err) throw err
//         console.log(data)
//         ee.emit('final')
//     })
// })
// ee.on('final',()=>{
//     console.log("Thank you")
// })
// ee.emit('write')





//Task-4
// var e = require('events')
// var ee = new e()
// ee.on('circle',(radius)=>{
//     if(radius<0){
//         console.log("radius must be +ve")
//     }
//     else{
//         console.log("perimeter is",6.28*radius)
//     }
// })
// ee.on('square',(side)=>{
//     if(side<0){
//         console.log("side must be +ve")
//     }
//     else{
//         console.log("perimeter is",4*side)
//     }
// })

// ee.emit('circle',-5)
// ee.emit('square',0)





//Task-9
    