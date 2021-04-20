
// import React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   test('renders App component', () => {
//     render(<App />);

//     screen.debug();
//   });
// });

import * as React from 'react';
//import render from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/dom';

test('renders the correct content', () => {
  // Render a  React component to the Dom.
  const { getByText } = render(<App />);
  getByText('Hello World');
  // Use Dom APIs (query selector) to make assertians.
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// test('uses jest-dom', () => {
//   document.body.innerHTML = `
//     <div id="root">
//     <div>Hello World!</div>
//     </div>
//   `

//   //expect(screen.queryByTestId('root')).not.toBeEmptyDOMElement();
//   expect(screen.getByText('Hello World!')).toBeVisible();
// })
