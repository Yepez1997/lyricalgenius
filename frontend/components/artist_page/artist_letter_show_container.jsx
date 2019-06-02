import React from 'react';
import {withRouter} from 'react-router-dom';
import {fetchArtists} from '../../actions/artist_actions';
import {connect} from "react-redux";
import ArtistLetterShow from './artist_letter_show';


const mapStateToProps = (state, ownParams) => ({
    artists: Object.keys(state.entities.artists).map(id => state.entities.artists[id]),
    letter: ownParams.letter
})

const mapDispatchToProps = (dispatch) => ({
    fetchArtists: () => dispatch(fetchArtists())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistLetterShow));
