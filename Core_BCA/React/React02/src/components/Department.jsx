import React from 'react';
import Classroom from './Classroom';

const Department = () => {
    return (
        <>
          <div className="container">
            <div className="row m-3">
                <div className="col-md-12">
                    <div className="bg-success">
                        <h1>Department</h1>

                        <Classroom />
                    </div>
                </div>
            </div>
            </div>  
        </>
    );
};

export default Department;