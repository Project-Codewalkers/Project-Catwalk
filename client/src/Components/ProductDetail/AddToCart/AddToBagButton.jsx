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
  console.log(`adding ${skuId} to cart`);
  api.addToCart(skuId)
    .then((response) => {
      console.log('response', response);
    })
    .then(() => {
      api.getCart()
        .then((response) => {
          console.log('cart', JSON.stringify(response));
        })
        .catch((err) => {
          console.err('cart error', JSON.stringify(err));
        });
    })
    .catch((err) => {
      console.log('error', JSON.stringify(err));
    });
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
