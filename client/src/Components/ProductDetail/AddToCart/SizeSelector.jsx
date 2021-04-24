import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSizeSelector = styled.select`
  height: 64px;
  margin: 12px;
  border: 1px solid #525252;
  background: #FFF;
`;

const SizeSelector = () => (
  <StyledSizeSelector>
    <option value="">SELECT SIZE</option>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    <option value="OhMyGawd">OhMyGawd</option>
  </StyledSizeSelector>
);

export default SizeSelector;
