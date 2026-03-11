import {factorial, doSum, doSub} from "./util.js";

document.getElementById('output').innerHTML = `The factorial of 5 is ${factorial(5)}`;
document.getElementById('output').innerHTML += `<br>The sum of 10 and 20 is ${doSum(10,20)}`;
document.getElementById('output').innerHTML += `<br>The difference of 10 and 20 is ${doSub(10,20)}`;

