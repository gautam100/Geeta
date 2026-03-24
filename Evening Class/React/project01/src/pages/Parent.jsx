import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2"

const Parent = () => {
  const [color, setColor] = useState("yellow");
  let name = "smith"
  let age = 50
  let salary = 50000
  let emp1 = {
    name: "John",
    age: 32,
    salary:75000
  }
  return (
    <>
      <div>
        <h2>This is Parent Component.</h2>
        <Child1 name={name} age={age} salary={salary}></Child1>
        <Child2 emp={emp1} />

        <div className="rectangle-box" style={{'backgroundColor':color}}></div>
        <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
        <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
      </div>
    </>
  );
};

export default Parent;
