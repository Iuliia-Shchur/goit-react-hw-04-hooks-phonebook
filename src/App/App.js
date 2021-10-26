import { useState } from "react";
import s from "./App.module.css";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";
import defaultContacts from "../contacts.json";
import useLocalStorage from "../Hooks/useLS";

function App() {
  const [contacts, setContacts] = useLocalStorage(
    "contacts" ?? defaultContacts
  );
  const [filter, setFilter] = useState("");

  const formSubmit = (obj) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === obj.name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }
    setContacts([obj, ...contacts]);
  };

  const handleContacts = () => {
    const onContactsFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(onContactsFilter)
    );
  };

  const filterChange = (evt) => {
    setFilter(evt.target.value);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const getContacts = handleContacts();
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm formSubmit={formSubmit} />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} onFilterChange={filterChange} />
      <ContactList getContacts={getContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
