const PI = 3.121
console.log(PI) //3.121
//PI = 4.121
//console.log(PI) //Error

const arr = ["mon","tue","wed"]
console.log(arr)
arr[0] = "Fri"
arr[1] = "Sat"
arr[2] = "Sun"
console.log(arr) 

const obj = {a: "X", b: "Y"}
obj.a = 101
obj.b = 102
console.log(obj)

//Destructuring
const ar = ["John","Smith","Rohit"] 
const [user1, user2, user3] = ar
console.log(user1)
console.log(user2)
console.log(user3)

const obj1 = {name: "Jane", age: 24}
let {name, age} = obj1
console.log(name,age)