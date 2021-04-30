import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToBagButton from './AddToBagButton';
import StarButton from './StarButton';

const AddToCart = ({ skusObj, productId }) => {
  const [selectedSize, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
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
      <div style={{ display: 'flex', width: '100%' }}>
        <SizeSelector
          productId={productId}
          skus={skus}
          // skus={skus.map((style) => style.size)}
          selectedSize={selectedSize}
          setSize={setSize}
        />
        <QtySelector
          availableQty={Number(selectedSize && selectedSize.quantity)}
          setQuantity={setQuantity}
        />
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <AddToBagButton />
        <StarButton />
      </div>
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
