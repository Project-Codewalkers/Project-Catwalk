import React from 'react';
// import sampleData from '../../sampleData';
import PropTypes from 'prop-types';
import OneItem from './OneItem';

const RelatedItemsList = ({ sample }) => sample.map((item) => (
  <OneItem
    key={item.id}
    item={item}
  />
));

RelatedItemsList.propTypes = {
  image: PropTypes.string.isRequired,
};

export default RelatedItemsList;
