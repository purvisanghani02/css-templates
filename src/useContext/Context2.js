import React from "react";
import { Firstname } from "./AuthContext ";

const Context2 = () => {
  return (
    <>
      <Firstname.Consumer>
        {(auth) => {
          return <div>{auth}</div>;
        }}
      </Firstname.Consumer>
    </>
  );
};

export default Context2;
