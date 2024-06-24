import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Additem({
  modal,
  toggle,
  additems,
  formdata,
  setFormdata,
  handleEdit,
  flag,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    additems(formdata);
    setFormdata({
      name: "",
      email: "",
    });
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>add new item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={formdata.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={formdata.email}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {flag ? (
            <Button color="primary" onClick={handleSubmit}>
              Add
            </Button>
          ) : (
            <Button color="primary" onClick={handleEdit}>
              Edit
            </Button>
          )}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Additem;
