import React from "react";
import Subject from "./Subject";

const Classroom = () => {
  return (
    <>
      <div className="container">
        <div className="row m-3">
          <div className="col-md-12">
            <div className="bg-danger">
              <h1>Class room</h1>

              <Subject />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroom;
