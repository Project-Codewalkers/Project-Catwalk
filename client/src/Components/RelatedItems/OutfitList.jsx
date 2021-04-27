import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit';
import api from '../../lib/api';

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

const OutfitList = ({ closet, selectedStyle, setSelectedStyle, productId, setOutfit, newItem }) => (
  <div>
    <OutfitAdder onClick={() => (newItem())}>
      +
      <br />
      Add to Outfit
    </OutfitAdder>
    {closet.map((item) => (
      <Outfit
        key={item[0].product_id}
        item={item}
      />
    ))}
  </div>
);

export default OutfitList;
