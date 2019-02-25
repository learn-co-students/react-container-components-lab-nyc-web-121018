// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
  const mapReviews = () => {
    return props.reviews.map(review => {
      return (
        <div className="review">
          <h2>{review.display_title}</h2>
          <img
            src={review.multimedia.src}
            alt="review image"
            height={review.multimedia.height}
            width={review.multimedia.width}
          />
          <h2>{review.headline}</h2>
        </div>
      );
    });
  };

  return <div className="review-list">{mapReviews()}</div>;
};

export default MovieReviews;
