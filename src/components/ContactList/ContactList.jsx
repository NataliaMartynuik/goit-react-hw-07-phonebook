import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import { Wraper, ContactItem, ContactText, DelButton, Text } from './ContactList.styled';
import { Loader } from '../Loader/Loader';
import { useDeleteContactMutation, useFetchContactsQuery } from 'redux/contactsApi';
import { FiDelete } from 'react-icons/fi';
import { IconContext } from "react-icons";

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);
  console.log(filter)
  const getVisibleContacts = () => {
     return data.filter(contact =>
     contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
  }

  

 let visibleContacts = filter === '' ? data : getVisibleContacts();

  return (
      <>
        <Wraper>
        {data &&
          visibleContacts.map(({ id, name, number, }) => (
                <ContactItem key={id} >
                    <ContactText>{name}:</ContactText> {number}
              <DelButton
                type="button"
                onClick={() => deleteContact(id)}>
                <IconContext.Provider value={{ size: "30px", color: "rgba(33, 33, 33, 0.2)"  }}>
                <FiDelete />
                </IconContext.Provider>
              </DelButton>
               
                </ContactItem>
            ))}
      </Wraper>
       {data && data.length === 0 && (
        <Text >No contacts available</Text>)}
      {isFetching && <Loader />}
    </>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;