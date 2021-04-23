/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import ImageDefault from '../../Components/ProductDetail/ImageGallery/ImageDefault';
import { exampleProductStyles } from '../../Example';

describe('Image Default', () => {
  test('it should render the default image', () => {
    render(<ImageDefault
      imageURL={exampleProductStyles.results[0].photos[0].url}
    />);
    const image = screen.getByRole('img');
    expect(isDOMComponent(image)).toBeTruthy();
  });
});
