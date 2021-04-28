import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import OutfitList from './OutfitList';

const CarouselControllerOutfit = styled.div`
  overflow: hidden;
`;

const CarouselListOutfit = styled.div`
  display: flex;
  position: relative;
  transition: left .50s ease-out 0s;
  left: min(-3050px, 0px);
  left: max(0px, -3050px);
`;

const LeftBtnOutfit = styled.button`
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

const RightBtnOutfit = styled.button`
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

const LeftArrowOutfit = styled.svg`
  width: 24px;
  height: 24px;
`;

const RightArrowOutfit = styled.svg`
  width: 24px;
  height: 24px;
`;

const OutfitController = ({ outfit, newItem }) => {
  const [leftOutfit, setLeftOutfit] = useState(0);

  function leftBtnOutfit() {
    let btn = '';
    if (leftOutfit === 0) {
      btn = (
        <LeftBtnOutfit disabled onClick={() => setLeftOutfit(leftOutfit + 450)} type="button">
          <LeftArrowOutfit viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </LeftArrowOutfit>
        </LeftBtnOutfit>
      );
    } else {
      btn = (
        <LeftBtnOutfit onClick={() => setLeftOutfit(leftOutfit + 450)} type="button">
          <LeftArrowOutfit id="carousel-left-arrow" viewBox="0 0 24 24">
            <title>Left Scroll</title>
            <path d="M 17 2 L7 12 l 10 10" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </LeftArrowOutfit>
        </LeftBtnOutfit>
      );
    }
    return btn;
  }

  function rightBtnOutfit() {
    let btn = '';
    if (leftOutfit === -1350) {
      btn = (
        <RightBtnOutfit disabled onClick={() => setLeftOutfit(leftOutfit - 450)} type="button">
          <RightArrowOutfit id="carousel-right-arrow" viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </RightArrowOutfit>
        </RightBtnOutfit>
      );
    } else {
      btn = (
        <RightBtnOutfit onClick={() => setLeftOutfit(leftOutfit - 450)} type="button">
          <RightArrowOutfit viewBox="0 0 24 24">
            <title>Right Scroll</title>
            <path d="M 7 2 l 10 10 L 7 22" fill="none" stroke="#2F3337" strokeWidth="2" strokeLinecap="round" />
          </RightArrowOutfit>
        </RightBtnOutfit>
      );
    }
    return btn;
  }

  // console.log(outfit);

  return (
    <CarouselControllerOutfit>
      {leftBtnOutfit()}
      <CarouselListOutfit
        id="carousel-list"
        style={{ left: `${`${leftOutfit}px`}` }}
        role="list"
      >
        <OutfitList
          outfit={outfit}
          newItem={newItem}

        />
      </CarouselListOutfit>
      {rightBtnOutfit()}
    </CarouselControllerOutfit>
  );
};

OutfitController.propTypes = {
  outfit: PropTypes.arrayOf(),
  newItem: PropTypes.func.isRequired,
};

OutfitController.defaultProps = {
  outfit: PropTypes.arrayOf(),
};

export default OutfitController;
