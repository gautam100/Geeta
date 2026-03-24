import React from 'react';
import Parent from './Parent'

const Home = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <Parent></Parent>
        </div>
    );
};

export default Home;

/*
Rule 1: Component name begins with caps
Rule 2: In JSX, there will be only one parent tag

*/