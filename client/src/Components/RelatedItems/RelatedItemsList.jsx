import React from 'react';
import PropTypes from 'prop-types';
import OneItem from './OneItem';

const RelatedItemsList = ({ data }) => data.map((item) => (
  <div>
    <OneItem
      key={item.id}
      item={item}
    />
  </div>

));

RelatedItemsList.propTypes = {
  sample: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    product_name: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
};

export default RelatedItemsList;
