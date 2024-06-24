import React from "react";

const Person = ({ color }) => {
  // console.log("props", color.name);

  const click = (color) => {
    alert(color?.name);
  };

  return (
    <>
      <div>person 1</div>

      <button onClick={() => click(color)}>+</button>
    </>
  );
};

export default Person;

export const Person2 = ({ message, children }) => {
  return (
    <>
      <button onClick={() => alert(message)}>{children}</button>
    </>
  );
};

export const Person3 = ({ message, children }) => {
  const handleclick = (e) => {
    console.log("e---------", e.type);
  };

  const handlechange = (e) => {
    console.log("e.currentTarget  ", e.target);
  };

  return (
    <>
      {/* <Person2 brand2={brand} /> */}
      <button onClick={() => alert(message)}>{children}</button>
      <input
        type="text"
        onChange={handlechange}
        name="firstname"
        value="firstname"
      />
      <button onClick={() => handleclick}>9</button>
    </>
  );
};

export const Check = ({ value }) => {
  const valuecheck = value;

  return (
    <>
      <Person2 message={"playing"}>playing kiki movie</Person2>
      <Person3 message={"uploading"}>upload img</Person3>
    </>
  );
};
