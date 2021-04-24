import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageDefault from './ImageDefault';
import ImageThumbnails from './ImageThumbnails';

const StyledImageGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
  position: relative;
  top: 0;
  left: 0;
  /* background-image: url('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'); */

  background: url(${(props) => (props.imgURL)});
  /* background-image: url(selectedPhoto); */
`;

const ImageGallery = ({ photos, selectedPhoto, setSelectedPhoto }) => (
  <ImageDefault selectedPhoto={selectedPhoto}>
    <ImageThumbnails
      photos={photos.filter((photo) => photo.thumbnail_url)}
      setSelectedPhoto={setSelectedPhoto}
    />
  </ImageDefault>
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
  setSelectedPhoto: PropTypes.func,
};

ImageGallery.defaultProps = {
  photos: [],
  selectedPhoto: {},
  setSelectedPhoto: () => { },
};

export default ImageGallery;
