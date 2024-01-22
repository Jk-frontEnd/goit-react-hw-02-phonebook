import React from 'react';
import css from './Contact.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contBox}>
      <h2 className={css.contBox}>Contacts</h2>
      <ul
      >
        {contacts.map((contact) => (
          <li
            key={contact.id}
          >
            {contact.name}: {contact.number}{' '}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Contacts };
