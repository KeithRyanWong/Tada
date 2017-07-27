import { connect } from 'react-redux';
import { requestComments } from '../../../actions/comments_actions';
import {selectAllComments} from '../../../reducers/selectors';
import { withRouter } from 'react-router';

import Comments from './comments';

const mapStateToProps = (state, { projectId }) => ({
  comments: selectAllComments(state),
  state,
  projectId
});

const mapDispatchToProps = (dispatch) => ({
  requestComments: (projectId) => dispatch(requestComments(projectId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments));