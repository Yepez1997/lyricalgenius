import React from 'react';
import {connect} from 'react-redux';
import AllSongs from './allSongs';
import { fetchSongs } from "../../actions/song_actions";

const mapStateToProps = state => ({
  songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllSongs);

