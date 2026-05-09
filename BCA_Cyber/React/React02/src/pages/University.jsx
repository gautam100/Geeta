import React, { useState } from "react";
import Department from "./Department";
import { SubjectContext } from "./ContextData";

const University = () => {
  const [subject, setSubject] = useState("C++");
  return (
    <>
      <div className="container">
        <div className="row bg-success">
          <div className="col-md-12 p-2">
            <h1>University</h1>
            <SubjectContext.Provider value={subject}>
            <select onChange={(event)=>setSubject(event.target.value)}>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Go">Go</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
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
