# Bookshelf

_[Technologies](#technologies) | [Installation](#installation) | [Preview](#preview)_

Personal library application that tracks your reading.

- 📕 Find & add books by title and/or author
- 📗 Favourite, edit, take notes, categorize & tag
- 📘 Track 'to read', 'currently reading' and 'read'

## Technologies

- [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript
- [React](https://reactjs.org) | Front-end JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) | React framework for developing single page JS applications
- [Node.js](https://nodejs.dev/) | Back-end JavaScript runtime environment
- [Prisma](https://www.prisma.io/) | Node.js and TypeScript ORM

### Testing

- [Jest](https://jestjs.io/) | Back-end unit testing.
- [Cypress](https://www.cypress.io/) | End-to-end testing framework
- [React Testing Library](https://testing-library.com/) | React DOM testing utilities
- [GitHub Actions](https://github.com/features/actions) | Continuous Integration

### Styling

- [TailwindCSS](https://tailwindcss.com/) | CSS framework
- [HeadlessUI](https://headlessui.com/) | Unstyled and accessible UI components

### &&

- [Axios](https://github.com/axios/axios) | Http client
- [Prettier](https://github.com/prettier/prettier) | Code formatter
- [ESLint](https://eslint.org/) | Linting utility

## Installation

1. Clone the repository & install the dependencies
2. Use `sqlite` for a local database
3. Add your `.db` file's path in your `.env` file:

   ```js
   DATABASE_URL = "file:./dev.db"; // relative to the '/prisma' folder
   ```

4. Run `npm run dev`
5. Visit http://localhost:3000

## Preview

![image](https://user-images.githubusercontent.com/72412305/225118459-92b9ae87-024b-4ccd-b116-3244087522ba.png)
