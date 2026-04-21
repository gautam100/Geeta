import React, { useEffect, useState } from "react";

const First = () => {

  const [counter1, setCounter1] = useState(1);

  function callInAnyUIChange() {
    console.log("Getting called in any UI change!!");
  }

  useEffect(() => {
    callInAnyUIChange();
  });

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Click Me!</button>{" "}
      <strong>{counter1}</strong>
    </>
  );
};
export default First;
