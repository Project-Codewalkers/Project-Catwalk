/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import api from '../../lib/api';

const StyledModal = styled.div`
height: 500px;
width: 500px;
background: gray;
position: fixed;
top: 50%;
left: 50%;
margin-left: -250px;
margin-top: -250px;
`;

const Modal = ({ product, show }) => {
  const [viewable, setViewable] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(null);
  const [body, setBody] = useState('');
  const [rec, setRec] = useState(null);
  const [email, setEmail] = useState('');
  const [char, setChar] = useState({});
  const [comfort, setComf] = useState(null);
  const [fit, setFit] = useState(null);
  const [length, setLength] = useState(null);
  const [quality, setQuality] = useState(null);
  const [summary, setSummary] = useState('');

  const postToServer = (toPost) => (
    api.addAReview(toPost)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      review_id: product,
      rating: e.target[4].value,
      summary: e.target[9].value,
      recommend: e.target[3].value,
      body: e.target[2].value,
      name: e.target[0].value,
      email: e.target[1].value,
      characteristics: {
        fit: e.target[8].value,
        Comfort: e.target[5].value,
        Length: e.target[6].value,
        Quality: e.target[7].value,
      },
    };
    postToServer(post);
  };

  if (show) {
    return (
      <StyledModal>
        <form id="addReviewForm" onSubmit={(e) => handleSubmit(e)}>
          <h2>Write Your Review</h2>
          <label htmlFor="name">
            Name:
            {' '}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email:
            {' '}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="review">
            Review:
            {' '}
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <label htmlFor="recommended">
            Recommended:
            {' '}
            <select rec={rec}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>
          <label htmlFor="rating">
            Rating:
            {' '}
            <select rating={rating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="comfort">
            Comfort:
            {' '}
            <select comfort={comfort}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="length">
            Length:
            {' '}
            <select length={length}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="quality">
            Quality:
            {' '}
            <select quality={quality}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="fit">
            Fit:
            {' '}
            <select fit={fit}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="summary">
            Summary:
            {' '}
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </StyledModal>
    );
  }
  return null;
};

// Modal.propTypes = {
//   product: PropTypes.number.isRequired,
//   show: PropTypes.bool.isRequired,
// };

export default Modal;
