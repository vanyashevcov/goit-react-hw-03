import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"

const Contact = ({id, name, number, deleteContact }) => {
  return (
    <div className={s.contactContainer}>
      <div className="">
        <p className={s.contactText}>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
