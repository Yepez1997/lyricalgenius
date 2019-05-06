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
import HomePage from "./home_page/home_page";
import ArtistsContainer from './artist_page/artist_container';


import { AuthRoute, ProtectedRoute } from '../util/route_util';
// TODO: add song url to a link page .
// TODO: set up home page and refractore 
const App = () => (
  <div>
    <Switch>
      <Route exact path="/songs/:songId" component={LyricsContainer} />
      <Route exact path="/artists" component={ArtistsContainer}/>
      <Route exact path="/artists/:artistId" component={HomePage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
