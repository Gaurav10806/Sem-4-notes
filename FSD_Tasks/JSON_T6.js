a = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
function fun(a){
    var obj = {}
    obj[a[0]] = a[a.length - 1]
    return obj
}
console.log(fun(a))