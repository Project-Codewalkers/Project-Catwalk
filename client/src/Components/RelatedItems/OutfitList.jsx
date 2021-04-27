import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit';

const OutfitList = ({ closet }) => closet.map((item) => (
  <div>
    <Outfit
      key={item[0].product_id}
      item={item}
    />
  </div>
));

export default OutfitList;
