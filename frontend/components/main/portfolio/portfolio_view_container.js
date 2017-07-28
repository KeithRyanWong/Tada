import { connect } from 'react-redux';
import PortfolioView from './portfolio_view';
import { withRouter } from 'react-router';
import { requestUserProjects } from '../../../actions/projects_actions';
import { selectUserProject, selectUserFollowedProjects } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    currentUser: state.currentUser,
    profileId: userId,
    userProjects: selectUserProject(state, userId),
    starredProjects: selectUserFollowedProjects(state, userId)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserProjects: userId => dispatch(requestUserProjects(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioView));