import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Carousel = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #decddd;
  float: left;
  border: black solid 0.1em;
`;

const OneItem = ({ item }) => (
  <Carousel>
    <img src={item.image} alt="related-items-list" />
    <br />
    {item.category}
    <br />
    {item.product_name}
    <br />
    {item.price}
    <br />
    {item.stars}
    <br />
    <br />
  </Carousel>
);

// OneItem.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default OneItem;
