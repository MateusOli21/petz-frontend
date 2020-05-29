import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export const theme = {
  primary: '#f05a28',
  secondary: '#31cbff',
  bgHeaderAndCard: '#f8f8f8',
  white: '#fff',
  black: '#333',
  blackOpaque: 'rgba(0,0,0,0.5)',
  bgOpague: '#e9e9e9',
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font: 16px 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
