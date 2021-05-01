import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAddToBagButton = styled.button`
  flex: 1;
  height: 64px;
  margin: 12px;
  padding: 10px;
  text-align: left;
  border: 1px solid #525252;
  background: #FFF;
`;

const AddToBagButton = ({ addToCart }) => (
  <StyledAddToBagButton
    type="button"
    onClick={() => { addToCart(); }}
  >
    ADD TO BAG
  </StyledAddToBagButton>
);

AddToBagButton.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default AddToBagButton;
