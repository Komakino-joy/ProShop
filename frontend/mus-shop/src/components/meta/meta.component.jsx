import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({ 
    title='Welcome To MusShop', 
    description='We sell the best products', 
    keywords='prints, shirts, buy prints, custom' }) => {
    return (
        <Helmet>
            <tite>{title}</tite>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    );
};

export default Meta;
