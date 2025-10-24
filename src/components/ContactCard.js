import React, { useState } from 'react';
import EditContactModal from './EditContactModal';
import './ContactCard.css';

function ContactCard({ contact, onDelete, onEdit, onToggleFavorite, onToggleExpand }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirm(false);
    onDelete();
  };

  const handleEdit = (updatedContact) => {
    onEdit(updatedContact);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className={`contact-card ${contact.favorite ? 'favorite' : ''}`}>
        <div className="card-header">
          <div className="avatar">
            {contact.avatar ? (
              <img src={contact.avatar} alt={contact.name} />
            ) : (
              <span className="avatar-placeholder">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <div className="contact-info">
            <div className="name-row">
              <h3>{contact.name}</h3>
              {contact.favorite && <span className="favorite-badge">⭐</span>}
            </div>
            <p className="email">✉️ {contact.email}</p>
            <p className="phone">📞 {contact.phone}</p>
          </div>

          <div className="card-actions">
            <button
              className={`btn-icon ${contact.favorite ? 'active' : ''}`}
              onClick={onToggleFavorite}
              title={contact.favorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {contact.favorite ? '⭐' : '☆'}
            </button>
            <button
              className="btn-icon"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit contact"
            >
              ✏️
            </button>
            <button
              className="btn-icon delete"
              onClick={() => setShowDeleteConfirm(true)}
              title="Delete contact"
            >
              🗑️
            </button>
          </div>
        </div>

        {contact.expanded && contact.company && (
          <div className="expanded-details">
            <p><strong>Company:</strong> {contact.company}</p>
            {contact.address && <p><strong>Address:</strong> {contact.address}</p>}
            {contact.notes && <p><strong>Notes:</strong> {contact.notes}</p>}
          </div>
        )}

        {(contact.company || contact.address || contact.notes) && (
          <button 
            className="btn-expand"
            onClick={onToggleExpand}
          >
            {contact.expanded ? '▲ Show Less' : '▼ Show More'}
          </button>
        )}
      </div>

      {showDeleteConfirm && (
        <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
          <div className="modal confirm-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Contact?</h3>
            <p>Are you sure you want to delete <strong>{contact.name}</strong>?</p>
            <div className="modal-actions">
              <button 
                className="btn-cancel"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button 
                className="btn-delete"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <EditContactModal
          contact={contact}
          onClose={() => setIsEditModalOpen(false)}
          onEditContact={handleEdit}
        />
      )}
    </>
  );
}

export default ContactCard;
