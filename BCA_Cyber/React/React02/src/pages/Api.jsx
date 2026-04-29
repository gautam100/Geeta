import React, { useEffect, useState } from "react";

const Api = () => {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error in fetching:" + error);
        setLoader(false);
      });
  }, []);
  return (
    <>
      <h1>API</h1>
      {loader ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li>{user.name} | <strong>{user.email}</strong></li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Api;
