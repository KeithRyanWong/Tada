import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Portfolio from './portfolio';
import { requestUser } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    state
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(requestUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio));