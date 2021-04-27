import React, { useState } from 'react';
import styled from 'styled-components';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
// import api from './lib/api';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Helvetica, sans-serif;
`;

const App = () => {
  const [productId, setProductId] = useState(20100);

  return (
    <StyledApp>
      <ProductDetail productId={productId} setProductId={setProductId} />
      <br />
      <br />
      <br />
      <Carousel productId={productId} />
      <ReviewList id={productId} />
    </StyledApp>
  );
};

App.defaultProps = {
  productId: 20101,
};

export default App;
