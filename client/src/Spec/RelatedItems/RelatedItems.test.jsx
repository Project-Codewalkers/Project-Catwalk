/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import RelatedItems from '../../Components/RelatedItems/RelatedItems';

describe('RelatedItems', () => {
  test('It should render images from larger array', () => {
    render(<RelatedItems />);
  });
});
