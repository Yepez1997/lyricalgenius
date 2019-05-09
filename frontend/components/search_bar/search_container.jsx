import {connect} from 'react-redux';
import {fetchArtists} from "../actions/artist_actions";
import {fetchSongs} from "../actions/song_actions";
import Search from "./search";

const mapStateToProps = (state) => ({
    songs: Object.keys(state.entities.songs).map((id) => state.entities.songs[id]),
    artists: Object.keys(state.entities.artists).map((id) => state.entities.artist[id])
});

const mapDispatchToProps = (dispatch) => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchSongs: () => dispatch(fetchSongs())
});


export default connenct(mapStateToProps, mapDispatchToProps)(Search);