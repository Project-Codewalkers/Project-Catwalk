import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import ImageThumbnails from './ImageThumbnails';

const ImageGallery = ({ photos, selectedPhoto, setPhoto }) => (
  <div>
    <span style={{ display: 'inline-block' }}>
      <ImageThumbnails
        photos={photos}
        setPhoto={setPhoto}
      />
    </span>
    <span style={{ display: 'inline-block' }}>
      <ImageDefault imageURL={selectedPhoto.url} />
    </span>
  </div>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  selectedPhoto: PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
  }).isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default ImageGallery;
