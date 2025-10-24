import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';

function ContactList({ 
  contacts, 
  onDeleteContact, 
  onEditContact, 
  onToggleFavorite,
  onToggleExpand 
}) {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No contacts found</h3>
        <p>Try adjusting your search or add a new contact</p>
      </div>
    );
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={() => onDeleteContact(contact.id)}
          onEdit={(updatedContact) => onEditContact(contact.id, updatedContact)}
          onToggleFavorite={() => onToggleFavorite(contact.id)}
          onToggleExpand={() => onToggleExpand(contact.id)}
        />
      ))}
    </div>
  );
}

export default ContactList;
