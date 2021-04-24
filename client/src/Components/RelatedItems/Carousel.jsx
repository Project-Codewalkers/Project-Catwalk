/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Controller from './Controller';
import api from '../../lib/api';

const CarouselMain = styled.div`
  display: block;
  line-height: 22px;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

const CarouselTitle = styled.h2`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px 20px 5px;
`;

const Carousel = ({ productId }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.relatedProducts(productId)
      .then((related) => {
        // console.log(related);
        const itemPromises = related.map((itemId) => (
          Promise.all([
            api.productStyles(itemId),
            api.getReviewMetadata(itemId),
            api.productInformation(itemId),
          ])
        ));
        Promise.all(itemPromises)
          .then((productStyles) => {
            setItems(productStyles);
          });
      })
      .catch(() => {
        setItems([]);
      });
  }, [productId]);

  return (
    <CarouselMain role="main">
      <CarouselTitle>Related Items</CarouselTitle>
      <Controller data={items} />
    </CarouselMain>
  );
};

export default Carousel;
