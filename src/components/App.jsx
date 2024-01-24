import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { Contacts } from './Contact/Contacts';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  
  handleAddContact = (name, number) => {
    const { contacts } = this.state;

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

    this.setState({
      contacts: [...contacts, newContact],
    });
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

 
  render() {
    const { contacts, filter, name, number } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          handleAddContact={this.handleAddContact}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Search filter={filter} onFilterChange={this.handleFilterChange} />
        <Contacts contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}