import React from 'react';
import Third from './Third';

const Second = () => {
    function xyz(fruit){
        alert("Clicked!"+fruit)
    }
    return (
        <>
           <h1>Second Component</h1> 
           <button onClick={()=>xyz('apple')}>Click Me!</button>
           <hr />
           <Third />
        </>
    );
};

export default Second;