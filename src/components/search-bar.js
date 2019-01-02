import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <input
          className="movie-search"
          placeholder="Enter movie title"
          value={this.props.querySearched}
          onChange={event => onChange(event.target.value)}
        />
      </div>
    );
  }
}

SearchBar.PropTypes = {
  onChange: PropTypes.func.isRequired,
  querySearched: PropTypes.string,
};
