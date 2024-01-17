import React, { Component } from 'react';

import { Contacts } from './contact/Contacts';
import { Form } from 'form/Form';
import { Search } from './search/Search'
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
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

  

  handleAddContact = () => {
    const { name, number, contacts } = this.state;

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
      name: '',
      number: '',
    });
  };

  handleDeleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: updatedContacts,
    });
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    // Filter the contacts based on the search filter
    const filteredContacts = contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filter)
    );

    return (
      <>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 0,
            marginBottom: '12px',
            marginTop: '12px',
            padding: 0,
          }}
        >
          Phonebook
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '60px',
            margin: 0,
            padding: 0,
          }}
        >
          
          <div>
             <Form
              name={name}
              number={number}
              onNameChange={this.handleNameChange}
              onNumberChange={this.handleNumberChange}
              onAddContact={this.handleAddContact}
            />
          </div>
          <div>
            <Contacts contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
          </div>
        </div>
        <Search filter={filter} onFilterChange={this.handleFilterChange} />
      </>
    );
  }
}
