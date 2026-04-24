import React, { useEffect, useState } from "react";

const Api = () => {
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error in fetching data: ", error);
        setLoader(false);
      });
  }, []);
  return (
    <>
      {loader ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Api;
