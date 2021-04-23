import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ photo, setSelectedPhoto, index }) => (
  <li>
    <div
      role="button"
      tabIndex={index}
      onClick={() => setSelectedPhoto(photo)}
      onKeyDown={(e) => {
        if (e.code !== 'Enter' && e.code !== 'Space') { return; }
        setSelectedPhoto(photo);
      }}
    >
      <img height="50" src={photo.thumbnail_url} alt="thumbnail" />
    </div>
  </li>
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
