import React from 'react';

import { Container } from './App.styled';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </Container>
  );
}

export default App;
