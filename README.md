# Champions League API

A simple REST API built with Node.js, Express, and TypeScript for managing Champions League data.

## What this project does

- Exposes endpoints for **players** (`/api/players`) and **clubs** (`/api/clubs`).
- Supports basic CRUD-style operations for players.
- Returns a clubs list loaded from a local JSON file.

## Tech stack

- Node.js
- Express 5
- TypeScript
- tsx (development runtime)
- tsup (build)

## Project structure

```text
src/
  app.ts
  server.ts
  controllers/
  services/
  repositories/
  routes/
  data/
  models/
```

## Requirements

- Node.js 18+ (recommended)
- npm

## Installation

```bash
npm install
```

## Environment variables

Create a `.env` file in the root:

```env
PORT = 3000
```

## Run the project

Development:

```bash
npm run start:dev
```

Watch mode:

```bash
npm run start:watch
```

Build and run dist:

```bash
npm run start:dist
```

When running, server starts at:

```text
http://localhost:<PORT>
```

## Available scripts

- `npm run start:dev` - Runs API with `tsx`.
- `npm run start:watch` - Runs API in watch mode.
- `npm run dist` - Builds project with `tsup`.
- `npm run start:dist` - Builds and runs compiled output.

## API endpoints

Base URL:

```text
http://localhost:3000
```

### Players

- `GET /api/players`
  - Returns all players.
  - Status: `200` (data found) or `204` (empty list).

- `GET /api/players/:id`
  - Returns a player by id.
  - Status: `200` or `204`.

- `POST /api/players`
  - Creates a new player.
  - Body:

```json
{
  "id": 3,
  "name": "Kylian Mbappe"
}
```

  - Status: `201` on success, `400` if id already exists.

- `PATCH /api/players/:id`
  - Updates a player by id.
  - Body:

```json
{
  "id": 3,
  "name": "Updated Name"
}
```

  - Status: `200` on success, `400` if id is not found.

- `DELETE /api/players/:id`
  - Deletes a player by id.
  - Status: `200` on success, `400` if id is not found.

### Clubs

- `GET /api/clubs`
  - Returns all clubs from `src/data/clubs-data.json`.

## Example cURL requests

Get all players:

```bash
curl http://localhost:3000/api/players
```

Create a player:

```bash
curl -X POST http://localhost:3000/api/players \
  -H "Content-Type: application/json" \
  -d '{"id":3,"name":"Kylian Mbappe"}'
```

Update a player:

```bash
curl -X PATCH http://localhost:3000/api/players/3 \
  -H "Content-Type: application/json" \
  -d '{"id":3,"name":"Erling Haaland"}'
```

Delete a player:

```bash
curl -X DELETE http://localhost:3000/api/players/3
```

Get all clubs:

```bash
curl http://localhost:3000/api/clubs
```

## Notes

- Players are stored in memory (`src/data/players-data.ts`). Data resets when the server restarts.
- Clubs are loaded from a local JSON file (`src/data/clubs-data.json`).
- This project currently has no authentication or database integration.
