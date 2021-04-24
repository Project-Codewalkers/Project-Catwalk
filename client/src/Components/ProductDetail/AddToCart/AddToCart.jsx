import React from 'react';
// import PropTypes from 'prop-types';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToBagButton from './AddToBagButton';
import StarButton from './StarButton';

const AddToCart = () => (
  <div>
    <div style={{ display: 'flex', width: '100%' }}>
      <SizeSelector style={{ flexGrow: '3' }} />
      <QtySelector style={{ flexGrow: '1' }} />
    </div>
    <div style={{ display: 'flex', width: '100%' }}>
      <AddToBagButton style={{ flexGrow: '1' }} />
      <StarButton style={{ flexGrow: '0' }} />
    </div>
  </div>
);

export default AddToCart;
