import React from 'react';
import styled from 'styled-components';

const StyledAddToBagButton = styled.button`
  height: 64px;
  margin: 12px;
  border: 1px solid #525252;
  background: #FFF;
`;

const AddToBagButton = () => (
  <StyledAddToBagButton type="button">ADD TO BAG</StyledAddToBagButton>
);

export default AddToBagButton;
