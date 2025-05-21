import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.item}>
      <div className={css.contact}>
        <p>
          <HiUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <HiPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.btn} type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
