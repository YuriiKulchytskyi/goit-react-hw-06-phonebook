import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, saveContact, updateFilter } from '../redux/contactsSlice';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);

      parsedContacts.forEach(contact => {
        dispatch(saveContact(contact));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const visibleContacts = getVisibleContacts();
  const handleSubmit = newContact => {
    const isNameExist = contacts.some(contact => contact.name === newContact.name);
  
    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
  
    dispatch(saveContact({ ...newContact, id: Math.floor(Math.random() * 1000) }));
  };

  const deleteContactById = id => {
    dispatch(deleteContact(id))
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContactById} />
    </div>
  );
};