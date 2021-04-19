/* eslint-disable no-console */
import React from 'react';
import api from '../../lib/api';
import Product from './Product';

const ProductDetail = () => {
  api.listProducts()
    .then((products) => {
      console.log('listProducts');
      console.log(products);
    });

  api.productInformation(20101)
    .then((product) => {
      console.log('productInformation');
      console.log(product);
    });

  api.productStyles(20101)
    .then((product) => {
      console.log('productStyles');
      console.log(product);
    });

  api.relatedProducts(20101)
    .then((product) => {
      console.log('relatedProducts');
      console.log(product);
    });

  api.listReviews(20101, 'newest', 1, 4)
    .then((product) => {
      console.log('listReviews');
      console.log(product);
    });

  api.getReviewMetadata(20101)
    .then((product) => {
      console.log('getReviewMetadata');
      console.log(product);
    });

  return (
    <div>
      ProductDetail
      <div><Product /></div>
    </div>
  );
};

export default ProductDetail;
