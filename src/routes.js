import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MovieSearchView from './components/route-index/movie-search-view';
import MovieInfoView from './components/route-index/movie-info-view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieSearchView} />
    <Route path="/movie/:id" component={MovieInfoView} />
  </Route>
);
