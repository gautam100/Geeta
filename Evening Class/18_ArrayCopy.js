console.log("This is My JS File")

let arr1 = [10,20,30] //---pointing to 1005

let arr2 = [...arr1] //---point to 1005

console.log(arr1) //10 20 30
console.log(arr2) //10 20 30

arr2[0] = 100
arr2[1] = 200
arr2[2] = 300

console.log(arr1) //100 200 300 *

console.log(arr2) //100 200 300
