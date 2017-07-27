import { connect } from 'react-redux';
import { submitComment } from '../../../actions/comments_actions';
import { withRouter } from 'react-router';

import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  submitComment: (comment) => dispatch(submitComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
