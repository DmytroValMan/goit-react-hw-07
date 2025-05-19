import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const searchField = useSelector((state) => state.filters.name);

  const seachedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {seachedContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
