class Report_Card{
    
    constructor(eng, hindi, math, sci){
        this.eng = eng
        this.hindi = hindi
        this.math = math
        this.sci = sci
    }

    displayResult = function(studentName){
        let container = document.getElementById("container")
        container.innerHTML += `<strong>${studentName}</strong><br />`
        container.innerHTML += `Eng: ${this.eng}<br />`
        container.innerHTML += `Hindi: ${this.hindi}<br />`
        container.innerHTML += `Math: ${this.math}<br />`
        container.innerHTML += `Sci: ${this.sci}<br />`
        container.innerHTML += `<hr />`
    }

}

let john = new Report_Card(70,80,75,60) //creating object and calling constructor
john.displayResult("John")

let smith = new Report_Card(60,90,55,62)
smith.displayResult("Smith")
