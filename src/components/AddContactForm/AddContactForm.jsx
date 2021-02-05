// Libraries
import { useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import { addContact } from "../../redux/contacts/contactsOperations";

export default function AddContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
    onSubmit();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="contact/name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="contact/phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          placeholder="phone number"
          value={number}
          name="number"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
