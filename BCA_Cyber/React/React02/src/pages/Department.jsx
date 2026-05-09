import React from "react";
import Classroom from "./Classroom";

const Department = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-warning">
          <div className="col-md-12 p-2">
            <h1>Department</h1>

                <Classroom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
