import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// import HeaderMainNavContainter from './home_page/header_main_nav_container';
// import HeaderInfoNav from './home_page/header_info_nav';
// import ArtistsFooterNav from './home_page/artists_footer_nav';
// import TopChartsContainer from './home_page/top_charts_container';
import LyricsContainer from './lyrics_page/lyrics_container';
// import Modal from './modal/modal';
import HomePage from "./home_page/home_page"


import { AuthRoute, ProtectedRoute } from '../util/route_util';
// TODO: add song url to a link page .
// TODO: set up home page and refractore 
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/songs/:songId" component={LyricsContainer} />
    </Switch>
  </div>
);

export default App;
