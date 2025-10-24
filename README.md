# Contact Manager

A React-based contact management application built for the Tria assignment.

## Overview

This is a single-page application that allows users to view, search, add, edit, and delete contacts. The app features a clean, modern UI with support for favoriting contacts and viewing detailed information.

## Features

- View all contacts in a card-based layout
- Search contacts by name, email, or phone
- Add new contacts with form validation
- Edit existing contact information
- Mark contacts as favorites
- Delete contacts with confirmation
- Expand/collapse contact details
- Responsive design for all screen sizes

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.js
├── App.css
├── index.js
├── index.css
├── components/
│   ├── SearchBar.js
│   ├── ContactList.js
│   ├── ContactCard.js
│   ├── AddContactModal.js
│   └── EditContactModal.js
└── data/
    └── contacts.js
```

## Technologies Used

- React 18
- CSS3
- JavaScript ES6+

## Contact Data Model

Each contact contains the following fields:

- `id`: Unique identifier
- `name`: Contact name (required)
- `email`: Email address (required)
- `phone`: Phone number (required)
- `company`: Company name (optional)
- `address`: Physical address (optional)
- `notes`: Additional notes (optional)
- `avatar`: Profile picture URL (optional)
- `favorite`: Favorite status
- `expanded`: Card expansion state

## License

This project is created for the Tria frontend assignment.
