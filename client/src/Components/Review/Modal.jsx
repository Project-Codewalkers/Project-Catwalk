import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
height: 500px;
width: 500px;
background:red;
position: fixed;
top: 50%;
left: 50%;
margin-left: -250px;
margin-top: -250px;
`;

const Modal = ({ Content }) => {
  const [viewable, setViewable] = useState(true);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(null);
  const [body, setBody] = useState('');
  const [rec, setRec] = useState(null);
  const [email, setEmail] = useState('');
  const [char, setChar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  if (viewable) {
    return (
      <StyledModal>
        <form onSubmit={handleSubmit}>
          <label>
            Write Your Review
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </label>
          <label>
            Rating:
            <select rating={rating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </StyledModal>
    );
  }
  return null;
};

export default Modal;
