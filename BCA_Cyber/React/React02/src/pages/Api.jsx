import React, { lazy, Suspense, useEffect, useState } from "react";
//import LifeCycle from "./LifeCycle";
const LazyComponent = lazy(() => import("./Lifecycle"));

const Api = () => {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);

  const [loadLifeCycle, setLoadLifeCycle] = useState(false);

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
            <li key={user.id}>
              {user.name} | <strong>{user.email}</strong>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setLoadLifeCycle(!loadLifeCycle)}>Lazy Loading</button>
      {loadLifeCycle ? (
        <Suspense fallback="{<h1>Loading...</h1>}">
          <LazyComponent />
        </Suspense>
      ) : null}
    </>
  );
};

export default Api;
