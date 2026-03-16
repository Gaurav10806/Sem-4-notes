// Task2
var fs =require('fs')
var path = require('path')
a = path.dirname("fsd-mern/path1.txt")
b = path.basename("fsd-mern/path1.txt")
c = a+"/"+b
fs.mkdir(a, (err)=>{
    if(err) throw err
    fs.writeFile(c,"some data",(err)=>{
        if (err) throw err
        fs.copyFile(c,a+"/"+"newpath.txt",(err)=>{
            if(err) throw err
            fs.unlink(c,(err)=>{
                if (err) throw err
                console.log("content copied and file deleted")
            })
        })
    })
})
