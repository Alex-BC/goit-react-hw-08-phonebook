import React from "react";
import { useSelector } from "react-redux";

import { isLoggedIn } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import s from "./Homepage.module.css";

export default function Homepage() {
  const userLoggedIn = useSelector(isLoggedIn);
  return (
    <Container>
      <Jumbotron className={s.wrapper}>
        <h1>Hello, world!</h1>
        <p>This is some information about our phonebook app</p>
        {!userLoggedIn && (
          <div>
            <p>Please log in to access your contacts book</p>
            <Button
              as={NavLink}
              variant="dark"
              size="sm"
              type="button"
              to="/login"
            >
              Log in
            </Button>
            <p>
              First time here? Please register to start using our amazing app
            </p>
            <Button
              as={NavLink}
              variant="dark"
              size="sm"
              type="button"
              to="/register"
            >
              Register
            </Button>
          </div>
        )}
      </Jumbotron>
    </Container>
  );
}
