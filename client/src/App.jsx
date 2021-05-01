import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
import { avgStars, totalReviews } from './Components/RelatedItems/Stars';
import api from './lib/api';
import Modal from './Components/Review/Modal';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Helvetica, sans-serif;
`;

const App = () => {
  const initId = Number(window
    && window.location
    && window.location.pathname
    && window.location.pathname.replaceAll('/', ''));
  const [productId, rawSetProductId] = useState(initId || 20100);
  const [productInfo, rawSetProductInfo] = useState(null);
  const [styles, rawSetStyles] = useState([]);
  const [selectedStyle, rawSetSelectedStyle] = useState(null);
  const [reviewMeta, rawSetMeta] = useState(null);
  const [avgRating, rawSetAvgRating] = useState(null);
  const [reviewCount, rawSetReviewCount] = useState(0);

  const setProductId = useCallback((id) => rawSetProductId(id), []);
  const setProductInfo = useCallback((id) => rawSetProductInfo(id), []);
  const setStyles = useCallback((id) => rawSetStyles(id), []);
  const setSelectedStyle = useCallback((id) => rawSetSelectedStyle(id), []);
  const setMeta = useCallback((id) => rawSetMeta(id), []);
  const setAvgRating = useCallback((id) => rawSetAvgRating(id), []);
  const setReviewCount = useCallback((id) => rawSetReviewCount(id), []);

  useEffect(() => {
    if (!productId) { return; }

    api.productInformation(productId)
      .then((productInformation) => {
        setProductInfo(productInformation);
      })
      .catch((err) => {
        setProductInfo(null);
        throw err;
      });

    api.getReviewMetadata(productId)
      .then((meta) => {
        setMeta(meta);
        if (meta && meta.reviews) {
          setAvgRating(avgStars(meta.ratings));
          setReviewCount(reviewCount(meta.ratings));
        }
      })
      .catch((err) => {
        setMeta(null);
        setAvgRating(0);
        throw err;
      });

    api.productStyles(productId)
      .then((productStyles) => {
        if (!productStyles) {
          productStyles = [];
        }
        setStyles(productStyles);
        if (!Array.isArray(productStyles)) { return; }
        let defaultStyle = productStyles
          .find((eachStyle) => eachStyle['default?']);
        if (!defaultStyle) {
          [defaultStyle] = productStyles;
        }
        setSelectedStyle(defaultStyle);
      })
      .catch((err) => {
        setStyles([]);
        setSelectedStyle(null);
        throw err;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const element = e.target.outerHTML;
      const widget = e.target.closest('.module').attributes.module.value;
      const time = new Date().toTimeString();
      api.logAnInteraction({ element, widget, time })
        .catch((err) => {
          throw err;
        });
    });
  }, []);

  const changeProduct = (product) => {
    setProductId(Number(product));
  };
  const setImage = (item) => {
    setSelectedStyle(item);
  };

  return (
    <StyledApp data-testid="appComponent">
      <ProductDetail
        productId={productId}
        setProductId={setProductId}
        styles={styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        productInfo={productInfo}
        reviewMeta={reviewMeta}
        avgRating={avgRating}
      />
      <Carousel
        productId={productId}
        changeProduct={changeProduct}
        productInfo={productInfo}
        reviewMeta={reviewMeta}
        selectedStyle={selectedStyle}
        avgRating={avgRating}
        setImage={setImage}
      />
      <ReviewList id={productId} metaReview={reviewMeta} />
      <Modal product={productId} />
    </StyledApp>
  );
};

export default App;
