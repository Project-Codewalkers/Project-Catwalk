import React from 'react';
import styled from 'styled-components';

const StyledStarButton = styled.button`
  height: 64px;
  width: 64px;
  margin: 12px;
  padding: 10px;
  border: 1px solid #525252;
  background: #FFF;
  cursor: pointer;
  &:active{
    box-shadow: inset 0px 2px 8px rgba(82, 82, 82, 0.5);
  }
`;

const StarButton = () => (
  <StyledStarButton type="button">⭐️</StyledStarButton>
);

export default StarButton;
