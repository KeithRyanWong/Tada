import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { selectUser } from '../../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  artist: selectUser(state, ownProps.artist)
});

const mapDispatchToProps = () => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail));