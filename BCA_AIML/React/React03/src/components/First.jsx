import React, { useState } from "react";

function First() {
  const [i, seti] = useState(0);
  return (
    <>
      <h2>First component:</h2>
      <button onClick={() => seti(i + 1)}>Click Me </button>
      <h4>{i}</h4>
      <hr />
    </>
  );
}

export default First;
