import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MovieExploreView from './components/route-index/movie-explore-view';
import MovieInfoView from './components/route-index/movie-info-view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieExploreView} />
    <Route path="/movie/:id" component={MovieInfoView} />
  </Route>
);
