import { connect } from 'react-redux';
import ProjectView from './project_view';
import { selectProjectItems } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  project: ownProps.project,
  items: selectProjectItems(state, ownProps.project),
  state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectView);