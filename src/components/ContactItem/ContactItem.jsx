import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactItems, ContactName, Button } from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItems>
      <ContactName>
        {contact.name} : {contact.number}
      </ContactName>

      <Button onClick={handleDelete}>DELETE</Button>
    </ContactItems>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
