import React, { useState } from 'react';

const Fourth = () => {

    const [color, setColor] = useState('yellow');
    return (
        <>
          <div style={{backgroundColor:`${color}`,padding:'20px',marginTop:'20px', width:'300px', height:'200px'}}>
            {color}
          </div>
          <button onClick={()=>setColor('red')}>Red</button>
          <button onClick={()=>setColor('green')}>Green</button>
          <button onClick={()=>setColor('blue')}>Blue</button>
        </>
    );
};

export default Fourth;