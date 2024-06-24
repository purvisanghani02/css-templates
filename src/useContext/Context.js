import React, { useContext } from "react";
import Context2 from "./Context2";
import { Firstname } from "./AuthContext ";

const Context1 = () => {
  const { setinput, input } = useContext(Firstname);

  const inputbtn = () => {
    setinput(input + 1);
  };
  return (
    <>
      {/* <p>{fname(2)}--------------</p> */}
      {/* <Context2 /> */}
      <button onClick={() => inputbtn()}>hhhhhh</button>
    </>
  );
};

export default Context1;
