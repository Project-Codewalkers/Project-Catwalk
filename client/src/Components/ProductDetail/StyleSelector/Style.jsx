import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStyleThumbnail = styled.img`
  /* height: 64px;
  width: 64px; */
  height: 100%;
  width: 100%;
  justify-self: center;
  align-self: center;
  border: 1px solid #525252;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${(props) => (props.selected ? 'scale(1.2)' : 'scale(1)')};
`;

const StyledCheckmark = styled.img`
  position: absolute;
  height: 18px;
  width: auto;
  right: 0;
  z-index:1;
`;

const ThumbContainer = styled.div`
  position: relative;
  height: 64px;
  width: 64px;
  margin: 15px;
`;

const Style = ({
  style, selected, setSelectedStyle, index,
}) => (
  <ThumbContainer
    role="button"
    tabIndex="0"
    onClick={() => {
      setSelectedStyle(style);
      // setSelectedPhoto(style.photos[0]);
    }}
    onKeyDown={(e) => {
      if (e.code !== 'Enter' && e.code !== 'Space') { return; }
      setSelectedStyle(style);
      // setSelectedPhoto(style.photos[0]);
    }}
  >

    {selected && (
      <StyledCheckmark
        src="/assets/Checkmark.svg"
        alt="checkmark"
      />
    )}
    <StyledStyleThumbnail
      src={style.photos[0].thumbnail_url}
      alt={style.name}
      selected={selected}
    />
  </ThumbContainer>
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
  index: PropTypes.number.isRequired,
  setSelectedStyle: PropTypes.func.isRequired,
};

export default Style;
