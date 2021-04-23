import React from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';

// eslint-disable-next-line padded-blocks
// eslint-disable-next-line arrow-body-style
const ImageThumbnails = ({ photos, setPhoto }) => (
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    {
      photos.map((photo, index) => (
        <ImageThumbnail
          key={photo.url}
          index={index + 1}
          photo={photo}
          setPhoto={setPhoto}
        />
      ))
    }
  </ul>
);

ImageThumbnails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default ImageThumbnails;
