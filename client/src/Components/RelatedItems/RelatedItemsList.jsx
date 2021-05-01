/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import RelatedItem from './RelatedItem';

const RelatedItemsList = ({
  data, changeProduct, productId, productInfo, selectedStyle, reviewMeta,
}) => data.map((item) => (
  <div>
    <RelatedItem
      key={item[0][0].style_id && item[0][0].style_id}
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

export default RelatedItemsList;
