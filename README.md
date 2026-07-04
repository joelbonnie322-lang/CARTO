# CARTO

CARTO is an application to help companies sell their products to a wider market by providing localization, multi-currency pricing, channel integrations, and market analytics.

This repository contains a starter full-stack scaffold (Node/Express API + React frontend) to demonstrate core features and provide a foundation for further development.

Key features in this scaffold
- Simple products API
- Basic frontend to list products and simulate expanding to new markets
- Placeholders for localization, currency conversion, analytics, and marketplace integrations

Tech stack
- Backend: Node.js, Express
- Frontend: React (Vite)
- Dev: Dockerfile included for the server

Getting started (dev)

1. Start the server

   cd server
   npm install
   npm start

   The API will run on http://localhost:4000

2. Start the client

   cd client
   npm install
   npm run dev

   The client will run on http://localhost:5173 (Vite default)

What's next
- Wire up a real translations service (e.g., i18n or external translations API)
- Add currency conversion using a rates API and persistent price rules
- Add authentication and multi-tenant support for different companies
- Add connectors for marketplaces (Amazon, eBay), ad channels, and shipping/tax services

Contributions
PRs welcome. Open issues for feature requests or bugs.
