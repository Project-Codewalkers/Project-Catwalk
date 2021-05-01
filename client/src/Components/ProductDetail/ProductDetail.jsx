import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';
import ProductOverview from './ProductOverview/ProductOverview';
import TopBar from './TopBar';

const StyledProductDetail = styled.div`
  width: clamp(320px, 100%, 1280px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;
`;

const ImagesInfoStyleCart = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InfoStyleCart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 32px;
  width: 100%;
`;

const ProductDetail = ({
  productId,
  setProductId,
  styles,
  productInfo,
  selectedStyle,
  setSelectedStyle,
  avgRating,
  reviewCount,
}) => (
  <StyledProductDetail>
    <TopBar productId={productId} setProductId={setProductId} />
    <ImagesInfoStyleCart>
      <ImageGallery
        style={selectedStyle}
      />
      <InfoStyleCart>
        <ProductInfo
          product={productInfo}
          productId={productId}
          selectedStyle={selectedStyle}
          avgRating={avgRating}
          reviewCount={reviewCount}
        />
        <StyleSelector
          styles={styles}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />
        <AddToCart
          skusObj={selectedStyle && selectedStyle.skus ? selectedStyle.skus : {}}
          productId={productId}
        />
      </InfoStyleCart>
    </ImagesInfoStyleCart>

    <div><ProductOverview product={productInfo} /></div>
  </StyledProductDetail>
);

ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired,
  setProductId: PropTypes.func.isRequired,
  styles: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
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
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      }),
    ),
  }),
  setSelectedStyle: PropTypes.func.isRequired,
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number,
};

ProductDetail.defaultProps = {
  productInfo: {
    id: null,
    campus: null,
    name: null,
    slogan: null,
    description: null,
    category: null,
    default_price: null,
    created_at: null,
    updated_at: null,
    features: [],
  },
  styles: [],
  selectedStyle: null,
  avgRating: 0,
  reviewCount: 0,
};

export default ProductDetail;
