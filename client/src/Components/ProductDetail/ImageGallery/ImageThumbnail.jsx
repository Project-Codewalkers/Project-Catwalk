import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledThumbnailImage = styled.img`
  height: 64px;
  width: 64px;
  border: 1px solid #525252;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ImageThumbnail = ({ photo, setSelectedPhoto, index }) => (
  <div
    role="button"
    tabIndex="0"
    onClick={() => setSelectedPhoto(photo)}
    onKeyDown={(e) => {
      if (e.code !== 'Enter' && e.code !== 'Space') { return; }
      setSelectedPhoto(photo);
    }}
  >
    <StyledThumbnailImage src={photo.thumbnail_url} alt="thumbnail" />
  </div>
);

ImageThumbnail.propTypes = {
  photo: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ImageThumbnail;
