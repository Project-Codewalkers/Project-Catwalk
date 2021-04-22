// App.jsx
import React from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';

const App = () => {
  const productId = 20101;
  return (
    <div>
      <ProductDetail productId={productId} />
      <RelatedItems />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
