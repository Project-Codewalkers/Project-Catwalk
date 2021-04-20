/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const OneItem = ({ item }) => (
  <li>
    {item.id}
    <br />
    {item.category}
    <br />
    {item.product_name}
    <br />
    {item.price}
    <br />
    {item.stars}
    <br />
    <img src={item.image} alt="related-items-list" />
  </li>
);

// OneItem.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default OneItem;
