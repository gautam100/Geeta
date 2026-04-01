import React, { useEffect, useState } from "react";

const Effect = () => {
  const [counter1, setCounter1] = useState(0);//This is updating with click of counter1
  const [counter2, setCounter2] = useState(0);

  let func1 = () => {
    console.log(`value of counter1 is : ${counter1}`)
  };
  useEffect(function () {
    func1();//when counter1 will update then only func1() will get call
  },[counter1]);

  let func2 = () =>{
    console.log(`value of counter2 is : ${counter2}`)
  }
  useEffect(function(){
    func2()//When component will be mount then only one time func2() will get call
  },[])
  return (
    <>
      <div id="effect_container"></div>
      <button
        onClick={() => setCounter1(counter1 + 1)}
        className="btn btn-warning"
      >
        Counter-1 {counter1}{" "}
      </button>

      <button
        onClick={() => setCounter2(counter2 + 1)}
        className="btn btn-info"
      >
        Counter-2 {counter2}{" "}
      </button>
    </>
  );
};

export default Effect;
