import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [counter, setCounter] = useState(1);
  function abc() {
    alert("here");
  }
  useEffect(()=>{
  abc()
  },[])
  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default SideEffect;
