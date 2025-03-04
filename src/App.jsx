import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

function App() {
  const [userData, setUserData] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const filteredContacts = userData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
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

export default App
