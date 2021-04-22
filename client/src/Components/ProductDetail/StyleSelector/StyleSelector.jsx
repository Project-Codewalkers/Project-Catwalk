import React from 'react';
import PropTypes from 'prop-types';

import Style from './Style';

const StyleSelector = ({
  styles, selectedStyle, setStyle, setPhoto,
}) => (
  <div>
    <div>{`STYLE > ${selectedStyle.name}`}</div>
    <ul style={{ display: 'inline-flex' }}>
      {styles.map((each, index) => (
        <Style
          key={each.style_id}
          index={index + 1}
          style={each}
          setStyle={setStyle}
          setPhoto={setPhoto}
          selected={each.style_id === selectedStyle.style_id}
        />
      ))}
    </ul>
  </div>
);

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  selectedStyle: PropTypes.shape({
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
  setStyle: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default StyleSelector;
