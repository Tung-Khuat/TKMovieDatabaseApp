import React, { Component } from 'react';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <div className="loading-section-container">
        <div className="loading-icon">
          <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
