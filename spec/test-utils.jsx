/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from '../client/src/App';

describe('App', () => {
  test('App should render', () => {
    render(<App />);
    expect(document.getElementById('root')).toBeInTheDocument();
  });
});
