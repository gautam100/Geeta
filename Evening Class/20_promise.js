function MyPromise(){
    return new Promise((resolve,reject)=>{
        //let result = true;
        let result = Math.random() >= 0.5
        if(result === true){
            resolve('Promise is successful')
        }else{
            reject('Promis is unscccessful')
        }
    })
}

MyPromise().then(function(msg){
    console.log(msg)
}).catch(function(msg){
    console.log(msg)
})