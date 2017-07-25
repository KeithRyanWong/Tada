import { connect } from 'react-redux';

import CurrentUser from './current_user';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router'


const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser));