import { useState } from "react";
import React from 'react';
import Fourth from "./Fourth";

const Third = () => {
    let [course, setCourse] = useState("Angular")

    return (
        <>
            <h1>{course}</h1>
            <button onClick={()=>setCourse('React')}>Change Course</button>
            <Fourth />
        </>
    );
};

export default Third;