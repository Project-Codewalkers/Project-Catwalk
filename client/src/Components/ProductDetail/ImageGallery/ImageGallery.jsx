import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import ImageThumbnails from './ImageThumbnails';

const ImageGallery = ({ photos, selectedPhoto, setSelectedPhoto }) => (
  <div>
    <span style={{ display: 'inline-block' }}>
      <ImageThumbnails
        photos={photos.filter((photo) => photo.thumbnail_url)}
        setSelectedPhoto={setSelectedPhoto}
      />
    </span>
    <span style={{ display: 'inline-block' }}>
      <ImageDefault imageURL={selectedPhoto.url} />
    </span>
  </div>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })),
  selectedPhoto: PropTypes.shape({
    url: PropTypes.string,
    thumbnail_url: PropTypes.string,
  }),
  setSelectedPhoto: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  photos: [],
  selectedPhoto: {},
};

export default ImageGallery;
