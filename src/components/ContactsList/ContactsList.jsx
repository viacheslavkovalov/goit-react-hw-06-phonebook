import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getVisibleContacts, getContactsLength } from 'redux/selectors';
import errorImage from '../../icons/cat.jpg';
import {
  StyledContact,
  StyledContactItem,
  StyledContactButton,
} from './ContactsList.styled.jsx';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const contactsLength = useSelector(getContactsLength);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  if (contactsLength === 0) {
    return <img src={errorImage} width="300" alt="error" />;
  } else {
    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <StyledContact key={id}>
            <StyledContactItem>
              {name}: {number}
            </StyledContactItem>
            <StyledContactButton
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </StyledContactButton>
          </StyledContact>
        ))}
      </ul>
    );
  }
}
