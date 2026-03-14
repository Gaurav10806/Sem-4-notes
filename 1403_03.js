path = require('path')
a = path.dirname("D:\Gaurav\FSD2/path.txt")
console.log(a)
b = path.basename("D:\Gaurav\FSD2/path.txt")
console.log(b)
c = path.extname("D:\Gaurav\FSD2/path.txt")
console.log(c)
d = path.parse("D:\Gaurav\FSD2/path.txt")
console.log(d)
if(d.ext===".txt")
{
    console.log("text file")
}
else{
    console.log("not text file")
}