import React from 'react';
import PropTypes from 'prop-types';

const Style = ({
  style, selected, setStyle, index, setPhoto,
}) => (
  <li style={{ display: 'inline' }}>
    <div
      role="button"
      tabIndex={index + 10}
      onClick={() => {
        setStyle(style);
        setPhoto(style.photos[0]);
      }}
      onKeyDown={(e) => {
        if (e.code !== 'Enter' && e.code !== 'Space') { return; }
        setStyle(style);
        setPhoto(style.photos[0]);
      }}
    >
      <img
        height="50"
        border={selected ? '2px solid black' : '0'}
        src={style.photos[0].thumbnail_url}
        alt="style"
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
        thumbnail_url: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      },
    )).isRequired,
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
    })),
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  setStyle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default Style;
