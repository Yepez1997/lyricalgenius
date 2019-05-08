import { connect } from 'react-redux';
import Annotations from "./annotations";
import  {fetchAnnotation, fetchAnnotations} from "../../actions/annotation_actions";


// want to fetch the current annotation 
// and link to its llink

const mapStateToProps = (state, ownParams) => ({
  //TODO: figure this out
  annotation: state.entities.annotations[ownParams.match.params.annotationId]
});

// 
const mapDispatchToProps = (dispatch) => ({
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchAnnotations: () => dispatch(fetchAnnotations)
});


export default connect(mapStateToProps, mapDispatchToProps)(Annotations);

