import React from 'react';
import styled from 'styled-components';

const StyledStarButton = styled.button`
  height: 64px;
  width: 64px;
  margin: 12px;
  padding: 10px;
  border: 1px solid #525252;
  background: #FFF;
`;

const StarButton = () => (
  <StyledStarButton type="button">⭐️</StyledStarButton>
);

export default StarButton;
