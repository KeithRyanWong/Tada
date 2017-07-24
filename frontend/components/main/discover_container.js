import { connect } from 'react-redux';
import Discover from './discover'; 


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  state
});


export default connect(
  mapStateToProps
)(Discover);