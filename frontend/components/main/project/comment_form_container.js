import { connect } from 'react-redux';

import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // submitComment: (comment) => dispatch(submitComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
