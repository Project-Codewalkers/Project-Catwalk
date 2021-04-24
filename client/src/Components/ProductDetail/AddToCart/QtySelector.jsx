import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQtySelector = styled.select`
  height: 64px;
  margin: 12px;
  border: 1px solid #525252;
  background: #FFF;
`;

// 136x64

const QtySelector = () => (
  <StyledQtySelector>
    {'x'.repeat(10).split('').map((c, i) => i + 1)
      .map((num) => (
        <option key={num} value={num}>{num}</option>
      ))}
  </StyledQtySelector>
);

export default QtySelector;
