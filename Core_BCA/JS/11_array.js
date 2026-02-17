function myArray1(){
    let arr = [2, 4.5, "Rohit", true]
    let elem = document.getElementById("output");    
    elem.innerHTML = arr[0]+"&nbsp;"+arr[1]+"&nbsp;"+arr[2]+"&nbsp;"+arr[3];
    elem.innerHTML += "<br><h1>Length of Array: "+arr.length+"</h1>";
}

function myArray2(){
    let arr = [2,3,10,5,8]
    let elem = document.getElementById("output1");
    //for loop
    //for(let i=0;i<arr.length;i++){
      //  elem.innerHTML += arr[i]+"&nbsp;";
    //}

    //for-of loop
    for(let temp of arr){
        elem.innerHTML += temp+"&nbsp;";
    }
}

function sumOfArray(){
    let arr = [10,20,5,40,"raj"]
    let sum = 0;
    for(let temp of arr){
        if(typeof temp == "number"){
            sum += temp;
        }
    }//for end
    document.getElementById("output2").innerHTML = "Sum of Array: "+sum;
}