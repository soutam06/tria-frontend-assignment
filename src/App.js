import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import AddContactModal from './components/AddContactModal';
import { initialContacts } from './data/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API fetch on mount
  useEffect(() => {
    setTimeout(() => {
      setContacts(initialContacts);
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  const handleAddContact = (newContact) => {
    const contact = {
      id: Date.now(),
      ...newContact,
      favorite: false,
      expanded: false
    };
    setContacts([contact, ...contacts]);
    setIsModalOpen(false);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEditContact = (id, updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    ));
  };

  const handleToggleFavorite = (id) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  const handleToggleExpand = (id) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, expanded: !contact.expanded } : contact
    ));
  };

  // Sort contacts: favorites first
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (a.favorite === b.favorite) return 0;
    return a.favorite ? -1 : 1;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>📇 Contact Manager</h1>
        <p className="subtitle">Manage your contacts with ease</p>
      </header>

      <div className="container">
        <div className="top-controls">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
          />
          <button 
            className="btn-add-contact"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Contact
          </button>
        </div>

        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading contacts...</p>
          </div>
        ) : (
          <ContactList
            contacts={sortedContacts}
            onDeleteContact={handleDeleteContact}
            onEditContact={handleEditContact}
            onToggleFavorite={handleToggleFavorite}
            onToggleExpand={handleToggleExpand}
          />
        )}

        {isModalOpen && (
          <AddContactModal
            onClose={() => setIsModalOpen(false)}
            onAddContact={handleAddContact}
          />
        )}
      </div>
    </div>
  );
}

export default App;
