import { connect } from 'react-redux';
import AuthForm from './auth_form'; 

import { login } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);