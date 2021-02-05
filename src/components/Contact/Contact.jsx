import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <Card className={s.contact} bg="dark" text="light">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Phone: {number}</Card.Text>
        <Button variant="outline-light" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Contact;
