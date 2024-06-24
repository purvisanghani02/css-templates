import React, { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState(0);
  const [calculate, setCalculate] = useState(0);
  //   const increment = () => {
  //     if (input >= 0) {
  //       setInput(++input);
  //     }
  //   };

  //   const dec = () => {
  //     if (input > 0) {
  //       setInput(--input);
  //     }
  //   };

  useEffect(() => {
    setTimeout(() => setCalculate(() => input * 2));
  }, [input]);
  return (
    <>
      {/* <h1>{input}</h1>
      <button onClick={increment}>+</button>
      <button onClick={dec}>-</button> */}
      <p>{input}</p>
      <button onClick={() => setInput((c) => c + 1)}>+</button>
      <p>Calculation: {calculate}</p>
    </>
  );
};

export default Home;
