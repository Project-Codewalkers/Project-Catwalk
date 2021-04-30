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
  top: 120px;
  right: 320px;
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
              <td>{fit}</td>
              <Vertical />
              <td>Fit</td>
              <Vertical />
              <td>{fitCurrent}</td>
            </tr>
            <tr>
              <td>{length}</td>
              <Vertical />
              <td>Length</td>
              <Vertical />
              <td>{lengthCurrent}</td>
            </tr>
            <tr>
              <td>{comfort}</td>
              <Vertical />
              <td>Comfort</td>
              <Vertical />
              <td>{comfortCurrent}</td>
            </tr>
            <tr>
              <td>{quality}</td>
              <Vertical />
              <td>Quality</td>
              <Vertical />
              <td>{qualityCurrent}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </StyledModal>
  );
};

// Modal.propTypes = {
//   item: PropTypes.shape({
//     category: PropTypes.string,
//     product_name: PropTypes.string,
//     price: PropTypes.number,
//     stars: PropTypes.number,
//   }),
//   modalSwitch: PropTypes.bool.isRequired,
//   setModalSwitch: PropTypes.func.isRequired,
// };

// Modal.defaultProps = {
//   item: {},
// };

export default Modal;
