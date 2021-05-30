import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component'
import ProductPage from './pages/product-page/product-page.component';
import CartPage from './pages/cart-page/cart-page';
import LoginPage from './pages/login-page/login-page.component';
import RegisterPage from './pages/register-page/register-page.component';
import ProfilePage from './pages/profile-page/profile-page.component';
import ShippingPage from './pages/shipping-page/shipping-page.component';
import PaymentMethodPage from './pages/payment-method/payment-method.component';
import PlaceOrderPage from './pages/place-order-page/place-order-page.component';
import OrderPage from './pages/order-page/order-page.component';
import UserListPage from './pages/user-list-page/user-list-page.component';
import UserEditPage from './pages/user-edit-page/user-edit.component';
import ProductListPage from './pages/product-list-page/product-list-page';

const App = () => {
  return (
    <Router>
      <Header/>
        <main className='pa-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:productId' component={ProductPage} />
          <Route path='/cart/:productId?' component={CartPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentMethodPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/productlist' component={ProductListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
        </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
