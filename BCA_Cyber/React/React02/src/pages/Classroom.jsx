import React from "react";
import Student from "./Student";

const Classroom = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-danger">
          <div className="col-md-12 p-2">
            <h1>ClassRoom</h1>

            <Student />
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroom;
