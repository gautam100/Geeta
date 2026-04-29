import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [msg, setMsg] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Mounting Phase");
    setMsg("Mounting Done");
  }, []);

  useEffect(() => {
    console.log("Updating Phase");
    setMsg("Updating...");
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmounting Phase!");
    };
  }, []);

  return (
    <>
      <h1>Life-cycle of Component</h1>
      <h3>{msg}</h3>

      <button onClick={() => setCounter(counter + 1)}>Update UI</button> {counter}
    </>
  );
};

export default Lifecycle;
