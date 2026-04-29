import React, { lazy, Suspense, useEffect, useState } from "react";
//import Lifecycle from "./Lifecycle";
const LazyComponent = lazy(() => import("./Lifecycle"));
const Api = () => {
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState([]);
  const [showChild, setShowChild] = useState(false);
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
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setShowChild(!showChild)}>
        Lazy Loading [{showChild? "ON": "OFF"}]
      </button>
      {showChild ? (
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>
      ) : null}
    </>
  );
};

export default Api;
