/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { within } from '@testing-library/dom';

import React from 'react';
import ImageThumbnails from '../../Components/ProductDetail/ImageGallery/ImageThumbnails';
import { exampleProductStyles } from '../../Example';

describe('Image Thumbnails', () => {
  test('it should render the correct number of thumbnails', () => {
    const { photos } = exampleProductStyles.results[0];
    const { getByTestId } = render(<ImageThumbnails photos={photos} />);
    const thumbnailContainer = getByTestId('thumbnails');
    const thumbnails = within(thumbnailContainer).getAllByRole('img');
    expect(thumbnails.length).toBe(6);
  });

  test('it should only render 7 thumbnails if more are provided', () => {
    const { photos } = exampleProductStyles.results[0];
    photos.push(...exampleProductStyles.results[1].photos);
    const { getByTestId } = render(<ImageThumbnails photos={photos} />);
    const thumbnailContainer = getByTestId('thumbnails');
    const thumbnails = within(thumbnailContainer).getAllByRole('img');
    expect(thumbnails.length).toBe(7);
  });
});
