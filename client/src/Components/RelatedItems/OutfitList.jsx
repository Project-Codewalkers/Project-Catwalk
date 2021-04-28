import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Outfit from './Outfit';

const OutfitAdder = styled.div`
  padding: 10px;
  margin: 10px;
  width: 302px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
  display: inline-flex;
`;

const OutfitList = ({
  outfit,
  selectedStyle,
  newItem,
}) => (
  <div>
    <OutfitAdder onClick={() => (newItem(selectedStyle))}>
      +
      <br />
      Add to Outfit
    </OutfitAdder>
    {outfit.map((item) => (
      <Outfit
        key={item[0].product_id}
        item={item}
      />
    ))}
  </div>
);

OutfitList.propTypes = {
  outfit: PropTypes.arrayOf().isRequired,
  selectedStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  }).isRequired,
  newItem: PropTypes.func.isRequired,
};

export default OutfitList;
