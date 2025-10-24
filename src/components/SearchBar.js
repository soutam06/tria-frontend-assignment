import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search by name, email, or phone..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-btn"
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
