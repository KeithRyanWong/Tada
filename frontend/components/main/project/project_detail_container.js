import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { selectUser } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  artist: selectUser(state, ownProps.artist)
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);