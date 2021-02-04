import { useState } from "react";

//Bootstrap react components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Custom components
import Filter from "components/Filter";
import Modal from "components/Modal";
import AddContactForm from "components/AddContactForm";

// Styles and other staff
import s from "./ContactsMenu.module.css";

export default function ContactsMenu() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((state) => !state);

  return (
    <Container>
      <div className={s.wrapper}>
        <Filter />

        <Button variant="dark" size="sm" onClick={toggleModal}>
          Add Contact
        </Button>
      </div>
      {modal && (
        <Modal onClose={toggleModal}>
          <AddContactForm onSubmit={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
