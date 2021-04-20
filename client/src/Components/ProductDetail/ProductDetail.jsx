/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
// import api from '../../lib/api';
// import Product from './Product';

const ProductDetail = ({ productId }) => (
  <div>
    {`ProductDetail of ${productId}`}
    {/* <div><Product /></div> */}
  </div>
);

ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired,
};

// api.listProducts()
//   .then((products) => {
//     console.log('listProducts');
//     console.log(products);
//   });

// api.productInformation(20101)
//   .then((product) => {
//     console.log('productInformation');
//     console.log(product);
//   });

// api.productStyles(20101)
//   .then((product) => {
//     console.log('productStyles');
//     console.log(product);
//   });

// api.relatedProducts(20101)
//   .then((product) => {
//     console.log('relatedProducts');
//     console.log(product);
//   });

// api.listReviews(20101, 'newest', 1, 4)
//   .then((product) => {
//     console.log('listReviews');
//     console.log(product);
//   });

// api.getReviewMetadata(20101)
//   .then((product) => {
//     console.log('getReviewMetadata');
//     console.log(product);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const testReviewObj = {
//   product_id: 20101,
//   rating: 5,
//   summary: 'Great Product!',
//   body: 'I love this thing and use it all the time!',
//   recommend: true,
//   name: 'Ringo Starr',
//   email: 'Ringo@beatles.com',
//   photos: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80',
//   characteristics: { 14: 5, 15: 5 },
// };

// api.addAReview(testReviewObj)
//   .then((product) => {
//     console.log('getReviewMetadata');
//     console.log(product);
//   });

// api.listQuestions(20101, 1, 5)
//   .then((questions) => {
//     console.log('listQuestions');
//     console.log(questions);
//   });

export default ProductDetail;
