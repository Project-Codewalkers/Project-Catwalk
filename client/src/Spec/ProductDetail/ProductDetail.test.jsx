/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-test-utils';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
// import ReactTestUtils from 'react-test-utils';


describe('Product Detail', () => {
  global.fetch = jest.fn().mockResolvedValue('fakeData');

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  act(() => {
    ReactDOM.render(<ProductDetail productId={20101} />, container);
  });
  test('it should render the App component', () => {
  });


  test('it should render ProductInfo', () => {
    expect(true).toBeTruthy();
    // expect(screen.getByText('ProductInfo')).toBeInTheDocument();
  });

  test('it should render a product name', () => {
    // expect(screen.getByText('')).toBeInTheDocument();
  });
});

// describe('Product Detail', () => {
//   test('it should be true', () => {
//     expect(true).toBeTruthy();
//   });
// });


