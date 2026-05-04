import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

const Student = () => {
  let subject = useContext(SubjectContext);
  console.log("Subject is: " + subject);
  return (
    <>
      <div className="row m-2">
        <div className="col-md-12">
          <div className="alert alert-info">
            <div className="bg-primary">
              <h2>Student</h2>
              University Alert: Current subject is {subject}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Student;
