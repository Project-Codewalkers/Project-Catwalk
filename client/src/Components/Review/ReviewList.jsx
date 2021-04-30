import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import AvgRating from './AvgRating';
import api from '../../lib/api';
import AddReview from './AddReview';
import SortSelector from './SortSelect';
import Stars, { avgStars } from '../RelatedItems/Stars';

const ReviewList = ({ id, metaReview }) => {
  // Hooks state goes here map over the list and render pass down into the review
  const count = 2;
  const [reviews, setReview] = useState([]);
  const [moreReviews, setMoreReviews] = useState(count);
  const [sort, setSort] = useState('Relevant');

  const page = 1;
  useEffect(() => {
    api.listReviews(id, sort, page, moreReviews)
      .then((product) => {
        // console.log('list Reviews', product);
        setReview(product);
      })
      .catch((err) => console.log(err));
  }, [id, sort, page, moreReviews]);
  return (
    <div id="reviews">
      <p> Reviews go here: </p>
      <p>
        Sorted by
        {' '}
        <select onChange={() => setSort()}>
          <option value="Relevant">Relevant</option>
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
        </select>
      </p>

      {reviews.map((item) => (
        <Review
          id={item.review_id}
          res={item.response}
          rec={item.recommend}
          pics={item.photos}
          key={item.review_id + 2}
          summary={item.summary}
          body={item.body}
          date={item.date}
          name={item.reviewer_name}
          helpful={item.helpfulness}
          rating={item.rating}
        />
      ))}
      <AvgRating
        key={metaReview ? metaReview.product_id : null}
        rating={metaReview ? avgStars(metaReview.ratings) : null}// object
        fit={metaReview && metaReview.characteristics && metaReview.characteristics.Fit ? metaReview.characteristics.Fit : null} // for fit characteristics
        comfort={metaReview && metaReview.characteristics && metaReview.characteristics.Comfort ? metaReview.characteristics.Comfort : null} // for comfort
        length={metaReview && metaReview.characteristics && metaReview.characteristics.Length ? `Length: ${Number(metaReview.characteristics.Length.value).toFixed(1)}` : null}
        quality={metaReview && metaReview.characteristics && metaReview.characteristics.Quality ? `Quality: ${Number(metaReview.characteristics.Quality.value).toFixed(1)}` : null}
        rec={metaReview && metaReview.recommended ? metaReview.recommended.true > metaReview.recommended.false : null}
      />
      <AddReview />
      <button type="button" onClick={() => setMoreReviews(moreReviews + 2)}>MORE REVIEWS</button>
    </div>
  );
};
ReviewList.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ReviewList;
