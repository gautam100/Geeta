import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

const Student = () => {
    let subject = useContext(SubjectContext)
  return (
    <>
      <div className="container">
        <div className="row bg-info">
          <div className="col-md-6 p-2">
            <h1>Student</h1>
            <div className="alert alert-success">
                <strong>University Alert! Subject is: {subject}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
