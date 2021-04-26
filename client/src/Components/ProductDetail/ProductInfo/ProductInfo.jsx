import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReadReviews from './ReadReviews';

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.h1`
  margin: 0.2em;
`;

const ProductInfo = ({ product, productId }) => (
  <StyledProductInfo>
    <ReadReviews productId={productId} />
    <div>
      <strong>{product.category ? product.category.toUpperCase() : 'CATEGORY'}</strong>
    </div>
    <ProductName className="ProductName">
      {product.name ? product.name : ''}
    </ProductName>
    <div>
      {product.default_price ? `$${product.default_price}` : ''}
    </div>
  </StyledProductInfo>
);

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
};

ProductInfo.defaultProps = {
  product: {},
};

export default ProductInfo;
