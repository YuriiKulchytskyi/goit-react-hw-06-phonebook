import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Form, Input, Text, Button } from './ContactForm.styled';

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleNameChange}
      />

      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleNumberChange}
      />

      <Button type="submit">Add
      </Button>
    </Form>
  );
}

export default ContactForm;
