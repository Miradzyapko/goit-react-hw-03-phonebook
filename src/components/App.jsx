import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { Container, Title} from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {

  
    state = {
      contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
      
      filter: ''
    };
 
    FormSubmitHandler = ({ name, number }) => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
  
      const { contacts } = this.state;
      const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
      if (checkContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
  
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }))
  
    }
  changeFilter = e => {
    this.setState ({ filter: e.currentTarget.value})
    e.preventDefault()
  }
  
  
    visibleContacts = () => {
      const { contacts, filter } = this.state;
      const normalized = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
    };l
  
    handleDeleteContact = (id) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(el => el.id !== id),
      }));
    };
  
    render() {
      const visibleContacts = this.visibleContacts();
  
    return (
      <Container>
        <ContactForm title="Phonebook" onSubmit={this.FormSubmitHandler} />
         <Title>Contacts</Title>
         <Filter
          onChange={this.changeFilter}
          value={this.state.filter}
 />
         <ContactList title="Contacts" onDelete={this.handleDeleteContact}
          contacts={visibleContacts}/>



</Container>
    )
  }
}

