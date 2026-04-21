import React from 'react';

const Home3 = ({car}) => {
    return (
        <div>
            <p>
                Car brand is {car.brand}<br />
                Car model is {car.model}<br />
                Car price is {car.price}
            </p>
        </div>
    );
};

export default Home3;