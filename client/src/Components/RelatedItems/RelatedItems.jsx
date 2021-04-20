/* eslint-disable no-console */
import React from 'react';
import api from '../../lib/api';

const RelatedItems = () => {
  api.relatedProducts(20101)
    .then((product) => {
      console.log('relatedProducts');
      console.table(product);
    });
  return (
    <div>Hello World: Related Items</div>
  );
};

export default RelatedItems;
