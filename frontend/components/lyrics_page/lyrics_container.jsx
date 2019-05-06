import { connect } from "react-redux";
import React from 'react';
import Lyrics from './lyrics';
// THIS IS AN ACTION
import { fetchSong } from "../../actions/song_actions";
import { receiveLink } from "../../actions/links_actions";


const mapStateToProps = (state, ownParams) => ({
    song: state.entities.songs[ownParams.match.params.songId]
});

const mapDispatchToProps = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  modal: (type) => dispatch(openModal(type)),
  logout: () => dispatch(logout()),
  receiveLink: (id) => dispatch(receiveLink(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);

