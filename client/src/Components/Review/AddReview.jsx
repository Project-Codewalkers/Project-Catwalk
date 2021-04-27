import React, { useState, useEffect } from 'react';

const AddReview = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const showModal = show ? 'modal display-block' : 'modal display-none';

  }, [show]);

  //const span = document.getElementById('close')[0];

  return (
    <div>
      <button id="addReviewBtn" type='button' onClick={setShow(true)}> ADD REVIEW</button>
    </div>
  );
};

export default AddReview;
