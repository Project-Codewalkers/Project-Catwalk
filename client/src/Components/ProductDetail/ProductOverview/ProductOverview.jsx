import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { exampleProductInformation } from '../../../Example';

const StyledProductOverview = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

const SloganDescription = styled.span`
  flex-grow: 2;
  flex-basis: 320px;
  min-width: 320px;
`;

const Features = styled.span`
  flex-grow: 1;
  flex-basis: 160px;
  min-width: 160px;
`;

const ProductOverview = () => {
  const { slogan, description, features } = exampleProductInformation;
  return (
    <StyledProductOverview>
      <SloganDescription>
        <div>{slogan}</div>
        <div>{description}</div>
      </SloganDescription>
      <Features>
        {features.map((feature) => (
          <div key={feature.feature}>{`${feature.feature}: ${feature.value}`}</div>
        ))}
      </Features>
    </StyledProductOverview>
  );
};
export default ProductOverview;
