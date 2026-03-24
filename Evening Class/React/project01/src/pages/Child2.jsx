import React from 'react';

const Child2 = ({emp}) => {
    return (
        <>
            <div className='card' style={{width: "18rem"}}>
                <img src="https://m.media-amazon.com/images/I/81GttK9lZCL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{emp.name}</h5>
                    <p className="card-text">
                        Age: {emp.age} | Salary {emp.salary}
                    </p>
                    <a href="#" className="btn btn-info">Linkedin</a>
                </div>
            </div>
        </>
    );
};

export default Child2;