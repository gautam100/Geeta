import React from "react";
import Home2 from "./Home2";
import Home3 from "./Home3";
const Home = () => {
  let name = "John"
  let age = 20
  let car = {
    brand: "Hundai",
    model: "i20",
    price: "1100000"
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>This is Home Page</p>
      <Home2 name={name} age={age} />
      <Home3 car={car} />
    </>
  );
};

export default Home;
