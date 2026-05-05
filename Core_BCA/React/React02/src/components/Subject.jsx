import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

const Subject = () => {
  let subject = useContext(SubjectContext);

  return (
    <>
      <div className="container">
        <div className="row m-3">
          <div className="col-md-12">
            <div className="bg-warning">
              <div className="row m-3">
                <div className="col-md-6 m-4">
                  <h1>Subject</h1>
                  <div className="alert alert-secondary">
                    <strong>University Alert! </strong>Subject is : {subject}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
