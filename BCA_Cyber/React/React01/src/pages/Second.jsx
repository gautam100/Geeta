import React from 'react';
import Third from './Third';

const Second = () => {
    function xyz(person){
        alert("Clicked by "+person)
    }
    return (
        <>
            <button onClick={()=>xyz('Spider man')}>Click Me!</button>
            <Third />
        </>
    );
};

export default Second;