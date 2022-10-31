#Yaichao-UI: react UI demos
This repository provides react components written in JSX with the use of a wide variety of external ready-made components, demonstrating how they can integrate with other components.

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Parts required:
- The components built here rely on the [MUI material-UI library for react.](https://mui.com/). -> `npm install @mui/material @emotion/react @emotion/styled`
- The Carrousel component is mostly just a wrapper around [Flicking](https://naver.github.io/egjs-flicking/) -> `npm install @egjs/react-flicking`
- Demo pages are routed using [React Router](https://github.com/remix-run/react-router#readme). -> `npm install react-router-dom localforage match-sorter sort-by`
## How-to
- Components are at "src/".
  - `src/Carrousel.jsx`: Carrousel component with optional timer, displays 1 or 2 panels on screen at once for landscape tablet screens and bigger, powered by Flicking
  - `src/routes/App.jsx`: Flavour-text page with Material design App-bar and a Carrousel with 3 elements inside.
- For demo pages, `cd` into the project's root folder and run `npm start`. This will start a server on your machine that answers at http://localhost:3000 or http://127.0.0.1:3000. Right now only two pages exist:
  - `localhost:3000/`: index page, just flavour text, material design theme and a carrousel.
  - 
