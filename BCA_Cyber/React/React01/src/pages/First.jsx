import React from "react";
import Second from "./Second";

const First = () => {
  let age = 24;
  let name = "John";
  return (
    <>
      <h2>This is First Component</h2>
      <div>
        {name} is {age} years old!
      </div>
      <Second />
    </>
  );
};

export default First;
