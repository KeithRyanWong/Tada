import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';

import { requestAllProjects } from '../../../actions/projects_actions';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  state
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProjects: () => dispatch(requestAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);