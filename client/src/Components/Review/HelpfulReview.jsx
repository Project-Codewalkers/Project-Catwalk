import React, { useEffect } from 'react';
import api from '../../lib/api';

const helpful = ({ reviewId }) => (

  useEffect(() => (
    api.markReviewAsHelpful(reviewId)
      .then(() => (
        console.log('Thank you for your input')
      ))
  ))
);

export default helpful;
