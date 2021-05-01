/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedItem from './RelatedItem';

const RelatedItemsList = ({
  data, changeProduct, productId, productInfo, selectedStyle, reviewMeta,
}) => data.map((item) => (
  <RelatedItem
    key={item[0][0].style_id}
    item={item}
    changeProduct={changeProduct}
    productId={productId}
    productInfo={productInfo}
    reviewMeta={reviewMeta}
    selectedStyle={selectedStyle}
  />
));

RelatedItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    product_name: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
};

RelatedItemsList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default RelatedItemsList;
