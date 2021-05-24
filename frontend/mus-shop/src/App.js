import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component'
import ProductPage from './pages/product-page/product-page.component';
import CartPage from './pages/cart-page/cart-page';

const App = () => {
  return (
    <Router>
      <Header/>
        <main className='pa-3'>
        <Container>
          <Route exact path='/' component={HomePage}  />
          <Route path='/product/:productId' component={ProductPage}  />
          <Route path='/cart/:productId?' component={CartPage}  />
        </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
