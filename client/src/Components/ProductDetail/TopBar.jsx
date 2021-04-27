import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: min-content;
  background-color: #525252;
  color: white;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const StyledTextInput = styled.input`
  border: none;
  border-bottom: solid 2px white;
  background-color: #525252;
  color: white;
  margin: 5px;
  &:focus{
    outline: thin solid #9c9c9c;
  }
`;

const StyledButton = styled.button`
  border: none;
  height: min-content;
  width: auto;
  margin: 0;
  margin-right: 20px;
  background: none;
  &:focus{
    outline: none;
  }
`;

const TopBar = ({ productId, setProductId }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText('');
  }, [productId]);

  const onSubmitSetProductId = (e) => {
    e.preventDefault();
    setProductId(Number(searchText));
  };

  return (
    <StyledTopBar>
      <img
        src="/assets/Logo.svg"
        alt="logo"
        style={{
          color: 'white',
          margin: '20px',
        }}
      />

      <StyledForm
        id="searchForm"
        onSubmit={(e) => onSubmitSetProductId(e)}
        onChange={(e) => setSearchText(e.target.value)}
      >
        <StyledTextInput type="text" />
        <StyledButton type="submit">
          <img
            src="/assets/MagnifyingGlass.svg"
            alt="search icon"
            style={{
              color: 'white',
              height: '20px',
              width: 'auto',
            }}
          />
        </StyledButton>
        {/* <input type="submit" /> */}
      </StyledForm>
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  productId: PropTypes.number.isRequired,
  setProductId: PropTypes.func,
};

TopBar.defaultProps = {
  setProductId: () => { },
};

export default TopBar;
