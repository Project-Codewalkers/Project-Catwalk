/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const ListItem = styled.div`
  padding: 10px;
  margin: 10px;
  width: 302px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
`;

const Image = styled.img`
  height: 225px;
  width: 300px;
  border: 0px;
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

const Outfit = ({ item }) => {
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
  const noPic = 'https://i.ytimg.com/vi/-Cv68B-F5B0/maxresdefault.jpg';
  const url = defaultStyle ? defaultStyle.photos[0].url : noPic;
  console.log(defaultStyle);

  return (
    <ListItem role="listitem">
      {/* <div>+ Add to Outfit</div> */}
      <Image src={url} alt="carousel-item" />
      <div className="carousel-item-body">
        <Category className="item-body-category">
          {item[2].category}
        </Category>
        <Name>{item[2].name}</Name>
        <Price>{`Today: $${item[2].default_price}`}</Price>
        <Stars stars={item[1].ratings} />
      </div>
      {/* <Modal description={description} /> */}
    </ListItem>
  );
};

export default Outfit;