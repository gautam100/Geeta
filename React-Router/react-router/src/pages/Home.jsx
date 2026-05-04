import React, { useState } from 'react';

const Home = () => {
    let b = 10;
    function abc(){
        b+=1
        console.log("updated value of b is :"+b)
    }
    const [a, setA] = useState(10)
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <button onClick={()=>setA(a+1)}>Click Me!</button>
            {a}
            <br />
            <button onClick={()=>abc()}>Normal var</button>
            {b}
        </div>
    );
};

export default Home;