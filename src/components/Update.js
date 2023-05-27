import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(0);
const navigate = useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6471a2ab6a9370d5a41a7e71.mockapi.io/ops/${id}`, {
        firstName: firstName,
        lastName: lastName
      })
      .then(() => {
        navigate("/Read")
      });
  };

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedId = parseInt(localStorage.getItem("id")); // Parse the ID as an integer
    setFirstName(storedFirstName);
    setLastName(storedLastName);
    setId(storedId);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Create;
