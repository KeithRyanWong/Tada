import { connect } from 'react-redux';
import PortfolioView from './portfolio_view';
import { withRouter } from 'react-router';
import { requestUserProjects } from '../../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  state
});

const mapDispatchToProps = (dispatch) => ({
  requestUserProjects: userId => dispatch(requestUserProjects(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioView));