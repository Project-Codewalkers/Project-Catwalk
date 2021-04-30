import React from 'react';
import styled from 'styled-components';
import api from '../../../lib/api';

const StyledAddToBagButton = styled.button`
  flex: 1;
  height: 64px;
  margin: 12px;
  padding: 10px;
  text-align: left;
  border: 1px solid #525252;
  background: #FFF;
`;

const addToCart = (skuId) => {
  api.addToCart(skuId)
    .then(() => {
      api.getCart()
        .then((result) => result)
        .catch((err) => { throw err; });
    })
    .catch((err) => { throw err; });
};

const AddToBagButton = () => (
  <StyledAddToBagButton
    type="button"
    onClick={() => { addToCart(638269); }}
  >
    ADD TO BAG
  </StyledAddToBagButton>
);

export default AddToBagButton;
