import React, { useState } from 'react';
import Greetings from './Greetings';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <Greetings name="Rohit" />
        </div>
    );
};

export default Home;