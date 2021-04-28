/* eslint-disable react/prop-types */
import React from 'react';
import OneItem from './OneItem';

const RelatedItemsList = ({ data }) => data.map((item) => (
  <div key={item[1].product_id}>
    <OneItem
      item={item}
    />
  </div>
));

// RelatedItemsList.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     category: PropTypes.string,
//     product_name: PropTypes.string,
//     price: PropTypes.number,
//     stars: PropTypes.number,
//     image: PropTypes.string,
//   })).isRequired,
// };

export default RelatedItemsList;
