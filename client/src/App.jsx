/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
import { avgStars } from './Components/RelatedItems/Stars';
import api from './lib/api';
import Modal from './Components/Review/Modal';
import dummy from './lib/dummy';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Helvetica, sans-serif;
`;

const App = () => {
  const initId = Number(window.location.pathname.replace(/\//g, ''));
  const [productId, rawSetProductId] = useState(initId || 20100);
  const [productInfo, rawSetProductInfo] = useState(dummy.dummyProductInformation);
  const [styles, rawSetStyles] = useState(dummy.dummyProductStyles.results);
  const [selectedStyle, rawSetSelectedStyle] = useState(dummy.dummyProductStyles.results[0]);
  const [reviewMeta, rawSetMeta] = useState(dummy.dummyGetReviewMetadata);
  const [avgRating, rawSetAvgRating] = useState(0);
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
      <div className="module" module="Product Detail">
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
      </div>
      <div className="module" module="Related Items & Comparison">
        <Carousel
          productId={productId}
          changeProduct={changeProduct}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
          avgRating={avgRating}
          setImage={setImage}
        />
      </div>
      <div className="module" module="Ratings & Reviews">
        <ReviewList id={productId} metaReview={reviewMeta} />
        <Modal id={productId} />
      </div>
    </StyledApp >
  );
};

export default App;
