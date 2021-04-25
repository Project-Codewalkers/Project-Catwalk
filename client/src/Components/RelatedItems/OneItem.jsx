/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const ListItem = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
`;

const Image = styled.img`
  height: 225px;
  width: 225px;
  border: 0px;
  vertical-align: middle;
`;

const Name = styled.div`
  font-size: 15px;
  max-height: 45px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: small;
`;

const OneItem = ({ item }) => {
  // url
  let defaultStyle;
  if (item && item[0]) {
    defaultStyle = item[0].find((eachStyle) => eachStyle['default?']);
    if (!defaultStyle) {
      // eslint-disable-next-line prefer-destructuring
      defaultStyle = item[0][0];
    }
  }
  // defaultStyle = defaultStyle ? item[0][0] : {};
  const url = defaultStyle ? defaultStyle.photos[0].url : 'https://i.ytimg.com/vi/-Cv68B-F5B0/maxresdefault.jpg';
  console.log(defaultStyle);
  // cat
  // name
  // price
  // stars
  return (
    <ListItem role="listitem">
      <Image src={url} alt="carousel-item" />
      <div className="carousel-item-body">
        <div className="item-body-category">
          {item[2].category}
        </div>
        <Name>{item[2].name}</Name>
        <Price>{`Today: $${item[2].default_price}`}</Price>
        <Stars stars={item[1].ratings} />
      </div>
      {/* <Modal description={description} /> */}
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

export default OneItem;
