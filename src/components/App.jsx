import React from 'react';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { Contacts } from './Contact/Contacts';
import {
  getInitialState,
  handleNameChange,
  handleNumberChange,
  handleFilterChange,
  handleAddContact,
  handleDeleteContact,
} from './StateHelper/StateHelper';

export class App extends React.Component {
  state = getInitialState();

  handleNameChange = (event) => {
    this.setState((prevState) => handleNameChange(prevState, event.target.value));
  };

  handleNumberChange = (event) => {
    this.setState((prevState) => handleNumberChange(prevState, event.target.value));
  };

  handleFilterChange = (event) => {
    this.setState((prevState) => handleFilterChange(prevState, event.target.value));
  };

  handleAddContact = () => {
    this.setState((prevState) => handleAddContact(prevState));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => handleDeleteContact(prevState, id));
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Search filter={filter} onFilterChange={this.handleFilterChange} />
        <Contacts contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}