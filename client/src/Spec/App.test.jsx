/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-test-utils';

describe('App', () => {
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
    ReactDOM.render(<App />, container)
  });
  test('it should render the App component', () => {
  });
});
