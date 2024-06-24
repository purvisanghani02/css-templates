import React, { useEffect, useState } from "react";

import { Button, Container, Form, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [Input, setInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const [flag, setflag] = useState(true);

  const [ShowData, setShowData] = useState();
  //   console.log("ShowData", ShowData);
  const [Edit, setEdit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (flag) {
      try {
        const response = await axios.post(
          "https://dummyjson.com/users/add",
          Input,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log("response", response.data.id);
        const arr = response.data;
        setShowData(arr);
        localStorage.setItem("user", JSON.stringify(arr));
        toast.success("User added successfully");
      } catch (error) {
        console.log(error);
        toast.error("Failed to add user");
      }
    } else {
      handleEdit();
    }
  };

  const edithandler = (id) => {
    setflag(false);
    setInput(ShowData);
    setEdit(id);
  };
  const updatedata = {
    firstName: Input.firstName,
    lastName: Input.lastName,
    age: Input.age,
  };

  const handleEdit = async (id) => {
    try {
      const update = await axios.put(
        `https://dummyjson.com/users/2`,
        updatedata,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("update", update);
      const updatedUser = update.data;
      setShowData(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success("User updated successfully");
      setflag(true);
      setEdit(null);
      setInput({ firstName: "", lastName: "", age: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  useEffect(() => {
    const getuser = JSON.parse(localStorage.getItem("user"));
    setShowData(getuser);
  }, []);

  return (
    <>
      <Container style={{ marginTop: "73px", width: "700px" }}>
        <h4>Add a new user</h4>
        <Form className="container">
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label> firstName</Form.Label>
            <Form.Control
              name="firstName"
              value={Input.firstName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>lastName</Form.Label>
            <Form.Control
              name="lastName"
              value={Input.lastName}
              onChange={handleChange}
              type="text"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              value={Input.age}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          {flag ? (
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="primary" onClick={handleEdit}>
              edit
            </Button>
          )}
        </Form>
      </Container>

      {/* table */}

      <Container style={{ marginTop: "73px", width: "900px" }}>
        <Table responsive="xl">
          <thead>
            <tr>
              <th>firstName </th>
              <th>lastName </th>
              <th>age</th>
              <th>Edit </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {ShowData ? (
              <tr>
                <td>{ShowData.firstName}</td>
                <td>{ShowData.lastName}</td>
                <td>{ShowData.age}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => edithandler(ShowData.id)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    //    onClick={() => deletehandler(id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ) : (
              <tr colSpan="5" className="text-align-center">
                Data not found
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CreateUser;
