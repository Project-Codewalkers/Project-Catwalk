// App.jsx
import React from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';

const App = () => (
  <div>
    <div>
      Hello World!
    </div>
    <div>
      <ProductDetail />
      <RelatedItems />
    </div>
  </div>
);

export default App;
