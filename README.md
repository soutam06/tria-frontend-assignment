# Contact Manager

> A modern, responsive contact management application built with React for the Tria Frontend Assignment.

[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://tria-frontend-assignment-rho.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🔗 Live Demo

**[View Live Application →](https://tria-frontend-assignment-rho.vercel.app/)**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Data Model](#data-model)
- [Validation](#validation)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

---

## Overview

Contact Manager is a single-page application designed to streamline contact organization and management. Built with React and modern web technologies, it provides an intuitive interface for viewing, searching, creating, editing, and managing contacts efficiently.

This project was developed as part of the Tria Frontend Assignment to demonstrate proficiency in:
- React component design and state management
- Form validation and user interaction handling
- Responsive UI/UX implementation
- Clean code architecture and best practices

## ✨ Features

### Core Functionality
- **Contact Listing**: Display all contacts in an organized, card-based layout
- **Advanced Search**: Real-time filtering by name, email, or phone number
- **Create Contacts**: Add new contacts with comprehensive form validation
- **Edit Contacts**: Update existing contact information seamlessly
- **Delete Contacts**: Remove contacts with confirmation dialog for safety

### Enhanced Features
- **Favorite Management**: Mark important contacts as favorites with priority sorting
- **Expandable Details**: Toggle between compact and detailed contact views
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Form Validation**: Client-side validation with clear error messaging
- **Loading States**: Smooth loading indicators for better user experience
- **Empty States**: Helpful messaging when no contacts match search criteria

## 🛠 Technology Stack

- **Frontend Framework**: React 18.x
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with component-scoped styles
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: Vercel
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contact-manager
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Testing

Run the test suite:
```bash
npm test
```

## 📁 Project Structure

```
contact-manager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchBar.js          # Search input component
│   │   ├── SearchBar.css
│   │   ├── ContactList.js        # Contact list container
│   │   ├── ContactList.css
│   │   ├── ContactCard.js        # Individual contact card
│   │   ├── ContactCard.css
│   │   ├── AddContactModal.js    # Modal for adding contacts
│   │   ├── EditContactModal.js   # Modal for editing contacts
│   │   └── Modal.css             # Shared modal styles
│   ├── data/
│   │   └── contacts.js           # Initial contact data
│   ├── App.js                    # Main application component
│   ├── App.css                   # Main application styles
│   ├── index.js                  # React entry point
│   └── index.css                 # Global styles
├── package.json
└── README.md
```

## 🏗 Component Architecture

### App.js
- **Purpose**: Root component managing global application state
- **Responsibilities**:
  - Contact data management (CRUD operations)
  - Search functionality implementation
  - Modal state management
  - Simulated API data fetching

### SearchBar
- **Purpose**: Provides search interface for filtering contacts
- **Features**: Real-time search with clear functionality

### ContactList
- **Purpose**: Renders list of contact cards or empty state
- **Props**: contacts array, callback handlers for actions

### ContactCard
- **Purpose**: Displays individual contact information
- **Features**: 
  - Expandable/collapsible details
  - Favorite toggle
  - Quick actions (edit, delete)
  - Avatar display

### AddContactModal & EditContactModal
- **Purpose**: Form interfaces for creating and updating contacts
- **Features**:
  - Comprehensive form validation
  - Inline error messages
  - Keyboard accessibility

## 📊 Data Model

Each contact object follows this structure:

```javascript
{
  id: Number,              // Unique identifier (timestamp-based)
  name: String,            // Full name (required)
  email: String,           // Email address (required, validated)
  phone: String,           // Phone number (required, validated)
  company: String,         // Company name (optional)
  address: String,         // Physical address (optional)
  notes: String,           // Additional notes (optional)
  avatar: String,          // Profile picture URL (optional)
  favorite: Boolean,       // Favorite status flag
  expanded: Boolean        // Card expansion state
}
```

## ✅ Validation

### Form Validation Rules

**Name Field**
- Required field
- Must not be empty or contain only whitespace
- Error message: "Name is required"

**Email Field**
- Required field
- Must match standard email format (RFC 5322 basic validation)
- Error message: "Please enter a valid email"

**Phone Field**
- Required field
- Must contain only digits, spaces, hyphens, and parentheses
- Minimum length validation
- Error message: "Please enter a valid phone number"

**Optional Fields**
- Company, Address, Notes: No validation required

## 🌐 Deployment

This application is deployed on Vercel and can be accessed at:
**[https://tria-frontend-assignment-rho.vercel.app/](https://tria-frontend-assignment-rho.vercel.app/)**

### Deploying Your Own Instance

1. Fork this repository
2. Import project to Vercel
3. Configure build settings:
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy

## 🔮 Future Enhancements

### Planned Features
- **Backend Integration**: Connect to REST API or GraphQL endpoint
- **Data Persistence**: Implement localStorage or database storage
- **Authentication**: Add user authentication and authorization
- **Contact Groups**: Organize contacts into custom groups/categories
- **Import/Export**: Support for CSV and vCard formats
- **Advanced Search**: Filter by multiple fields and custom criteria
- **Contact Photos**: Avatar upload with image cropping
- **Internationalization**: Multi-language support
- **Dark Mode**: Theme toggle for user preference
- **Accessibility**: Enhanced ARIA labels and keyboard navigation

### Technical Improvements
- Unit and integration testing with Jest and React Testing Library
- E2E testing with Cypress or Playwright
- Performance optimization with React.memo and useMemo
- TypeScript migration for type safety
- State management with Redux or Context API
- PWA capabilities for offline support

## 📝 License

This project is developed for the Tria Frontend Assignment. All rights reserved.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Tria for the assignment opportunity
- React documentation and community
- Vercel for hosting platform

---

**Built with ❤️ using React**
