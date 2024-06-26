import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "./UseFetch";

const Customhook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  // const fetchdata = async () => {
  //   try {
  //     const getdata = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     console.log("getdaat", getdata);
  //     setdata(getdata);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const onclick = () => {
    useFetch("https://jsonplaceholder.typicode.com/todos");
  };

  return (
    <>
      <div>hello</div>
      {data?.map((item) => {
        return <div key={item.id}>{item.title}</div>; // Display data once fetched
      })}
      <button>click me</button>
      <button onclick={onclick}></button>
    </>
  );
};

export default Customhook;
