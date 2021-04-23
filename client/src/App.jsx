// App.jsx

import React, { useState, useEffect } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
import api from './lib/api';

const App = () => {
const [id, setId] = useState(20100);

  return (
    <div>
      Hello World!
      <p>{console.log(id)}</p>
      <ProductDetail productId={id} setProductId={setId} />
      <Carousel productId={productId} />
      <RelatedItems setProduct={setProductId} />  
      <ReviewList id={id} setId={setId} />
    </div>
  );
};

export default App;
