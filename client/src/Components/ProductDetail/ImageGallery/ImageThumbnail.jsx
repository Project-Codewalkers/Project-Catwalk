import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledThumbnailImage = styled.img`
  height: 64px;
  width: 64px;
  border: 1px solid #525252;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${(props) => (props.selected ? 'scale(1.3)' : 'scale(1)')};

`;

const ImageThumbnail = ({
  index,
  photo,
  setSelectedPhoto,
  selectedPhoto,
}) => (
  <div
    role="button"
    tabIndex="0"
    onClick={() => setSelectedPhoto(photo)}
    onKeyDown={(e) => {
      if (e.code !== 'Enter' && e.code !== 'Space') { return; }
      setSelectedPhoto(photo);
    }}
  >
    <StyledThumbnailImage
      src={photo.thumbnail_url}
      alt="thumbnail"
      selected={selectedPhoto && selectedPhoto.thumbnail_url === photo.thumbnail_url}
    />
  </div>
);

ImageThumbnail.propTypes = {
  photo: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  selectedPhoto: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  }),
};

ImageThumbnail.defaultProps = {
  selectedPhoto: {
    thumbnail_url: '',
    url: '',
  },
};

export default ImageThumbnail;
