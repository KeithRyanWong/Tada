import { connect } from 'react-redux';
import Details from './details';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({users}, {profileId}) => ({
  user: users.byId[profileId]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);