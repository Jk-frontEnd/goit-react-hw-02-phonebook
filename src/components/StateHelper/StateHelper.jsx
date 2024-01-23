import { nanoid } from 'nanoid';

export const getInitialState = () => ({
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
});

export const handleNameChange = (prevState, value) => ({
  ...prevState,
  name: value,
});

export const handleNumberChange = (prevState, value) => ({
  ...prevState,
  number: value,
});

export const handleFilterChange = (prevState, value) => ({
  ...prevState,
  filter: value.toLowerCase(),
});

export const handleAddContact = (prevState) => {
  const { name, number, contacts } = prevState;

  if (name.trim() === '' || number.trim() === '') {
    alert('Please enter both the contact name and phone number.');
    return prevState;
  }

  if (contacts.some((contact) => contact.name.toLowerCase() === name.trim().toLowerCase())) {
    alert('Contact with this name already exists.');
    return prevState;
  }

  const newContact = {
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  };

  return {
    ...prevState,
    contacts: [...contacts, newContact],
    name: '',
    number: '',
  };
};

export const handleDeleteContact = (prevState, id) => ({
  ...prevState,
  contacts: prevState.contacts.filter((contact) => contact.id !== id),
});
