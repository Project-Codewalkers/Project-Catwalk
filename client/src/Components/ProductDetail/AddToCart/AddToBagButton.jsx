import React from 'react';
import styled from 'styled-components';

const StyledAddToBagButton = styled.button`
  flex: 1;
  height: 64px;
  margin: 12px;
  padding: 10px;
  text-align: left;
  border: 1px solid #525252;
  background: #FFF;
`;

const AddToBagButton = () => (
  <StyledAddToBagButton type="button">ADD TO BAG</StyledAddToBagButton>
);

export default AddToBagButton;