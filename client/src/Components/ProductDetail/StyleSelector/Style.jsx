import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStyleThumbnail = styled.img`
  height: 64px;
  width: 64px;
  justify-self: center;
  align-self: center;
  border: 1px solid #525252;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Style = ({
  style, selected, setSelectedStyle, index, setSelectedPhoto,
}) => (
  <div
    role="button"
    tabIndex={index + 10}
    onClick={() => {
      setSelectedStyle(style);
      setSelectedPhoto(style.photos[0]);
    }}
    onKeyDown={(e) => {
      if (e.code !== 'Enter' && e.code !== 'Space') { return; }
      setSelectedStyle(style);
      setSelectedPhoto(style.photos[0]);
    }}
  >
    <StyledStyleThumbnail
      src={style.photos[0].thumbnail_url}
      alt={style.name}
    />
  </div>
);

Style.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape(
      {
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      },
    )).isRequired,
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    })),
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  setSelectedStyle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
};

export default Style;
