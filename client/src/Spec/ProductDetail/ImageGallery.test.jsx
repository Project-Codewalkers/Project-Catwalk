/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

import ImageGallery from '../../Components/ProductDetail/ImageGallery/ImageGallery';
// import { exampleProductStyles } from '../../Example';

describe('Image Default', () => {
  test('it should render the default image', () => {
    const { getByTestId } = render(<ImageGallery />);
    expect(getByTestId('defaultImage')).toBeInTheDocument();
  });
});
