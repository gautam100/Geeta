// Hoisting: named function get hoisted
// Anonymous function/arrow function do not get hoisted

abc() //calling the function

function abc(){
    // variables declared with var get hoisted
    console.log(a)//undefined
    var a = 10
    console.log(a)//10
}

