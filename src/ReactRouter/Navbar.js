import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>app</NavLink>
      <NavLink to={"/contect"}>contect</NavLink>
    </>
  );
};

export default Navbar;
