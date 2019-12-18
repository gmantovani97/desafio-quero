import React from 'react';

import Header from './pages/Header';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
