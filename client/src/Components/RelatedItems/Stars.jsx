import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarsBody = styled.div`
  margin: 6px 0px 5px;
  font-size: 18px;
  width: 83px;
`;

const Background = styled.div`
  color: rgb(210, 210, 210);
`;

const Front = styled.div`
  color: rgb(244, 186, 49);
  overflow: hidden;
  margin-top: -22px;
`;

const Stars = ({ stars }) => (
  <StarsBody>
    <div id="stars-container">
      <Background>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Background>
      <Front style={{ width: `${stars * 20}%` }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Front>
    </div>
  </StarsBody>
);

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Stars;
