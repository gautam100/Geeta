function myArray(){

    let arr = [10, 10.5, "Raj", true, null, undefined, [1, 2, 3], function xyz(){ console.log("Hello");}];

    console.log(arr[arr.length - 2][0]);
    console.log(arr[arr.length - 2][1]);
    console.log(arr[arr.length - 2][2]);

    console.log(arr[arr.length - 1]());
}

function oddEvenCounter(){
    let arr = [10,15, true, "Rohit", 20, 18, 25, 30, false, "Geeta", 35];
    let oddCount = 0;
    let evenCount = 0;

    for(let temp of arr){
        if(typeof temp === "number"){
            if(temp % 2 === 0){
                evenCount++;
            } else {
                oddCount++;
            }   
        }
    }//loop end
    document.getElementById("output").innerHTML = `Even Count: ${evenCount} <br> Odd Count: ${oddCount}`;
}