import React, { useState } from 'react';
import { Contacts } from './Contact/Contacts';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { nanoid } from 'nanoid';

const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });

  const handleNameChange = (event) => {
    setState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const handleNumberChange = (event) => {
    setState((prevState) => ({ ...prevState, number: event.target.value }));
  };

  const handleFilterChange = (event) => {
    setState((prevState) => ({ ...prevState, filter: event.target.value.toLowerCase() }));
  };

  const handleAddContact = () => {
    const { name, number, contacts } = state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both the contact name and phone number.');
      return;
    }

    if (contacts.some((contact) => contact.name.toLowerCase() === name.trim().toLowerCase())) {
      alert('Contact with this name already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setState((prevState) => ({
      ...prevState,
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    }));
  };

  const handleDeleteContact = (id) => {
    const { contacts } = state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setState((prevState) => ({ ...prevState, contacts: updatedContacts }));
  };

  const { name, number, contacts, filter } = state;

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

  return (
    <>
      <h1
      >
        Phonebook
      </h1>
      <div
      >
        <div>
          <Form
            name={name}
            number={number}
            onNameChange={handleNameChange}
            onNumberChange={handleNumberChange}
            onAddContact={handleAddContact}
          />
        </div>
        <div>
          <Contacts contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        </div>
      </div>
      <Search filter={filter} onFilterChange={handleFilterChange} />
    </>
  );
};

export { App };
