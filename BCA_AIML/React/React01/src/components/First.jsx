import React from 'react';
import "./first.css"
import Second from "./Second"

const First = () => {
    let age = 20;
    let name = "John"
    return (
        <div className="abc">
           <h1>This is my first component</h1> 
           <br />
           <div>
            {name} is {age} years old!
           </div>
           <Second />
        </div>
    );
};

export default First;