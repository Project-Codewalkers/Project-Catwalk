/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItemsList';

const CarouselControllerRelated = styled.div`
  overflow: hidden;
`;

const CarouselListRelated = styled.div`
  display: flex;
  position: relative;
  transition: left .50s ease-out 0s;
  left: min(-3050px, 0px);
  left: max(0px, -3050px);
`;

const LeftBtnRelated = styled.button`
  display:flex;
  background-color: lightgrey;
  border: 1px solid #797777;
  border-radius: 4px;
  width: 43px;
  height: 64px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  cursor: pointer;
  left: -10px;
  z-index: 1;
`;

const RightBtnRelated = styled.button`
  display:flex;
  background-color: lightgrey;
  border: 1px solid #797777;
  border-radius: 4px;
  width: 43px;
  height: 64px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  cursor: pointer;
  right: -10px;
`;

const LeftArrowRelated = styled.svg`
  width: 24px;
  height: 24px;
`;

const RightArrowRelated = styled.svg`
  width: 24px;
  height: 24px;
`;

const RelatedController = ({
  data,
  changeProduct,
  productId,
  productInfo,
  reviewMeta,
  selectedStyle,
}) => {
  const [leftRelated, setLeftRelated] = useState(0);

  // refactor into separate components later
  function leftBtnRelated() {
    let btn = '';
    if (leftRelated === 0) {
      btn = (
        <LeftBtnRelated disabled onClick={() => setLeftRelated(leftRelated + 420)} type="button">
          <LeftArrowRelated viewBox="0 0 24 24">
            <title>Left Scroll Related</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </LeftArrowRelated>
        </LeftBtnRelated>
      );
    } else {
      btn = (
        <LeftBtnRelated onClick={() => setLeftRelated(leftRelated + 420)} type="button">
          <LeftArrowRelated viewBox="0 0 24 24">
            <title>Left Scroll Related</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </LeftArrowRelated>
        </LeftBtnRelated>
      );
    }
    return btn;
  }

  function rightBtnRelated() {
    let btn = '';
    if (leftRelated === -1350) {
      btn = (
        <RightBtnRelated disabled onClick={() => setLeftRelated(leftRelated - 420)} type="button">
          <RightArrowRelated id="carousel-right-arrow" viewBox="0 0 24 24">
            <title>Right Scroll Related</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </RightArrowRelated>
        </RightBtnRelated>
      );
    } else {
      btn = (
        <RightBtnRelated onClick={() => setLeftRelated(leftRelated - 420)} type="button">
          <RightArrowRelated viewBox="0 0 24 24">
            <title>Right Scroll Related</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </RightArrowRelated>
        </RightBtnRelated>
      );
    }
    return btn;
  }

  return (
    <CarouselControllerRelated role="group">
      {leftBtnRelated()}
      <CarouselListRelated
        id="carousel-list"
        style={{ left: `${`${leftRelated}px`}` }}
        role="list"
      >
        <RelatedItemsList
          data={data}
          changeProduct={changeProduct}
          productId={productId}
          productInfo={productInfo}
          reviewMeta={reviewMeta}
          selectedStyle={selectedStyle}
        />
      </CarouselListRelated>
      {rightBtnRelated()}
    </CarouselControllerRelated>
  );
};

// RelatedController.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     'default?': PropTypes.bool,
//     category: PropTypes.string,
//     name: PropTypes.string,
//     default_price: PropTypes.number,
//     ratings: PropTypes.number,
//     url: PropTypes.string,
//   })).isRequired,
//   changeProduct: PropTypes.func,
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
// };

// RelatedController.defaultProps = {
//   changeProduct: PropTypes.null,
//   productInfo: PropTypes.null,
//   reviewMeta: PropTypes.null,
//   selectedStyle: PropTypes.null,
// };

export default RelatedController;
