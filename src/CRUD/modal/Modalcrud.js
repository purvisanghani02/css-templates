import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Additem from "./Additem";
import { Table } from "reactstrap";

const Modalcrud = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const [items, setitems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [flag, setFlag] = useState(true);

  console.log("items", items);

  const toggle = () => setModal(!modal);

  const additems = (newitem) => {
    // console.log("newitem", newitem);
    const updateitems = [...items, newitem];
    setitems(updateitems);
    localStorage.setItem("modalitems", JSON.stringify(updateitems));
  };

  useEffect(() => {
    const getitem = JSON.parse(localStorage.getItem("modalitems")) || [];
    if (getitem) {
      setitems(getitem);
    }
  }, []);

  const edithandler = (id, data) => {
    setFlag(false);
    toggle();
    setFormdata(data);
    setEditItem(id);
  };
  const handleEdit = () => {
    const updateitems = [...items];
    updateitems[editItem] = formdata;
    setitems(updateitems);
    localStorage.setItem("modalitems", JSON.stringify(updateitems));
    setEditItem(null);
    toggle();
    setFlag(true);
  };

  const deletehandler = (id) => {
    console.log("id------------------------", id);
    const updateitems = items.filter((_, index) => index !== id);
    setitems(updateitems);
    localStorage.setItem("modalitems", JSON.stringify(updateitems));
  };

  return (
    <>
      <Container
        style={{ marginTop: "73px", width: "700px", textAlign: "center" }}
      >
        <Button variant="primary" onClick={() => toggle()}>
          Additem
        </Button>
      </Container>
      <Additem
        modal={modal}
        toggle={toggle}
        additems={additems}
        items={items}
        editItem={editItem}
        setitems={setitems}
        setFormdata={setFormdata}
        formdata={formdata}
        handleEdit={handleEdit}
        flag={flag}
      />

      <Container style={{ marginTop: "73px", width: "900px" }}>
        <Table responsive="xl">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email </th>
              <th>Edit </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {items?.length <= 0 ? (
              <tr>
                <td colSpan="5">Data not found</td>
              </tr>
            ) : (
              items?.map((item, id) => {
                // console.log("id", id);
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => edithandler(id, item)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deletehandler(id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Modalcrud;
