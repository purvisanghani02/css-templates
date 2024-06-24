import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  //   const handlechange = (e) => {
  //     console.log("e.target.value", e.target.value);
  //     setInput(e.target.value);
  //   };
  return (
    <>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>submit</button>
        </label>
      </form>
    </>
  );
};

export default Form;
