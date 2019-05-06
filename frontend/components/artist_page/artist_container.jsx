import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ArtistIndex from './artist_index';
import {fetchArtists} from '../../actions/artist_actions';

const mapStateToProps = (state) => ({
    artists: Object.keys(state.entities.artists).map(id => state.entities.artists[id])
});


const mapDispatchToProps = (dispatch) => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);




