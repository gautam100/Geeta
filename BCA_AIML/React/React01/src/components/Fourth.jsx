import React, { useState } from 'react';
import Fifth from './Fifth';
import Sixth from './Fifth';

import './fourth.css'
const Fourth = () => {
    const [color,setColor] = useState("#FFF")
    let name = "John"
    let age = 25
    let gender = "Male"

    let vehicle = {
        company: "Hundai",
        model: "i20",
        color: "white"
    }

    return (
        <>
          <div className='box' style={{backgroundColor: color}}></div>
          <button onClick={()=>setColor('red')}>Red</button>  
          <button onClick={()=>setColor('green')}>Green</button>  
          <button onClick={()=>setColor('blue')}>Blue</button>
          <hr />
          <h1>This is Fourth component (Parent Component)</h1>
          <Fifth name={name} age={age} gender={gender} />  
          <Sixth car={vehicle} />
        </>
    );
};

export default Fourth;