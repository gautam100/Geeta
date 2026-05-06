import React, { lazy, Suspense, useEffect, useState } from "react";
//import LifeCycle from "./LifeCycle";
const LazyComponent = lazy(() => import("./LifeCycle"));

const Api = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const [lazyComp, setLazyComp] = useState(false);

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
            <li key={user.id}>
              {user.name} - <strong>{user.email}</strong>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setLazyComp(!lazyComp)}>Load Lazy Component</button>
      {lazyComp ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyComponent />
        </Suspense>
      ) : null}
    </div>
  );
};

export default Api;
