import React from 'react';
import css from './Form.module.css';

const Form = ({ name, number, onNameChange, onNumberChange, onAddContact }) => {
  return (
    <form className={css.formBox}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={onNameChange} required />
      </label>
      <label>
        Phone number
        <input type="tel" name="number" value={number} onChange={onNumberChange} required />
      </label>
      <button className={css.btn} type="button" onClick={onAddContact}>
        Add Contact
      </button>
    </form>
  );
};

export { Form };
