# decksmith-backend

# Decksmith Backend

A TypeScript-based backend service for building and managing Magic: The Gathering decks.
Powered by a modern Node.js stack with integration to the Scryfall API for real-time card data.

---

## Features

* Search cards via Scryfall API
* Deck creation and management
* Fast, lightweight REST API
* Modular architecture (routes, services, integrations)

---

## Tech Stack

* Node.js
* TypeScript
* Express
* Scryfall API
* dotenv

---

## Getting Started

### 1. Clone the repo
```
git clone git@github.com:Rakiir/decksmith-backend.git
cd decksmith-backend
```

### 2. Install dependencies
```
npm install
```

### 3. Set up environment variables
Create a `.env` file:
```
PORT=3000
SCRYFALL_API_URL=https://api.scryfall.com
```

### 4. Run the server
```
npm run dev
```
Server will start at:  http://localhost:3000

---

## API Endpoints

### Health Check
```
GET /health
```

### Get Card by Name
```
GET /card/:name
```

### Get Card by Set + Collector Number
```
GET /card/:set/:number
```

---

## License
MIT
