import { connect } from 'react-redux';
import ProjectsIndexItem from './projects_index_item';


const mapStateToProps = ({projects, items}) => ({
  projects: projects.byId,
  items: items.byId
});


export default connect(mapStateToProps)(ProjectsIndexItem);