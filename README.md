# Prizzz

Simple Todo CRUD app built with Prisma ORM to learn database operations.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` file:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/prizzz_db"
   ```

3. Setup database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Usage

Uncomment functions in `main()` and run:

```bash
npm run dev
```

## Features

- Create users with todos
- Read all users and todos
- Update todo status
- Delete users

## Tech Stack

- Node.js
- Prisma ORM
- PostgreSQL
