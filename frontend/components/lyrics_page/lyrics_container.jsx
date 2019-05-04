import { connect } from "react-redux";
import React from 'react';
import Lyrics from './lyrics';
// THIS IS AN ACTION
import { fetchSong } from "../../actions/song_actions";


const mapStateToProps = (state, ownParams) => ({
    song: state.entities.songs[ownParams.match.params.songId]
});

const mapDispatchToProps = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);

