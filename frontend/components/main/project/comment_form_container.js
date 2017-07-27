import { connect } from 'react-redux';
import { submitComment } from '../../../actions/comments_actions';

import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  submitComment: (comment) => dispatch(submitComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
