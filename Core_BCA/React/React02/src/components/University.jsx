import React, { useState } from "react";
import { SubjectContext } from "./ContextData"; //<<< New Line
import Department from "./Department";

const University = () => {
  const [subject, setSubject] = useState("C++"); //<<< New Line

  return (
    <>
      <div className="container">
        <div className="row m-3">
          <div className="col-md-12">
            <div className="bg-primary">
              <h1>University</h1>

              <SubjectContext.Provider value={subject}>
                <select onChange={(event) => setSubject(event.target.value)}>
                  <option value="C++">C++</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Python">Python</option>
                  <option value="OS">OS</option>
                </select>
                <Department />
              </SubjectContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default University;
