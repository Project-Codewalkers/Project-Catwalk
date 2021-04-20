import React from 'react';
// import sampleData from '../../sampleData';
import OneItem from './OneItem';

const RelatedItems = ({ sample }) => (
  <div>
    Related Items
    {sample.map((item, i) => (
      <OneItem key={item + i} item={item} />
    ))}
  </div>
);

export default RelatedItems;
