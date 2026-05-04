import React from 'react';

const ChildComp = (student) => {
    return (
        <>
            <h1 className='text-danger'>Child Component</h1>
            <p>
                Name is {student.name}<br />
                Age is {student.age}
            </p>
            
        </>
    );
};

export default ChildComp;