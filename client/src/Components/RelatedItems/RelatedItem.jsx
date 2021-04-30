/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';
import Modal from './Modal';

const ListItem = styled.div`
  position: relative;
  border: black solid 0em 0.1em 0em 0.1em;
  flex: 0 0 225px;
  height: 340px;
  width: 225px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 10px lightgrey;
`;

const Image = styled.img`
  height: 225px;
  width: 225px;
  border: 0px;
  border-radius: 10px;
  vertical-align: middle;
  align: center;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  max-height: 45px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 12px;
`;

const Category = styled.div`
  font-size: 13px;
`;

const ModalSwap = styled.div`
  color: rgb(244, 186, 49);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const RelatedItem = ({
  item, changeProduct, avgRating, productInfo, reviewMeta, selectedStyle,
}) => {
  const [modalSwitch, setModalSwitch] = useState(false);
  // url
  let defaultStyle;
  // console.log('Log this: ', item);
  if (item && item[0]) {
    defaultStyle = item[0].find((eachStyle) => eachStyle['default?']);
    if (!defaultStyle) {
      // eslint-disable-next-line prefer-destructuring
      defaultStyle = item[0][0];
    }
  }
  // defaultStyle = defaultStyle ? item[0][0] : {};
  const noPic = 'https://i.ytimg.com/vi/-Cv68B-F5B0/maxresdefault.jpg';
  const url = defaultStyle ? defaultStyle.photos[0].thumbnail_url : noPic;
  if (defaultStyle.photos[0].url === null) {
    defaultStyle.photos[0].url = noPic;
  }
  // console.log(defaultStyle);

  const switcher = () => {
    modalSwitch === true ? setModalSwitch(false) : setModalSwitch(true);
    // console.log(modalSwitch);
  };

  const currentItem = [
    selectedStyle,
    reviewMeta,
    productInfo,
  ];

  return (
    <ListItem>
      <ModalSwap onClick={switcher}>&#9733;</ModalSwap>
      <Image src={url} alt="carousel-item" onClick={() => (changeProduct(item[1].product_id))} role="listitem" />
      <Category>{item[2].category}</Category>
      <Name>{item[2].name}</Name>
      <Price>{`Today: $${item[2].default_price}`}</Price>
      <Stars stars={item[1].ratings} />
      <Modal
        item={item}
        modalSwitch={modalSwitch}
        setModalSwitch={setModalSwitch}
        avgRating={avgRating}
        productInfo={productInfo}
        reviewMeta={reviewMeta}
        selectedStyle={selectedStyle}
        currentItem={currentItem}

        fit={item[1].characteristics && item[1].characteristics.Fit ? item[1].characteristics.Fit.value : null} // for fit characteristics
        comfort={item[1].characteristics ? item[1].characteristics.Comfort && item[1].characteristics.Comfort.value : null} // for comfort
        length={item[1].characteristics ? item[1].characteristics.Length && item[1].characteristics.Length.value : null}
        quality={item[1].characteristics ? item[1].characteristics.Quality && item[1].characteristics.Quality.value : null}

        fitCurrent={currentItem.characteristics ? currentItem.characteristics.Fit && currentItem.characteristics.Fit.value : null} // for fit characteristics
        comfortCurrent={currentItem.characteristics ? currentItem.characteristics.Comfort && currentItem.characteristics.Comfort.value : null} // for comfort
        lengthCurrent={currentItem.characteristics ? currentItem.characteristics.Length && currentItem.characteristics.Length.value : null}
        qualityCurrent={currentItem.characteristics ? currentItem.characteristics.Quality && currentItem.characteristics.Quality.value : null}
      />
    </ListItem>
  );
};

// OneItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     category: PropTypes.string,
//     product_name: PropTypes.string,
//     price: PropTypes.number,
//     stars: PropTypes.number,
//     image: PropTypes.string,
//   }).isRequired,
// };

export default RelatedItem;
