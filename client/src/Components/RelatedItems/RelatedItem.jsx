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
  item, changeProduct, productInfo, reviewMeta, selectedStyle,
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
      <Image src={url} alt="carousel-item" onClick={() => (changeProduct(Number(item[1].product_id)))} role="listitem" />
      <Category>{item[2].category}</Category>
      <Name>{item[2].name}</Name>
      <Price>{`Today: $${item[2].default_price}`}</Price>
      <Stars stars={item[1].ratings} />
      <Modal
        item={item}
        modalSwitch={modalSwitch}
        setModalSwitch={setModalSwitch}
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

// RelatedItem.propTypes = {
//   item: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
//     photos: PropTypes.arrayOf(PropTypes.shape({
//       thumbnail_url: PropTypes.string,
//       url: PropTypes.string,
//     })),
//   })),
//   PropTypes.objectOf({
//     characteristics: PropTypes.shape({
//       Fit: PropTypes.shape({}),
//       Comfort: PropTypes.shape({}),
//       Quality: PropTypes.shape({}),
//       Length: PropTypes.shape({}),
//     }),
//   })).isRequired,
//   find: PropTypes.func,
//   product_id: PropTypes.number,
//   name: PropTypes.string,
//   default_price: PropTypes.string,
//   id: PropTypes.number,
//   category: PropTypes.string,
//   product_name: PropTypes.string,
//   price: PropTypes.number,
//   stars: PropTypes.number,
//   image: PropTypes.string,
//   changeProduct: PropTypes.func.isRequired,
// selectedStyle: PropTypes.shape({
//   style_id: PropTypes.number,
//   name: PropTypes.string,
//   original_price: PropTypes.string,
//   sale_price: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]),
//   'default?': PropTypes.bool,
//   photos: PropTypes.arrayOf(PropTypes.shape(
//     {
//       thumbnail_url: PropTypes.string,
//       url: PropTypes.string,
//     },
//   )),
//   skus: PropTypes.objectOf(
//     PropTypes.shape({
//       quantity: PropTypes.number.isRequired,
//       size: PropTypes.string.isRequired,
//     }),
//   ),
// }),
// reviewMeta: PropTypes.shape({
//   characterists: PropTypes.shape({
//     Comfort: PropTypes.shape({
//       id: PropTypes.number,
//       value: PropTypes.number,
//     }),
//     Fit: PropTypes.shape({
//       id: PropTypes.number,
//       value: PropTypes.number,
//     }),
//     Length: PropTypes.shape({
//       id: PropTypes.number,
//       value: PropTypes.number,
//     }),
//     Quality: PropTypes.shape({
//       id: PropTypes.number,
//       value: PropTypes.number,
//     }),
//   }),
//   product_id: PropTypes.string,
//   rating: PropTypes.shape({
//     3: PropTypes.number,
//     4: PropTypes.number,
//     5: PropTypes.number,
//   }),
//   recommended: PropTypes.shape({
//     false: PropTypes.string,
//     true: PropTypes.string,
//   }),
// }),
//   productInfo: PropTypes.shape({
//     id: PropTypes.number,
//     campus: PropTypes.string,
//     name: PropTypes.string,
//     slogan: PropTypes.string,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     default_price: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     features: PropTypes.arrayOf(PropTypes.shape({
//       feature: PropTypes.string,
//       value: PropTypes.string,
//     })),
//   }),
// };

// RelatedItem.defaultProps = {
//   productInfo: PropTypes.null,
//   reviewMeta: PropTypes.null,
//   selectedStyle: PropTypes.null,
//   find: PropTypes.null,
// };

export default RelatedItem;
