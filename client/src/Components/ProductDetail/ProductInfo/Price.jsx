import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPriceLine = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
`;

const StyledSalePrice = styled.span`
  display: flex;
  flex-direction:row;
  color: red;
  margin: 0 5px 0 0;
`;

const Price = ({ product, selectedStyle }) => {
  let salePrice;
  let originalPrice;
  let styledOriginalPrice;
  if (selectedStyle) {
    salePrice = selectedStyle.sale_price;
    originalPrice = selectedStyle.original_price;
  } else {
    salePrice = product.sale_price;
    originalPrice = product.default_price;
  }

  if (salePrice) {
    styledOriginalPrice = (
      <s id="original-price">{`$${originalPrice}`}</s>
    );
  } else {
    styledOriginalPrice = <span id="original-price">{`$${originalPrice}`}</span>;
  }

  return (
    <StyledPriceLine>
      {salePrice && (
        <StyledSalePrice id="sale-price">
          {`$${salePrice}`}
        </StyledSalePrice>
      )}
      {styledOriginalPrice}
    </StyledPriceLine>
  );
};

Price.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    sale_price: PropTypes.string,
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
};

Price.defaultProps = {
  product: {
    default_price: null,
    sale_price: null,
  },
  selectedStyle: null,
};

export default Price;
