import React from 'react';

const Child1 = (emp) => {
    //emp.name = "Smith" //Error
    return (
        <>
          <strong>
            Name: {emp.name} <br />
            Age: {emp.age}<br />
            Salary: {emp.salary}
            </strong>  
        </>
    );
};

export default Child1;