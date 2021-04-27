import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReadReviews from './ReadReviews';
import Price from './Price';

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.h1`
  margin: 0.2em;
`;

const ProductInfo = ({ product, productId, selectedStyle }) => {
  if (!product) { return <div />; }
  return (
    <StyledProductInfo>
      <ReadReviews productId={productId} />
      <div>
        <strong>{product.category ? product.category.toUpperCase() : 'CATEGORY'}</strong>
      </div>
      <ProductName className="ProductName">
        {product.name ? product.name : ''}
      </ProductName>
      <Price
        product={product}
        selectedStyle={selectedStyle}
      />
    </StyledProductInfo>
  );
};

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
  selectedStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape(
      {
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      },
    )),
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    })),
  }),
  productId: PropTypes.number,
};

ProductInfo.defaultProps = {
  product: {},
  productId: null,
  selectedStyle: null,
};

export default ProductInfo;
