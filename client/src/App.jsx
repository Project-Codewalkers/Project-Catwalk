// App.jsx
import React, { useState } from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';

const App = () => {
  const [productId, setProductId] = useState(20100);
  return (
    <div>
      <ProductDetail productId={productId} setProductId={setProductId} />
      <RelatedItems setProduct={setProductId} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
