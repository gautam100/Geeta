function isEven(num){
    num%2 ==0? console.log("Even Number"): console.log("Odd Number")
}


isEven(10)
isEven()


let Abc = ()=>{
    console.log("Inside Abc function")
    // for(let i=0; i<arguments.length; i++){
    //     console.log(arguments[i])
    // }
    console.log(arguments[0]) //10
    console.log(arguments[1]) //20
    console.log(arguments[2]) //30

}
Abc(10,20,30,40,50)



