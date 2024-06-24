import React from "react";
import Child from "./Child";

const Parent = ({ brand }) => {
  const cars = ["BMW", "KIA"];
  return (
    <>
      {/* <p>Parent</p>
      <Child object={brand}>
        <p>heloo child</p>
      </Child> */}
      <Child carname={brand} />
      {/* {cars.map((item, id) => {
        // console.log("item------------------", id);
        return <Child carname={brand} idobj={id} />;
      })} */}

      {/* <Child carname={brand} /> */}
    </>
  );
};

export default Parent;
