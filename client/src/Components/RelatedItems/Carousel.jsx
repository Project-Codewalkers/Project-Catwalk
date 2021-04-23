/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Controller from './Controller';
import api from '../../lib/api';

const CarouselMain = styled.div`
  display: block;
  line-height: 22px;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

const CarouselTitle = styled.h2`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px 20px 5px;
`;

// const sampleData = [

//   {
//     id: 1,
//     category: 'CATEGORY',
//     product_name: 'Product Name 1',
//     price: '$500.00',
//     stars: 5,
//     image: 'https://tse1.explicit.bing.net/th?id=OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8&pid=Api&P=0&w=278&h=186',
//   },
//   {
//     id: 2,
//     category: 'CATEGORY',
//     product_name: 'Product Name 2',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse1.mm.bing.net/th?id=OIP.5JOmFuIk6NBgsbjVQYFNOQHaE8&pid=Api&P=0&w=278&h=186',
//   },
//   {
//     id: 3,
//     category: 'CATEGORY',
//     product_name: 'Product Name 3',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse4.mm.bing.net/th?id=OIP.a3Tu_QIx1RDYsGDqCtEmRAHaE8&pid=Api&P=0&w=278&h=186',
//   },
//   {
//     id: 4,
//     category: 'CATEGORY',
//     product_name: 'Product Name 4',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse3.mm.bing.net/th?id=OIP.UBc_KF6vSEG3tLJWp9qBbQHaE8&pid=Api&P=0&w=278&h=187',
//   },
//   {
//     id: 5,
//     category: 'CATEGORY',
//     product_name: 'Product Name 5',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse4.mm.bing.net/th?id=OIP.pAUEFVI8N0ju-lSjrfHXigHaE8&pid=Api&P=0&w=255&h=171',
//   },
//   {
//     id: 6,
//     category: 'CATEGORY',
//     product_name: 'Product Name 6',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse3.mm.bing.net/th?id=OIP.UnPaIIzB35zAi1dkVUoklQHaE8&pid=Api&P=0&w=278&h=187',
//   },
//   {
//     id: 7,
//     category: 'CATEGORY',
//     product_name: 'Product Name 7',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse4.mm.bing.net/th?id=OIP.pUEXTEGx5ZNm-HIf2dor7gHaE8&pid=Api&P=0&w=267&h=179',
//   },
//   {
//     id: 8,
//     category: 'CATEGORY',
//     product_name: 'Product Name 8',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse2.mm.bing.net/th?id=OIP.12DMAfdDKskeN8Px18P2LAHaE8&pid=Api&P=0&w=249&h=167',
//   },
//   {
//     id: 9,
//     category: 'CATEGORY',
//     product_name: 'Product Name 9',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse3.mm.bing.net/th?id=OIP.atO-dLCTV4JBWWj6IFxhLgHaE8&pid=Api&P=0&w=244&h=164',
//   },
//   {
//     id: 10,
//     category: 'CATEGORY',
//     product_name: 'Product Name 10',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse4.mm.bing.net/th?id=OIP.DJQkK6eEXNVS1WK1m76YfwHaEK&pid=Api&P=0&w=350&h=198',
//   },
//   {
//     id: 11,
//     category: 'CATEGORY',
//     product_name: 'Product Name 10',
//     price: '$450.00',
//     stars: 3,
//     image: 'https://tse4.mm.bing.net/th?id=OIP.DJQkK6eEXNVS1WK1m76YfwHaEK&pid=Api&P=0&w=350&h=198',
//   },
// ];

const Carousel = ({ productId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.relatedProducts(productId)
      .then((product) => {
        console.log('This is the product: ', product);
        setItems(product);
      })
      .catch((err) => {
        console.log(err);
      });
    items.map((itemId) => (
      api.productStyles(itemId)
        .then((product) => {
          console.log('Im a console log! ', product);
        })
        .catch((err) => {
          console.log(err);
        })
    ));
  }, [productId]);

  return (
    <CarouselMain role="main">
      <CarouselTitle>Related Items</CarouselTitle>
      <Controller data={items} />
    </CarouselMain>
  );
};

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sampleData:
//       [
//         {
//           id: 1,
//           category: 'CATEGORY',
//           product_name: 'Product Name 1',
//           price: 500.00,
//           stars: 5,
//           image: 'https://tse1.explicit.bing.net/th?id=OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8&pid=Api&P=0&w=278&h=186',
//         },
//         {
//           id: 2,
//           category: 'CATEGORY',
//           product_name: 'Product Name 2',
//           price: 450.00,
//           stars: 3,
//           image: 'https://tse1.mm.bing.net/th?id=OIP.5JOmFuIk6NBgsbjVQYFNOQHaE8&pid=Api&P=0&w=278&h=186',
//         },
//         {
//           id: 3,
//           category: 'CATEGORY',
//           product_name: 'Product Name 3',
//           price: 450.00,
//           stars: 4,
//           image: 'https://tse4.mm.bing.net/th?id=OIP.a3Tu_QIx1RDYsGDqCtEmRAHaE8&pid=Api&P=0&w=278&h=186',
//         },
//         {
//           id: 4,
//           category: 'CATEGORY',
//           product_name: 'Product Name 4',
//           price: 450.00,
//           stars: 2,
//           image: 'https://tse3.mm.bing.net/th?id=OIP.UBc_KF6vSEG3tLJWp9qBbQHaE8&pid=Api&P=0&w=278&h=187',
//         },
//         {
//           id: 5,
//           category: 'CATEGORY',
//           product_name: 'Product Name 5',
//           price: 450.00,
//           stars: 2.5,
//           image: 'https://tse4.mm.bing.net/th?id=OIP.pAUEFVI8N0ju-lSjrfHXigHaE8&pid=Api&P=0&w=255&h=171',
//         },
//         {
//           id: 6,
//           category: 'CATEGORY',
//           product_name: 'Product Name 6',
//           price: 450.00,
//           stars: 1.8,
//           image: 'https://tse3.mm.bing.net/th?id=OIP.UnPaIIzB35zAi1dkVUoklQHaE8&pid=Api&P=0&w=278&h=187',
//         },
//         {
//           id: 7,
//           category: 'CATEGORY',
//           product_name: 'Product Name 7',
//           price: 450.00,
//           stars: 3,
//           image: 'https://tse4.mm.bing.net/th?id=OIP.pUEXTEGx5ZNm-HIf2dor7gHaE8&pid=Api&P=0&w=267&h=179',
//         },
//         {
//           id: 8,
//           category: 'CATEGORY',
//           product_name: 'Product Name 8',
//           price: 450.00,
//           stars: 3.1,
//           image: 'https://tse2.mm.bing.net/th?id=OIP.12DMAfdDKskeN8Px18P2LAHaE8&pid=Api&P=0&w=249&h=167',
//         },
//         {
//           id: 9,
//           category: 'CATEGORY',
//           product_name: 'Product Name 9',
//           price: 450.00,
//           stars: 4.5,
//           image: 'https://tse3.mm.bing.net/th?id=OIP.atO-dLCTV4JBWWj6IFxhLgHaE8&pid=Api&P=0&w=244&h=164',
//         },
//         {
//           id: 10,
//           category: 'CATEGORY',
//           product_name: 'Product Name 10',
//           price: 450.00,
//           stars: 3,
//           image: 'https://tse4.mm.bing.net/th?id=OIP.DJQkK6eEXNVS1WK1m76YfwHaEK&pid=Api&P=0&w=350&h=198',
//         },
//         {
//           id: 11,
//           category: 'CATEGORY',
//           product_name: 'Product Name 10',
//           price: 450.00,
//           stars: 3,
//           image: 'https://tse4.mm.bing.net/th?id=OIP.DJQkK6eEXNVS1WK1m76YfwHaEK&pid=Api&P=0&w=350&h=198',
//         },
//       ],
//     };
//   }

//   render() {
//     const { sampleData } = this.state;
//     return (
//       <CarouselMain role="main">
//         <CarouselTitle>Related Items</CarouselTitle>
//         <Controller sample={sampleData} />
//       </CarouselMain>
//     );
//   }
// }

export default Carousel;
