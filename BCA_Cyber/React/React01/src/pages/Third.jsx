import React, { useState } from 'react';
import Fourth from './Fourth';

const Third = () => {

    const [count,setCount] = useState(20)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <Fourth />
        </div>
    );
};

export default Third;