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
  avgRating,
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

  // const outfitArr = [
  //   id,
  //   selectedStyle,
  //   reviewMeta,
  //   productInfo,
  // ];
  let count = {id: 1};
  const storageDevice = [];
  localStorage.setItem('storageDevice', JSON.stringify(storageDevice));

  // eslint-disable-next-line consistent-return
  const newItem = (style, meta, info) => {
    const outfitArr = [];
    outfitArr.push({ id: 1 }, style, meta, info);
    // console.log(outfitArr);
    if (!style) { outfitArr.style = null; }
    if (!meta) { outfitArr.meta = null; }
    if (!info) { outfitArr.info = null; }
    const copy = outfit.slice();
    if (copy.includes(outfitArr.meta)) {
      return outfit;
    // eslint-disable-next-line no-else-return
    } else {
      copy.push(outfitArr);
    }
    setOutfit(copy);
    count.id += 1;
    // eslint-disable-next-line no-plusplus
    // storageDevice.push(localStorage.setItem(`${outfitArr.count.id}`, JSON.stringify(outfitArr)));
    localStorage.setItem('currentItem', JSON.stringify(outfit));

    // localStorage.clear();
  };

  const deleteItem = (item) => {
    const copy = outfit.slice();
    copy.splice(item, 1);
    setOutfit(copy);
    // localStorage.removeItem(`${outfitArr.productInfo.product_id}`);
    // const index = getLocalStorage
    //             .findIndex(item => item == id_of_the_user_to_remove);
  };
// localStorage.clear();

  useEffect(() => {
    const temp = localStorage.getItem('currentItem');
    const loadedOutfits = JSON.parse(temp);

    if (loadedOutfits) { setOutfit(loadedOutfits); }
  }, [setOutfit]);

  return (
    <>
      <CarouselMain role="main">
        <CarouselTitle>Related Products</CarouselTitle>
        <RelatedController
          data={items}
          productId={productId}
          changeProduct={changeProduct}
          avgRating={avgRating}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
        />
      </CarouselMain>
      <br />
      <br />
      <CarouselMain>
        <CarouselTitle>Build Your Own Outfit</CarouselTitle>
        <OutfitController
          data={items}
          outfit={outfit}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
          newItem={newItem}
          deleteItem={deleteItem}
          setProductId={setProductId}
          // outfitArr={outfitArr}
        />
      </CarouselMain>
    </>
  );
};

export default Carousel;
