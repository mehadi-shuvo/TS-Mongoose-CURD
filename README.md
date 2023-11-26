# Shopping Project

## Overview

The Shopping Project is an adept and scalable backend application crafted with cutting-edge technologies to provide a seamless and secure user experience. Employing Node.js and Express.js for server-side logic, TypeScript for enhanced code maintainability, Mongoose for MongoDB integration, and a suite of essential tools and libraries, the project embraces a modern and efficient development workflow.

## Technologies Used

- **Node.js:** A robust JavaScript runtime for developing scalable and efficient server-side applications.
- **Express.js:** A minimalist web application framework for Node.js, offering robust features for web and mobile applications.
- **TypeScript:** A superset of JavaScript with static typing, enhancing code readability, maintainability, and reducing errors.
- **Mongoose:** An elegant MongoDB object modeling tool designed for asynchronous environments, providing a schema-based solution for application data modeling.
- **Dotenv:** A zero-dependency module facilitating the loading of environment variables from a .env file into process.env, streamlining configuration management.
- **Cors:** An Express.js middleware facilitating Cross-Origin Resource Sharing, ensuring secure communication between frontend and backend.
- **ESLint:** A pluggable linting utility for JavaScript and TypeScript, identifying and fixing common coding issues to ensure code consistency and quality.
- **Prettier:** An opinionated code formatter enforcing consistent coding styles, enhancing code readability and collaboration.
- **Bcrypt:** A password-hashing library adding an extra layer of security to user authentication.
- **ts-node-dev:** A development utility enabling fast and efficient TypeScript development by automatically restarting the server on file changes.
- **Zod:** A TypeScript-first schema declaration and validation library promoting better type safety and runtime validation.

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:** `git clone [https://github.com/mehadi-shuvo/TS-Mongoose-CURD]`
2. **Install dependencies:** `npm install`
3. **Set up environment variables:** Create a .env file based on the provided .env.example. Declare the following variables: `NODE_ENV`, `PORT`, `DB_URL`, and `BCrypt_Salt`.
4. **Assign values to environment variables:** Set `NODE_ENV` to 'development' for local work, use '5000' for `PORT`, copy the MongoDB Atlas connection string for `DB_URL`, and provide a numeric value for `BCrypt_Salt`.
5. **Start the development server:** `npm run start:dev`

You are now prepared to explore the Shopping Project and confidently implement additional features.
