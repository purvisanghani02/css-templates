import React, { useEffect, useState, useRef } from "react";

const Userref = () => {
  const [input, setinput] = useState("");
  const [count, setcount] = useState(0);

  const inputref = useRef(null);

  const click = () => {
    inputref.current.focus();
  };

  return (
    <>
      <input
        ref={inputref}
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <p>{inputref.current}</p>
      <button onClick={click}>click</button>
    </>
  );
};

export default Userref;
