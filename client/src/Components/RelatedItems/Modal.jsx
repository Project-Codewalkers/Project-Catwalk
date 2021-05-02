/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0; bottom: 0; right: 0; left: 0;
  background-color: transparent;
  z-index: 3;
`;

const Box = styled.div`
  position: relative;
  color: black;
  background-color: lightgrey;
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  margin: 0px 25%;
  margin-top: 8%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  border-radius: 10px;
  text-align: center;
  width: 50%;
`;

const Button = styled.div`
  position: absolute;
  width: 5%;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;

const Vertical = styled.div`
  border-left: solid black 0.1em;
  height: 50px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const Modal = ({
  item, modalSwitch, setModalSwitch, fit, comfort, quality, length, fitCurrent, comfortCurrent, qualityCurrent, lengthCurrent, currentItem,
}) => {
  if (!modalSwitch) {
    return null;
  }

  return (
    <StyledModal>
      <Box>
        <Button onClick={() => (setModalSwitch())}>x</Button>
        <table>
          <thead>
            <tr>
              <th>
                {item[2].name}
                <hr />
              </th>
              <Vertical />
              <th>
                Characteristics
                <hr />
              </th>
              <Vertical />
              <th>
                {currentItem[2].name}
                <hr />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item[2].category}</td>
              <Vertical />
              <td>Category</td>
              <Vertical />
              <td>{currentItem[2].category}</td>
            </tr>
            <tr>
              <td>{item[2].default_price}</td>
              <Vertical />
              <td>Price</td>
              <Vertical />
              <td>{currentItem[2].default_price}</td>
            </tr>
            <tr>
              <td>{Number(fit).toFixed(1)}</td>
              <Vertical />
              <td>Fit</td>
              <Vertical />
              <td>{Number(fitCurrent).toFixed(1)}</td>
            </tr>
            <tr>
              <td>{length ? Number(length).toFixed(1) : '--'}</td>
              <Vertical />
              <td>Length</td>
              <Vertical />
              <td>{Number(lengthCurrent).toFixed(1)}</td>
            </tr>
            <tr>
              <td>{Number(comfort).toFixed(1)}</td>
              <Vertical />
              <td>Comfort</td>
              <Vertical />
              <td>{Number(comfortCurrent).toFixed(1)}</td>
            </tr>
            <tr>
              <td>{Number(quality).toFixed(1)}</td>
              <Vertical />
              <td>Quality</td>
              <Vertical />
              <td>{Number(qualityCurrent).toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </StyledModal>
  );
};

// Modal.propTypes = {
//   item: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//   })),
//   PropTypes.arrayOf(PropTypes.shape({
//     ratings: PropTypes.number,
//     product_id: PropTypes.number,
//     characterists: PropTypes.shape({
//       fit: PropTypes.string,
//       comfort: PropTypes.string,
//       quality: PropTypes.string,
//       length: PropTypes.string,
//     }),
//   })),
//   PropTypes.shape({
//     default_price: PropTypes.number,
//     category: PropTypes.string,
//     name: PropTypes.string,
//     ratings: PropTypes.number,
//   }),
//   ),

//   currentItem: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     default_price: PropTypes.string,
//     category: PropTypes.string,
//     product_name: PropTypes.string,
//     price: PropTypes.number,
//     stars: PropTypes.number,
//   })),
//   fitCurrent: PropTypes.shape({
//     value: PropTypes.number,
//   }),
//   comfortCurrent: PropTypes.shape({
//     value: PropTypes.number,
//   }),
//   qualityCurrent: PropTypes.shape({
//     value: PropTypes.number,
//   }),
//   lengthCurrent: PropTypes.shape({
//     value: PropTypes.number,
//   }),
//   modalSwitch: PropTypes.bool.isRequired,
//   setModalSwitch: PropTypes.func.isRequired,
//   fit: PropTypes.string,
//   comfort: PropTypes.string,
//   quality: PropTypes.string,
//   length: PropTypes.string,
//   ratings: PropTypes.number,
// };

// Modal.defaultProps = {
//   item: [[{}]],
//   currentItem: PropTypes.null,
//   fit: PropTypes.null,
//   comfort: PropTypes.null,
//   quality: PropTypes.null,
//   length: PropTypes.null,
//   fitCurrent: PropTypes.null,
//   comfortCurrent: PropTypes.null,
//   qualityCurrent: PropTypes.null,
//   lengthCurrent: PropTypes.null,
//   ratings: PropTypes.null,
// };

export default Modal;
