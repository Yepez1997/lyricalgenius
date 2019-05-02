import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions";
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  modal: (type) => dispatch(openModal(type)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
