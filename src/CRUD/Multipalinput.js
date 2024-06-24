// import React, { useEffect, useState } from "react";

// const Multipalinput = () => {
//   const [input, setinput] = useState({
//     name: "",
//     email: "",
//   });

//   let [show, setShow] = useState([]);

//   useEffect(() => {
//     const storedShow = JSON.parse(localStorage.getItem("show")) || [];
//     setShow(storedShow);
//   }, []);

//   const changename = (e) => {
//     const { name, value } = e.target;
//     // console.log("name-----", name);
//     // console.log("value-----", value);
//     setinput({ ...input, [name]: value });
//   };

//   const formsubmit = (e) => {
//     e.preventDefault();
//     // alert(`Name: ${input.name}, Email: ${input.email}`);
//     // const updateshow = ;
//     setShow([...show, input]);
//     localStorage.setItem("show", JSON.stringify([...show, input]));
//     setinput({
//       name: "",
//       email: "",
//     });
//   };

//   return (
//     <>
//       <form>
//         <div className="input-form">
//           <h1 className="input-detail">Hello, </h1>
//           <input
//             type="text"
//             className="input"
//             placeholder="Enter your name"
//             onChange={changename}
//             name="name"
//             value={input.name}
//           />
//           <input
//             type="text"
//             style={{ marginTop: "20px" }}
//             className="input"
//             placeholder="Enter your name"
//             onChange={changename}
//             name="email"
//             value={input.email}
//           />
//           <button type="submit" className="input-btn" onClick={formsubmit}>
//             Submit
//           </button>
//         </div>
//       </form>
//       {show?.length <= 0 ? (
//         <h1>Data Not Found</h1>
//       ) : (
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>email</th>
//             <th>edit</th>
//             <th>delete</th>
//           </tr>
//           {show?.map((item) => {
//             return (
//               <>
//                 <tr>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>
//                     <button>edit</button>
//                   </td>
//                   <td>
//                     <button>delete</button>
//                   </td>
//                 </tr>
//               </>
//             );
//           })}
//         </table>
//       )}
//     </>
//   );
// };

// export default Multipalinput;

import React, { useEffect, useState } from "react";
import "./crud.css";
import Button from "react-bootstrap/Button";
import { Container, Form, Table } from "react-bootstrap";

const Crud = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const [show, setShaow] = useState([]);
  // console.log("show", show);
  const [editItem, setEditItem] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const getitem = JSON.parse(localStorage.getItem("crud"));
    if (getitem) {
      setShaow(getitem);
    }
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handlsubmit = () => {
    const existingData = JSON.parse(localStorage.getItem("crud")) || [];
    // Add the new input to the existing data array---
    const updatedShow = [...existingData, input];
    setShaow(updatedShow);
    localStorage.setItem("crud", JSON.stringify(updatedShow));
    setInput({
      name: "",
      email: "",
    });
  };

  const editsubmit = () => {
    setFlag(true);
    const updatedShow = [...show];
    updatedShow[editItem] = input;
    setShaow(updatedShow);
    localStorage.setItem("crud", JSON.stringify(updatedShow));
    setEditItem(null);
    setInput({
      name: "",
      email: "",
    });
  };

  const edithandler = (id, data) => {
    setFlag(false);
    setInput(data);
    setEditItem(id);
  };

  const deletehandler = (id) => {
    const updatedShow = show.filter((_, index) => index !== id);
    // console.log("updateShow-------", updatedShow);
    setShaow(updatedShow);
    localStorage.setItem("crud", JSON.stringify(updatedShow));
  };

  return (
    <>
      <Container style={{ marginTop: "73px", width: "700px" }}>
        <Form className="container">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label> Name</Form.Label>
            <Form.Control
              name="name"
              value={input.name}
              onChange={handlechange}
              type="text"
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={input.email}
              onChange={handlechange}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          {flag ? (
            <Button onClick={handlsubmit} variant="primary">
              Submit
            </Button>
          ) : (
            <Button onClick={editsubmit} variant="primary">
              edit
            </Button>
          )}
        </Form>
      </Container>

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
            {show?.length <= 0 ? (
              <tr>
                <td colSpan="5">Data not found</td>
              </tr>
            ) : (
              show.map((item, id) => {
                console.log("id", id);
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

export default Crud;
