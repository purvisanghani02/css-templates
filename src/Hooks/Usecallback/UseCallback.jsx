import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    "todo 1",
    "todo 2",
    "dfxdgvfd",
    "esdfrd",
    "dgfdfgf",
  ]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallback;
