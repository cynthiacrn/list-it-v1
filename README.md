# Wishlist Application in Next.js with NextAuth, Prisma, and TailwindCSS

## Description
This is a wishlist application built using [Next.js](https://nextjs.org/), [NextAuth](https://next-auth.js.org/), [Prisma](https://www.prisma.io/), and [TailwindCSS](https://tailwindcss.com/). It features a fully functional CRUD system for managing wishlists. The project is still under development, but I'm excited to share the progress so far.

While the core functionality is in place, the design, responsiveness, and navigation are still being refined. Upcoming features will make the application even more robust and user-friendly.

---

## Prerequisites
Before starting, ensure you have the following:

- Node.js (>= 14.x recommended)
- PostgreSQL (for the database)
- A package manager like npm or yarn

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <REPO_URL>
   cd <PROJECT_NAME>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add the necessary keys. Example:

   ```env
   AUTH_SECRET="YOUR_SECRET_KEY"
   DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database_name>"
   ```

   **Note:** You must generate your own values for `AUTH_SECRET` and properly configure `DATABASE_URL` for your environment.

4. Initialize the Prisma database:

   ```bash
   npx prisma migrate dev
   ```

---

## Features

- **CRUD Operations**: Fully functional create, read, update, and delete operations for wishlists.
- **Authentication**: Secure authentication using NextAuth.
- **Planned Enhancements**:
    - Collaboration: Share a wishlist with another user to collaborate in real-time.
    - Media Integration: Add photos to your wishlist items.
    - Sharing and Access Control: Public and private lists with unique access for shared users.
    - Improved Navigation: Enhanced user experience with refined navigation.
    - Responsive Design: A mobile-friendly interface.
    - Testing: Add robust tests to ensure stability and reliability.

---

## Available Scripts

- `npm run dev` : Starts the development server.
- `npm run build` : Builds the application for production.
- `npm start` : Starts the server in production mode.
- `npx prisma migrate dev` : Synchronizes Prisma migrations.
- `npx prisma studio` : Opens Prisma Studio to explore the database.

---

## Deployment

To deploy the application, follow these steps:

1. Build the production version:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Ensure the necessary environment variables are configured on your deployment platform (e.g., Vercel, AWS).

---

## Development Status

This project is still in progress. The next development steps include:

1. Adding collaboration features for shared wishlists.
2. Implementing photo uploads for wishlist items.
3. Improving navigation and overall user experience.
4. Creating public and private lists with specific access controls.
5. Enhancing the design for better responsiveness.
6. Adding tests for stability and reliability.

Feedback and suggestions are welcome. Feel free to reach out or open an issue on GitHub to discuss the current implementation or ideas for improvement.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

