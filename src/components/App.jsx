import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
