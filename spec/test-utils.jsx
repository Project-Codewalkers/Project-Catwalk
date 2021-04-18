// eslint-disable-no-undef
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../client/src/App';

describe('App', () => {
  test('it should render Hello World', () => {
    render(<App />);
    expect(document.getElementById('root').toBeInTheDocument());
  });
});
