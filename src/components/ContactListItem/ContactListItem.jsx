import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.Styled';

 export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )}

ContactListItem.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired, 
  onDelete: PropTypes.func.isRequired,
}