import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(1);
  const [compStatus, setCompStatus] = useState();
  useEffect(() => {
    setCompStatus("Mounting");
    console.log("Component is Loading.");
  }, []);

  useEffect(() => {
    setCompStatus("Updating");
    console.log("Component is Updating.");
  }, [counter]);

  useEffect(() => {
    return () => {
      setCompStatus("Unmounting");
      console.log("Component is unmounting.");
    };
  }, []);

  return (
    <div>
      <h1>Life Cycle</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>{" "}
      {counter}
      <br />
      {compStatus}
    </div>
  );
};

export default LifeCycle;
