import React from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';

// eslint-disable-next-line padded-blocks
// eslint-disable-next-line arrow-body-style
const ImageThumbnails = ({ photos, setSelectedPhoto }) => (
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    {
      photos.map((photo, index) => (
        <ImageThumbnail
          key={photo.url}
          index={index + 1}
          photo={photo}
          setSelectedPhoto={setSelectedPhoto}
        />
      ))
    }
  </ul>
);

ImageThumbnails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })),
  setSelectedPhoto: PropTypes.func.isRequired,
};

ImageThumbnails.defaultProps = {
  photos: [],
};

export default ImageThumbnails;
