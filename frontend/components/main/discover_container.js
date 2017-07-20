import { connect } from 'react-redux';
import Discover from './discover'; 


const mapStateToProps = (state) => ({
  state
});


export default connect(
  mapStateToProps
)(Discover);