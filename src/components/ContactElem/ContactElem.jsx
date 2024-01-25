import React from 'react';

const ContactElem = ({ contacts, onDeleteContact }) => (
  contacts.map((contact) => (
    <li key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  ))
);

export { ContactElem };
