import { connect } from 'react-redux';
import { requestComments } from '../../actions/comments_actions';
import {selectAllComments} from '../../reducers/selectors';

import Comments from './comments';

const mapStateToProps = (state, { projectId }) => ({
  comments: selectAllComments(state),
  projectId
});

const mapDispatchToProps = (dispatch) => ({
  requestComments: (projectId) => dispatch(requestComments(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);