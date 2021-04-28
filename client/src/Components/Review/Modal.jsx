import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
height: 500px;
width: 500px;
background:red;
position: fixed;
top: 50%;
left: 50%;
margin-left: -250px;
margin-top: -250px;
`;

const Modal = ({ Content }) => {
  const [viewable, setViewable] = useState(true);
  if (viewable) {
    return (
      <StyledModal>
        <form>
          <label>
            
          </label>
        </form>
      </StyledModal>
    );
  }
};

export default Modal;
