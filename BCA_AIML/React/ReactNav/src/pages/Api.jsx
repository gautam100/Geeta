import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      })
      .catch(() => {
        console.log("Error in API call!");
      });
  }, []);
  return (
    <div>
      <h1>Call API</h1>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - <strong>{user.email}</strong></li>
          ))}
        </ul>
      )}
    </div> 
  );
};

export default Api;
