/* eslint-disable react/prop-types */
import React from 'react';
import RelatedItem from './RelatedItem';

const RelatedItemsList = ({ data, changeProduct, productId }) => data.map((item) => (
  <div>
    <RelatedItem
      key={item[1].product_id}
      item={item}
      changeProduct={changeProduct}
      productId={productId}
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
