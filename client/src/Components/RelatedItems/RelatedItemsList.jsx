/* eslint-disable max-len */
/* esling-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import RelatedItem from './RelatedItem';

const RelatedItemsList = ({
  data, changeProduct, productId, productInfo, selectedStyle, reviewMeta,
}) => data.map((item) => (
  <div key={item[0][0].style_id + 2}>
    <RelatedItem
      item={item}
      changeProduct={changeProduct}
      productId={productId}
      productInfo={productInfo}
      reviewMeta={reviewMeta}
      selectedStyle={selectedStyle}
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

// RelatedItemsList.propTypes = {
//   item: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
// };

export default RelatedItemsList;
