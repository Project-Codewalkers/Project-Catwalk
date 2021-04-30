/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import RelatedController from './RelatedController';
import OutfitController from './OutfitController';
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

const Carousel = ({
  productId,
  productInfo,
  selectedStyle,
  reviewMeta,
  setProductId,
  changeProduct,
}) => {
  const [items, setItems] = useState([]);
  const [outfit, setOutfit] = useState([]);

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

  // eslint-disable-next-line consistent-return
  const newItem = (style, meta, info) => {
    const outfitArr = [];
    outfitArr.push(style, meta, info);
    // console.log(outfitArr);
    if (!style) { outfitArr.style = null; }
    if (!meta) { outfitArr.meta = null; }
    if (!info) { outfitArr.info = null; }
    const copy = outfit.slice();
    if (copy.includes(style)) {
      return;
    }
    copy.push(outfitArr);
    setOutfit(copy);
  };

  return (
    <>
      <CarouselMain role="main">
        <CarouselTitle>Related Items</CarouselTitle>
        <RelatedController
          data={items}
          productId={productId}
          changeProduct={changeProduct}
        />
      </CarouselMain>
      <br />
      <CarouselMain>
        <CarouselTitle>Outfit Items</CarouselTitle>
        <OutfitController
          data={items}
          outfit={outfit}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
          newItem={newItem}
          setProductId={setProductId}
        />
      </CarouselMain>
    </>
  );
};

export default Carousel;
