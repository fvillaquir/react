# React Test Factory

Welcome to the React Test Factory! This repository contains multiple React projects that serve as a playground for experimenting with various React features. The projects are built using React 18.3.1 and Vite 5.4.1. 

## Features Tested

This repository includes projects for testing and experimenting with the following features:

- **Events:** Handling user interactions and events.
- **Effects:** Managing side effects with the `useEffect` hook.
- **States:** Using the `useState` hook for state management.
- **Promises:** Working with asynchronous operations and promises.
- **Fetching:** Performing data fetching operations from APIs.
- **End-to-End Testing:** Conducting minor end-to-end tests to ensure the functionality of the applications.
- **Custom Hooks:** Creating and using custom React hooks.
- **React Hooks:** Utilizing built-in React hooks.

## Getting Started

To get started with any of the projects in this repository, follow these steps:

**Clone the Repository:**

   ```git clone https://github.com/fvillaquir/react_testing.git```
   
**Navigate to the Project Folder:**

```cd path/to/project```

**Install Dependencies:**

```npm install```

**Start the Development Server:**

```npm run dev```

The development server will start, and you can view the application in your browser at http://localhost:5173 (or the port specified in your Vite configuration).

Project Structure
Each project in this repository follows a similar structure:

- src/ - Contains the source code of the application structured in children folders such as /logic /services and or /components.
- vite.config.ts - Vite configuration file.
- package.json - Contains project metadata and dependencies.

projects:
01 twitter follow card: contains basic handling of states en effects
02 tic tac toe: integrates local storage handling and other tweaks
03 mouse follower: additional state handling and advances effect applications
04 react prueba tecnica(testing free cat api fetching): integrating fetching to remote APIs handling, promise handling, custom hooks and E2E testing
05 react buscador peliculas(testing free movie api db fetching): implementing useMemo, useRef, useCallback and custom hooks to integrate third party test apis

Contributing
Feel free to contribute by submitting issues, feature requests, or pull requests. Please ensure that your contributions adhere to the project's coding standards and guidelines.

License
This project is licensed under the MIT License - see the LICENSE file for details.
