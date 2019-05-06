import { combineReducers } from 'redux';

import users from './users_reducer';
import artists from "./artists_reducer";
import songs from "./song_reducer";
import annotations from "./annotations_reducer";
import links from "./links_reducer";

export default combineReducers({
    users,
    artists,
    songs,
    annotations,
    links
});
