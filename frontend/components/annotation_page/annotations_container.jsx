import { connect } from 'react-redux';
import Annotations from "./annotations";
import  {fetchAnnotation, fetchAnnotations} from "../../actions/annotation_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveLink } from "../../actions/links_actions";
import { removeLink } from "../../actions/links_actions";
import { removeLinks } from "../../actions/links_actions";

// want to fetch the current annotation 
// and link to its llink

const mapStateToProps = (state, ownParams) => {
  const annotation =
    state.entities.annotations[ownParams.match.params.annotationId];
  let song;
  if (annotation) {
    song = state.entities.songs[annotation.song_id];
  } else {
    song = null;
  }
  const currentUser = state.entities.users[state.session.id];
  return { annotation, song, currentUser}
};

// 
const mapDispatchToProps = dispatch => ({
  fetchAnnotation: id => dispatch(fetchAnnotation(id)),
  fetchAnnotations: () => dispatch(fetchAnnotations),
  fetchSong: id => dispatch(fetchSong(id)),
  modal: type => dispatch(openModal(type)),
  logout: () => dispatch(logout()),
  receiveLink: id => dispatch(receiveLink(id)),
  removeLink: id => dispatch(removeLink(id)),
  removeLinks: () => dispatch(removeLinks)
});


export default connect(mapStateToProps, mapDispatchToProps)(Annotations);

