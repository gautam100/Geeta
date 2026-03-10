let ar1 = [10,20,30]
let ar2 = [...ar1] //spread operator

ar2[2] = 300

console.log(ar1) //10 20 30
console.log(ar2) //10 20 300

function xyz(...args){ //Here ... in args is rest operator 

}

xyz([11,12,13])