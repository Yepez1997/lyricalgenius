import { connect } from "react-redux";
import {fetchArtists} from "../../actions/artist_actions";
import {fetchSongs} from "../../actions/song_actions";
import SearchBar from "./search";

const mapStateToProps = (state) => ({
    songs: Object.keys(state.entities.songs).map((id) => state.entities.songs[id].title),
    artists: Object.keys(state.entities.artists).map((id) => state.entities.artists[id].name),
    songs_list: Object.keys(state.entities.songs).map((id) => state.entities.songs[id]),
    artist_list: Object.keys(state.entities.artists).map((id) => state.entities.artists[id])
});


const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchSongs: () => dispatch(fetchSongs())
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);