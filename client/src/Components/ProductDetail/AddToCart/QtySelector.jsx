import React from 'react';
// import PropTypes from 'prop-types';

const QtySelector = () => (
  <select>
    {'x'.repeat(10).split('').map((c, i) => i + 1)
      .map((num) => (
        <option key={num} value={num}>{num}</option>
      ))}
  </select>
);

export default QtySelector;
