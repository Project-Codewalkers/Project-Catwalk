import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const ProductOverview = ({ product }) => {
  if (!product) { return <div />; }
  const { slogan, description, features } = product;
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

ProductOverview.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
};

ProductOverview.defaultProps = {
  product: null,
};

export default ProductOverview;
