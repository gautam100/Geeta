import React, { useContext } from 'react';
import { SubjectContext } from './ContextData';


const Student = () => {
    const subject = useContext(SubjectContext)
    return (
        <>
          <h2>Student</h2>  
        </>
    );
};
export default Student