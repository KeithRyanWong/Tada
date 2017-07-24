import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  state
});

const mapDispatchToProps = () => ({
  //views, likes and comments actions
});

export default connect(mapDispatchToProps)(ProjectsIndex);