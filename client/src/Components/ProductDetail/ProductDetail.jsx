import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';
import ProductOverview from './ProductOverview/ProductOverview';

import api from '../../lib/api';

const StyledProductDetail = styled.div`
  width: clamp(320px, 100%, 1280px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
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
  productId, setProductId, selectedStyle, setSelectedStyle,
}) => {
  let defaultStyle = {};

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  // const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    api.productInformation(productId)
      .then((productInformation) => setProduct(productInformation))
      .catch(() => {
        setProduct({});
      });

    api.productStyles(productId)
      .then((productStyles) => {
        // defaultStyle = productStyles[0];
        [defaultStyle] = productStyles;
        defaultStyle = productStyles ? productStyles
          .find((eachStyle) => eachStyle['default?']) : {};
        setStyles(productStyles);
      })
      .then(() => {
        setSelectedStyle(defaultStyle);
      })
      .then(() => {
        if (defaultStyle.photos && defaultStyle.photos[0]) {
          setSelectedPhoto(defaultStyle.photos[0]);
        } else { setSelectedPhoto({}); }
      })
      .catch(() => setSelectedStyle(defaultStyle));
  }, [productId]);

  const onSubmitSetProductId = (e) => {
    e.preventDefault();
    setSearchText('');
    setProductId(Number(searchText));
  };

  return (
    <StyledProductDetail>
      <div>
        <form
          onSubmit={onSubmitSetProductId}
          onChange={(e) => setSearchText(e.target.value)}
        >
          <div>Product Detail</div>
          <input type="text" placeholder="product_id" />
          <input type="submit" />
          <span>This is just for testing. Will delete later.</span>
        </form>
      </div>

      <ImagesInfoStyleCart>
        <ImageGallery
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photos={selectedStyle ? selectedStyle.photos : []}
        />
        <InfoStyleCart>
          <ProductInfo product={product} />
          <StyleSelector
            styles={styles}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setSelectedPhoto={setSelectedPhoto}
          />
          <AddToCart skus={selectedStyle ? selectedStyle.skus : []} />
        </InfoStyleCart>
      </ImagesInfoStyleCart>

      <div><ProductOverview product={product} /></div>
    </StyledProductDetail>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired,
  setProductId: PropTypes.func.isRequired,
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
  setSelectedStyle: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
  selectedStyle: undefined,
};

export default ProductDetail;
