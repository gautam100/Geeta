function displayArray() {
  let ar = [10, "Geeta", 3.5, true];
  let elem = document.getElementById("output");
  //elem.innerHTML = ar[0] + "<br>";
  //elem.innerHTML += ar[1] + "<br>";
  //elem.innerHTML += ar[2] + "<br>";
  //elem.innerHTML += ar[3];

  //for(let i = 0; i < ar.length; i++) {
    //elem.innerHTML += ar[i] + "<br>";
  //}

  for(let temp of ar){
    elem.innerHTML += temp + "<br>";
  }
  
}
