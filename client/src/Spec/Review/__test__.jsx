import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from 'App';

test('renders the correct content', () => {
  // Render a  React component to the Dom.
  const { getByText } = render(<App />);
  getByText('Hello World');
  // Use Dom APIs (query selector) to make assertians.
});
