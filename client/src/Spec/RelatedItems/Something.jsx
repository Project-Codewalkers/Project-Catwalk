/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItemsList from '../../Components/RelatedItems/RelatedItemsList';
import sampleData from '../../sampleData';
// import ReactTestUtils from 'react-test-utils';

describe('<RelatedItemsList />', () => {
  beforeEach(() => {
    const items = sampleData;
    const list = document.createElement('div');
    list.setAttribute('data-testid', 'carousel-list');

    const { container } = render(<RelatedItemsList items={items} />, {
      container: document.body.appendChild(list),
    });
  });

  test('should render a list of CarouselItems', () => {
    const list = screen.getByTestId('carousel-list');
    expect(list).toBeInTheDocument();
    const carouselItems = screen.getAllByRole('listitem');
    carouselItems.forEach((item) => {
      expect(list).toContainElement(item);
    });
  });
});
