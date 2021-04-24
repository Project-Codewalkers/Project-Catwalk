import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageThumbnail from './ImageThumbnail';

const StyledThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  position:relative;
  top: 10px;
  left: 50px;
  z-index: 1;
`;

// eslint-disable-next-line padded-blocks
// eslint-disable-next-line arrow-body-style
const ImageThumbnails = ({ photos, setSelectedPhoto }) => (
  <StyledThumbnails data-testid="thumbnails">
    {photos.slice(0, 7).map((photo, index) => (
      <ImageThumbnail
        data-testid="thumbnail"
        key={photo.url}
        index={index + 1}
        photo={photo}
        setSelectedPhoto={setSelectedPhoto}
      />
    ))}
  </StyledThumbnails>
);

ImageThumbnails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })),
  setSelectedPhoto: PropTypes.func,
};

ImageThumbnails.defaultProps = {
  photos: [],
  setSelectedPhoto: () => { },
};

export default ImageThumbnails;
