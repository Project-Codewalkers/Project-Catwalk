import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Style from './Style';

const StyledStyleThumbnails = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / repeat(4, auto);

`;

const StyleSelector = ({
  styles,
  selectedStyle,
  setSelectedStyle,
  // setSelectedPhoto,
}) => {
  if (!styles || styles.length === 0) { return <div />; }

  const indexOfDefault = styles.findIndex((style) => style['default?']);
  if (indexOfDefault !== -1) {
    styles.unshift(...styles.splice(indexOfDefault, 1));
  }

  const styleName = selectedStyle && selectedStyle.name ? selectedStyle.name.toUpperCase() : '';
  return (
    <div>
      <div>
        <b>{'STYLE  >  '}</b>
        {styleName}
      </div>
      <StyledStyleThumbnails>
        {styles.map((each, index) => (
          <Style
            key={each.style_id && each.style_id}
            index={index + 1}
            style={each}
            setSelectedStyle={setSelectedStyle}
            // setSelectedPhoto={setSelectedPhoto}
            selected={(each && each.style_id) === (selectedStyle && selectedStyle.style_id)}
          />
        ))}
      </StyledStyleThumbnails>
    </div>
  );
};

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
  // setSelectedPhoto: PropTypes.func.isRequired,
  setSelectedStyle: PropTypes.func.isRequired,
};

StyleSelector.defaultProps = {
  styles: [],
  selectedStyle: null,
  setSelectedStyle: () => {console.log('trying to set style');}
};

export default StyleSelector;
