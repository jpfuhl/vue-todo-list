# Vue To-Do List

This is a simple To-Do List application built with Vue 3 and TypeScript. It's a portfolio piece demonstrating my ability to create a modern, interactive web application.

## Live Demo

The application is deployed on Vercel and can be accessed at [https://vue-todo-list-kappa.vercel.app/](https://vue-todo-list-kappa.vercel.app/).

## Project Structure

- `src/`: Contains the main application code.
  - `App.vue`: The main Vue component.
  - `assets/`: Contains CSS files for styling the application.
  - `components/`: Contains Vue components used in the application.
  - `main.ts`: The entry point for the application.
  - `router/`: Contains the Vue Router configuration.
  - `stores/`: Contains the Pinia store for managing application state.
  - `types/`: Contains TypeScript type definitions.
  - `views/`: Contains Vue components that represent entire pages.
- `public/`: Contains public assets that will be served directly by the server.
- `vite.config.ts`: Contains configuration for Vite, the build tool used in this project.
- `tsconfig.json`: Contains configuration for the TypeScript compiler.

## Getting Started

1. Clone the repository:

`sh git clone https://github.com/jpfuhl/vue-todo-list.git`

2. Install the dependencies:

`npm install`

3. Start the development server:

`npm run dev`

## Building for Production

To create a production build, run the following command:

`npm run build`

This will create a dist/ directory with the production-ready files.

## Note

This project is a portfolio piece and is not intended for other contributors. If you'd like to reference this project, please attribute it to me.
