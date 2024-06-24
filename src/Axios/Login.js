import React, { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const handlsubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dummyjson.com/user/login",
        Input,
        { headers: { "Content-Type": "application/json" } }
      );
      //   console.log("response", response);
      const token = response.data.token;
      toast.success("login success");
      if (token) {
        localStorage.setItem("token", token);
      } else {
        toast.error("Invalid token received");
      }
    } catch (error) {
      console.log(error);
      toast.error("login not success");
    }
  };
  return (
    <>
      <Container style={{ marginTop: "73px", width: "700px" }}>
        <Form className="container">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label> Email</Form.Label>
            <Form.Control
              name="username"
              value={Input.username}
              onChange={handlechange}
              type="text"
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={Input.password}
              onChange={handlechange}
              type="password"
              placeholder="name@example.com"
            />
          </Form.Group>

          <Button onClick={handlsubmit} variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
