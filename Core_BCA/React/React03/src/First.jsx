import React, { useEffect, useState } from "react";

const First = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(101);

  function callInAnyUIChange() {
    console.log("Getting called in any UI change!!");
  }
  useEffect(() => {
    callInAnyUIChange();
  });

  function callInComponentMount() {
    console.log("Getting called in component Mount or page load!!");
  }
  useEffect(() => {
    callInComponentMount();
  }, [counter2]);
  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Counter 1</button>{" "}
      <strong>{counter1}</strong>
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>{" "}
      <strong>{counter2}</strong>
    </>
  );
};
export default First;
