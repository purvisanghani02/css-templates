import React, { useReducer, useState } from "react";

const initialstat = { name: "dipali", age: 23 };

const reducer = (state, action) => {
  console.log("state,action", state, action);
  switch (action.type) {
    case "increment":
      return {
        name: state.name,
        age: state.age + 1,
      };
    case "changename":
      return {
        name: action.nextname,
        age: state.age,
      };
    // case "reset":
    //   return (state = 0);
  }
  throw Error("Unknown action: " + action.type);
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstat);

  const inputchange = (e) => {
    dispatch({
      type: "changename",
      nextname: e.target.value,
    });
  };
  return (
    <>
      <div>
        <p>
          heelo {state.name}, you are {state.age}
        </p>
        <input type="text" value={state.name} onChange={inputchange} />
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        {/* <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button> */}
      </div>
    </>
  );
};

export default UseReducer;
