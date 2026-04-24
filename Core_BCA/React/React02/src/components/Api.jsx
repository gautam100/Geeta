import React, { useState, useEffect } from "react";

const Api = () => {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("Error in fetching data: " + error);
        setLoader(false);
      });
  },[]);

  return (
    <>
      <h1>API Call</h1>
      {
        loader? (<h2>Loading...</h2>): (
            <ul>
            {
                users.map((user)=>(
                    <li>{user.name}</li>
                ))
            }
            </ul>
        )
      }
    </>
  );
};

export default Api;
