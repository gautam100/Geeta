import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setcount] = useState(0);
  const [phase, setPhase] = useState("");
  useEffect(() => {
    setPhase("Mounting");
    console.log("Mounting Phase.");
  }, []);

  useEffect(() => {
    setPhase("Updating");
    console.log("Updating Phase.");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Unmounting Phase.");
    };
  }, []);

  return (
    <div>
      <h1>Component Life cycle</h1>
      <h3>{phase}</h3>
      <button onClick={() => setcount(count + 1)}>Click Me</button>
      {count}
    </div>
  );
};

export default Lifecycle;
