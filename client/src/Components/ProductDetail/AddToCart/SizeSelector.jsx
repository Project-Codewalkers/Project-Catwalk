import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSizeSelector = styled.select`
  flex: 2;
  height: 64px;
  width: 100%;
  margin: 12px;
  padding: 10px;
  border: 1px solid #525252;
  background: #FFF;
`;

const SizeSelector = ({ productId, skus, setSize, setPleaseSelectVisibility }) => {
  useEffect(() => setSize(''), [productId]);

  return (
    <StyledSizeSelector
      onChange={(e) => {
        setPleaseSelectVisibility(false);
        setSize(skus.find((eachSku) => eachSku.sku === e.target.value));
      }}
      disabled={!skus.length}
    >
      <option value="">
        {skus.length > 0 ? 'SELECT SIZE' : 'OUT OF STOCK'}
      </option>

      { skus.map((sku) => (
        <option key={sku.sku} value={sku.sku}>
          {sku.size}
        </option>
      ))}

    </StyledSizeSelector>
  );
};

SizeSelector.propTypes = {
  // skus: PropTypes.arrayOf(PropTypes.shape({
  //   sku: PropTypes.string.isRequired,
  //   quantity: PropTypes.number.isRequired,
  //   size: PropTypes.string.isRequired,
  // })),
  productId: PropTypes.number.isRequired,
  skus: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
  })),
  setSize: PropTypes.func.isRequired,
  setPleaseSelectVisibility: PropTypes.func.isRequired,
};

SizeSelector.defaultProps = {
  skus: [],
};

export default SizeSelector;
