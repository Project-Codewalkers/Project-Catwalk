/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../../Components/RelatedItems/Carousel';
// import ReactTestUtils from 'react-test-utils';

global.fetch = jest.fn().mockResolvedValue('fakeData');
describe('Carousel', () => {
  test('it should render Related Items', () => {
    render(<Carousel />);
    expect(screen.getByText('Related Products')).toBeInTheDocument();
  });
});
