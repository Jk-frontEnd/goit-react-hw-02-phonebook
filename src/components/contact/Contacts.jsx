import React from 'react';
import css from './Contact.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contBox}>
      <h2 className={css.contBox}>Contacts</h2>
      <ul 
        style={{
            listStyle: 'circle',
            padding: 0,
            margin: 0,
            position: 'fixed',
            right: '420px',
            top: '120px',
            display: 'flex',
            flexDirection: 'column' 
        }}
      >
        {contacts.map((contact) => (
          <li
            style={{
              padding: 0,
              margin: 0,
            }}
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
