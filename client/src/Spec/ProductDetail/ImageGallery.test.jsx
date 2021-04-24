/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

import ImageGallery from '../../Components/ProductDetail/ImageGallery/ImageGallery';
// import { exampleProductStyles } from '../../Example';

describe('Image Default', () => {
  test('it should render the default image', () => {
    const { getByTestId } = render(<ImageGallery />);
    expect(getByTestId('defaultImage')).toBeInTheDocument();
  });
});
