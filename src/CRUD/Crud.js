import React, { useState } from "react";

const Crud = () => {
  const [name, setName] = useState("");
  //   console.log("name", name);
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState([]);

  const changename = (e) => {
    // console.log("e.target.value", e.target.value);
    setName(e.target.value);
  };

  const changeemail = (e) => {
    // console.log("e.target.value", e.target.value);
    setEmail(e.target.value);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    setSubmit([...submit, { name, email }]);
  };
  console.log("submit------------", submit);

  return (
    <>
      <form onSubmit={(e) => formsubmit(e)}>
        <label>
          name :
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => changename(e)}
          />
        </label>
        <label>
          email :
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => changeemail(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Crud;
