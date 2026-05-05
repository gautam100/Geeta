import React from 'react';

const ChildComp2 = ({car}) => {
    return (
        <div>
            <h2>
                Car Model is {car.model}
                <br />
                Car price is {car.price}
            </h2>
        </div>
    );
};

export default ChildComp2;