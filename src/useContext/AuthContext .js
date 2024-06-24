import React, { createContext, useState } from "react";
import Context1 from "./Context";

export const Firstname = createContext();

export const AuthContext = () => {
  const [input, setinput] = useState(1);
  console.log("input", input);

  return (
    <>
      <Firstname.Provider value={{ setinput, input }}>
        <Context1 />
      </Firstname.Provider>
    </>
  );
};
