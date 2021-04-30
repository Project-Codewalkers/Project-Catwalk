import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from './Stars';

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

const DeleteBtn = styled.div`
  color: red;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const Outfit = ({ item, deleteItem, index, }) => {
  const noPic = 'https://i.ytimg.com/vi/-Cv68B-F5B0/maxresdefault.jpg';
  const url = item[1] ? item[1].photos[0].thumbnail_url : noPic;

  return (
    <ListItem role="listitem">
      <DeleteBtn onClick={() => (deleteItem(index))}>&#8855;</DeleteBtn>
      <Image src={url} alt="carousel-item" />
      <div className="carousel-item-body">
        <Category className="item-body-category">
          {item[3].category}
        </Category>
        <Name>{item[2].name}</Name>
        <Price>{`Today: $${item[3].default_price}`}</Price>
        <Stars stars={item[2].ratings} />
      </div>
    </ListItem>
  );
};

Outfit.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    photos: PropTypes.shape(),
    product_id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    default_price: PropTypes.number,
    ratings: PropTypes.number,
    find: PropTypes.func,
  })).isRequired,
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
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ),
  }),
  deleteItem: PropTypes.func,
};

Outfit.defaultProps = {
  selectedStyle: null,
  deleteItem: null,
};

export default Outfit;
