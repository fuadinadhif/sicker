# Sicker - Simple (Booking Date) Picker

## Installation

1. Adjust the environment variables in the `.env` files for both the frontend and backend folders according to your local setup. Follow the formats provided in the `.env.example` files.

2. Install Frontend Dependencies

   ```bash
   cd /web
   npm install
   ```

3. Install Backend Dependencies

   ```bash
   cd /api
   npm install
   ```

4. Setup Prisma

   ```bash
   cd /api
   npx prisma generate
   npx prisma db pus
   npx prisma db seed
   ```

## Running The Project

1.  Run Both Frontend and Backend

    ```bash
    cd /web
    npm run dev

    cd /api
    npm run dev
    ```

2.  Run Prisma Studio

    ```bash
    cd /api
    npx prisma Studio
    ```

## Note

The ID used in the fetch process is hard-coded as `1`. Please make an adjustment before if your room has different ID in your data
