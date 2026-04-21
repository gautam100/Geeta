import React from "react";

const Home2 = (data) => {
  return (
    <>
      <h2>Props</h2>
      <ul>
        <li>Passing data from parent component to child Component</li>
        <li>Data which is passed in child component is read only i.e. in child component we can not update the data</li>
      </ul>
      <p>
        Name is {data.name}
        <br />
        Age is {data.age}
      </p>
    </>
  );
};
export default Home2;
