import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageThumbnail from './ImageThumbnail';

const StyledThumbnails = styled.div`
  display: grid;
  grid-template: repeat(7, 84px) / repeat(1, 64px);
  /* justify-content: flex-start;
  align-content: flex-start; */
  padding: 0;
  position:relative;
  top: 32px;
  left: 32px;
  z-index: 1;
`;

const ImageThumbnails = ({ photos, setSelectedPhoto, selectedPhoto }) => {
  if (photos) {
    return (
      <StyledThumbnails data-testid="thumbnails">
        {photos.slice(0, 7).map((photo, index) => (
          <ImageThumbnail
            data-testid="thumbnail"
            key={photo.url}
            index={index + 1}
            photo={photo}
            setSelectedPhoto={setSelectedPhoto}
            selectedPhoto={selectedPhoto}
          />
        ))}
      </StyledThumbnails>
    );
  }
  return (<div />);
};

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
