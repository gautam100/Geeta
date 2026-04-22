import React, { useEffect, useState } from "react";

const Third = () => {
  const [counter, setCounter] = useState(100);

  function abc() {
    alert("This will get call when counter will update");
  }
  useEffect(() => {
    abc();
  }, [counter]);

  return (
    <>
      Third Component:
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
      {counter}
    </>
  );
};

export default Third;
