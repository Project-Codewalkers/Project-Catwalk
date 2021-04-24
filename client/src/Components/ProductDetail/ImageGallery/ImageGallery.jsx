import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageThumbnails from './ImageThumbnails';

const StyledDefaultImage = styled.div`
  flex: 2;
  min-width: 480px;
  max-height: 628px;
  background: center / contain no-repeat url(${(props) => (props.imgURL)}), #EBEBEB;
`;

const ImageGallery = ({ photos, selectedPhoto, setSelectedPhoto }) => {
  const imgURL = selectedPhoto.url ? selectedPhoto.url : '';
  return (
    <StyledDefaultImage imgURL={imgURL} data-testid="defaultImage">
      <ImageThumbnails
        photos={photos.filter((photo) => photo.thumbnail_url)}
        setSelectedPhoto={setSelectedPhoto}
      />
    </StyledDefaultImage>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })),
  selectedPhoto: PropTypes.shape({
    url: PropTypes.string,
    thumbnail_url: PropTypes.string,
  }),
  setSelectedPhoto: PropTypes.func,
};

ImageGallery.defaultProps = {
  photos: [],
  selectedPhoto: { url: '', thumbnail_url: '' },
  setSelectedPhoto: () => { },
};

export default ImageGallery;
