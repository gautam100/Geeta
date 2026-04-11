import React from "react";
import "./second.css";
function Second() {
  function xyz(name) {
    alert("Clicked by "+name)
  }
  let age = 22;
  let name = "John";
  return (
    <>
      <div className="box">
        Because of babel, jsx converts into HTML during run time
        <br />
        {name} is {age} years old!
      </div>
      <button onClick={()=>xyz('Amit')}>Click Me!</button>
    </>
  );
}

export default Second;
