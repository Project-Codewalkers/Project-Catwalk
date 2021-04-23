// App.jsx

import React, { useState } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
// import api from './lib/api';

const App = () => {
  const [productId, setProductId] = useState(20100);

  return (
    <div>
      <ProductDetail productId={productId} setProductId={setProductId} />
      <Carousel productId={productId} />
      <ReviewList id={productId} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
