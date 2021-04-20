/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../client/src/App';
// import ReactTestUtils from 'react-test-utils';

global.fetch = jest.fn().mockResolvedValue('fakeData');
describe('App', () => {
  test('it should render Hello World', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
