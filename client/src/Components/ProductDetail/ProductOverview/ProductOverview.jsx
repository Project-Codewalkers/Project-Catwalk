import React from 'react';
// import PropTypes from 'prop-types';
import { exampleProductInformation } from '../../../Example';

const ProductOverview = () => {
  const { slogan, description, features } = exampleProductInformation;
  return (
    <div>
      <div>{slogan}</div>
      <div>{description}</div>
      <div>
        {features.map((feature) => (
          <div key={feature.feature}>{`${feature.feature}: ${feature.value}`}</div>
        ))}
      </div>
    </div>
  );
};
export default ProductOverview;
