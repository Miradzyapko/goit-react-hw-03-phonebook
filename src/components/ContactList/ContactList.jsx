import PropTypes from 'prop-types';
import { List, ListItem, Item} from './ContactList.Styled'; 
import { Button } from './ContactList.Styled';

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