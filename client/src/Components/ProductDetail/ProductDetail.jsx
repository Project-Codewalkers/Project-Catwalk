import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';
import ProductOverview from './ProductOverview/ProductOverview';
import TopBar from './TopBar';

import api from '../../lib/api';

const StyledProductDetail = styled.div`
  width: clamp(320px, 100%, 1280px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
`;

const InfoStyleCart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 32px;
  width: 100%;
  /* border: 1px solid black; */
`;

const ProductDetail = ({
  productId,
  setProductId,
  styles,
  productInfo,
  selectedStyle,
  setSelectedStyle,
  reviewMeta,
  avgRating,
}) => {
  const [selectedPhoto, rawSetSelectedPhoto] = useState({});
  const setSelectedPhoto = useCallback((photo) => rawSetSelectedPhoto(photo), []);

  return (
    <StyledProductDetail>
      <TopBar productId={productId} setProductId={setProductId} />
      <ImagesInfoStyleCart>
        <ImageGallery
          // selectedPhoto={selectedPhoto}
          // setSelectedPhoto={setSelectedPhoto}
          style={selectedStyle}
        />
        <InfoStyleCart>
          <ProductInfo
            product={productInfo}
            productId={productId}
            selectedStyle={selectedStyle}
          />
          <StyleSelector
            styles={styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            // setSelectedPhoto={setSelectedPhoto}
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
};

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
        quantity: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ),
  }),
  setSelectedStyle: PropTypes.func.isRequired,
  reviewMeta: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.objectOf(PropTypes.string),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string,
    }),
    characteristics: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
    ),
  }),
  avgRating: PropTypes.number,
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
  reviewMeta: {
    product_id: null,
    ratings: {},
    recommended: {
      false: '0',
      true: '0',
    },
    characteristics: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
    ),
  },
  avgRating: 0,
};

export default ProductDetail;
