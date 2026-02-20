function sumOfArray(){

    var ar = [10, 30, 'Raj', 100, true]
    var sum = 0
    for(let temp of ar){
        if(typeof temp == 'number'){
            sum = sum + temp
        }
    }
    document.getElementById('result').innerHTML = 'Sum of Array Elements is : ' + sum
}

function oddEvenCounter(){
    var ar = [10, 30, 'Raj', 100, true, 11, 15, 20]
    var oddCounter = 0
    var evenCounter = 0
    for(let temp of ar){
        if(typeof temp == 'number'){
            if(temp % 2 == 0){
                evenCounter++
            }else{
                oddCounter++
            }
        }
    }//for end
    document.getElementById('result2').innerHTML = 'Odd Count is : ' + oddCounter + '<br>Even Count is : ' + evenCounter
}