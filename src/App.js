import React from 'react';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
