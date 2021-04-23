// App.jsx
import React, { useState, useEffect } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
import api from './lib/api';

const App = () => {
  const productId = 20100;
  const [id, setId] = useState(productId);

  // set product id and set as state

  return (
    <div>
      Hello World!
      <p>{console.log(id)}</p>
      <ProductDetail productId={productId} />
      <RelatedItems />
      <ReviewList id={id} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
