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
import OrderListPage from './pages/order-list-page/order-list-page.component';
import UserListPage from './pages/user-list-page/user-list-page.component';
import UserEditPage from './pages/user-edit-page/user-edit.component';
import ProductListPage from './pages/product-list-page/product-list-page';
import ProductEditPage from './pages/product-edit-page/product-edit-page.component';

const App = () => {
  return (
    <Router>
      <Header/>
        <main className='pa-3'>
        <Container>
          <Route exact path='/search/:keyword' component={HomePage} />
          <Route exact path='/page/:pageNumber' component={HomePage} />
          <Route exact path='/search/:keyword/page/:pageNumber' component={HomePage} />
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
          <Route exact path='/admin/productlist' component={ProductListPage} />
          <Route exact path='/admin/productlist/:pageNumber' component={ProductListPage} />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/orderlist' component={OrderListPage} />
        </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
