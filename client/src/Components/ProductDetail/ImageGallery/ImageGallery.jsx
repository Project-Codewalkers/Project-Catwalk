import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageThumbnails from './ImageThumbnails';

const StyledDefaultImage = styled.div`
  flex: 2;
  min-width: 480px;
  max-height: 628px;
  background: center / contain no-repeat url(${(props) => (props.imgURL)}), #EBEBEB;
`;

const ImageGallery = ({ style }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(style && style.photos);

  useEffect(() => {
    setSelectedPhoto(style && style.photos[0]);
  }, [style]);

  const imgURL = (selectedPhoto && selectedPhoto.url) ? selectedPhoto.url : '';
  return (
    <StyledDefaultImage imgURL={imgURL} data-testid="defaultImage">
      <ImageThumbnails
        photos={style && style.photos && style.photos.filter((photo) => photo.thumbnail_url)}
        setSelectedPhoto={setSelectedPhoto}
      />
    </StyledDefaultImage>
  );
};

ImageGallery.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape(
      {
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      },
    )),
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    })),
  }),
};

ImageGallery.defaultProps = {
  style: {
    style_id: null,
    name: null,
    original_price: null,
    sale_price: null,
    'default?': false,
    photos: [
      {
        thumbnail_url: '',
        url: '',
      },
    ],
    skus: {},
  },
};

export default ImageGallery;
