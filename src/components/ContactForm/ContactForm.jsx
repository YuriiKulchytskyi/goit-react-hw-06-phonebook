import { useState } from 'react';
import { Form, Input, Button } from './ContactForm.style';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(saveContact({ ...formData, id: Math.floor(Math.random() * 1000) }));
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;


  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="number"
        required
        placeholder="Enter number"
        value={number}
        onChange={handleChange}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
