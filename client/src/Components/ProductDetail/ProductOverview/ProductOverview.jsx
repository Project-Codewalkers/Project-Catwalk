import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProductOverview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

const SloganDescription = styled.span`
  flex-grow: 2;
  flex-basis: 492px;
  min-width: 492px;
`;

const Slogan = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px;
`;

const Description = styled.div`
  margin: 10px;
`;

const Features = styled.ul`
  flex-grow: 1;
  flex-basis: 196px;
  min-width: 196px;
  margin: 10px;
  padding: 30px;
  @media (max-width: 838px) {
    border-top: 2px solid #525252;
  }
  @media (min-width: 841px) {
    border-left: 2px solid #525252;
  }
`;

const ProductOverview = ({ product }) => {
  if (product === null) { return <div />; }
  const { slogan, description, features } = product;
  return (
    <StyledProductOverview>
      <SloganDescription>
        <Slogan>{slogan && slogan}</Slogan>
        <Description>{description && description}</Description>
      </SloganDescription>
      <Features>
        {features && features.map((feature) => (
          <li key={feature.feature}>{`${feature.feature}: ${feature.value}`}</li>
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
