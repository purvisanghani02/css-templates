import React, { useMemo, useState } from "react";

const Usememo = () => {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  // const multicount = () => {
  //   console.warn("asdsd");

  // };

  // const multicount = () => {
  //   console.log("asdasd");
  //   return count * 5;
  // };

  const multicount = useMemo(() => {
    console.log("asdasd");
    return count * 5;
  }, [count]);
  return (
    <>
      <div>
        <p>{count}</p>
        <p>item :{item}</p>
        {multicount}
        <button onClick={() => setcount(count + 1)}>+</button>
        <button onClick={() => setitem(item * 10)}>update item</button>
      </div>
    </>
  );
};

export default Usememo;
