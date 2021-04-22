// App.jsx
import React from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';

import Carousel from './Components/RelatedItems/Carousel';

const App = () => {
  const productId = 20101;
  return (
    <div>
      Hello World!
      <ProductDetail productId={productId} />
      {/* <RelatedItems /> */}
      <Carousel productId={productId} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
