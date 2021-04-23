import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RelatedItemsList from './RelatedItemsList';

const CarouselController = styled.div`
  overflow: hidden;
`;

const CarouselList = styled.div`
  display: flex;
  position: relative;
  transition: left .50s ease-out 0s;
  left: min(-2550px, 0px);
  left: max(0px, -2550px);
`;

const LeftBtn = styled.button`
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
  left: -20px;
  z-index: 1;
`;

const RightBtn = styled.button`
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
  right: -20px;
`;

const LeftArrow = styled.svg`
  width: 24px;
  height: 24px;
`;

const RightArrow = styled.svg`
  width: 24px;
  height: 24px;
`;

const Controller = ({ data }) => {
  const [left, setLeft] = useState(0);

  // refactor into separate components later
  function leftBtn() {
    let btn = '';
    if (left === 0) {
      btn = (
        <LeftBtn disabled onClick={() => setLeft(left + 450)} type="button">
          <LeftArrow viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </LeftArrow>
        </LeftBtn>
      );
    } else {
      btn = (
        <LeftBtn onClick={() => setLeft(left + 450)} type="button">
          <svg id="carousel-left-arrow" viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </LeftBtn>
      );
    }
    return btn;
  }

  function rightBtn() {
    let btn = '';
    if (left === -2350) {
      btn = (
        <RightBtn disabled onClick={() => setLeft(left - 450)} type="button">
          <svg id="carousel-right-arrow" viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </RightBtn>
      );
    } else {
      btn = (
        <RightBtn onClick={() => setLeft(left - 450)} type="button">
          <RightArrow viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </RightArrow>
        </RightBtn>
      );
    }
    return btn;
  }

  return (
    <CarouselController role="group">
      {leftBtn()}
      <CarouselList id="carousel-list" style={{ left: `${`${left}px`}` }} role="list">
        <RelatedItemsList data={data} />
      </CarouselList>
      {rightBtn()}
    </CarouselController>
  );
};

Controller.propTypes = {
  sample: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    product_name: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
};

export default Controller;
