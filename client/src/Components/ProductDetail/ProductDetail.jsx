import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';
import ProductOverview from './ProductOverview/ProductOverview';

import api from '../../lib/api';

const ProductDetail = ({ productId, setProductId }) => {
  let defaultStyle = {};

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
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
    <div>

      <div>
        <form
          onSubmit={onSubmitSetProductId}
          onChange={(e) => setSearchText(e.target.value)}
        >
          <input type="text" placeholder="product_id" />
          <input type="submit" />
          <p>↑This is just for testing. Will delete later.↑</p>
        </form>
      </div>

      <div style={{ display: 'inline-flex' }}>
        <div>
          <ImageGallery
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
            photos={selectedStyle ? selectedStyle.photos : []}
          />
        </div>
        <div>
          <div><ProductInfo product={product} /></div>
          <div>
            <StyleSelector
              styles={styles}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              setSelectedPhoto={setSelectedPhoto}
            />
          </div>
          <div><AddToCart skus={selectedStyle ? selectedStyle.skus : []} /></div>
        </div>
      </div>

      <div><ProductOverview product={product} /></div>
    </div>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired,
  setProductId: PropTypes.func.isRequired,
};

export default ProductDetail;

// ProductDetail.propTypes = {
//   productId: PropTypes.number.isRequired,
// };

// api.listProducts()
//   .then((products) => {
//     console.log('listProducts');
//     console.log(products);
//   });

// api.productStyles(20101)
//   .then((product) => {
//     console.log('productStyles');
//     console.log(product);
//   });

// api.relatedProducts(20101)
//   .then((product) => {
//     console.log('relatedProducts');
//     console.log(product);
//   });

// api.listReviews(20101, 'newest', 1, 4)
//   .then((product) => {
//     console.log('listReviews');
//     console.log(product);
//   });

// api.getReviewMetadata(20101)
//   .then((product) => {
//     console.log('getReviewMetadata');
//     console.log(product);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const testReviewObj = {
//   product_id: 20101,
//   rating: 5,
//   summary: 'Great Product!',
//   body: 'I love this thing and use it all the time!',
//   recommend: true,
//   name: 'Ringo Starr',
//   email: 'Ringo@beatles.com',
//   photos: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80',
//   characteristics: { 14: 5, 15: 5 },
// };

// api.listQuestions(20101, 1, 5)
//   .then((questions) => {
//     console.log('listQuestions');
//     console.log(questions);
//   });
