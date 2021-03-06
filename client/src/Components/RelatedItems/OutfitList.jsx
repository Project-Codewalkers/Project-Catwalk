/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Outfit from './Outfit';

const OutfitList = ({
  outfit,
  selectedStyle,
  deleteItem,
}) => outfit.map((item, i) => (
  <div key={item.style.style_id}>
    <Outfit
      index={i}
      item={item}
      deleteItem={deleteItem}
      selectedStyle={selectedStyle}
    />
  </div>
));

// OutfitList.propTypes = {
//   outfit: PropTypes.arrayOf(PropTypes.shape({
//     style: PropTypes.shape({
//       style_id: PropTypes.number,
//       name: PropTypes.string,
//       original_price: PropTypes.string,
//       sale_price: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.object,
//       ]),
//     }),
//   })),
//   newItem: PropTypes.func.isRequired,

// };

Outfit.defaultProps = {
  outfit: [],
  // selectedStyle: PropTypes.null,
};

export default OutfitList;
