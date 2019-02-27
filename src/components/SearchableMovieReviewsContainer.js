import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'KlNp7rHe0zN15UT6njUJJwoKX7TWk9qC';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  };

  handleChange = e => {
    this.setState(
      {
        searchTerm: e.target.value
      },
      () => console.log(this.state.searchTerm)
    );
  };

  renderReviews = () => {
    if (this.state.reviews.length > 0) {
      return this.state.reviews.map(rev => {
        return <MovieReviews review={rev} />;
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${
        this.state.searchTerm
      }&api-key=${NYT_API_KEY}`
    )
      .then(r => r.json())
      .then(reviews =>
        this.setState({
          reviews: reviews.results
        })
      );
  };

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          {' '}
          <label>Search</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <input type='submit' value='Submit' />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
