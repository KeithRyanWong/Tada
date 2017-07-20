import { connect } from 'react-redux';
import Header from './header'; 

import { logout } from '../../actions/session_actions';


const mapStateToProps = ({currentUser}, {store}) => ({
  currentUser,
  store
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);