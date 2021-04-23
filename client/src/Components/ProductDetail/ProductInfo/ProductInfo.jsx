import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ product }) => (
  <div>
    <div>
      ★★★☆☆
    </div>
    <div>
      Read all reviews
    </div>
    <div>
      <strong>{product.category ? product.category.toUpperCase() : 'CATEGORY'}</strong>
    </div>
    <h1 className="ProductName">
      {product.name}
    </h1>
    <div>
      {`$${product.default_price}`}
    </div>
  </div>
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
