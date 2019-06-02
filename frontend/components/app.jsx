import React from 'react'; 
import {
    Route,
    Switch
} from 'react-router';


import LyricsContainer from './lyrics_page/lyrics_container';
import HomePage from "./home_page/home_page";
import AnnotationContainer from "./annotation_page/annotations_container";
import ArtistContainer from './artist_page/artist_container';
import ArtistShowContainer from './artist_page/artist_show_container';
import AllSongsContainer from './all_songs/allSongsContainer';
import ArtistLetterShowContainer from "./artist_page/artist_letter_show_container";
import RegularArtistShowContainer from "./artist_page/regular_artist_show_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/songs/:songId" component={LyricsContainer} />
      <Route exact path="/annotations/:annotationId" component={AnnotationContainer} />
      <Route exact path="/artists/:artistId" component={RegularArtistShowContainer} />
      <Route exact path="/artistsSearch/:artistId" component={ArtistShowContainer} />
      <Route exact path="/allsongs" component={AllSongsContainer} />
      <Route exact path="/artists" component={ArtistContainer} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
