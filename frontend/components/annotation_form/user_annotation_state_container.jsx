import { connect } from 'react-redux';
import UserAnnotationState from "./user_annotation_state";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    links: Object.keys(state.entities.links).map(id => state.entities.links[id])

});

//TO DO add a map state to dispatch to crearte a

export default connect(mapStateToProps, null)(UserAnnotationState);