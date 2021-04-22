import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ product }) => (
  <div>
    <div>
      ProductInfo
    </div>
    <div>
      <strong>CATEGORY</strong>
    </div>
    <h1>
      {product.name}
    </h1>
    <div>
      {product.default_price}
    </div>
  </div>
);

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    default_price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default ProductInfo;
