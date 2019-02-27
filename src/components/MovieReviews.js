// Code MovieReviews Here
import React from 'react';

function MovieReviews(props) {
  // console.log(props);
  return (
    <div className='review-list'>
      {props.reviews.map(rev => {
        return (
          <div className='review'>
            <h1>{rev.display_title}</h1>
            <p>{rev.summary_short}</p>
          </div>
        );
      })}
    </div>
  );
}

MovieReviews.defaultProps = {
  review: ''
};
export default MovieReviews;
