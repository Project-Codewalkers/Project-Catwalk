import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToBagButton from './AddToBagButton';
import StarButton from './StarButton';
import SocialMedia from './SocialMedia';
import api from '../../../lib/api';

const PleaseSelect = styled.div`
  font-weight: normal;
  color: red;
  margin: 5px 12px;
`;

const AddToCart = ({ skusObj, productId }) => {
  const [selectedSize, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [pleaseSelectVisible, setPleaseSelectVisibility] = useState(false);

  const addToCart = () => {
    if (!selectedSize) { setPleaseSelectVisibility(true); }
    if (!(selectedSize && selectedSize.sku && quantity)) { return; }
    for (let i = 0; i < quantity; i += 1) {
      api.addToCart(selectedSize.sku)
        .then(() => {
          // api.getCart()
          //   .then((result) => console.log(result))
          //   .catch((err) => { throw err; });
        })
        .catch((err) => { throw err; });
    }
  };

  if (!skusObj || Object.keys(skusObj).length === 0) { return <div />; }
  const skus = Object.entries(skusObj)
    .map((sku) => ({
      sku: sku[0],
      quantity: sku[1].quantity,
      size: sku[1].size,
    }))
    .filter((sku) => sku.quantity > 0);
  return (
    <div style={{ maxWidth: '600px', fontWeight: 'bold' }}>
      {pleaseSelectVisible && <PleaseSelect>Please select size</PleaseSelect>}
      <div style={{ display: 'flex', width: '100%' }}>
        <SizeSelector
          productId={productId}
          skus={skus}
          setPleaseSelectVisibility={setPleaseSelectVisibility}
          selectedSize={selectedSize}
          setSize={setSize}
        />
        <QtySelector
          availableQty={Number(selectedSize && selectedSize.quantity)}
          setQuantity={setQuantity}
          quantity={quantity}
        />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
        {skus.length > 0 && (
          <AddToBagButton
            addToCart={addToCart}
          />
        )}
        <StarButton />
      </div>
      <SocialMedia />
    </div>
  );
};

AddToCart.propTypes = {
  skusObj: PropTypes.objectOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    }),
  ),
  productId: PropTypes.number.isRequired,
};

AddToCart.defaultProps = {
  skusObj: {},
};

export default AddToCart;
