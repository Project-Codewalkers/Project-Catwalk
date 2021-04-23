/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
// import ReactDOM from 'react-dom';
// import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import api from '../lib/api';
import exampleData from '../Example';
// import 'jest-dom/extend-expect';
// import ReactTestUtils from 'react-test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

global.fetch = jest.fn().mockResolvedValue('fakeData');

api.listProducts = jest.fn().mockResolvedValue(exampleData.exampleListProducts);
api.productInformation = jest.fn().mockResolvedValue(exampleData.exampleProductInformation);
api.productStyles = jest.fn().mockResolvedValue(exampleData.exampleProductStyles);
api.relatedProducts = jest.fn().mockResolvedValue(exampleData.exampleRelatedProducts);
api.listReviews = jest.fn().mockResolvedValue(exampleData.exampleListReviews);
api.getReviewMetadata = jest.fn().mockResolvedValue(exampleData.exampleGetReviewMetadata);
describe('App', () => {
  test('it should render the App component', () => {
    // render(<App />);
    const { getByText } = render(<App />);
    // act(() => {
    //   ReactDOM.render(<App />, container);
    //   jest.advanceTimersByTime(1000);
    // });
    // render(<App />);
    // debug();
    expect(getByText('ProductInfo')).toBeInTheDocument();
  });
});
