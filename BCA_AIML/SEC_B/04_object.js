let car = {}
//let car = new Object()

car.color = "White"
car.gear_box = "Automatic"
car.make = "Maruti"
car.model = "Swift"
car.engine = 1200
car.price = 750000


console.log(car.color) //white

for(let key in car){
    console.log(`Key is ${key} and value is ${car[key]}`)
}