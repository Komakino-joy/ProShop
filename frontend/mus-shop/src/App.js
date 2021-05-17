import React from 'react';

import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component'

const App = () => {
  return (
    <>
      <Header/>
        <main className='pa-3'>
        <Container>
          <HomePage />
        </Container>
        </main>
      <Footer/>
    </>
  );
}

export default App;
