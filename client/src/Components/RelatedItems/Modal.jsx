import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0; bottom: 0; right: 0; left: 0;
  background-color: transparent;
  z-index: 1;
`;

const Box = styled.div`
  color: black;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  margin: 0px 25%;
  margin-top: 8%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  border-radius: 10px;
  text-align: center;
  width: 50%;
`;

const Button = styled.button`
  width: 10%;
  vertical-align: top;
  alignment: top, right;
`;

const Modal = ({ url, category, name, price, stars, modalSwitch, setModalSwitch }) => {
  if (!modalSwitch) {
    return null;
  }

  return (
    <StyledModal>
      <Box>
        <Button onClick={() => (setModalSwitch())}>Close</Button>
        Modal says hello
      </Box>
    </StyledModal>
  );
};

export default Modal;
