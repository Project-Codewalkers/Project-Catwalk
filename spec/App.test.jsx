/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import App from '../client/src/App';

describe('App', () => {
  test('Web app should render', () => {
    render(<App />);
    expect(document.getElementById('root').toBeInTheDocument());
  });
});
