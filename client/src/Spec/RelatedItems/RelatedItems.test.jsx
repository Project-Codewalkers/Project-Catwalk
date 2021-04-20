/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItems from '../../Components/RelatedItems/RelatedItems';
// import ReactTestUtils from 'react-test-utils';

global.fetch = jest.fn().mockResolvedValue('fakeData');
describe('RelatedItems', () => {
  test('it should render Related Items', () => {
    render(<RelatedItems />);
    expect(screen.getByText('Related Items')).toBeInTheDocument();
  });
});
