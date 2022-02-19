import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { StyledLabel, StyledInput } from './Filter.styled';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterInputId = nanoid();
  const onChange = value => dispatch(changeFilter(value));

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    onChange(value.toLowerCase());
  };

  return (
    <StyledLabel htmlFor={filterInputId}>
      Find contacts by name
      <StyledInput
        type="text"
        value={value}
        id={filterInputId}
        placeholder="Find contact"
        onChange={handleFilterChange}
      ></StyledInput>
    </StyledLabel>
  );
}
