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
  // console.log(`adding ${skuId} to cart`);
  api.addToCart(skuId)
    .then(() => {
      console.log('getting cart');
      api.getCart()
        // console.log('cart response (AddToBag)', response)
        // response.json(), response.json, JSON.stringify(response));
        .then((result) => console.log('cart', result.map((item) => `${item.sku_id}: ${item.count}`)))
        .catch((err) => {
          console.error('getCart error', JSON.stringify(err), err);
        });
    })
    .catch((err) => {
      console.log('addToCart error', JSON.stringify(err), err);
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
