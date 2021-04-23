// App.jsx

import React, { useState, useEffect } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
import api from './lib/api';

const App = () => {

  const [id, setId] = useState(20100);
  const [productId, setProductId] = useState(20100);
  // set product id and set as state

  return (
    <div>
      Hello World!
      <p>{console.log(id)}</p>
      <ProductDetail productId={productId} setProductId={setProductId} />
      <RelatedItems setProduct={setProductId} />
      <ReviewList id={id} />
  )
};

App.defaultProps = {
  productId: 20101,
};

export default App;
