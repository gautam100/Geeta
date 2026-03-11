export function factorial(n=1){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}

export let doSum = function(a,b){
    return a+b;
}

export let doSub = (a,b) => {
    return a-b;
}