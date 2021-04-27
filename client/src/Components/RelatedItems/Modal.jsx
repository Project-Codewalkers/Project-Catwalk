import React from 'react';

const Modal = ({ url, category, name, price, stars, modalSwitch }) => {
  if (!modalSwitch) {
    return null;
  }

  return (
    <div>Modal says hello</div>
  );
};

export default Modal;
