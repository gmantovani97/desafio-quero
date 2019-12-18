import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    background: ${colors.grey};
    font-family: Montserrat;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    font-family: Montserrat;
    cursor: pointer;
  }

  div {
    display: flex;
  }
`;
