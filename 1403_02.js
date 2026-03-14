// Task1
// var fs = require('fs')
// fs.writeFileSync("s1.txt","0 1 -9 20 33 -44 50")
// data = fs.readFileSync("s1.txt","utf-8")
// d = data.split(" ").sort((a,b)=>a-b)
// // d = data.split(" ").sort()
// console.log(d)


// Task2
// var fs = require('fs')
// var data = [{'name':'abc','age':22},{'name':'pqr','age':32}]
// fs.writeFileSync("Student.txt",JSON.stringify(data))
// data1 = fs.readFileSync("Student.txt",'utf-8')
// console.log(data1)
// fs.copyFileSync("Student.txt","StudentData.txt")
// fs.readFileSync("StudentData.txt","utf-8")
// data2 = JSON.parse(data1)
// console.log(data2[0].name)
// console.log(data2[0].age)


//Task3
// var fs = require('fs')
// const shape = [{name:"circle",diameter:8},{name:"square",side:10}]
// fs.writeFileSync("task3.txt",JSON.stringify(shape))
// data1 = fs.readFileSync("task3.txt",'utf-8')
// p_c = 3.14*(shape[0].diameter)
// p_s = 4*(shape[1].side)
// console.log(p_c)
// console.log(p_s)
// fs.appendFileSync("task3.txt",`\n${p_c.toString()} \n${p_s.toString()}`)
// appendFileSync('   ',"perimeter of circle"+p_c) - alternate of above


//Task4
var fs = require('fs')
var d = {data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync("input.txt",JSON.stringify(d))
data1 = fs.readFileSync("input.txt","utf-8")
d1 = JSON.parse(data1)
var sum = d1.data.a + d1.data.b
diff = d1.data.c[1] - d1.data.b
mul = d1.data.c[0] * d1.data.c[1]
console.log(sum)
console.log(diff)
console.log(mul)
fs.writeFileSync("output.txt","sum:"+sum)
fs.appendFileSync("output.txt","dfference:"+diff)
fs.appendFileSync("output.txt","multiply:"+mul)