import React from 'react';

const Fifth = (data) => {
    return (
        <div>
            <h1>This is Fifth component (child component)</h1>
            Name is : {data.name} <br />
            Age is {data.age} <br />
            Gender is: {data.gender}
        </div>
    );
};

export default Fifth;