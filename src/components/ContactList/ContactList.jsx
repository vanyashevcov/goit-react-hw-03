import Contact from "../Contact/Contact.jsx"
import s from "./ContactList.module.css"

const ContactList = ({ userData, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {userData.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
