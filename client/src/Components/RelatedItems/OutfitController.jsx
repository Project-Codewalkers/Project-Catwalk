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

const RightBtnOutfit = styled.button`
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

const LeftArrowOutfit = styled.svg`
  width: 24px;
  height: 24px;
`;

const RightArrowOutfit = styled.svg`
  width: 24px;
  height: 24px;
`;

const OutfitAdder = styled.div`
  /* vertical-align: middle; */
  border: black solid 0em 0.1em 0em 0.1em;
  flex: 0 0 225px;
  height: 340px;
  width: 225px;
  margin: 15px;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 2px 10px lightgrey;
  text-align: center;
  min-height: 10em;
  display: table-cell;
`;

const Text = styled.div`
  margin-top: 50%;
  /* margin-left: 50%; */
  margin-bottom: 50%;
  margin-top: 50%;
  text-align: center;
  font-size: 30px;
`;

const OutfitController = ({
  outfit, newItem, selectedStyle, reviewMeta, productInfo, deleteItem,
}) => {
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
          deleteItem={deleteItem}
          selectedStyle={selectedStyle}
        />
        <OutfitAdder
          onClick={() => (newItem(selectedStyle, reviewMeta, productInfo))}
        >
          <Text>
            +
            <br />
            <br />
            Add to Outfit
          </Text>
        </OutfitAdder>
      </CarouselListOutfit>
      {rightBtnOutfit()}
    </CarouselControllerOutfit>
  );
};

OutfitController.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  outfit: PropTypes.array.isRequired,
  newItem: PropTypes.func.isRequired,
  selectedStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape(
      {
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      },
    )),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ),
  }),
  reviewMeta: PropTypes.shape({
    characterists: PropTypes.shape({
      Comfort: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
      }),
      Fit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
      }),
      Length: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
      }),
      Quality: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.number,
      }),
    }),
    product_id: PropTypes.string,
    rating: PropTypes.shape({
      3: PropTypes.number,
      4: PropTypes.number,
      5: PropTypes.number,
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string,
    }),
  }),
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
  deleteItem: PropTypes.func.isRequired,
};

OutfitController.defaultProps = {
  selectedStyle: PropTypes.null,
  reviewMeta: PropTypes.string,
  productInfo: PropTypes.null,
};

export default OutfitController;
