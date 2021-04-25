import React from 'react';
import Outfit from './Outfit';
import styled from 'styled-components';

const OutfitItem = styled.div`
  padding: 10px;
  margin: 10px;
  width: 302px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
`;

const OutfitList = ({ closet }) => closet.map((item) => (
  <div>
    <OutfitItem>
      +
      <br />
      Add to Outfit
    </OutfitItem>
    <Outfit
      key={item[0].product_id}
      item={item}
    />
  </div>
));

export default OutfitList;
