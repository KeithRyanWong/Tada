import { connect } from 'react-redux';
import AuthForm from './auth_form'; 

import { login, signup } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  state
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);