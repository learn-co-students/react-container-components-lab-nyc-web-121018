import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ reviews: data.results });
      });
  }

  addQuery = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(data => {
        this.setState({ reviews: data.results });
      });
  };

  inputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    console.log(this.state.searchTerm);
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.addQuery}>
          <input
            value={this.state.searchTerm}
            type="text"
            name="searchTerm"
            onChange={this.inputChange}
          />
          <button type="SUBMIT">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
