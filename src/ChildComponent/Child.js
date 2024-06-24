import React from "react";

const Child = ({ children, object, carname }, props) => {
  // console.log("carname------------", idobj);
  return (
    <>
      {/* <p>child</p>
      {children} + {object.name} is {object.age} old */}
      <p>
        {/* {idobj} */}
        hello i have -----------------, {carname.name}
      </p>
    </>
  );
};

export default Child;
