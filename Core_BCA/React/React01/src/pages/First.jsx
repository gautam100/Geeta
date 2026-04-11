import React from "react";
import Second from "./Second";

function First() {
  return (
    <>
      <h1>Rules ofcomponet</h1>
      <ul>
        <li>Name of Component file & function name must begin with capital letter</li>
        <li>In JSX, there will be only one parent node</li>
      </ul>
      <Second />
    </>
  );
}

export default First;
