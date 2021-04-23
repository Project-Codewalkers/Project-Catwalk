import React from 'react';
// import PropTypes from 'prop-types';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToBagButton from './AddToBagButton';
import StarButton from './StarButton';

const AddToCart = () => (
  <div>
    <div>
      <SizeSelector />
      <QtySelector />
    </div>
    <div>
      <AddToBagButton />
      <StarButton />
    </div>
  </div>
);

export default AddToCart;
