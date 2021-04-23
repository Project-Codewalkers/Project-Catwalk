// App.jsx

import React, { useState, useEffect } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
// import api from './lib/api';

const App = () => {
  const productId = 20101;
  const [id, setId] = useState(20100);

  return (
    <div>
      Hello World!
      <p>{console.log(id)}</p>
      <ProductDetail productId={id} setProductId={setId} />
      {/* <RelatedItems /> */}
      <Carousel productId={productId} />
      <ReviewList id={id} setId={setId} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
