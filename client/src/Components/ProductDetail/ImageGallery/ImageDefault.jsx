import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDefaultImage = styled.div`
  flex: 2;
  background: center / contain no-repeat url(${(props) => (props.imgURL)}), #EBEBEB;
`;

const ImageDefault = ({ selectedPhoto }) => {
  const imgURL = selectedPhoto.url ? selectedPhoto.url : '';

  return (
    <StyledDefaultImage imgURL={imgURL} alt="" />
  );
};

ImageDefault.propTypes = {
  selectedPhoto: PropTypes.shape({
    url: PropTypes.string,
    thumbnail_url: PropTypes.string,
  }),
};

ImageDefault.defaultProps = {
  selectedPhoto: { url: '', thumbnail_url: '' },
};

export default ImageDefault;
