import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
  const getInitialContacts = () => {
    const savedContacts = localStorage.getItem("userData");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  };

  const [userData, setUserData] = useState(getInitialContacts);

  const [filter, setFilter] = useState("");

   useEffect(() => {
     localStorage.setItem("userData", JSON.stringify(userData));
   }, [userData]);

  const filteredContacts = userData.filter(({ name, number }) =>
    `${name} ${number}`.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    setUserData((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setUserData((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList userData={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
