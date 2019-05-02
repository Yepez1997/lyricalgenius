import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions";
import HeaderMainNav from './header_main_nav';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

// invoke actions here 
const mapDispatchToProps = dispatch => {
   return {modal: (type) => dispatch(openModal(type)),
    logout: () => dispatch(logout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMainNav);