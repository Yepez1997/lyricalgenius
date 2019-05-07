import { connect } from 'react-redux';
import UserAnnotationState from "./user_annotation_state";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    links: Object.keys(state.entities.links).map(id => state.entities.links[id])

});


const mapStateToDispatch = (dispatch) => ({

});

//TO DO add a map state to dispatch to crearte a

export default connect(mapStateToProps, mapStateToDispatch)(UserAnnotationState);