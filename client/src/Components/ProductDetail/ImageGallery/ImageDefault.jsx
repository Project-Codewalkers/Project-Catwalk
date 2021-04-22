import React from 'react';
import PropTypes from 'prop-types';

const ImageDefault = ({ imageURL }) => (
  <img src={imageURL} alt="" width="300" />
);

ImageDefault.propTypes = {
  imageURL: PropTypes.string.isRequired,
};

export default ImageDefault;
