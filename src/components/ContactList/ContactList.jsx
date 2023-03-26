import PropTypes from 'prop-types';
import React from "react";
import { List, Item, Button } from './ContactList.Styled'; 
import { ListItem } from 'components/ContactListItem/ContactListItem.Styled';
export const ContactList = ({contacts, onDelete }) => {
    return (
        <List>   
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                <Item>{name}: {number}</Item>
                <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
            </ListItem>
        ))}
    </List>
)
        }       
ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),


}
