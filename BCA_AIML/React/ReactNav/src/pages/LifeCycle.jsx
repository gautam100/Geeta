import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [phase, setPhase] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setPhase("Mounting");
  }, []);

  useEffect(() => {
    setPhase("Updating Phase");
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmounting Phase!");
    };
  }, []);

  return (
    <>
      <h1>Lifecycle of Component</h1>
      <h3>Phase: {phase}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Update Counter
      </button>
      {counter}
    </>
  );
};

export default LifeCycle;
