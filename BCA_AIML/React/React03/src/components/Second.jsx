import React from 'react';

const Second = () => {
    let i= 1;
    function increment(){
        i+=1
        console.log("Update value :"+i)
    }
    return (
        <>
            <h2>Second component</h2>
            <button onClick={()=>increment()}>Increment</button>
            <h4>{i}</h4>
        </>
    );
};

export default Second;