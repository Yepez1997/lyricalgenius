import { connect } from "react-redux";
import Lyrics from './lyrics';
// THIS IS AN ACTION
import { fetchSong } from "../../actions/song_actions";
import { receiveLink, removeLink, removeLinks } from "../../actions/links_actions";


// fetch all annotations for a specific songn 
const mapStateToProps = (state, ownParams) => ({
    song: state.entities.songs[ownParams.match.params.songId],
    currentUser: state.entities.users[state.session.id],
    //annotations: Object.keys(state.entities.annotations)
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  modal: type => dispatch(openModal(type)),
  logout: () => dispatch(logout()),
  receiveLink: id => dispatch(receiveLink(id)),
  removeLink: id => dispatch(removeLink(id)),
  removeLinks: () => dispatch(removeLinks),
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);

