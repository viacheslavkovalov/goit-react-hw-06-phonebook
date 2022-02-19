import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import {
  FormWrapper,
  SubmitButton,
  StyledInput,
  StyledLabel,
} from './Form.styled';

export default function Form({ onSave }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const disabled = true;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    onSave();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledLabel htmfor={nameInputId}>
        Name
        <StyledInput
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          onChange={event => setName(event.target.value)}
        />
      </StyledLabel>
      <StyledLabel htmfor={numberInputId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          onChange={event => setNumber(event.target.value)}
        />
      </StyledLabel>
      {name && number ? (
        <SubmitButton type="submit" disabled={!disabled}>
          Add contact
        </SubmitButton>
      ) : (
        <SubmitButton type="submit" disabled>
          Add contact
        </SubmitButton>
      )}
    </FormWrapper>
  );
}
