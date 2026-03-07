// Synchronous
// Asynchronous: 1) callback 2) promise 3) Async Await

let myFunc = () =>{
    console.log("Line No 1")

    setTimeout(function(){
        console.log("Line No 2")
    },2000)
    
    console.log("Line No 3")
}

myFunc()