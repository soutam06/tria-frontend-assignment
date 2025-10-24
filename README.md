# Contact Manager — Tria Assignment

A single‑page React app to view, search, and add contacts with a polished, interactive UI, built per the Tria frontend assignment guidelines.

## Live Demo
- Deployed Web App: https://tria-frontend-assignment-rho.vercel.app/

## Overview
This project demonstrates frontend skills in React, mocked API-like interaction, component design, and product sense by translating requirements into a working, user‑friendly application. It implements a simplified Contact List with the ability to view contacts, search by name, and add new contacts, along with several UX enhancements.

## Features
- View contacts in a responsive card-based grid with avatars, loading states, and empty states
- Real-time search by name (extended to email and phone for better discoverability)
- Add contact via a validated modal form (name, email, phone required)
- Optional enhancements:
  - Edit contact with a prefilled modal form
  - Delete contact with confirmation dialog
  - Mark favorite contacts and auto-sort to the top
  - Expand/hide additional details like company, address, and notes
- Mobile-friendly, keyboard-accessible UI with smooth animations

## Tech Stack
- React 18 (functional components with hooks)
- CSS for responsive layout, transitions, and animations
- Mocked data/state to simulate API fetches

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

npm install

### Development
npm start

App runs at http://localhost:3000
text

### Production Build
npm run build

Outputs to the build/ directory
text

## Project Structure
tria-contact-list/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── SearchBar.js
│ │ ├── SearchBar.css
│ │ ├── ContactList.js
│ │ ├── ContactList.css
│ │ ├── ContactCard.js
│ │ ├── ContactCard.css
│ │ ├── AddContactModal.js
│ │ ├── EditContactModal.js
│ │ └── Modal.css
│ ├── data/
│ │ └── contacts.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
├── package.json
├── README.md
└── .gitignore

text

## Deployment

### Vercel (recommended)
1. Push the repository to GitHub
2. Import the repo into Vercel (“New Project”)
3. Build command: `npm run build`, Output directory: `build`
4. Vercel will provide a live URL and redeploys on every push

### Netlify
1. Connect the GitHub repo on Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add `"homepage": "https://<your-username>.github.io/tria-contact-list"` to package.json
3. Add scripts:
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d build"`
4. Deploy with `npm run deploy`

## Assumptions & Design Decisions
- Data fetching is simulated with local state/mock data to match the assignment’s flexibility on API usage
- Search focuses on name per the brief but extends to email/phone to improve UX
- Favorites and expandable details are optional UI/UX additions demonstrating product sense and interactivity