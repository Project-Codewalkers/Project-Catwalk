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
  font-weight: 200;
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

  useEffect(() => {
    const temp = (localStorage.getItem('currentItem'));
    const loadedOutfits = JSON.parse(temp);
    setOutfit(loadedOutfits || []);
    // console.log('Hi');
  }, [setOutfit]);

  const newItem = (style, meta, info) => {
    const itemObj = { style, meta, info };
    if (!style) { itemObj.style = null; }
    if (!meta) { itemObj.meta = null; }
    if (!info) { itemObj.info = null; }
    if (style.style_id) {
      if (outfit.findIndex((item) => (item.style.style_id === itemObj.style.style_id)) >= 0) {
        return;
      }
    }
    const copy = outfit.slice();
    copy.push(itemObj);
    setOutfit(copy || []);
    localStorage.setItem('currentItem', JSON.stringify(outfit));
  };

  const deleteItem = (item) => {
    const copy = outfit.slice();
    copy.splice(item, 1);
    setOutfit(copy || []);
    localStorage.setItem('currentItem', JSON.stringify(outfit));
  };

  return (
    <>
      <CarouselMain role="main">
        <CarouselTitle>RELATED PRODUCTS</CarouselTitle>
        <RelatedController
          data={items}
          productId={productId}
          changeProduct={changeProduct}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
        />
      </CarouselMain>
      <br />
      <br />
      <CarouselMain>
        <CarouselTitle>OUTFIT BUILD</CarouselTitle>
        <OutfitController
          data={items}
          outfit={outfit}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
          newItem={newItem}
          deleteItem={deleteItem}
          setProductId={setProductId}
        />
      </CarouselMain>
    </>
  );
};

// Carousel.propTypes = {
//   productId: PropTypes.number.isRequired,
//   productInfo: PropTypes.shape({
//     id: PropTypes.number,
//     campus: PropTypes.string,
//     name: PropTypes.string,
//     slogan: PropTypes.string,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     default_price: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     features: PropTypes.arrayOf(PropTypes.shape({
//       feature: PropTypes.string,
//       value: PropTypes.string,
//     })),
//   }),
//   selectedStyle: PropTypes.shape({
//     style_id: PropTypes.number,
//     name: PropTypes.string,
//     original_price: PropTypes.string,
//     sale_price: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.object,
//     ]),
//     'default?': PropTypes.bool,
//     photos: PropTypes.arrayOf(PropTypes.shape(
//       {
//         thumbnail_url: PropTypes.string,
//         url: PropTypes.string,
//       },
//     )),
//     skus: PropTypes.objectOf(
//       PropTypes.shape({
//         quantity: PropTypes.number.isRequired,
//         size: PropTypes.string.isRequired,
//       }),
//     ),
//   }),
//   reviewMeta: PropTypes.shape({
//     characterists: PropTypes.shape({
//       Comfort: PropTypes.shape({
//         id: PropTypes.number,
//         value: PropTypes.number,
//       }),
//       Fit: PropTypes.shape({
//         id: PropTypes.number,
//         value: PropTypes.number,
//       }),
//       Length: PropTypes.shape({
//         id: PropTypes.number,
//         value: PropTypes.number,
//       }),
//       Quality: PropTypes.shape({
//         id: PropTypes.number,
//         value: PropTypes.number,
//       }),
//     }),
//     product_id: PropTypes.string,
//     rating: PropTypes.shape({
//       3: PropTypes.number,
//       4: PropTypes.number,
//       5: PropTypes.number,
//     }),
//     recommended: PropTypes.shape({
//       false: PropTypes.string,
//       true: PropTypes.string,
//     }),
//   }),
//   setProductId: PropTypes.func,
//   changeProduct: PropTypes.func.isRequired,
// };

// Carousel.defaultProps = {
//   productInfo: PropTypes.null,
//   selectedStyle: PropTypes.null,
//   reviewMeta: PropTypes.null,
//   setProductId: PropTypes.null,
// };

export default Carousel;
