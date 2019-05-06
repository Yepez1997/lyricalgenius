import { connect } from 'react-redux';
import UserAnnotationState from "./user_annotation_state";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(UserAnnotationState);