import React from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
    let age = 18
    let name = "Satvik"
    return (
        <>
          <h1 className='text-primary'>Parent Component</h1>
          <ChildComp age={age} name={name} />  
          <ChildComp age="22" name="Rohit" />  
          <ChildComp age="21" name="Dev" />  

        </>
    );
};

export default ParentComp;