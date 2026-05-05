import React from 'react';
import ChildComp from './ChildComp';
import ChildComp2 from './ChildComp2';

const ParentComp = () => {
    let age = 18
    let name = "Satvik"
    let car = {
        model : "i20",
        price : 1100000
    }
    return (
        <>
          <h1 className='text-primary'>Parent Component</h1>
          <ChildComp age={age} name={name} />  
          <ChildComp age="22" name="Rohit" />  
          <ChildComp age="21" name="Dev" />  

          <ChildComp2 car={car} />

        </>
    );
};

export default ParentComp;