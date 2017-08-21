import { connect } from 'react-redux';
import ProjectView from './project_view';
import { selectProjectItems } from '../../../reducers/selectors';
import { likeProject, unlikeProject } from '../../../actions/likes_actions';
import { requestUser } from '../../../actions/users_actions';

const mapStateToProps = (state, ownProps) => ({
  project: ownProps.project,
  items: selectProjectItems(state, ownProps.project),
  state
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (userId) => dispatch(requestUser(userId)),
  likeProject: (projectId) => dispatch(likeProject(projectId)),
  unlikeProject: (projectId) => dispatch(unlikeProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectView);