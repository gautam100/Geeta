import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [counter, setCounter] = useState(1);
  function abc() {
    console.log("Counter1: Call with counter change");
  }
  useEffect(() => {
    abc();
  }, [counter]);

  // ---------------------------------

  const [counter2, setCounter2] = useState(101);
  let xyz = () =>{
    console.log("Counter2: Call with any UI change")
  }
  useEffect(()=>{
    xyz()
  })
  return (
    <>
      <h1>Use Effect</h1>
      Counter is {counter}
      <button onClick={() => setCounter(counter + 1)}>Counter</button>

      <br />
      
      Counter is {counter2}
      <button onClick={() => setCounter2(counter2 - 1)}> Counter2</button>
    </>
  );
};

export default Useeffect;
