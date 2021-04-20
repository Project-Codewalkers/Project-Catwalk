import React from 'react';
// import sampleData from '../../sampleData';
import PropTypes from 'prop-types';
import OneItem from './OneItem';

const sampleData = [
  {
    id: 1,
    category: 'A thing like the thing above',
    product_name: 'Thing 1',
    price: '$500.00',
    stars: 5,
    image: 'https://tse1.explicit.bing.net/th?id=OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8&pid=Api&P=0&w=278&h=186',
  },
  {
    id: 2,
    category: 'A thing like the thing above',
    product_name: 'Thing 2',
    price: '$450.00',
    stars: 3,
    image: 'https://tse1.mm.bing.net/th?id=OIP.5JOmFuIk6NBgsbjVQYFNOQHaE8&pid=Api&P=0&w=278&h=186',
  },
];

const RelatedItems = () => (

  <div>
    <h1>
      Related Items
    </h1>
    {sampleData.map((item) => (
      <OneItem key={item.id} item={item} />
    ))}
  </div>
);

sampleData.propTypes = {
  image: PropTypes.string.isRequired,
};

export default RelatedItems;
