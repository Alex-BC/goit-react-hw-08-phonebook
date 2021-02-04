import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import operations from "redux/auth/authOperations";
import { isLoading } from "redux/auth/authSelectors";
import s from "./Login.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const handleFormChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Container className={s.wrapper}>
      <h1 className={s.heading}>Please, log in</h1>
      <Form onSubmit={handleSubmit} className={s.form}>
        <Form.Group controlId="userEmail">
          <Form.Label>Your Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type your email here"
            autoComplete="off"
            value={email}
            name="email"
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group controlId="userPassword">
          <Form.Label>Enter your Password</Form.Label>
          <Form.Control
            type="Password"
            autoComplete="off"
            value={password}
            name="password"
            onChange={handleFormChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
}
