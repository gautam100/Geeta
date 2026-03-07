//let car = new Object()

let car = {
    color: "White",
    gear_box: "Automatic",
    make: "Maruti",
    model: "Swift",
    engine: 1200,
    price: 750000
}


for(let key in car){
    console.log(`Key is : ${key} and value is ${car[key]}`)
}

console.log(car instanceof Object) //true
console.log(Object.keys(car))