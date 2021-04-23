import React from 'react';
import PropTypes from 'prop-types';

const Style = ({
  style, selected, setSelectedStyle, index, setSelectedPhoto,
}) => (
  <li style={{ display: 'inline' }}>
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
      <img
        height="50"
        border={selected ? '2px solid black' : '0'}
        src={style.photos[0].thumbnail_url}
        alt={style.name}
      />
    </div>
  </li>
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
