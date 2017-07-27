import { connect } from 'react-redux';

import Comments from './comments';

const mapStateToProps = (state, { projectId }) => ({
   projectId
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);