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


// have access to the song id 
// have access to the index
// have access to the annotations 

// fetch all links 
// want to get the annotation id and link id 
// fetch the links
// pass down the links 
// in the songs Row
  // chceck if the song id for the song 
  // and check if the currennt link is active 
  // if the current link is active then wamt to wrap a Link with the annotaion id 


// next step is to hover all the elements with the corresponding id's

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);

