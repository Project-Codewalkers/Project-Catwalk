import React, { useState } from 'react';
import Modal from './Modal';

const AddReview = () => {
  const [show, setShow] = useState(false);

  const showModal = () => (
    show === true ? setShow(false) : setShow(true)
  );

  return (
    <div>
      <button id="addReviewBtn" type="button" onClick={showModal}> ADD REVIEW</button>
      <Modal show={show} />
    </div>
  );
};

export default AddReview;
