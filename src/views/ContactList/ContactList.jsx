import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//Bootstrap react components
import Container from "react-bootstrap/Container";

// Custom components
import Contact from "components/Contact";
import ContactsMenu from "components/ContactsMenu";

import { getFilteredContacts } from "redux/contacts/selectors";
import { getContacts, deleteContact } from "redux/contacts/contactsOperations";
import { isLoggedIn } from "redux/auth/authSelectors";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const userLogged = useSelector(isLoggedIn);

  useEffect(() => {
    if (!userLogged) {
      return;
    }
    dispatch(getContacts());
  }, [dispatch, userLogged]);

  return (
    <Container>
      <ContactsMenu />
      {contacts.length > 0 ? (
        <ul
          style={{
            listStyle: "none",
            paddingInlineStart: "0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactList__item}>
              <Contact
                name={name}
                number={number}
                onDelete={() => {
                  dispatch(deleteContact(id));
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>You don't have any contacts yet</h1>
      )}
    </Container>
  );
};

export default ContactList;
