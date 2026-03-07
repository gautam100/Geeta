//callback functions

let ar = [10,20,30]
let sum = 0

function sumOfArray(callback){
    for(let e of ar){
        sum = sum + e
    }
    let a = callback()
    console.log(`sum of Array is: ${sum} and average of array is: ${a}`)
    console.log("Sum is : "+a)
}
function avgOfArray(){
    return sum/ar.length
}
function chkEvenOdd(){
    let res = undefined
    sum%2 ===0? res = "Even": res = "Odd"
    return res
}
sumOfArray(avgOfArray) // Here avgOfArray is a callback function
sumOfArray(chkEvenOdd)