import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';
import { fetchSong } from '../../actions/song_actions';
import {createAnnotation} from '../../actions/annotation_actions';
import {createLink} from '../../actions/links_actions';
import {withRouter} from 'react-router';
const mapStateToProps = (state,ownProps) => {
    const annotation = {body: "", song_id: ""};
    return {annotation,
        links: Object.keys(state.entities.links).map(id => state.entities.links[id])
    }
};

const mapDispatchToProps = (dispatch) => ({
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    createLink: (link) => dispatch(createLink(link))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationForm));