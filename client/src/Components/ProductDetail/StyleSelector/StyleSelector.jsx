import React from 'react';
import PropTypes from 'prop-types';

import Style from './Style';

const StyleSelector = ({
  styles, selectedStyle, setSelectedStyle, setSelectedPhoto,
}) => (
  <div>
    <div>{`STYLE > ${selectedStyle.name}`}</div>
    <ul style={{ display: 'inline-flex' }}>
      {styles.map((each, index) => (
        <Style
          key={each.style_id}
          index={index + 1}
          style={each}
          setSelectedStyle={setSelectedStyle}
          setSelectedPhoto={setSelectedPhoto}
          selected={each.style_id === selectedStyle.style_id}
        />
      ))}
    </ul>
  </div>
);

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  selectedStyle: PropTypes.shape({
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
  setSelectedStyle: PropTypes.func.isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
};

StyleSelector.defaultProps = {
  styles: [],
  selectedStyle: {},
};

export default StyleSelector;
