import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/form-container/form-container';

import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component'

import { savePaymentMethod } from '../../redux/cart/cart.actions';

const PaymentMethodPage = ({ history }) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if(!shippingAddress) {
        history.push('/shipping');
    };

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder');
    };

    return (
        <FormContainer>
        <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1> 
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                

                <Col>
                    <Form.Check 
                        type='radio' 
                        label='PayPal or Credit Card' 
                        id='PayPal'
                        name='paymentMethod'
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Form.Check 
                        type='radio' 
                        label='Stripe' 
                        id='Stripe'
                        name='paymentMethod'
                        value='Stripe'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </Col>

                </Form.Group>
                <Button 
                    type='submit' 
                    variant='primary'
                    className='my-3'
                >Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentMethodPage
