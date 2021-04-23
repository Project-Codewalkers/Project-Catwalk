/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
// import ReactTestUtils from 'react-test-utils';

global.fetch = jest.fn().mockResolvedValue('fakeData');
describe('App', () => {
  test('it should render the App component', () => {
    // act(() => { render(<App />); });
    // render(<App />);
    // screen.debug();
    // expect(screen.getByText()).toBeInTheDocument();
  });
});
