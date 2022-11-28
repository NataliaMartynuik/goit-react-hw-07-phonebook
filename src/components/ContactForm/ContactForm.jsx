import { useState } from 'react';
import { ContactForm, ContactLabel, ContactInput, ContactButton } from './ContactForm.styled';

import { useAddContactMutation, useFetchContactsQuery } from 'redux/contactsApi';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Form = () => {
  const [addContacts] = useAddContactMutation();
  const { data } = useFetchContactsQuery();
  
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleSubmit = event => {
     event.preventDefault();
     const contact = {
      name,
      number,

    }

    if (data.find(contact => contact.name === name)) {
        toast.info(`${name} is already in contacts.`)
    } else {
      addContacts(contact);
      toast.success(`${name} is added in contacts.`) 
      }
      reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
          <ContactForm onSubmit={handleSubmit}>
          <ContactLabel>
            Name
          </ContactLabel>
          <ContactInput
  type="text"
  name="name"
  value={name}
  onChange={e => setName(e.currentTarget.value)}                 
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required                  
          />
       <ContactLabel>
            Number
          </ContactLabel>    
         <ContactInput
  type="tel"
  name="number"
  value={number}
  onChange={e => setNumber(e.currentTarget.value)}                 
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                />
  <ContactButton type="submit">Add contact</ContactButton>
  <ToastContainer position="top-center" autoClose={2000} toastify-color-info="#a47186"/>              
      </ContactForm>  
        )
 }

export default Form;