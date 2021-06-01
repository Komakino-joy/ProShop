import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { listProducts } from '../../redux/product/product.actions'

import Product from '../../components/product/product.component';
import Loader from '../../components/loader/loader.component';
import Paginate from '../../components/paginate/paginate.component';
import Message from '../../components/message/message.component';
import ProductCarousel from '../../components/product-carousel/product-carousel.compenent';
import Meta from '../../components/meta/meta.component';

const HomePage = ({ match }) => {
    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages} = productList

    useEffect(() => {
       dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

    return (
        <>
            <Meta title='Hellow World'/>
            {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link> }
            <h1>Latest Products</h1>
            {loading ? <Loader>Loading...</Loader> : error ? <Message variant='danger'>{error}</Message> :
            <>
                <Row>
                    {
                        products.map((product) => (
                            <Col 
                            key={product._id} 
                            className='align-items-stretch d-flex'
                            sm={12} 
                            md={6} 
                            lg={4} 
                            xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))
                    };
                </Row>
                <Paginate
                    pages={pages}
                    page={page}
                    keyword={keyword ? keyword : ''}
                />
            </>
            }
        </>
    );
};

export default HomePage
