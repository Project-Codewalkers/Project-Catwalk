/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Outfit from './Outfit';

const OutfitList = ({
  outfit,
  selectedStyle,
  deleteItem,
  outfitArr,
}) => outfit.map((item, i) => (
  <div>
    <Outfit
      key={item[1].id}
      index={i}
      item={item}
      deleteItem={deleteItem}
      selectedStyle={selectedStyle}
      outfitArr={outfitArr}
    />
  </div>
));

// OutfitList.propTypes = {
//   outfit: PropTypes.arrayOf().isRequired,
//   selectedStyle: PropTypes.shape({
//     style_id: PropTypes.number,
//     name: PropTypes.string,
//     original_price: PropTypes.string,
//     sale_price: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.object,
//     ]),
//   }).isRequired,
//   newItem: PropTypes.func.isRequired,
// };

export default OutfitList;
