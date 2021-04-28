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
  background-color: #fff;
  border: 1px solid #dadcdf;
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
  background-color: #fff;
  border: 1px solid #dadcdf;
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

const RelatedController = ({ data, changeProduct, productId }) => {
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
        <RelatedItemsList data={data} changeProduct={changeProduct} productId={productId} />
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
// };

export default RelatedController;
