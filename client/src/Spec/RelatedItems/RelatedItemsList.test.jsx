/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItemsList from '../../Components/RelatedItems/RelatedItemsList';
// import ReactTestUtils from 'react-test-utils';

global.fetch = jest.fn().mockResolvedValue('fakeData');
describe('RelatedItemsList', () => {
  test('it should render Related Items', () => {
    render(<RelatedItemsList />);
    expect(screen.getByText('Related Items')).toBeInTheDocument();
  });
});
