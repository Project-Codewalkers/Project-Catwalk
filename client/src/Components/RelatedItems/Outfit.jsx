import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
`;

const Image = styled.img`
  height: 225px;
  width: 305px;
  border: 0px;
  vertical-align: middle;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  max-height: 45px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 12px;
`;

const Category = styled.div`
  font-size: 13px;
`;

const Outfit = () => (
  <div>Outfit Says hello</div>
)

export default Outfit;