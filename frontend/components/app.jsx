import React from 'react'; 
import {
    Route,
    Switch
} from 'react-router';


import LyricsContainer from './lyrics_page/lyrics_container';
import HomePage from "./home_page/home_page";
import AnnotationContainer from "./annotation_page/annotations_container"

const App = () => (
  <div>
    <Switch>
      <Route exact path="/songs/:songId" component={LyricsContainer} />
      <Route exact path="/annotations/:annotationId" component={AnnotationContainer} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
