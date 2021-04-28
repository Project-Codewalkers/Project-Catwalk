import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQtySelector = styled.select`
  flex: 1;
  height: 64px;
  width: 100%;
  margin: 12px;
  padding: 10px;
  border: 1px solid #525252;
  background: #FFF;
`;

const QtySelector = ({ availableQty, setQuantity }) => {
  if (availableQty) {
    return (
      <StyledQtySelector
        onChange={(e) => setQuantity(e.target.value)}
      >
        {'x'.repeat(Math.min(availableQty, 15)).split('').map((c, i) => i + 1)
          .map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
      </StyledQtySelector>
    );
  }
  return (
    <StyledQtySelector disabled>
      <option>-</option>
    </StyledQtySelector>
  );
};

QtySelector.propTypes = {
  availableQty: PropTypes.number,
  setQuantity: PropTypes.func.isRequired,
};

QtySelector.defaultProps = {
  availableQty: 0,
};

export default QtySelector;
