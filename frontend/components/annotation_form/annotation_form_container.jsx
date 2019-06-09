import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';
import { fetchSong, receiveSong } from '../../actions/song_actions';
import {createAnnotation} from '../../actions/annotation_actions';
import {createLink} from '../../actions/links_actions';
import {withRouter} from 'react-router';
import { removeLinks } from '../../actions/links_actions';
import { fetchAnnotation } from "../../actions/annotation_actions";




const mapStateToProps = (state) => {
    const annotation = {body: "", song_id: ""};
    return {annotation,
        currAnnotation: Object.keys(state.entities.annotations).map(id => state.entities.annotations[id]),
        links: Object.keys(state.entities.links).map(id => state.entities.links[id])
    }
};

const mapDispatchToProps = dispatch => ({
  createAnnotation: annotation => dispatch(createAnnotation(annotation)),
  createLink: link => dispatch(createLink(link)),
  removeLinks: () => dispatch(removeLinks()),
  fetchAnnotation: id => dispatch(fetchAnnotation()),
  receiveSong: id => dispatch(receiveSong())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationForm));