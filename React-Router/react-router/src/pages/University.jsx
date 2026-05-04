import React, { useState } from "react";
import { SubjectContext } from "./ContextData";
import Department from "./Department";

const University = () => {
  const [subject, setSubject] = useState("C++");
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="bg-info p-2">
            <h2>University Component</h2>
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
    </>
  );
};

export default University;
