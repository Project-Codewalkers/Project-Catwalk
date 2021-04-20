// App.jsx
import React from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RelatedItems from './Components/RelatedItems/RelatedItems';
// import sampleData from './sampleData';

const sampleData = [
  {
    id: 1,
    image: 'https://tse1.explicit.bing.net/th?id=OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8&pid=Api&P=0&w=278&h=186',
  },
  {
    id: 2,
    image: 'https://tse1.mm.bing.net/th?id=OIP.5JOmFuIk6NBgsbjVQYFNOQHaE8&pid=Api&P=0&w=278&h=186',
  },
];

const App = () => {
  const productId = 20101;
  return (
    <div>
      Hello World!
      <ProductDetail productId={productId} />
      <RelatedItems sample={sampleData} />
    </div>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
