import { connect } from 'react-redux';

import CurrentUser from './current_user';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);